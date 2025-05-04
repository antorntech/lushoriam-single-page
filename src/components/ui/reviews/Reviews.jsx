import React from "react";
import Container from "../../shared/Container";
import ReviewSlider from "../../review-slider/ReviewSlider";

const Reviews = () => {
  return (
    <Container className="w-full py-5 md:py-10 mt-6 md:mt-12 bg-primary/10">
      <h1 className="text-xl md:text-2xl font-bold text-primary text-center">
        কাস্টমার রিভিউ
      </h1>
      <ReviewSlider />
    </Container>
  );
};

export default Reviews;
