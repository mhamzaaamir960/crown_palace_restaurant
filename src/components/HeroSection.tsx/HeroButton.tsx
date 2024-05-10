import React from "react";
import Link from 'next/link'

function HeroButton() {
  return (
    <div className="hover:scale-105 hover:transition-all hover:ease-in-out hover:delay-75 hover:duration-300 bg-secondary rounded-full w-fit ">
      <Link href={"#menu"} className="text-lg px-4 text-primary font-medium  ">
        Explore Menu
      </Link>
    </div>
  );
}

export default HeroButton;
