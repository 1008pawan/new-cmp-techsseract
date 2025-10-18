"use client";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Address",
    title: "Vishal Khand 3, Lucknow",
    image: "images/ContactUs/contact-info-1.jpg",
    quote: "Vishal Khand 3, Lucknow, Uttar Pradesh 226010",
  },
  {
    name: "Call Now",
    title: "(+91)-9151010021",
    image: "images/ContactUs/contact-info-3.jpg",
    quote:
      'Contact us for immediate assistance <a href="tel:+919151010021" style="font-weight:600; color: #1E90FF;">(+91)-9151010021</a>',
  },
  {
    name: "Email Us",
    title: "contact@techsseract.com",
    image: "images/ContactUs/call-us.jpg",
    quote: 'For any Queries, Email us at <a href="mailto:contact@techsseract.com" style="font-weight:600; color: #1E90FF;">contact@techsseract.com</a>',
  },
];

const ContactUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="ContactUs" className="relative mt-50">
      <div className="h-70 w-[80%] mx-auto bg-zinc-500 absolute -top-40 lg:left-33 md:left-20 left-8 shadow-sm shadow-white">
        <img
          src={testimonials[activeIndex].image}
          alt={testimonials[activeIndex].name}
          className="w-full h-full mx-auto"
        />
      </div>
      <div
        className="h-[100vh] w-full"
        style={{ backgroundImage: `url("images/ContactUs/contactUs.png")` }}
      >
        <div className="flex justify-center items-center gap-2 lg:pt-33 md:pt-60 pt-33">
          <span className="text-orange-600">
            <svg
              width="20"
              height="8"
              viewBox="0 0 20 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6719 6.85284C8.64069 6.9544 8.17585 0.548154 6.06257 4.62237C5.17194 6.50128 2.92585 7.53644 1.21882 5.94659C0.648507 5.40753 -0.00774341 4.58722 6.90872e-05 3.763C-0.00774341 2.83722 1.3321 2.47394 1.81648 3.24737C2.06257 3.65753 2.32429 4.11456 2.66804 4.42315C4.17976 5.68097 4.36335 1.13019 7.33601 1.14972C8.54694 1.10675 9.72663 2.15362 10.3126 3.13409C10.5548 3.38409 11.3985 5.0755 11.836 4.69269C12.336 4.22394 12.7423 3.61456 13.1524 3.04815C14.0704 1.84112 15.8751 1.71612 16.9454 2.78253C17.1993 3.02862 17.3907 3.31378 17.6055 3.5794C17.6837 3.67315 17.8204 3.68487 17.9141 3.61065C17.9337 3.59503 17.9493 3.5755 17.961 3.55597C18.3048 3.00519 18.7657 2.61847 19.4727 2.98175C20.8282 3.86065 19.2813 5.74737 18.1212 5.91534C17.2579 6.03253 16.5391 5.64581 15.9454 4.87628C15.7462 4.63409 15.5977 4.22784 15.2774 4.16925C14.5274 3.86847 13.9376 6.8294 11.6719 6.85284Z"
                fill="#F84923"
              />
            </svg>
          </span>
          <h3 className="text-orange-600 font-semibold text-lg sm:text-xl uppercase">
            Contact Us
          </h3>
          <span className="text-orange-600">
            <svg
              width="20"
              height="8"
              viewBox="0 0 20 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6719 6.85284C8.64069 6.9544 8.17585 0.548154 6.06257 4.62237C5.17194 6.50128 2.92585 7.53644 1.21882 5.94659C0.648507 5.40753 -0.00774341 4.58722 6.90872e-05 3.763C-0.00774341 2.83722 1.3321 2.47394 1.81648 3.24737C2.06257 3.65753 2.32429 4.11456 2.66804 4.42315C4.17976 5.68097 4.36335 1.13019 7.33601 1.14972C8.54694 1.10675 9.72663 2.15362 10.3126 3.13409C10.5548 3.38409 11.3985 5.0755 11.836 4.69269C12.336 4.22394 12.7423 3.61456 13.1524 3.04815C14.0704 1.84112 15.8751 1.71612 16.9454 2.78253C17.1993 3.02862 17.3907 3.31378 17.6055 3.5794C17.6837 3.67315 17.8204 3.68487 17.9141 3.61065C17.9337 3.59503 17.9493 3.5755 17.961 3.55597C18.3048 3.00519 18.7657 2.61847 19.4727 2.98175C20.8282 3.86065 19.2813 5.74737 18.1212 5.91534C17.2579 6.03253 16.5391 5.64581 15.9454 4.87628C15.7462 4.63409 15.5977 4.22784 15.2774 4.16925C14.5274 3.86847 13.9376 6.8294 11.6719 6.85284Z"
                fill="#F84923"
              />
            </svg>
          </span>
        </div>
        <h1 className="md:text-5xl text-xl font-bold text-center lg:w-full md:w-[80%] w-full mx-auto lg:py-5 md:py-15 py-5 text-white">
          Don’t wait-reach out and let’s go!  
        </h1>
        <div className="text-white">
          <div className="relative text-ba px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="md:text-5xl text-2xl font-bold mb-6">
                {testimonials[activeIndex].name}
              </h2>
              <p
                className="md:text-lg text-sm italic mb-8"
                dangerouslySetInnerHTML={{
                  __html: testimonials[activeIndex].quote,
                }}
              ></p>

              <div className="flex justify-center items-center gap-4 mb-6">
                {testimonials.map((client, index) => (
                  <img
                    key={index}
                    src={client.image}
                    alt={client.name}
                    className={`md:w-25 w-15 md:h-25 h-15 rounded-full border-2 hover:scale-110 ${
                      index === activeIndex
                        ? "border-orange-500 scale-110"
                        : "border-gray-500 opacity-60"
                    } transition-all duration-300 cursor-pointer`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-sm text-blue-500 lg:pt-0 md:pt-5 pt-0">
                  {testimonials[activeIndex].title}
                </p>
              </div>
              <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === activeIndex ? "bg-orange-500" : "bg-gray-500"
                    } cursor-pointer`}
                    onClick={() => setActiveIndex(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
