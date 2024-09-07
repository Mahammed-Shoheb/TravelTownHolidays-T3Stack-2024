"use client";

import Link from "next/link";
import Logo from "./Logo";
import SideBarDropDown from "./SideBarDropDown";
import { usePathname } from "next/navigation";
import { navLinks } from "~/assets/data";
import { motion } from "framer-motion";
import {
  sideBarChildrenVariant,
  sideBarContainerVariant,
} from "~/utils/motion-helper";
import type { MouseEvent } from "react";
import type { RouterOutputs } from "~/trpc/react";
import { CancelIcon } from "~/assets/svg";

export default function SideBar({
  setIsSideBarOpen,
  navigationLinks,
}: {
  setIsSideBarOpen: (input: boolean) => void;
  navigationLinks: RouterOutputs["client"]["getNavLinks"];
}) {
  const path = usePathname();

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
          <Link href="/" onClick={() => setIsSideBarOpen(false)}>
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
          {navLinks.map((navLink) => {
            const { name, url, icon, containLinks } = navLink;
            if (containLinks) {
              return (
                <li key={url}>
                  <SideBarDropDown
                    {...navLink}
                    setIsSideBarOpen={setIsSideBarOpen}
                    navigationLinks={navigationLinks}
                  />
                </li>
              );
            }
            return (
              <li key={url} onClick={() => setIsSideBarOpen(false)}>
                <Link
                  href={url}
                  className={`sidebarLink  ${path == url && "border-b-blue-500 font-semibold text-blue-500"}`}
                >
                  <span className="w-4">{icon}</span>
                  <span>{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </motion.aside>
  );
}
