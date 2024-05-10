import { HeroSection, Menu, OpeningTimes, Reviews } from "@/components/index";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense fallback={"loading.."}>
        <HeroSection />
      </Suspense>
      <Menu />
      <OpeningTimes />
      <Reviews />
    </>
  );
}
