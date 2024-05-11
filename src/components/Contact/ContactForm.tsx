"use client";
import React, { useState } from "react";
import { TbMessageCircleShare } from "react-icons/tb";
import { Spinner } from "@chakra-ui/react";

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
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

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

      setSubmitted(true);
      setState({
        name: "",
        email: "",
        phoneNumber: "",
        location: "",
        message: "",
      });
      setTimeout(() => {
        setSubmitted(false);
      }, 3000); // Reset the form after 3 seconds
    } catch (error) {
      console.error("Error sending email:", error);
      setError("Failed to send email");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center min-h-[400px] bg-primary rounded-xl max-w-[450px] w-full"
    >
      <div className="flex flex-1 flex-col justify-center items-center gap-y-2 w-full max-w-[80%] gap-y-4 bg-primary">
        <input
          placeholder="Name"
          name="name"
          value={state.name}
          onChange={handleChange}
          className="bg-primary border-b-2 border-secondary w-full placeholder:text-gray-300 text-gray-300 outline-none p-1"
          type="text"
        />
        <input
          placeholder="Email*"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
          className="bg-primary border-b-2 border-secondary w-full placeholder:text-gray-300 text-gray-300 outline-none p-1"
          type="email"
        />
        <input
          placeholder="Phone Number*"
          name="phoneNumber"
          value={state.phoneNumber}
          onChange={handleChange}
          required
          className="bg-primary border-b-2 border-secondary w-full placeholder:text-gray-300 text-gray-300 outline-none p-1"
          type="tel"
        />
        <input
          placeholder="Location"
          name="location"
          value={state.location}
          onChange={handleChange}
          className="bg-primary border-b-2 border-secondary w-full placeholder:text-gray-300 text-gray-300 outline-none p-1"
          type="text"
        />

        <textarea
          rows={4}
          placeholder="How can we serve you?"
          name="message"
          value={state.message}
          onChange={handleChange}
          className="bg-primary border-b-2 border-secondary w-full placeholder:text-gray-300 flex items-end shadow-xl outline-none text-gray-300"
        />

        <div className="">
          {submitting ? (
            <Spinner
              className="flex justify-center items-center text-secondary font-medium  mt-2 size-5"
              size={"lg"}
            />
          ) : submitted ? (
            <span className="flex justify-center items-center text-secondary font-medium gap-x-2 mt-2 text-center">
              Form submitted successfullay!
            </span>
          ) : (
            <button
              type="submit"
              disabled={submitting || submitted}
              className="flex justify-center items-center bg-secondary text-primary font-medium hover:scale-105 hover:transition-all hover:ease-in-out hover:delay-100 hover:duration-300 px-2 py-1 rounded-full gap-x-2 mt-2"
            >
              <TbMessageCircleShare /> <span>Submit</span>
            </button>
          )}
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}
      </div>
    </form>
  );
}

export default ContactForm;
