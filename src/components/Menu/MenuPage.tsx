import React from "react";
import { ItemsData } from "./Menu";
import MenuCard from "./MenuCard";
import { getImages } from "@/config/getData";
import Heading from "../Heading/Heading"

async function MenuPage() {
  const items = await ItemsData();
  const images = await Promise.all(
    items.map((item: any) => getImages(item.fields.itemImage.sys.id))
  );
  return (
    <main className="mt-28">
      <Heading textColor="text-primary" heading="Menu & Prices"/>
      <div className="flex flex-wrap justify-evenly items-center w-full  gap-y-10 gap-x-4 mt-20 mb-20">
        {items.map((item: any, index: number) => (
          <MenuCard key={index} images={images} cardData={item} index={index} />
        ))}
      </div>
    </main>
  );
}

export default MenuPage;
