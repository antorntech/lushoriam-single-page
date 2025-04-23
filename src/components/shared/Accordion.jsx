import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { useState } from "react";
import useGetData from "../../utils/useGetData";

const Accordion = () => {
  const faqs = useGetData("faqs");

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-2 md:mt-8">
      {faqs?.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full flex justify-between items-center p-3 md:p-4 text-left font-medium bg-primary/0 hover:bg-primary/10 transition-all duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-bold text-sm lg:text-lg">
              {item.question}
            </span>
            {openIndex === index ? (
              <ArrowUp2
                className="size-5 text-gray-600 transition-transform duration-300"
                color="currentColor"
              />
            ) : (
              <ArrowDown2
                className="size-5 text-gray-600 transition-transform duration-300"
                color="currentColor"
              />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-80 p-4" : "max-h-0 p-0"
            }`}
          >
            <p className="text-gray-700">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
