import Link from "next/link";
import React from "react";

function CallButton() {
  return (
    <div className="flex justify-center items-center sm:mr-4">
      <Link
        href="tel:+44 141 611 1897"
        className="bg-secondary rounded px-2  text-sm md:text-base lg:text-lg font-medium opacity-90 hover:opacity-100 hover:transition-all hover:delay-75 hover:duration-300 hover:ease-in-out "
      >
        For call: +44 141 611 1897
      </Link>
    </div>
  );
}

export default CallButton;
