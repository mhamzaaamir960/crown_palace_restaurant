import React from "react";
import { ItemsData } from "./Menu";
import MenuCard from "./MenuCard";
import { getImages } from "@/config/getData";
import MenuHeading from "./MenuHeading";

async function MenuPage() {
  const items = await ItemsData();
  const images = await Promise.all(
    items.map((item: any) => getImages(item.fields.itemImage.sys.id))
  );
  return (
    <main className="mt-28">
      <MenuHeading />
      <div className="flex flex-wrap justify-evenly items-center w-full  gap-y-10 gap-x-4 mt-20 mb-20">
        {items.map((item: any, index: number) => (
          <MenuCard images={images} cardData={item} index={index} />
        ))}
      </div>
    </main>
  );
}

export default MenuPage;
