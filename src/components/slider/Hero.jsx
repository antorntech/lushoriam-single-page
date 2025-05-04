import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[calc(100svh-64px)]">
      <div className="min-h-[calc(100svh-64px)] flex items-center justify-center">
        <div className="h-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="md:w-1/3 grow">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ lineHeight: "1.4" }}
            >
              আর নয় চুল পড়ে যাওয়ার ভয় — ফিরিয়ে আনুন ঘন ও প্রাণবন্ত চুল!
            </h1>
            <p className="mb-8">
              হেয়ার গ্রোথ স্প্রে নিয়মিত ব্যবহারে চুল পড়া বন্ধ করে, নতুন চুল
              গজাতে সহায়তা করে এবং চুলের গোড়া মজবুত করে তোলে। সঙ্গে থাকছে ডার্মা
              রোলারের কার্যকরী সাপোর্ট — যার প্রমাণ মিলেছে অসংখ্য সন্তুষ্ট
              গ্রাহকের ফিডব্যাকে।
            </p>
            <a href="#order-now" className="btn primary inline-block">
              এখনই অর্ডার করুন
            </a>
          </div>
          <div className="md:w-1/3 grow mt-8 md:mt-0">
            <img
              src="/assets/images/product.png"
              alt="প্রোডাক্ট ছবি"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
