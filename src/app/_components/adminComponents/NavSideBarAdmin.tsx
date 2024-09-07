"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SideBarAdmin from "./SidebarAdmin";
import NavbarAdmin from "./NavbarAdmin";

export default function NavSideBarAdmin() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-[100]">
        <NavbarAdmin setIsSideBarOpen={setIsSideBarOpen} />
      </header>
      <AnimatePresence>
        {isSideBarOpen && <SideBarAdmin setIsSideBarOpen={setIsSideBarOpen} />}
      </AnimatePresence>
    </>
  );
}
