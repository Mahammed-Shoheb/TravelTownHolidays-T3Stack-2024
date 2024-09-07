"use client";

import Link from "next/link";
import Logo from "./Logo";
import NavDropDown from "./NavDropDown";
import { usePathname } from "next/navigation";
import { navLinks } from "~/assets/data";
import { RxHamburgerMenu } from "react-icons/rx";
import type { RouterOutputs } from "~/trpc/react";

export default function NavBar({
  setIsSideBarOpen,
  navigationLinks,
}: {
  setIsSideBarOpen: (input: boolean) => void;
  navigationLinks: RouterOutputs["client"]["getNavLinks"];
}) {
  const path = usePathname();

  return (
    <nav className="w-screen bg-white">
      <div className="align-section-center flex items-center justify-between p-2">
        <Link href="/" aria-hidden="true">
          <Logo />
        </Link>
        <ul className="hidden gap-2 capitalize lg:flex lg:items-center lg:gap-4">
          {navLinks.map((navLink) => {
            const { name, url, icon, containLinks } = navLink;
            if (containLinks) {
              return (
                <li key={url} className="relative">
                  <NavDropDown {...navLink} navigationLinks={navigationLinks} />
                </li>
              );
            }
            return (
              <li key={url}>
                <Link
                  href={url}
                  className={`navLink  ${path == url && "font-semibold text-blue-600"} `}
                >
                  <span className="h-6 w-6">{icon}</span>
                  <span>{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          href="tel:+919686879898"
          className="hidden rounded-md bg-blue-600 px-2 py-1 text-sm font-semibold text-white hover:bg-blue-500 lg:block"
        >
          +91-9686879898
        </a>
        <button
          type="button"
          className="cursor-pointer border-transparent bg-transparent text-2xl duration-300 hover:scale-110 lg:hidden"
          onClick={() => setIsSideBarOpen(true)}
          aria-label="open menu"
        >
          <RxHamburgerMenu />
        </button>
      </div>
    </nav>
  );
}
