import React from "react";
import { getImages } from "@/config/getData";
import MenuCard from "./MenuCard";

async function GetCardData({ menuItems }: { menuItems: any }) {
  const images = await Promise.all(
    menuItems.map((item: any) => getImages(item.fields.itemImage.sys.id))
  );
  let counter = 1;

  return (
    <div className="flex flex-wrap justify-evenly items-center w-full  gap-y-10 gap-x-4 m-4">
      {menuItems &&
        menuItems.map((item: any, index: number) => {
          counter++;
          if (counter > 5) return;
          return <MenuCard images={images} cardData={item} index={index} />;
        }) }
    </div>
  );
}

export default GetCardData;
