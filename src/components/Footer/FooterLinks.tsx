import React from "react";
import Link from "next/link";
import { navLinks } from "@/components/Navbar/data";

function FooterLinks() {
  return (
    <>
      <div className="flex flex-col justify-center gap-y-4 h-full mt-5 sm:mt-10 p-4">
        <h3 className="text-secondary font-semibold text-2xl">Useful Links</h3>
        <div className="flex flex-col gap-y-1 ml-2  ">
          {navLinks.map((item: { title: string; link: string }) => (
            <Link
            key={item.title}
              className="text-gray-300 hover:text-secondary hover:transition-all hover:delay-75 hover:duration-300 ease-in-out text-base"
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default FooterLinks;
