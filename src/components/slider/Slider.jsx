"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import useGetData from "../../utils/useGetData";

const Slider = () => {
  const sliders = useGetData("sliders");

  return (
    <>
      <Swiper
        spaceBetween={16}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper hero-slider"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {sliders?.map((slider, index) => (
          <SwiperSlide key={index}>
            <img
              src={slider?.banner}
              alt=""
              className="w-full h-[25vh] md:h-[70vh] 2xl:h-[80vh] object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
