import React from "react";
import Container from "../../shared/Container";
import Accordion from "../../shared/Accordion";

const Faq = () => {
  return (
    <Container className="bg-primary/10 w-full mt-8 md:mt-16 py-5 md:py-10 rounded-md">
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl md:text-2xl font-bold text-primary">
            প্রায়শই জিজ্ঞাসিত প্রশ্ন
          </h1>
          <div className="flex items-center gap-1">
            <div className="w-20 h-1 bg-primary"></div>
            <div className="w-10 h-1 bg-primary"></div>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
        </div>
      </div>
      <Accordion />
    </Container>
  );
};

export default Faq;
