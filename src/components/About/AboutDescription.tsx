import React from "react";
import getData from "@/config/getData";

export async function generateStaticParams() {
  const data = await getData();
  const about = await data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "aboutUs"
  );
  return about;
}
async function AboutDescription() {
  const data = await getData();
  const about = await data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "aboutUs"
  );
  return (
    <p className="text-gray-700 text-lg ">{about && about[0].fields.about}</p>
  );
}

export default AboutDescription;
