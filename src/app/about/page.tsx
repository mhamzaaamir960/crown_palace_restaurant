import React from "react";
import About from "@/components/About/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Experience the taste of Crown Palace, your go-to fast food destination since 2020. Delicious meals, exceptional service, and a community hub for friends and family",
};

function page() {
  return <About />;
}

export default page;
