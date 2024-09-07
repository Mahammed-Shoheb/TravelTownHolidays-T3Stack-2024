import { loginUserSchema, registerUserSchema } from "~/lib/userSchema";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { compare, hash } from "bcrypt";
import { generateAccessToken } from "~/utils/jwt";
import { cookies } from "next/headers";
import { TRPCError } from "@trpc/server";

export const userRouter = createTRPCRouter({
  register: publicProcedure
    .input(registerUserSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const hashedPassword = await hash(input.password, 12);

        const newUser = await ctx.db.user.create({
          data: {
            name: input.name,
            email: input.email,
            password: hashedPassword,
          },
        });

        return {
          registered: "success",
          user: { name: newUser.name, email: newUser.email },
        };
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "Email already exists",
            });
          }
        }

        throw error;
      }
    }),

  login: publicProcedure
    .input(loginUserSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const user = await ctx.db.user.findUnique({
          where: {
            email: input.email,
          },
          select: {
            id: true,
            name: true,
            email: true,
            password: true,
          },
        });
        console.log(user);
        if (user === null)
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Incorrect username or password.",
          });
        const validPassword = await compare(input.password, user.password);
        if (!validPassword)
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Incorrect username or password.",
          });
        const token = generateAccessToken(user.id);
        const cookieOptions = {
          httpOnly: true,
          path: "/",
          // secure: true,
          maxAge: 60 * 60,
        };
        cookies().set("Authorization", `Bearer ${token}`, cookieOptions);
        return {
          user: {
            name: user?.name,
            email: user?.email,
            token: token,
          },
        };
      } catch (error) {
        throw error;
      }
    }),
  logout: privateProcedure.mutation(() => {
    cookies().set("Authorization", "", {
      httpOnly: true,
      path: "/",
      secure: true,
      maxAge: -1,
    });
    return { message: "Logged out successfully" };
  }),
});
