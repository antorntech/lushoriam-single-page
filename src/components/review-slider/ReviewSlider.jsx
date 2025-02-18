import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const ReviewSlider = () => {
  const reviews = [
    {
      name: "রাকিব",
      review:
        "আমি এই ছাতাটি ব্যবহার করে সত্যিই মুগ্ধ! এর ডিজাইন অত্যন্ত আকর্ষণীয় এবং মানও দারুণ। রোদ ও বৃষ্টিতে সমান কার্যকর। এক কথায়, অসাধারণ!",
      image: "/assets/images/avatar.png",
    },
    {
      name: "হৃদয়",
      review:
        "ছাতাটি খুবই হালকা, সহজে ব্যাগে রাখা যায়। বৃষ্টিতেও ভালো সুরক্ষা দেয় এবং কাপড়ের মান বেশ ভালো। ৬০০ টাকায় এত ভালো ছাতা পাওয়া যাবে ভাবিনি!",
      image: "/assets/images/avatar.png",
    },
    {
      name: "অন্তর",
      review:
        "Printed Sunny Umbrella-এর ডিজাইন এত সুন্দর যে রাস্তায় বের হলেই সবাই প্রশংসা করে! এটি রোদে ঠান্ডা রাখে এবং সহজেই খোলা-বাঁধা যায়।",
      image: "/assets/images/avatar.png",
    },
    {
      name: "হৃদয়",
      review:
        "ছাতাটি খুবই হালকা, সহজে ব্যাগে রাখা যায়। বৃষ্টিতেও ভালো সুরক্ষা দেয় এবং কাপড়ের মান বেশ ভালো। ৬০০ টাকায় এত ভালো ছাতা পাওয়া যাবে ভাবিনি!",
      image: "/assets/images/avatar.png",
    },
    {
      name: "অন্তর",
      review:
        "Printed Sunny Umbrella-এর ডিজাইন এত সুন্দর যে রাস্তায় বের হলেই সবাই প্রশংসা করে! এটি রোদে ঠান্ডা রাখে এবং সহজেই খোলা-বাঁধা যায়।",
      image: "/assets/images/avatar.png",
    },
  ];
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
        modules={[FreeMode, Pagination]}
        className="mySwiper review-slider"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center gap-2 p-5">
              <img
                src={review.image}
                alt="avatar"
                className="w-20 h-20 rounded-full"
              />
              <h2 className="text-lg font-bold">{review.name}</h2>
              <p>{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewSlider;
