import React from "react";
import Carousel from "../components/Carousel";
import PopularService from "../components/PopularService";
import OurService from "../components/OurService";
import Testimonial from "../components/Testimonial";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
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
