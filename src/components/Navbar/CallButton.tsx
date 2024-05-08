import Link from "next/link";
import React from "react";

function CallButton() {
  return (
    <div className="flex justify-center items-center sm:mr-4">
      <Link
        href="tel:+44 141 611 1897"
        className="bg-secondary rounded px-2 text-sm font-medium opacity-90 hover:opacity-100 transition-all delay-75 duration-300 ease-in-out "
      >
        Call: +44 141 611 1897
      </Link>
    </div>
  );
}

export default CallButton;
