import Link from "next/link";
import React from "react";
import DesktopNav from "../nav/DesktopNav";
import { buttonVariants } from "../ui/button";

const HomeNav = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background px-12 py-3 xl:px-28 flex justify-between items-center">
      <Link href="/" className="flex space-x-2">
        <span className="hidden font-bold lg:inline-block">Allen Tiempo</span>
        <span className="sr-only">Home</span>
      </Link>
      <div className="flex items-center gap-x-4">
        <DesktopNav />
      </div>
      <nav className="px-2 sm:px-4 lg:px-6 flex items-center justify-between">
        <Link href="#contact" className={buttonVariants({ size: "sm" })}>
          Contact Me
          <span className="sr-only">Contact Me</span>
        </Link>
      </nav>
    </header>
  );
};

export default HomeNav;
