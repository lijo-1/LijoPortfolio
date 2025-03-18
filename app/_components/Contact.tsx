"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    // Open default email app with pre-filled details
    window.location.href = `mailto:lijostanley051@gmail.com?subject=${subject}&body=${body}`;

    // Clear form fields after opening the email app
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 500); // Small delay to ensure the mail app opens first
  };

  return (
    <div className="mt-24 res-grid text-white scroll-mt-24 tag" id="contact">
      <h3 className="font-bold text-[20px] text-gray-300">CONTACT</h3>
      <form onSubmit={handleSendEmail} className="col-start-1 col-end-5 md:col-end-7">
        <div className="mt-[8px] px-[16px] py-[16px] border border-[#8460e6] bg-[#8460e6]/20">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="What's your name?"
            required
            className="text-[17px] focus:outline-none w-full placeholder:text-gray-400 placeholder:font-light bg-transparent"
          />
        </div>

        <div className="mt-[16px] px-[16px] py-[16px] border border-[#8460e6] bg-[#8460e6]/20">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="What's your @email?"
            required
            className="text-[17px] focus:outline-none w-full placeholder:text-gray-400 placeholder:font-light bg-transparent"
          />
        </div>

        <div className="mt-[16px] px-[16px] py-[16px] border border-[#8460e6] bg-[#8460e6]/20">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What do you want to tell me?"
            required
            className=" text-[17px] scroll-smooth focus:outline-none w-full placeholder:text-gray-400 placeholder:font-light bg-transparent resize-none h-12"
          />
        </div>

        <button 
          type="submit" 
          className="bg-[#8460e6] mt-[16px] px-[16px] py-[10px] w-full font-light text-[20px] hover:bg-[#6b50c1] transition "
        >
          Send 🚀
        </button>
      </form>
    </div>
  );
};

export default Contact;
