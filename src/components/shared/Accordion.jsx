import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { useState } from "react";

const Accordion = () => {
  const faqData = [
    {
      question: "পণ্যের দাম কত এবং কিভাবে অর্ডার করবো ?",
      answer:
        "Printed Sunny Umbrella এর দাম ৬০০ টাকা। ডেলিভারি চার্জ ঢাকার ভেতর ৮০ টাকা, ঢাকার বাইরে ১৪০ টাকা। ৩টির বেশি Sunny Umbrella নিলে ডেলিভারি চার্জ ফ্রি। ডেলিভারিতে প্রোডাক্ট হাতে পাবার পর টাকা দিয়ে নিতে পারবেন। অর্ডার করতে আপনার বিস্তারিত লিখে নীচের ফর্মটি পূরণ করুন। ৩-৫ দিনের মধ্যে ডেলিভারি পাবেন।",
    },
    {
      question: "এই ছাতাটি কী ধরনের উপকরণ দিয়ে তৈরি?",
      answer:
        "এটি উচ্চ মানের জলরোধী কাপড় ও মজবুত ফ্রেম দিয়ে তৈরি, যা দীর্ঘস্থায়ী ব্যবহার নিশ্চিত করে।",
    },
    {
      question: "এই ছাতাটি কি শুধু রোদের জন্য ব্যবহার করা যায়?",
      answer:
        "না, এটি রোদ ও বৃষ্টি দুই ক্ষেত্রেই ব্যবহার করা যায়, তাই এটি বহুমুখী সুবিধা প্রদান করে।",
    },
    {
      question: "এই ছাতাটির বিশেষত্ব কী?",
      answer:
        "Printed Sunny Umbrella-এর ডিজাইন স্টাইলিশ, এটি হালকা ওজনের এবং সহজে বহনযোগ্য, যা আপনাকে ফ্যাশন ও সুরক্ষা একসাথে দেয়।",
    },
    {
      question: "এর রঙ এবং ডিজাইন কেমন?",
      answer:
        "এই ছাতাটি বিভিন্ন উজ্জ্বল রঙ ও সুন্দর প্রিন্টেড ডিজাইনে পাওয়া যায়, যা আপনাকে আকর্ষণীয় লুক দেয়।",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-2 md:mt-8">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full flex justify-between items-center p-4 text-left font-medium bg-primary/0 hover:bg-primary/10 transition-all duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-bold text-sm lg:text-md">
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
