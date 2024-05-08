import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

function Logo() {
  return (
    <div>
      <Image src={logo} alt="crown palace logo" width={70} height={70} />
    </div>
  );
}

export default Logo;
