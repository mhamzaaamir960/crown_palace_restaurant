import React from "react";
import Heading from "../Heading/Heading";
import getData from "@/config/getData";
import Schedule from "./Schedule";

export async function generateStaticParams() {
  const data = await getData();
  const openingTimes = await data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "openingTimes"
  );
  return openingTimes;
}

async function OpeningTimes() {
  const data = await getData();
  const openingTimes = await data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "openingTimes"
  );
  return (
    <section className="min-h-[50vh] h min-w-[300px] w-full flex flex-col items-center bg-primary p-4 ">
      <Heading heading="Opening Times" textColor="text-secondary" />
      <Schedule time={openingTimes} />
    </section>
  );
}

export default OpeningTimes;
