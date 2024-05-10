import React from "react";
import Image from "next/image";


function HeroImage({ heroImage }: { heroImage: any }) {
  return (
    <div className="absolute -bottom-0 right-0  ">
      <Image src={heroImage} alt="Crown Palace Logo" width={280} height={280} className="rounded-s-full rounded-t-full clear-start xs:w-[350px] xs:h-[300px] sm:w-[350px] sm:h-[300px]:] md:w-[380px] md:h-[330px] lg:w-[430px] lg:h-[380px]  xl:w-[500px] xl:h-[450px]"/>
    </div>
  )
}

export default HeroImage;
