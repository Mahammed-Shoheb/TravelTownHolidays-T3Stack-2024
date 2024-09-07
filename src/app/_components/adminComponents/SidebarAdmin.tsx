"use client";

import Link from "next/link";
import Logo from "../Logo";
import { usePathname, useRouter } from "next/navigation";
import { adminNavLinks } from "~/assets/data";
import { CancelIcon } from "~/assets/svg";
import { motion } from "framer-motion";
import {
  sideBarChildrenVariant,
  sideBarContainerVariant,
} from "~/utils/motion-helper";
import type { MouseEvent } from "react";
import { api } from "~/trpc/react";
import toast from "react-hot-toast";

export default function SideBarAdmin({
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

  const handleContainerClick = (e: MouseEvent) => {
    const { target } = e;
    if (target instanceof HTMLElement) {
      const classList = target.classList; // DOMTokenList
      if (classList.contains("container-element")) setIsSideBarOpen(false);
    }
  };

  return (
    <motion.aside
      variants={sideBarContainerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container-element fixed inset-0 z-[101] h-full w-full bg-[rgb(0_0_0_/_50%)] lg:hidden"
      onClick={handleContainerClick}
    >
      <motion.div
        variants={sideBarChildrenVariant}
        className="children z-10 grid h-full w-60 grid-rows-[auto_1fr_auto] overflow-y-auto bg-white px-2 py-2"
      >
        <div className="flex items-center justify-between px-2 py-2">
          <Link href="/">
            <Logo sidebar={true} />
          </Link>
          <button
            type="button"
            className="grid cursor-pointer place-items-center border-transparent bg-transparent text-xl"
            onClick={() => setIsSideBarOpen(false)}
            aria-label="close sidebar"
          >
            <CancelIcon className="w-8 cursor-pointer duration-150 hover:scale-105" />
          </button>
        </div>
        <ul className="flex flex-col gap-4 px-2 py-4 capitalize">
          {adminNavLinks.map((navLink) => {
            const { name, url } = navLink;
            return (
              <li key={url} onClick={() => setIsSideBarOpen(false)}>
                <Link
                  href={url}
                  className={`sidebarLink  ${path == url && "border-b-blue-500 text-blue-500"} `}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          className="w-full rounded-md border bg-blue-600 px-2 py-1 text-xl text-white  hover:bg-blue-400"
          onClick={() => logoutFn()}
        >
          Logout
        </button>
      </motion.div>
    </motion.aside>
  );
}
