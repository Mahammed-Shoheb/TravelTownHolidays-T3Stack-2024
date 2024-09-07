"use client";

import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { AnimatePresence } from "framer-motion";
import type { RouterOutputs } from "~/trpc/react";
import { motion } from "framer-motion";

export default function NavSideBar({
  navigationLinks,
}: {
  navigationLinks: RouterOutputs["client"]["getNavLinks"];
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <motion.header
        layout
        transition={isScrolled ? { duration: 0.3 } : { duration: 0, delay: 0 }}
        className={`top-0 z-[100] ${isScrolled && "fixed"} mb-2 shadow-md`}
      >
        <NavBar
          setIsSideBarOpen={setIsSideBarOpen}
          navigationLinks={navigationLinks}
        />
      </motion.header>
      <AnimatePresence>
        {isSideBarOpen && (
          <SideBar
            setIsSideBarOpen={setIsSideBarOpen}
            navigationLinks={navigationLinks}
          />
        )}
      </AnimatePresence>
    </>
  );
}
