import React from "react";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <div className="contact-box select-none">
        <h1 className="text-2xl text-center my-8 md:text-4xl">
          Feel Free To Contact US.
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7384986325565!2d77.59906501473976!3d12.924521590886755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15a99abd13e9%3A0xfe9aee7c1a49141c!2sJspiders!5e0!3m2!1sen!2sin!4v1671353495461!5m2!1sen!2sin"
          height="400"
          className="w-[95%] mx-auto"
          allowFullScreen=""
          loading="lazy"
          title="map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container mx-auto mb-5 md:mt-8">
        <div className="box w-[95%] mx-auto">
          <form action="https://formspree.io/f/mbjerdvv" method="POST" className="md:w-[60%] mx-auto">
            <label htmlFor="uname">Name : </label> <br />
            <input
              type="text"
              id="uname"
              placeholder="enter your name"
              name="username"
              required
              autoComplete="off"
              className="w-full p-2 border rounded-lg mb-3 outline-none border-blue-300 bg-gray-50"
            />{" "}
            <br />
            <label htmlFor="uemail">Email : </label> <br />
            <input
              type="email"
              id="uemail"
              placeholder="enter your email"
              name="email"
              required
              autoComplete="off"
              className="w-full p-2 border rounded-lg mb-3 outline-none border-blue-300 bg-gray-50"
            />{" "}
            <br />
            <textarea
              name="message"
              id=""
              placeholder=" enter your query"
              className="border w-[100%] rounded-lg outline-none border-blue-300 md:h-32 bg-gray-50"
            ></textarea>{" "}
            <br />
            <input
              type="submit"
              className="bg-blue-600 w-20 p-2 rounded-md text-white hover:bg-blue-400 cursor-pointer"
            />
            <input
              type="reset"
              className="bg-blue-600 w-20 p-2 rounded-md text-white ml-5 hover:bg-blue-400 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
