import React from "react";
import { TbMessageCircleShare } from "react-icons/tb";

function ContactForm() {
  return (
    <div className="flex  justify-center min-h-[400px] bg-primary rounded-xl min-w-[300px] max-w-[450px] w-full ">
      <div className="flex flex-1 flex-col justify-center items-center gap-y-2 w-full max-w-[80%] gap-y-4">
        <input
          placeholder="Name"
          className="bg-inherit border-b-2 border-secondary w-full placeholder:text-gray-300 text-gray-300 outline-none"
          type="text"
        />
        <input
          placeholder="Email*"
          className="bg-inherit border-b-2 border-secondary w-full placeholder:text-gray-300 text-gray-300 outline-none"
          type="email"
        />
        <input
          placeholder="Phone Number*"
          className="bg-inherit border-b-2 border-secondary w-full placeholder:text-gray-300 text-gray-300 outline-none"
          type="tel"
        />
        <input
          placeholder="Location"
          className="bg-inherit border-b-2 border-secondary w-full placeholder:text-gray-300 text-gray-300 outline-none"
          type="text"
        />

        <textarea
          rows={4}
          placeholder="How can we serve you?"
          className="bg-inherit border-b-2 border-secondary w-full placeholder:text-gray-300 flex items-end shadow-xl outline-none text-gray-300 "
        />

        <button
          type="submit"
          className="flex justify-center items-center bg-secondary text-primary font-medium hover:scale-105 hover:transition-all hover:ease-in-out hover:delay-100 hover:duration-300 px-2 py-1 rounded-full gap-x-2 mt-2"
        >
          <TbMessageCircleShare /> <span>Submit</span>
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
