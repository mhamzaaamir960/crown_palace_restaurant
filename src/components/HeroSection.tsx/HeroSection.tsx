import React from "react";
import { getImages, getHeroSectionData } from "@/config/getData";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

async function HeroSection() {
  const $data = await getHeroSectionData();
  const image = await getImages($data.fields.homePageImage.sys.id);

  return (
    <section className=" min-h-screen xxs:min-h-[80vh] sm:min-h-[90vh] md:min-h-[80vh] xl:min-h-screen  min-w-[300px] w-full bg-primary relative  flex justify-between p-2 sm:p-5 lg:p-10 ">
      <HeroText data={$data} />
      <HeroImage heroImage={image} />
    </section>
  );
}

export default HeroSection;
