"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavLinks from "./NavLinks";
import CallButton from "./CallButton";

function NavMobile() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="absolute  top-6 right-4 text-2xl sm:text-3xl ml-4 cursor-pointer sm:hidden ">
        <span
          className="transition-all ease-in-out delay-100 duration-500"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <AiOutlineClose className="transition-all ease-in-out delay-150 duration-500 text-tertiary" />
          ) : (
            <AiOutlineMenu className="transition-all ease-in-out delay-150 duration-500 text-tertiary" />
          )}
        </span>
      </div>
      <div
        className={`flex flex-col sm:flex-row justify-start sm:justify-between items-start p-4   gap-y-4 sm:gap-0  sm:p-0 sm:items-center sm:w-[78vw] md:w-[79vw]  lg:w-[75vw] xl:w-[67vw] absolute left-0 sm:static ${
          open ? "top-16" : "-top-[500px] "
        } w-full bg-inherit  transition-all ease-in-out duration-500 delay-100  sm:delay-0 sm:duration-0 sm:ease-linear`}
      >
        <NavLinks />
        <CallButton />
      </div>
    </>
  );
}

export default NavMobile;
