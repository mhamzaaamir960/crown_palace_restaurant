import React from "react";
import { getImages, getHeroSectionData } from "@/config/getData";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export async function generateStaticParams() {
  const $data = await getHeroSectionData();
  return [$data,$data.fields.homePageImage.sys.id]
}

async function HeroSection() {
  const $data = await getHeroSectionData();
  const image = await getImages($data.fields.homePageImage.sys.id);

  return (
    <section className=" min-h-screen  min-w-[300px] w-full bg-primary  flex flex-wrap md:justify-between items-center  p-2 sm:p-5 lg:p-10  mt-10">
      <HeroText data={$data} />
      <HeroImage heroImage={image} />
    </section>
  );
}

export default HeroSection;
