import React from "react";
import Image from "next/image";

function HeroImage({ heroImage }: { heroImage: any }) {
  return (
    <div className="flex justify-end w-full lg:w-auto xl:max-w-[500px] shrink-0 min-w-[250px] min-h-[200px] mt-10 ">
      <Image
        src={heroImage}
        alt="Crown Palace Logo"
        width={250}
        height={250}
        className=" xs:w-[400px] xs:h-[350px] md:w-[400px] md:h-[350px] xl:w-[450px] xl:h-[400px] rounded-s-full rounded-b-full border-2 border-secondary object-cover"
      />
    </div>
  );
}

export default HeroImage;
