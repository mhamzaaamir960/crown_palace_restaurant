import React from "react";
import Heading from "../Heading/Heading";
import DirectContact from "./DirectContact";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <main className="w-full min-h-[60vh] flex flex-col justify-center items-center bg-gray-300 mt-16 p-4">
      <div className="flex flex-col gap-y-4 mt-5">
        <Heading textColor="text-primary" heading="Contact Us" />
        <p className="text-gray-700 text-lg text-center">
          For online order & queries feel free to contact us!
        </p>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-evenly items-center w-full max-w-[95%] min-h-[40vh] p-4 mt-10 gap-y-16 gap-x-10 ">
        <DirectContact />
        <ContactForm />
      </div>
    </main>
  );
}

export default Contact;
