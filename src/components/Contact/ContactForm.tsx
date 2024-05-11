"use client";
import React, { useState } from "react";
import { TbMessageCircleShare } from "react-icons/tb";


type StateType = {
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
  message: string;
};

function ContactForm() {
  const [state, setState] = useState<StateType>({
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setState((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(state),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      try {
        console.log(await response.json());
      } catch (error) {
        console.error("Error parsing response JSON:", error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="flex  justify-center min-h-[400px] bg-primary rounded-xl max-w-[450px] w-full "
    >
      <div className="flex flex-1 flex-col justify-center items-center gap-y-2 w-full max-w-[80%] gap-y-4 bg-primary">
        <input
          placeholder="Name"
          name="name"
          value={state.name}
          onChange={handleChange}
          className=" bg-primary border-b-2 border-secondary w-full placeholder:text-gray-300 text-gray-300 outline-none p-1"
          type="text"
        />
        <input
          placeholder="Email*"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
          className=" bg-primary border-b-2 border-secondary w-full placeholder:text-gray-300 text-gray-300 outline-none p-1"
          type="email"
        />
        <input
          placeholder="Phone Number*"
          name="phoneNumber"
          value={state.phoneNumber}
          onChange={handleChange}
          required
          className=" bg-primary border-b-2 border-secondary w-full placeholder:text-gray-300 text-gray-300 outline-none p-1"
          type="tel"
        />
        <input
          placeholder="Location"
          name="location"
          value={state.location}
          onChange={handleChange}
          className=" bg-primary border-b-2 border-secondary w-full placeholder:text-gray-300 text-gray-300 outline-none p-1"
          type="text"
        />

        <textarea
          rows={4}
          placeholder="How can we serve you?"
          name="message"
          value={state.message}
          onChange={handleChange}
          className=" bg-primary border-b-2 border-secondary w-full placeholder:text-gray-300 flex items-end shadow-xl outline-none text-gray-300 "
        />

        <button
          type="submit"
          className="flex justify-center items-center bg-secondary text-primary font-medium hover:scale-105 hover:transition-all hover:ease-in-out hover:delay-100 hover:duration-300 px-2 py-1 rounded-full gap-x-2 mt-2"
        >
          <TbMessageCircleShare /> <span>Submit</span>
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
