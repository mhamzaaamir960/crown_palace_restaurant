import React from "react";

function Heading({
  heading,
  textColor,
}: {
  heading: string;
  textColor: string;
}) {
  return (
    <div className="flex w-full justify-center items-start ">
      <h3
        className={` text-2xl xs:text-3xl sm:text-4xl font-semibold ${textColor} underline underline-offset-8 shrink-0 `}
      >
        {heading}
      </h3>
    </div>
  );
}

export default Heading;
