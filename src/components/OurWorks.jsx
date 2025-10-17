"use client";
import React from "react";
import Button from "./Button";

const bgImage = [
  {
    img: "/images/portfolios/uttam-fdr.png",
    heading: "UTTAM-FDR",
    para: `The UTTAM-FDR Portal offers a comprehensive solution for managing every aspect of Full Depth Reclamation (FDR) road projects...`,
  },
  {
    img: "/images/portfolios/info-suite.png",
    heading: "INFO SUITE",
    para: `The Hoarding Management System (HMS) provides a geo-tagged inventory of advertising sites with photo verification, enabling online permit applications, billing approvals ...`,
  },
  {
    img: "/images/portfolios/rahat.png",
    heading: "RAHAT",
    para: `RAHAT is an integrated Relief and Disaster Management Suite designed to streamline compensation, relief logistics, and flood risk response through transparent, data-driven coordination across departments...`,
  },
  {
    img: "/images/portfolio/mac-hcm.jpg",
    heading: "UPHCM UTTAR PRADESH Hot Cooked Meal Portal",
    para: "This portal was developed for ICDS Hot Cooked Meal scheme and helps in managing different aspects related to food being served to younger children.",
  },
  {
    img: "/images/portfolio/mac-kumbh.png",
    heading: "Mahakumbh 2025 Land & Suvidha Allotment",
    para: "The Mahakumbh 2025 Land & Suvidha Allotment portal provides a comprehensive platform for managing the allocation of land and suvidha required for the event",
  },
  {
    img: "images/portfolios/mac-aww.jpg",
    heading: "Aww Recruitment Portal 2024",
    para: "This portal was developed to help for the recruitment of positions under Anganwadi Bharti Scheme 2024.",
  },
];

const OurWorks = () => {
  return (
    <div
      id="OurWork"
      className="px-4 sm:px-6 lg:px-10 w-full max-w-7xl mx-auto scroll-mt-24"
    >
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 pb-8">
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-2">
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
              Our Works
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
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold mt-2">
            Excellence from concept to completion
          </h1>
        </div>
        <div className="flex justify-center md:justify-end">
          <a href="/portfolio">
            <Button btnText={"Portfolio"} />
          </a>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {bgImage.map((bg, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url("${bg.img}")` }}
            className="bg-cover bg-center h-64 sm:h-72 md:h-80 rounded-lg shadow-lg group relative overflow-hidden hover:scale-105 transition-all inset-shadow-sm/20"
          >
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-lg flex justify-center items-center">
              <div className="border border-zinc-300 h-[80%] w-[85%] sm:w-[80%] rounded-lg flex flex-col justify-center items-center transition-transform duration-500 group-hover:scale-105 px-4 text-center">
                <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mb-3">
                  {bg.heading}
                </h1>
                <p className="hidden sm:block text-sm text-zinc-300">
                  {bg.para}
                </p>
                <a href="/portfolio">
                  <button className="mt-4 bg-blue-500 h-10 w-10 rounded-full text-zinc-300 flex justify-center items-center hover:scale-110 transition-transform cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12h14" />
                      <path d="M13 18l6 -6" />
                      <path d="M13 6l6 6" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
