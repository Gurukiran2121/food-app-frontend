import React from "react";
import { useNavigate } from "react-router-dom";

import order from "../assets/orderonline.mp4";
import Videoo from "../assets/table.mp4";
import partyy from "../assets/party.mp4";

const Mainsection = () => {
  const navi = useNavigate();
  return (
    <>
      <div className="w-full">
        <div className="w-[80%] flex flex-wrap mx-auto justify-evenly gap-5">
          <div
            className="w-96 hover:cursor-pointer hover:scale-105 shadow-xl rounded-b-xl"
            onClick={() => navi("/products")}
          >
            <video
              autoPlay
              muted
              loop
              className="w-96 h-40 object-fill rounded-t-xl hover:brightness-75"
            >
              <source src={order} />
            </video>
            <div className="p-3  bg-white rounded-b-xl">
              <h1 className="text-2xl text-gray-800 hover:underline">
                order online{" "}
              </h1>
              <p>Stay home and order to your doorstep</p>
            </div>
          </div>
          <div className="w-96 hover:cursor-pointer hover:scale-105 shadow-xl rounded-b-xl">
            <video
              autoPlay
              muted
              loop
              className="w-96 h-40 object-fill rounded-t-xl hover:brightness-75"
            >
              <source src={Videoo} />
            </video>
            <div className="p-3  bg-white rounded-b-xl">
              <h1 className="text-2xl text-gray-800 hover:underline">Dining</h1>
              <p>Reserve table for dinner</p>
            </div>
          </div>
          <div className="w-96 hover:cursor-pointer hover:scale-105 shadow-xl rounded-b-xl">
            <video
              autoPlay
              muted
              loop
              className="w-96 h-40 object-fill rounded-t-xl hover:brightness-75"
            >
              <source src={partyy} />
            </video>
            <div className="p-3  bg-white rounded-b-xl">
              <h1 className="text-2xl text-gray-800 hover:underline">
                Book a party hall
              </h1>
              <p>Book and chill with your gang</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainsection;
