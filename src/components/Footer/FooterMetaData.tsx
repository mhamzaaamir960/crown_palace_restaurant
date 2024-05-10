import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { getHeroSectionData } from "@/config/getData";

export async function generateStaticParams() {
  const data = await getHeroSectionData();
  return data;
}

async function FooterMetaData() {
  const data = await getHeroSectionData();

  return (
    <div className="max-w-[500px]">
      <div className="flex gap-x-2 items-center">
        <div className=" flex shrink-0">
          <Image
            src={logo}
            alt="Crown Palace logo"
            width={100}
            height={100}
            className="shrink-0"
          />
        </div>
        <div className="flex flex-col shrink-0">
          <h1 className=" text-3xl md:text-4xl font-bold text-secondary shrink-0  ">
            {data.fields.title}
          </h1>
          <h2 className=" text-base sm:text-lg font-medium text-gray-400 ml-3 underline underline-offset-4 ">
            {data.fields.tagline}
          </h2>
        </div>
      </div>

      <div className="ml-5 flex flex-col gap-y-4">
        <p className="text-gray-300 ">{data.fields.metaDescription}</p>
        <span className="text-secondary">Trading since February, 2020</span>
      </div>
    </div>
  );
}

export default FooterMetaData;
