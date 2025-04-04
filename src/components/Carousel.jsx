// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgimg1 from "../assets/images/bgimg1.jpg";
import bgimg2 from "../assets/images/bgimg2.jpg";
import bgimg3 from "../assets/images/bgimg3.jpg";

export default function Carousel() {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            heading="SmartFix – Fast, Reliable, and Affordable Repairs!"
            subHeading="Get your gadgets back in action with expert repairs for phones, laptops, and more!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            heading="SmartFix – Your Home, Our Expertise!"
            subHeading="One-stop solution for all your home repair and maintenance needs"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            heading="SmartFix – Services at Your Fingertips!"
            subHeading="From home repairs to tech fixes – book expert services anytime, anywhere."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
