import React from "react";
import Heading from "../Heading/Heading";
import AboutDescription from "./AboutDescription";

function About() {
  return (
    <main className="mt-16 min-h-[50vh] bg-gray-300 w-full flex flex-col items-center p-4 min-w-[250px]">
      <Heading textColor="text-primary mt-5 " heading="About Us" />
      <div className="max-w-[90%] w-full flex justify-center my-10">
        <AboutDescription />
      </div>
    </main>
  );
}

export default About;
