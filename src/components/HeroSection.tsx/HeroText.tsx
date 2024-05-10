import Link from "next/link";
import React from "react";

function HeroText({ data }: { data: any }) {
  return (
    <div className=" md:max-w-[550px] lg:max-w-[650] xl:max-w-[800px] p-2 md:p-4 flex  justify-center w-full  mt-5 xs:mt-7 sm:mt-10 md:mt-20 items-start  ">
      <div className=" flex flex-col mt-20 items-start lg:justify-center w-full ">
        <h1 className=" text-3xl sm:text-4xl xl:text-5xl w-full font-bold text-secondary">
          {data.fields.title}
        </h1>
        <h2 className="text-lg xl:text-xl underline underline-offset-4 ml-2 md:ml-4 text-gray-400">
          {data.fields.tagline}
        </h2>
        <p className="text-base sm:text-lg xl:text-xl mt-4 mb-4 sm:mb-8 text-gray-200 ">
          {data.fields.metaDescription}
        </p>
        <div className="hover:scale-105 hover:transition-all hover:ease-in-out hover:delay-75 hover:duration-300 bg-secondary rounded-full w-fit ">
          <Link
            href={"#menu"}
            className="text-lg px-4 text-primary font-medium  "
          >
            Explore Menu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
