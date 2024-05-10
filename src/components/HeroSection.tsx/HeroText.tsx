import React from "react";
import HeroButton from "./HeroButton";

function HeroText({ data }: { data: any }) {
  return (
    <div className=" min-w-[280px] max-w-[90vw] lg:max-w-[500px] xl:max-w-[700px] flex flex-col mt-20 lg:mt-10 w-full justify-start lg:w-auto p-2">
      <h1 className=" text-3xl sm:text-4xl xl:text-5xl w-full font-bold text-secondary">
        {data.fields.title}
      </h1>
      <h2 className="text-lg xl:text-xl underline underline-offset-4 ml-2 md:ml-4 text-gray-400">
        {data.fields.tagline}
      </h2>
      <p className=" text-sm sm:text-base md:text-lg xl:text-xl mt-4 mb-4 sm:mb-8 text-gray-200 ">
        {data.fields.metaDescription}
      </p>
      <HeroButton />
    </div>
  );
}

export default HeroText;
