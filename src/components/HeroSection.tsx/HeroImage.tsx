import React from "react";
import Image from "next/image";

function HeroImage({ heroImage }: { heroImage: any }) {
  return (
    <div className="absolute bottom-0 right-0 overflow-hidden flex shrink-0 ">
      <Image
        src={heroImage}
        alt="Palace Image"
        width={250}
        height={250}
        className="rounded-s-full xxs:w-[280px] xxs:h-[300px] sm:w-[400px] sm:h-[350px] md:w-[450px] md:h-[400px] lg:w-[500px] lg:h-[450px] md:rounded-t-full"
      />
    </div>
  );
}

export default HeroImage;
