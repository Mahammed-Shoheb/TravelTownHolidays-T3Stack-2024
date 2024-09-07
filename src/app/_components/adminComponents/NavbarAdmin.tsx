"use client";

import Link from "next/link";
import Logo from "../Logo";
import { usePathname, useRouter } from "next/navigation";
import { adminNavLinks } from "~/assets/data";
import { RxHamburgerMenu } from "react-icons/rx";
import { api } from "~/trpc/react";
import toast from "react-hot-toast";

export default function NavbarAdmin({
  setIsSideBarOpen,
}: {
  setIsSideBarOpen: (input: boolean) => void;
}) {
  const router = useRouter();
  const path = usePathname();

  const { mutate: logoutFn } = api.user.logout.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: async (data) => {
      toast.success(data.message);
      router.push("/login");
    },
  });

  return (
    <>
      <nav className={`w-screen bg-white font-semibold shadow-md`}>
        <div className="align-section-center flex items-center justify-between p-2 ">
          <div className="flex w-full items-center justify-between lg:w-auto">
            <Link href="/admin">
              <Logo />
            </Link>
            <button
              type="button"
              className="cursor-pointer border-transparent bg-transparent text-2xl duration-300 hover:scale-110 lg:hidden"
              onClick={() => setIsSideBarOpen(true)}
            >
              <RxHamburgerMenu />
            </button>
          </div>

          <ul className="hidden gap-3  capitalize lg:flex lg:gap-8">
            {adminNavLinks.map((navLink) => {
              const { name, url } = navLink;
              return (
                <li key={url}>
                  <Link
                    href={url}
                    className={`navLink ${path == url && "text-blue-500 "} `}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className="hidden rounded-md bg-blue-600 px-3 py-1 text-xl text-white duration-150 hover:bg-blue-500 lg:block"
            onClick={() => logoutFn()}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}
