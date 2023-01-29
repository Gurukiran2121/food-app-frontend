import React from "react";

import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import videoo from "../assets/mixkit-fruits-and-vegetables-of-many-kinds-close-up-10431.mp4";
const Hero = () => {
  return (
    <>
      <div className="w-[100%]  h-[550px] mt-[-95px] ">
        <div className="">
          <video
            className="w-full h-[600px] object-cover brightness-75"
            autoPlay
            loop
          >
            <source src={videoo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="z-10 absolute top-60 md:left-20">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className=" ml-3 text-6xl font-extrabold text-white">
            Desi food
          </h1>
          <p className="ml-5 md:text-3xl text-white">
            Discover the best food and drinks...
          </p>

          <NavLink to="/contact">
            <Button variant="gradient" size="sm" className="mb-2 p-3 font-bold">
              Connect with us
            </Button>
          </NavLink>
        </div>
      </div>

      <div className="p-2 md:w-[50%] mx-auto relative bottom-20">
        <div className="flex bg-white rounded-md items-center p-2 gap-2 opacity-75">
          <BsSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full"
          />
          <Button
            variant="gradient"
            className="flex justify-center font-bold w-fit "
          >
            Search
          </Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
