import React from "react";
import Container from "../../shared/Container";
import ReviewSlider from "../../review-slider/ReviewSlider";

const Reviews = () => {
  return (
    <Container className="w-full py-5 md:py-10 mt-6 md:mt-12 bg-primary/10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-primary text-center">
          কাস্টমার রিভিউ
        </h1>
        <div className="flex items-center gap-1">
          <div className="w-20 h-1 bg-primary"></div>
          <div className="w-10 h-1 bg-primary"></div>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
      </div>
      <ReviewSlider />
    </Container>
  );
};

export default Reviews;
