import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "404 - Page not found",
  },
};

function NotFound() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-300 p-4 min-w-[300px]">
      <div className="flex flex-col items-center text-center">
        <span className=" text-4xl sm:text-5xl text-primary font-medium">
          404 Error!
        </span>
        <p className="text-xl sm:text-2xl md:text-3xl text-primary mt-2">
          Something went Wrong. Page is not found...
        </p>
      </div>
    </div>
  );
}

export default NotFound;
