import React from "react";
import Link from "next/link";

function MenuPageBtn() {
  return (
    <div className="flex w-full justify-center items-center h-[50px]">
      <Link
        className="px-4 py-2 border border-primary text-primary font-medium rounded-full  hover:bg-primary hover:text-white transition-all duration-300  hover:transition-all hover:ease-in-out hover:delay-75 hover:duration-200  "
        href={"/menu"}
      >
        See more items
      </Link>
    </div>
  );
}

export default MenuPageBtn;
