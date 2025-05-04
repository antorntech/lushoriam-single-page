import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  Autoplay,
  FreeMode,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";

import useGetData from "../../utils/useGetData";

const ReviewSlider = () => {
  const reviews = useGetData("reviews");

  return (
    <div className="py-10">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        initialSlide={Math.floor((reviews?.length || 1) / 2)}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, FreeMode, EffectCoverflow, Pagination]}
        className="mySwiper review-slider"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
      >
        {reviews?.map((review, index) => (
          <SwiperSlide key={index} className="max-w-xs">
            <div className="flex flex-col items-center gap-3 p-5 shadow-md rounded-xl bg-white">
              <img
                src={review?.avatar}
                alt={review?.name || "User Avatar"}
                className="w-20 h-20 rounded-full object-cover"
              />
              <h2 className="text-lg font-bold">{review?.name}</h2>
              <p className="text-sm md:text-md text-center text-gray-600">
                {review?.comments}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
