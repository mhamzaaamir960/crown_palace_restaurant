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
  return (
    <section
      id="menu"
      className="min-h-[50vh] min-w-[300px] w-full flex flex-col  items-center p-4  gap-y-16 bg-gray-100 "
    >
      <Heading heading="Menu & Prices" textColor="text-primary" />
      <GetCardData menuItems={$menuItems} />
      <MenuPageBtn />
    </section>
  );
}

export default Menu;
