"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { dropdownContainerVariant } from "~/utils/motion-helper";
import type { RouterOutputs } from "~/trpc/react";
import formatLinks from "~/utils/formatLinks";

export default function NavDropDown({
  name,
  url,
  icon,
  icon2,
  hoverIcon,
  navigationLinks,
}: {
  name: string;
  url: string;
  icon: ReactNode;
  icon2?: ReactNode;
  hoverIcon?: ReactNode;
  navigationLinks: RouterOutputs["client"]["getNavLinks"];
}) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const path = usePathname();

  const handlePointerOver = () => {
    setIsDropDownOpen(true);
  };

  const handlePointerLeave = () => {
    setIsDropDownOpen(false);
  };
  const handleFocus = () => {
    setIsDropDownOpen(true);
  };
  return (
    <>
      <Link
        href={url}
        className={`navLink  ${path == url && "border-b-blue-500 font-semibold text-blue-600"}`}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerLeave}
        onFocus={handleFocus}
      >
        <span className="h-5 w-5">{icon}</span>
        <span>{name}</span>
        {isDropDownOpen ? (
          <span className="h-5 w-5">{icon2}</span>
        ) : (
          <span className="h-5 w-5">{hoverIcon}</span>
        )}
      </Link>
      {isDropDownOpen && (
        <motion.ul
          layout
          variants={dropdownContainerVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerLeave}
          className={`absolute z-[100] flex w-44 flex-col gap-1 rounded-md bg-white px-4 py-4 shadow-lg`}
        >
          {navigationLinks?.map((navLink) => {
            const { id, domestic, name: navLinkName } = navLink;
            if ("domestic" == name && domestic) {
              return (
                <li key={id}>
                  <Link
                    href={`/destination/${formatLinks(navLinkName.toLowerCase())}`}
                    className={`mb-1 flex border-b border-slate-600 px-1 pb-1 pt-2 text-sm ${path == `/destination/${formatLinks(navLinkName)}` && "border-b-blue-500 font-semibold text-blue-600"} hover:border-b-blue-600 hover:text-blue-600`}
                  >
                    {navLinkName}
                  </Link>
                </li>
              );
            } else if ("domestic" != name && !domestic) {
              return (
                <li key={id}>
                  <Link
                    href={`/destination/${formatLinks(navLinkName)}`}
                    className={`mb-1 flex border-b border-slate-600 px-1 pb-1 pt-2 text-sm ${path == `/destination/${formatLinks(navLinkName)}` && "border-b-blue-500 font-semibold text-blue-600"} hover:border-b-blue-600 hover:text-blue-600`}
                  >
                    {navLinkName}
                  </Link>
                </li>
              );
            }
          })}
        </motion.ul>
      )}
    </>
  );
}
