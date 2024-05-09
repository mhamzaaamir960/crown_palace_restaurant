import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

function Logo() {
  return (
    <div className="flex shrink-0 justify-center items-center  ">
      <Image src={logo} alt="crown palace logo" width={65} height={65} className="xs:w-[80px] xs:h-[80px] xl:w-[100px] xl:h-[100px]" />
    </div>
  );
}

export default Logo;
