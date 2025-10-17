"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 0,
      bgImage: "/images/bgImageOne.jpg",
      images: ["/images/threeSlider1.jpg", "/images/threeSlider2.jpg"],
      heading: `Technology Solutions Provider with Expertise in Web, Mobile, and UX Design`,
      text: `CMP Techsseract LLP is a technology-driven company based in Uttar Pradesh, India, specializing in web development, mobile applications, e-commerce platforms, and UVUX design. Established in 2016, the company is known for delivering scalable and user-centric digital solutions for both government and enterprise clients.`,
    },
    {
      id: 1,
      bgImage: "/images/bgImageTwo.jpg",
      images: ["/images/secondSlider1.jpg", "/images/secondSlider2.jpg"],
      heading: "Innovative Infrastructure Management Solutions",
      text: `At CMP Techsseract, we focus on creating impactful technology that addresses real-world challenges. Our key projects include the UTTAM-FDR Portal (Unified Technical Tracking and Augmentation Management System), developed for the Uttar Pradesh Rural Roads Development Agency (UPRRDA) to monitor and manage Full Depth Reclamation (FDR) road restoration works through real-time tracking, geo-tagging, and automated reporting.`,
    },
    {
      id: 2,
      bgImage: "/images/bgImageOne.jpg",
      images: [
        "/images/firstSlider1.jpg",
        "/images/young-person-intership.jpg",
      ],
      heading: "Digital Solutions for Social Welfare and Public Services",
      text: `We have also developed the Hot Cooked Meals (HCM) module under the ICDS scheme to track daily nutrition delivery at Anganwadi Centres; the AWW Recruitment Portal, an online platform for applying to Anganwadi Worker positions; and the UPNOMS Portal (Uttar Pradesh Notary Management System), a digital platform that streamlines notary application and approval processes. With a commitment to innovation, transparency, and service excellence, we continue to deliver secure, end-to-end technology solutions-driving progress across diverse sectors.`,
    },
  ];

  const activeSlide = slides[activeIndex];

  return (
    <div
      id="heroSection"
      className="mt-16 md:mt-20 relative w-full scroll-mt-24"
    >
      <div className="hidden lg:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center space-y-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setActiveIndex(index)}
            className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center cursor-pointer"
          >
            <div
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-blue-500" : "bg-transparent"
              }`}
            ></div>
          </button>
        ))}
      </div>

      <div
        className="bg-cover bg-center min-h-[80vh] lg:h-screen transition-opacity duration-700 flex flex-col justify-between"
        style={{ backgroundImage: `url(${activeSlide.bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10">
          <img
            src="images/icons/hero_bg_shape2_1.jpg"
            alt="bg-shape"
            className="h-12 sm:h-16 md:h-20 w-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-8 lg:px-16 xl:px-32 z-10 relative">
          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-orange-500 text-sm md:text-lg font-semibold uppercase">
              About Our Company
            </h2>
            <h1 className="text-blue-500 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              {activeSlide.heading}
            </h1>
            <p className="text-white text-xs sm:text-sm md:text-md">
              {activeSlide.text}
            </p>
            <div className="pt-2">
              <a href="#ContactUs">
                <Button btnText={"Contact Us"} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
            <img
              src={activeSlide.images[0]}
              alt="main"
              className="w-36 h-36 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full object-cover shadow-lg border-4 border-white relative bottom-0 md:right-0 right-6 lg:right-30 lg:top-0"
            />
            <img
              src={activeSlide.images[1]}
              alt="secondary"
              className="w-22 h-22 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-60 xl:h-60 rounded-full object-cover shadow-xl border-4 border-white absolute -top-10 sm:right-40 right-22 -md:top-[80px] md:right-60 lg:-right-5 lg:-top-20"
            />
          </div>
        </div>

        <div className="relative z-10">
          <img
            src="images/icons/hero_bg_shape2_2.jpg"
            alt="bg-shape"
            className="h-12 sm:h-16 md:h-20 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
