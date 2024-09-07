import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { ReactNode } from "react";
import { dropdownContainerVariant } from "~/utils/motion-helper";
import { motion } from "framer-motion";
import type { RouterOutputs } from "~/trpc/react";
import formatLinks from "~/utils/formatLinks";

export default function SideBarDropDown({
  name,
  url,
  icon,
  icon2,
  hoverIcon,
  setIsSideBarOpen,
  navigationLinks,
}: {
  name: string;
  url: string;
  icon: ReactNode;
  icon2?: ReactNode;
  hoverIcon?: ReactNode;
  setIsSideBarOpen: (input: boolean) => void;
  navigationLinks: RouterOutputs["client"]["getNavLinks"];
}) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const path = usePathname();

  const handleClick = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Link
          href={url}
          className={`sidebarLink  ${path == url && "border-b-blue-500 font-semibold text-blue-600"} w-full`}
          onClick={() => setIsSideBarOpen(false)}
        >
          <span className="h-5 w-5">{icon}</span>
          <span>{name}</span>
        </Link>
        <button
          onClick={handleClick}
          className="w-5 border-b border-black pb-2.5"
        >
          {isDropDownOpen ? (
            <span className="h-5 w-5">{icon2}</span>
          ) : (
            <span className="h-5 w-5">{hoverIcon}</span>
          )}
        </button>
      </div>

      {isDropDownOpen && (
        <motion.ul
          variants={dropdownContainerVariant}
          initial="hidden"
          animate="visible"
          className={` z-100 flex-col  px-2 py-2 text-base `}
        >
          {navigationLinks?.map((navLink) => {
            const { id, domestic, name: navLinkName } = navLink;
            if ("domestic" == name && domestic) {
              return (
                <li key={id}>
                  <Link
                    href={`/destination/${formatLinks(navLinkName.toLowerCase())}`}
                    onClick={() => setIsSideBarOpen(false)}
                    className={`flex border-b border-b-slate-700 px-1 py-2 text-sm hover:pl-2 ${path == `/destination/${formatLinks(navLinkName)}` && "border-b-blue-500  font-semibold text-blue-600"}`}
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
                    onClick={() => setIsSideBarOpen(false)}
                    className={`flex border-b border-b-slate-700 px-1 py-2 text-sm hover:pl-2 ${path == `/destination/${formatLinks(navLinkName)}` && "border-b-blue-500  font-semibold text-blue-600"}`}
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
