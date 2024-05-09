import React from "react";
import { getImages, getHeroSectionData } from "@/config/getData";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

async function HeroSection() {
  const data = await getHeroSectionData();
  const image = await getImages(data.fields.homePageImage.sys.id);

  return (
    <section className="relative bg-primary p-6 md:p-10 min-h-[120vh] xs:min-h-screen sm:min-h-[120vh] md:min-h-[110vh] lg:min-h-screen">
      <HeroImage heroImage={image} />
      <HeroText heroData={data} />
    </section>
  );
}

export default HeroSection;
