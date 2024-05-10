import React from "react";
import Heading from "../Heading/Heading";
import ReviewCards from "./ReviewCards";
import getData from "@/config/getData";

export async function generateStaticParams() {
  const data = await getData();
  const $reviews = data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "reviews"
  );
  return $reviews;
}
async function Reviews() {
  const data = await getData();
  const $reviews = data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "reviews"
  );
  return (
    <section className="min-h-[40vh]  min-w-[300px] w-full flex flex-col items-center bg-gray-200 p-4 ">
      <Heading textColor="text-primary" heading="Reviews" />
      <ReviewCards reviews={$reviews} />
    </section>
  );
}

export default Reviews;
