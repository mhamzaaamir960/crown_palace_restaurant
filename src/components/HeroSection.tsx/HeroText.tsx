import React from "react";
import HeroButton from "./HeroButton";

function HeroText({ heroData }: { heroData: any }) {
  return (
    <div className="relative flex flex-col top-24 lg:top-60 lg:w-[50vw] xl:max-w-[60vw] ">
      <h1 className=" text-2xl xs:text-3xl md:text-4xl lg:text-5xl text-secondary font-bold flex-1 ">
        {heroData.fields.title}
      </h1>
      <h2 className=" text-base mt-1  mb-3 text-gray-400 underline underline-offset-8 ">
        {heroData.fields.tagline}
      </h2>
      <p className=" text-sm xs:text-base sm:text-lg  mt-2  mb-6 sm:mb-8 text-gray-300">
        {heroData.fields.metaDescription}
      </p>
      <HeroButton />
    </div>
  );
}

export default HeroText;
