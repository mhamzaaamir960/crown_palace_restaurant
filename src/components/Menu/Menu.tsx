import React from "react";
import Heading from "../Heading/Heading";
import GetCardData from "./GetCardData";
import getData from "@/config/getData";
import MenuPageBtn from "./MenuPageBtn";

export async function ItemsData() {
  const data = await getData();
  const $menuItems = await data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "menu"
  );
  return $menuItems;
}

async function Menu() {
  const $menuItems = await ItemsData();
  console.log($menuItems);
  return (
    <section className="min-h-[80vh] min-w-[250px] w-full flex flex-col  items-center p-4  gap-y-16 ">
      <Heading heading="Menu & Prices" textColor="text-primary"/>
      <GetCardData menuItems={$menuItems} />
      <MenuPageBtn />
    </section>
  );
}

export default Menu;
