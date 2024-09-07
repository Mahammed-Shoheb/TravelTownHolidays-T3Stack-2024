import { cookies } from "next/headers";
import { generateAccessToken } from "~/utils/jwt";

export async function refreshCookie(userId: string) {
  const newToken = generateAccessToken(userId);
  console.log(newToken);
  cookies().set("Authorization", `Bearer ${newToken}`, {
    httpOnly: true,
    path: "/",
    // secure: true,
    maxAge: 60 * 60,
  });
}
