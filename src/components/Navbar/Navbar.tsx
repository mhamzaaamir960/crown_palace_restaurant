import React from "react";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full h-[70px] bg-primary p-2  fixed top-0 left-0 ">
      <Logo />
      <NavMobile />
    </nav>
  );
}

export default Navbar;
