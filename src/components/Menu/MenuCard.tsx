import React from "react";
import Image from "next/image";
import Link from "next/link";

function MenuCard({
  images,
  cardData,
  index,
}: {
  images: HTMLImageElement[];
  cardData: any;
  index: number;
}) {
  return (
    <div
      key={index + 2}
      className="flex flex-col w-full min-w-[180px] max-w-[300px] bg-secondary rounded transition-all duration-500 hover:scale-105 hover:transition-all hover:ease-in-out hover:delay-100 hover:duration-500 shadow-lg"
    >
      <div>
        <Image
          src={images[index]}
          alt={`${cardData.fields.itemTitle}`}
          width={200}
          height={200}
          className="w-full max-h-[200px] rounded-t object-cover "
        />
      </div>
      <div className="p-2 py-4 gap-y-2  min-h-[130px]  flex flex-col ">
        <h4 className="text-xl text-primary font-bold line-clamp-2 ">
          {cardData.fields.itemTitle}
        </h4>
        <p className="text-gray-700 min-h-[50px] line-clamp-4 overflow-y-visible">
          {cardData.fields.itemDescription}
        </p>
        <div className="flex justify-between items-center ">
          <Link
            className="px-2 border-primary border-2 text-primary hover:text-white hover:scale-100 rounded-lg hover:transition-all hover:ease-in-out hover:delay-75 hover:duration-300  hover:bg-primary"
            href={"/contact"}
          >
            Order Now
          </Link>
          <span className="text-primary">{cardData.fields.price}&pound;</span>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
