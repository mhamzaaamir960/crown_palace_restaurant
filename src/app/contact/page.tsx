import React from "react";
import Contact from "@/components/Contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "For online order & queries feel free to contact us",
};

function page() {
  return <Contact />;
}

export default page;
