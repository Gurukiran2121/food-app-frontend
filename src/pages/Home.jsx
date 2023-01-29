import React from "react";
import Services from "../components/Services"

import Hero from "../components/Hero";
import Mainsection from "../components/Mainsection";

import Subscribe from "../components/Subscribe";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <Mainsection />
      </div>
      <div>
        <Services/>
      </div>
      <div>
        <Subscribe />
      </div>
    </>
  );
};

export default Home;
