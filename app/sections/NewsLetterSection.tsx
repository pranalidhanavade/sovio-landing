"use client";

import { ResponseMessages, StatusCode } from "@/utils/Constants";
import { useState } from "react";

const NewsLetterSection = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    setMessage("Subscribing...");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SENDGRID_API_URL}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          list_ids: [`${process.env.NEXT_PUBLIC_SENDGRID_LIST_ID}`],    
          contacts: [{ email, first_name: name }],  
        }),
      });

      if (response.status == StatusCode.Accepted) {
        try{
          setMessage(ResponseMessages.success);
          (event.target as HTMLFormElement)?.reset();
        } catch(err) {
          throw new Error(`Error during subscription: ${err}`);
        }
      } else {
        const errorData = await response.json();
        setMessage(errorData.errors ? errorData.errors[0].message : ResponseMessages.failed);
      }
    } catch(err) {
      throw new Error(`Error during subscription: ${err}`);
    }
  };

  return (
    <section className="w-full px-4 py-12 mx-auto max-w-7xl text-center lg:px-12 lg:py-16 relative bg-white">
      <h3 className="text-5xl font-bold text-gray-900 relative">Subscribe To Our Newsletter</h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative w-full max-w-lg mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full p-4 shadow-xl text-lg focus:outline-none border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email address..."
          required
          className="w-full p-4 shadow-xl text-lg focus:outline-none border border-gray-300 rounded-md"
        />

        <button
          type="submit"
          className="w-full sm:w-40 mx-auto flex items-center justify-center gap-2 p-3 bg-[#FFD302] text-black font-bold text-lg transition hover:bg-yellow-500 rounded-md"
        >
          Subscribe
          <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.25 1.22656C15.3125 0.601562 16.6562 1.50781 16.4688 2.75781L14.625 14.8516C14.5312 15.3203 14.2812 15.6953 13.875 15.9453C13.625 16.0703 13.375 16.1328 13.125 16.1328C12.9375 16.1328 12.75 16.1016 12.5625 16.0078L9.0625 14.5703L7.6875 16.4141C6.84375 17.5703 5 16.9766 5 15.5078V12.8828L1.40625 11.4141C0.25 10.9453 0.15625 9.35156 1.25 8.72656L14.25 1.22656ZM6.5 15.5078L7.625 13.9766L6.5 13.5078V15.5078ZM13.125 14.6328L15 2.50781L2 10.0078L5.34375 11.4141L11.9688 5.66406C12.4062 5.25781 13.0312 5.82031 12.7188 6.32031L8.3125 12.6328L13.125 14.6328Z"
              fill="black"
            />
          </svg>
        </button>
      </form>

      <p className="text-lg mt-4 text-[#ce9300]">{message}</p>
    </section>
  );
};

export default NewsLetterSection;
