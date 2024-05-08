import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

function Logo() {
  return (
    <div className="flex shrink-0">
      <Image src={logo} alt="crown palace logo" width={65} height={65} />
    </div>
  );
}

export default Logo;
