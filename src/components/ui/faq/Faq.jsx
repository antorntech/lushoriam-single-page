import React from "react";
import Container from "../../shared/Container";
import Accordion from "../../shared/Accordion";

const Faq = () => {
  return (
    <Container className="bg-primary/10 w-full mt-8 md:mt-16 py-5 md:py-10">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold text-primary">
          প্রায়শই জিজ্ঞাসিত প্রশ্ন
        </h1>
      </div>
      <Accordion />
    </Container>
  );
};

export default Faq;
