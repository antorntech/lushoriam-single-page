import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import useGetData from "../../utils/useGetData";

const API_URL = "https://lushoriam-server-abnd.vercel.app";

const ReviewSlider = () => {
  const reviews = useGetData("reviews");
  console.log(reviews);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper review-slider"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {reviews?.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center gap-2 p-5">
              <img
                src={review?.avatar}
                alt="avatar"
                className="w-20 h-20 rounded-full"
              />
              <h2 className="text-lg font-bold">{review?.name}</h2>
              <p className="text-sm md:text-md text-center text-gray-500">
                {review?.comments}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewSlider;
