"use client"
import React, {useRef} from "react";
import { RiStarSFill } from "react-icons/ri";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function ReviewCards({ reviews }: { reviews: any }) {
  const plugin = useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true,   })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="my-16 max-w-[90%] min-w-[250px] w-full flex flex-wrap justify-center items-center"
    >
      <CarouselContent className="flex gap-4 p-4 justify-center items-center ">
        {reviews && reviews.map((item: any, index: number) => (
          <CarouselItem
            key={index}
            className="flex flex-col items-start justify-center  p-2 md:p-4  max-w-[450px] bg-primary rounded-lg"
          >
            <h5 className="text-lg italic text-gray-300 line-clamp-6">
               {item.fields.reviewComment}
            </h5>
            <span className="mt-4 mb-1 text-white text-2xl font-bold">
              {item.fields.custumerName}
            </span>
            <div className="flex gap-x-2 text-xl">
              {Array.from({ length: 5 }, (_, i) => (
                <RiStarSFill
                  key={i}
                  className={`${
                    i < item.fields.rating ? "text-secondary" : "text-gray-300"
                  } flex`}
                />
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default ReviewCards;
