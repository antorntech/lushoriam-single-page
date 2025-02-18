"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  const images = [
    "/assets/images/banners/1.jpg",
    "/assets/images/banners/2.jpg",
    "/assets/images/banners/3.jpg",
    "/assets/images/banners/4.jpg",
  ];

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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
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
