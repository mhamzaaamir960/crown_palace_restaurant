import React from "react";
import { navLinks } from "./data";
import Link from "next/link";

function NavLinks() {
  return (
    <div className="flex flex-col sm:flex-row gap-y-2   sm:gap-x-3 md:gap-x-6  mt-4 sm:mt-0 ">
      {navLinks.map((item: { title: string; link: string }) => (
        <Link
          href={item.link}
          key={item.title}
          className="text-tertiary text-sm font-normal hover:text-secondary hover:transition-all hover:delay-75 hover:duration-300 ease-in-out border-b sm:border-none mb-2 sm:mb-0 "
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
