import React from "react";
import Carousel from "../components/Carousel";
import PopularService from "../components/PopularService";
import OurService from "../components/OurService";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <PopularService></PopularService>
      <div>
        <OurService></OurService>
      </div>
      <div>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
