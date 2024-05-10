import React from "react";
import MenuPage from "@/components/Menu/MenuPage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Menu",
};

function page() {
  return <MenuPage />;
}

export default page;
