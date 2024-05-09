import { HeroSection, Menu, OpeningTimes, Reviews } from "@/components/index";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Menu />
      <OpeningTimes />
      <Reviews />
    </>
  );
}
