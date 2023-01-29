import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiCheckedShield, GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="main-box  flex flex-col items-center h-72 md:flex-row gap-5 w-[80%] mx-auto mt-4 select-none">
        <div className="1st-box bg-white w-[90%] flex flex-col items-center p-1 rounded-xl md:h-[80%] justify-center cursor-pointer">
          <MdOutlineLocalShipping className="text-6xl animate-pulse bg-white rounded-full text-blue-600 p-1 hover:scale-125 cursor-pointer" />
          <span className="text-gray-700 text-xl">Super Fast delivery</span>
        </div>

        <div className="3rd-box  bg-white w-[90%] flex flex-col items-center p-1 rounded-xl md:h-[80%] justify-center cursor-pointer">
        <GiCheckedShield className="text-6xl animate-pulse bg-white rounded-full text-blue-600 p-1 hover:scale-125 cursor-pointer" />
          <span className="text-gray-700 text-xl">Hygiene food</span>
        </div>

        <div className="3rd-box  bg-white w-[90%] flex flex-col items-center p-1 rounded-xl md:h-[80%] justify-center cursor-pointer">
          <RiSecurePaymentLine className="text-6xl animate-pulse bg-white rounded-full text-blue-600 p-1 hover:scale-125 cursor-pointer" />
          <span className="text-gray-700 text-xl">Secure Payment System</span>
        </div>
      </div>
     
    </>
  );
};

export default Services;
