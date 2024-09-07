"use client";
import { Button, FormInput } from "~/app/_components";
import toast from "react-hot-toast";
import { useState } from "react";
import type { LoginUserInput } from "~/lib/userSchema";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { FaEyeSlash, FaRegEye } from "react-icons/fa6";

export default function Login() {
  const [user, setUser] = useState<LoginUserInput>({ email: "", password: "" });
  const [isPasswordShown, SetIsPasswordShown] = useState(false);
  const router = useRouter();

  const { mutate: loginFn, isPending } = api.user.login.useMutation({
    onError(error) {
      if (error.data?.zodError?.fieldErrors.password) {
        error.data?.zodError?.fieldErrors.password.map((err) =>
          toast.error(err),
        );
        return null;
      }
      if (error.data?.zodError?.fieldErrors.email) {
        error.data?.zodError?.fieldErrors.email.map((err) => toast.error(err));
        return null;
      }
      if (error.data?.code == "UNAUTHORIZED") {
        toast.error(error.message);
        return null;
      }
      toast.error(error.message);
      setUser({ ...user, password: "" });
    },
    onSuccess(data) {
      toast.success("Login successful");
      console.log(data);
      void router.push("/admin");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginFn({
      email: user.email.trim(),
      password: user.password.trim(),
    });
  };

  return (
    <main className="h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)]">
      <section className="align-section-center grid min-h-[85vh] place-items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-evenly gap-4 rounded-md bg-slate-900 p-4 text-white"
        >
          <h1 className="font-bold capitalize">login to the admin portal</h1>
          <FormInput
            name="email"
            type="text"
            required
            value={user.email}
            onChange={handleChange}
          />
          <div className="relative mb-2 w-full text-xs sm:mb-4 md:mb-0">
            <input
              type={isPasswordShown ? "text" : "password"}
              name="password"
              id="password"
              className="peer relative block w-full border-2 border-b-gray-500 border-l-transparent border-r-transparent border-t-transparent bg-transparent px-1   py-4 outline-none autofill:pb-2 autofill:pt-6  focus:border-b-blue-500 focus:pb-2
    focus:pt-6  [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
              required
              value={user.password}
              onChange={handleChange}
              placeholder=""
            />
            <button
              className="absolute bottom-0 right-0 mb-1 p-1"
              type="button"
              onClick={() => {
                SetIsPasswordShown((prev) => !prev);
              }}
            >
              {isPasswordShown ? <FaEyeSlash /> : <FaRegEye />}
            </button>
            <label
              htmlFor="password"
              className=" pointer-events-none absolute left-0 top-0 h-full origin-[0_0] truncate px-1 py-4 capitalize peer-focus:-translate-y-1.5 peer-focus:translate-x-0.5  peer-focus:scale-90 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500 "
            >
              password
              <span className="ml-1 text-red-500">*</span>
            </label>
          </div>
          <Button text="login" type="submit" disabled={isPending} />
        </form>
      </section>
    </main>
  );
}
