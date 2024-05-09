import React from "react";
import GetCardData from "./GetCardData";
import MenuHeading from "./MenuHeading";
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
    <section className="min-h-screen min-w-[200px] w-full flex flex-col  items-center p-4  gap-y-16">
      <MenuHeading />
      <GetCardData menuItems={$menuItems} />
      <MenuPageBtn />
    </section>
  );
}

export default Menu;
