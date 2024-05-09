import React from "react";
import Link from "next/link";

function DirectContact() {
  return (
    <div className="flex flex-col  justify-center gap-y-2  min-w-[200px] max-w-[350px]">
      <h4 className="text-2xl font-semibold text-primary ">
        Direct Contact for online orders:
      </h4>
      <div className="flex flex-col gap-y-2 mt-5 ">
        <span className=" w-fit bg-secondary rounded-xl text-lg font-medium text-primary px-3 py-1">
          Email:
        </span>
        <Link
          className="text-gray-700 ml-4"
          href="mailto:clearbusinessbyadrian@gmail.com"
        >
           clearbusinessbyadrian@gmail.com
        </Link>
      </div>

      <div className="my-4 flex flex-col gap-y-2">
        <span className="w-fit bg-secondary rounded-xl text-lg font-medium text-primary px-3 py-1">
          Call Us:
        </span>
        <Link className="text-gray-700 ml-4" href="tel:+441416111897">
          +44 141 611 1897
        </Link>
      </div>

      <div className=" flex flex-col gap-y-2 ">
        <span className="w-fit bg-secondary rounded-xl text-lg font-medium text-primary px-3 py-1">
          Address:
        </span>
        <address className="text-gray-700 ml-4">
           297 London Road, Hadleigh, Benfleet, Essex, SS7 2DD
        </address>
      </div>
    </div>
  );
}

export default DirectContact;
