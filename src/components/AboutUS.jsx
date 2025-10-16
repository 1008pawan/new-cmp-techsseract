"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";

const SecondHeroSection = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 500;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const colorMap = {
    red: { bg: "bg-red-200", circle: "bg-red-500" },
    green: { bg: "bg-green-200", circle: "bg-green-500" },
    yellow: { bg: "bg-yellow-200", circle: "bg-yellow-500" },
    blue: { bg: "bg-blue-200", circle: "bg-blue-500" },
    orange: { bg: "bg-orange-200", circle: "bg-orange-500" },
    purple: { bg: "bg-purple-200", circle: "bg-purple-500" },
  };

  const sixCards = [
    { text: "Ease of Scalability", color: "red" },
    { text: "Instant Impact", color: "green" },
    { text: "Expertise & Experience", color: "yellow" },
    { text: "Latest TechStack", color: "blue" },
    { text: "Full Flexibility", color: "orange" },
    { text: "Proactive Support", color: "purple" },
  ];

  return (
    <div id="AboutUs" className="py-16 px-6 grid lg:grid-cols-5 grid-cols-1 gap-20 scroll-mt-24">
      <div className="flex flex-col lg:flex-row gap-6 lg:col-span-3">
        <div className="hidden lg:block vertical-text animate-verticalMove text-white text-outline text-5xl lg:text-7xl rotate-180 text-center font-bold">
          Since 2017
        </div>

        <div className="relative flex-1">
          <div className="absolute z-10 h-32 w-24 sm:h-40 sm:w-32 bg-[url('/images/second/secondBgImage.jpg')] bg-cover bg-center lg:left-81 left-200px top-0 border-b-8 md:border-l-8 border-r-8 text-center flex flex-col justify-center text-white">
            <div className="flex justify-center">
              <h1 className="font-bold text-3xl sm:text-5xl">{count}</h1>
              <span className="text-2xl">+</span>
            </div>
            <p className="text-xs sm:text-base font-semibold">
              Projects Delivered
            </p>
          </div>

          <div className="relative group overflow-hidden shadow-lg">
            <img
              src="/images/second/about_2_1.png"
              alt="About one"
              className="transition-transform duration-500 group-hover:scale-105 w-full h-auto"
            />
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="shine"></div>
            </div>
          </div>

          <div className="absolute -bottom-20 lg:-right-35 -right-6 w-45 sm:w-1/2 group-hover:scale-105 transition">
            <img
              src="/images/second/about_2_2.png"
              alt="About Two"
              className="lg:w-full lg:h-auto h-70 w-45 border-4 border-white"
            />
          </div>
        </div>

        <div className="hidden absolute sm:block animate-verticalMove lg:relative -left-30 top-5">
          <img src="/images/second/about_shape2_1.png" alt="rounds Shape" />
        </div>
      </div>

      <div className="lg:col-span-2 space-y-5">
        <div className="flex items-center gap-2">
          <span className="text-orange-600">
            <svg
              width="20"
              height="8"
              viewBox="0 0 20 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_246_528)">
                <path
                  d="M11.6719 6.85284C8.64069 6.9544 8.17585 0.548154 6.06257 4.62237C5.17194 6.50128 2.92585 7.53644 1.21882 5.94659C0.648507 5.40753 -0.00774341 4.58722 6.90872e-05 3.763C-0.00774341 2.83722 1.3321 2.47394 1.81648 3.24737C2.06257 3.65753 2.32429 4.11456 2.66804 4.42315C4.17976 5.68097 4.36335 1.13019 7.33601 1.14972C8.54694 1.10675 9.72663 2.15362 10.3126 3.13409C10.5548 3.38409 11.3985 5.0755 11.836 4.69269C12.336 4.22394 12.7423 3.61456 13.1524 3.04815C14.0704 1.84112 15.8751 1.71612 16.9454 2.78253C17.1993 3.02862 17.3907 3.31378 17.6055 3.5794C17.6837 3.67315 17.8204 3.68487 17.9141 3.61065C17.9337 3.59503 17.9493 3.5755 17.961 3.55597C18.3048 3.00519 18.7657 2.61847 19.4727 2.98175C20.8282 3.86065 19.2813 5.74737 18.1212 5.91534C17.2579 6.03253 16.5391 5.64581 15.9454 4.87628C15.7462 4.63409 15.5977 4.22784 15.2774 4.16925C14.5274 3.86847 13.9376 6.8294 11.6719 6.85284Z"
                  fill="#F84923"
                />
              </g>
              <defs>
                <clipPath id="clip0_246_528">
                  <rect width="20" height="8" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <h3 className="text-orange-600 font-semibold text-sm sm:text-base uppercase">
            ABOUT OUR COMPANY
          </h3>
          <span className="text-orange-600">
            <svg
              width="20"
              height="8"
              viewBox="0 0 20 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_246_528)">
                <path
                  d="M11.6719 6.85284C8.64069 6.9544 8.17585 0.548154 6.06257 4.62237C5.17194 6.50128 2.92585 7.53644 1.21882 5.94659C0.648507 5.40753 -0.00774341 4.58722 6.90872e-05 3.763C-0.00774341 2.83722 1.3321 2.47394 1.81648 3.24737C2.06257 3.65753 2.32429 4.11456 2.66804 4.42315C4.17976 5.68097 4.36335 1.13019 7.33601 1.14972C8.54694 1.10675 9.72663 2.15362 10.3126 3.13409C10.5548 3.38409 11.3985 5.0755 11.836 4.69269C12.336 4.22394 12.7423 3.61456 13.1524 3.04815C14.0704 1.84112 15.8751 1.71612 16.9454 2.78253C17.1993 3.02862 17.3907 3.31378 17.6055 3.5794C17.6837 3.67315 17.8204 3.68487 17.9141 3.61065C17.9337 3.59503 17.9493 3.5755 17.961 3.55597C18.3048 3.00519 18.7657 2.61847 19.4727 2.98175C20.8282 3.86065 19.2813 5.74737 18.1212 5.91534C17.2579 6.03253 16.5391 5.64581 15.9454 4.87628C15.7462 4.63409 15.5977 4.22784 15.2774 4.16925C14.5274 3.86847 13.9376 6.8294 11.6719 6.85284Z"
                  fill="#F84923"
                />
              </g>
              <defs>
                <clipPath id="clip0_246_528">
                  <rect width="20" height="8" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold">
          Get to know more about our story
        </h1>

        <p className="text-zinc-500 text-sm sm:text-base">
          Welcome to
          <span className="text-blue-500 font-bold">CMP Techsseract LLP</span>,
          where innovation meets excellence. Established with a vision to
          revolutionize the tech industry, CMP Techsseract is a dynamic and
          forward-thinking technology solutions provider.
        </p>

        <p className="text-zinc-500 text-sm sm:text-base">
          <span className="text-blue-500 font-bold">CMP Techsseract LLP</span>
          is a collective of passionate technologists, skilled engineers, and
          creative problem solvers. Our mission is to empower clients through
          innovative technology solutions that enhance efficiency, boost
          productivity, and drive success.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
          {sixCards.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 p-2 rounded-lg ${
                colorMap[item.color].bg
              }`}
            >
              <div
                className={`h-7 w-7 ${
                  colorMap[item.color].circle
                } text-white flex justify-center items-center rounded-full text-xs`}
              >
                {i + 1}
              </div>
              <h1 className="text-zinc-800 text-xs">{item.text}</h1>
            </div>
          ))}
        </div>

        <div className="pt-3">
          <a href="#ContactUs"><Button btnText={"Contact Us"} /></a>
        </div>
      </div>
    </div>
  );
};

export default SecondHeroSection;
