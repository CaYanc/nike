import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { Navigation, Pagination, History } from "swiper/modules";
import CartSilder from "./CartSilder";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        history={{
          key: "slide",
        }}
        modules={[Navigation, Pagination, History]}
        className="mySwiper"
      >
        <SwiperSlide data-history="1">
          <CartSilder imagen={img1} />
        </SwiperSlide>
        <SwiperSlide data-history="Slide 2">
          <CartSilder imagen={img2} />
        </SwiperSlide>
        <SwiperSlide data-history="3">
          <CartSilder imagen={img3} />
        </SwiperSlide>
        <SwiperSlide data-history="Slide 4">
          <CartSilder imagen={img1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
