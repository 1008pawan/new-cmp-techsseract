"use client";
import React, { useEffect, useState } from "react";
const SecondHeroSection = () => {
  const [showSingaporeBranch, setShowSingaporeBranch] = useState(false);
  const [showIndianBranch, setShowIndianBranch] = useState(false);
  const [count, setCount] = useState(0);
  const [isClosingIndian, setIsClosingIndian] = useState(false);

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

  const handleCloseIndian = () => {
    setIsClosingIndian(true);

    setTimeout(() => {
      setShowIndianBranch(false);
      setIsClosingIndian(false);
    }, 600);
  };

  return (
    <div
      id="AboutUs"
      className="pt-10 relative min-h-[100vh] sm:min-h-[110vh] md:min-h-[120vh] lg:min-h-[130vh] overflow-hidden"
    >
      {/* new design */}
      {!showSingaporeBranch && !showIndianBranch && (
        <div>
          {/* company overview */}
          <div className="flex justify-center items-center gap-2 overflow-hidden">
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
            <h3 className="text-orange-600 font-semibold text-sm sm:text-xl uppercase">
              COMPANY OVERVIEW
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
          <h1 className="text-center mt-5 mb-10 md:text-5xl text-3xl font-bold">
            Discover the Story Behind Our Success
          </h1>
          <div className="lg:flex flex-1 justify-between items-start w-[98%] mx-auto h-[100%] ">
            {/* left side button */}
            <div className="md:mb-0 mb-5">
              <div className="flex justify-center items-center gap-3">
                <img
                  src="/images/footer/singapore-logo.png"
                  alt="Singapore logo"
                  className="h-18 mb-5 mt-4"
                />
                <div
                  onClick={() => {
                    setShowSingaporeBranch(true);
                    setShowIndianBranch(false);
                  }}
                >
                  <img
                    src="images/icons/right-arrow.png"
                    alt="Arrow image"
                    className="h-20 cursor-pointer animate-pulse transform transition-transform duration-300 ease-in-out hover:translate-x-2"
                  />
                </div>
              </div>
              <div className="hidden h-[70%] lg:block vertical-text animate-verticalMove text-white text-outline text-5xl lg:text-7xl rotate-180 text-center font-bold ml-10">
                Since 2016
              </div>
            </div>

            {/* main section */}
            <div className="lg:h-170 md:h-140 h-130">
              <div className="relative flex-1 z-20">
                <div className="absolute z-20 h-32 w-24 md:h-40 md:w-32 lg:h-40 lg:w-32 bg-[url('/images/second/secondBgImage.jpg')] bg-cover bg-center lg:left-0 md:left-40 left-200px top-0 border-b-8 md:border-l-8 border-r-8 text-center flex flex-col justify-center text-white">
                  <div className="flex justify-center">
                    <h1 className="font-bold text-3xl sm:text-5xl">{count}</h1>
                    <span className="text-2xl">+</span>
                  </div>
                  <p className="text-xs sm:text-base font-semibold">
                    Projects Delivered
                  </p>
                </div>

                <div className="relative group overflow-hidden shadow-lg lg:w-120 w-100 mx-auto lg:h-150 h-130">
                  <img
                    src="/images/second/about_2_1.png"
                    alt="About one"
                    className="transition-transform duration-500 group-hover:scale-105 lg:w-120 md:w-110 w-100 lg:h-150 md:h-140 h-130"
                  />
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="shine"></div>
                  </div>
                </div>

                <div className="absolute md:-bottom-20 -bottom-10 lg:-right-35 md:right-20 -right-10 lg:w-55 md:w-45 w-35 sm:w-1/2 ">
                  <img
                    src="/images/second/about_2_2.png"
                    alt="About Two"
                    className="border-4 border-white"
                  />
                </div>
              </div>

              <div className="hidden absolute sm:block animate-verticalMove lg:relative -right-95 -top-140 z-10">
                <img
                  src="/images/second/about_shape2_1.png"
                  alt="rounds Shape"
                />
              </div>
            </div>

            {/* right side button */}
            <div className="flex-col justify-center items-center md:ml-30 sm:mt-0 mt-10">
              <div className="hidden h-[70%] lg:block vertical-text animate-verticalMove text-white text-outline text-5xl lg:text-7xl rotate-360 font-bold text-center ml-10">
                Since 2016
              </div>
              <div className="flex justify-center items-center gap-3">
                <div
                  onClick={() => {
                    setShowIndianBranch(true);
                    setShowSingaporeBranch(false);
                  }}
                >
                  <img
                    src="images/icons/right-arrow.png"
                    alt="Arrow image"
                    className="h-20 rotate-180 cursor-pointer animate-pulse transform transition-transform duration-100 ease-out-in hover:-translate-x-2"
                  />
                </div>
                <img
                  src="/images/logo.png"
                  alt="india logo"
                  className="h-16 mb-5 mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animated Singapore Branch section */}
      <section
        className={`h-[100%] overflow-hidden transition-all duration-500 ease-out ${
          showSingaporeBranch ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="px-6 bg-primary/5">
          <div>
            <div
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out ${
                showSingaporeBranch
                  ? "opacity-100 z-30 translate-x-0"
                  : "-translate-x-full opacity-0 pointer-events-none"
              }`}
            >
              <div className="py-10 px-6 grid lg:grid-cols-5 grid-cols-1 lg:gap-20 gap-4">
                {/* company overview */}

                <div className="lg:col-span-2 space-y-4">
                  <div className="flex justify-center items-center gap-2 overflow-hidden">
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
                    <h3 className="text-orange-600 font-semibold text-sm sm:text-xl uppercase">
                      Singapore COMPANY OVERVIEW
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
                    <span className="text-blue-500 font-bold">
                      CMP Solutions (Singapore) Pte. Ltd.{" "}
                    </span>
                    is a technology and consulting firm specializing in digital
                    transformation, e-governance solutions, and enterprise IT
                    services. Established as an international arm of CMP
                    Techsseract LLP (India), the company brings deep expertise
                    in government sector projects, smart infrastructure,
                    disaster management systems, and AI-driven platforms, now
                    tailored to the needs of Singapore and the broader ASEAN
                    region.
                  </p>

                  <p className="text-zinc-500 text-sm sm:text-base">
                    Our mission is to bridge innovation and governance, enabling
                    organizations to deliver smarter, faster, and more secure
                    services through scalable technology solutions.
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

                  <div className="flex justify-between items-center gap-4">
                    <div className="flex justify-center items-center gap-3">
                      <div
                        onClick={() => {
                          setShowIndianBranch(true);
                          setShowSingaporeBranch(false);
                        }}
                      >
                        <img
                          src="images/icons/right-arrow.png"
                          alt="Arrow image"
                          className="sm:h-15 h-10 rotate-180 cursor-pointer animate-pulse transform transition-transform duration-100 ease-out-in hover:-translate-x-2"
                        />
                      </div>
                      <img
                        src="/images/logo.png"
                        alt="Singapore logo"
                        className="sm:h-15 h-10 mb-5 mt-4"
                      />
                    </div>
                    <a href="/singaporeOverview">
                      <button className="group cursor-pointer relative inline-flex sm:h-12 h-10 items-center justify-center rounded-md bg-blue-500 sm:px-6 px-2 sm:text-base text-sm font-medium text-neutral-200 overflow-hidden">
                        <span>Read More</span>
                        <div className="relative ml-2 h-5 w-5 overflow-hidden">
                          <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                            <svg
                              className="h-5 w-5"
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="currentColor"
                            >
                              <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" />
                            </svg>

                            <svg
                              className="h-5 w-5 -translate-x-4"
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="currentColor"
                            >
                              <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </a>
                  </div>
                </div>

                <div className="md:flex hidden flex-col lg:flex-row gap-6 lg:col-span-3">
                  <div className="z-20 relative flex-1">
                    <div className="absolute z-10 h-32 w-24 sm:h-40 sm:w-32 bg-[url('/images/second/secondBgImage.jpg')] bg-cover bg-center lg:left-0 left-200px top-0 border-b-8 md:border-l-8 border-r-8 text-center flex flex-col justify-center text-white">
                      <div className="flex justify-center">
                        <h1 className="font-bold text-3xl sm:text-5xl">
                          {count}
                        </h1>
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

                  <div className="hidden absolute sm:block animate-verticalMove lg:relative lg:-left-30 left-155 lg:top-5 top-15">
                    <img
                      src="/images/second/about_shape2_1.png"
                      alt="rounds Shape"
                    />
                  </div>

                  <div className="hidden lg:block vertical-text animate-verticalMove text-white text-outline text-5xl lg:text-7xl rotate-360 text-center font-bold">
                    Since 2016
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated India Branch section */}
      <section
        className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out
    ${
      showIndianBranch && !isClosingIndian
        ? "opacity-100 z-30 translate-x-0"
        : showIndianBranch && isClosingIndian
        ? "opacity-0 translate-x-full z-30"
        : "opacity-0 pointer-events-none translate-x-full"
    }`}
      >
        <div className="sm:px-6 px-0 bg-primary/5">
          <div>
            <div
              className={`overflow-hidden transform transition-all duration-700 ease-out ${
                showIndianBranch
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="py-10 px-6 grid lg:grid-cols-5 grid-cols-1 gap-20">
                <div className="md:flex hidden flex-col lg:flex-row gap-6 lg:col-span-3">
                  <div className="hidden lg:block vertical-text animate-verticalMove text-white text-outline text-5xl lg:text-7xl rotate-180 text-center font-bold">
                    Since 2016
                  </div>

                  <div className="z-20 relative flex-1 ">
                    <div className="absolute z-10 h-32 w-24 sm:h-40 sm:w-32 bg-[url('/images/second/secondBgImage.jpg')] bg-cover bg-center lg:left-0 left-200px top-0 border-b-8 md:border-l-8 border-r-8 text-center flex flex-col justify-center text-white">
                      <div className="flex justify-center">
                        <h1 className="font-bold text-3xl sm:text-5xl">
                          {count}
                        </h1>
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

                  <div className="hidden absolute sm:block animate-verticalMove lg:relative lg:-left-30 left-155 lg:top-5 top-15">
                    <img
                      src="/images/second/about_shape2_1.png"
                      alt="rounds Shape"
                    />
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-5">
                  <div className="flex justify-center items-center gap-2 overflow-hidden">
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
                    <h3 className="text-orange-600 font-semibold text-sm sm:text-xl uppercase">
                      indian branch OVERVIEW
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
                    <span className="text-blue-500 font-bold">
                      CMP Techsseract LLP
                    </span>
                    , where innovation meets excellence. Established with a
                    vision to revolutionize the tech industry, CMP Techsseract
                    is a dynamic and forward-thinking technology solutions
                    provider.
                  </p>

                  <p className="text-zinc-500 text-sm sm:text-base">
                    <span className="text-blue-500 font-bold">
                      CMP Techsseract LLP
                    </span>
                    is a collective of passionate technologists, skilled
                    engineers, and creative problem solvers. Our mission is to
                    empower clients through innovative technology solutions that
                    enhance efficiency, boost productivity, and drive success.
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

                  <div className="flex justify-between items-center sm:gap-3 gap-1.5">
                    <button
                      onClick={handleCloseIndian}
                      className="group relative inline-flex sm:h-12 h-9 items-center justify-center rounded-md bg-blue-500 sm:px-6 px-4 sm:text-base text-xs font-medium text-neutral-200 overflow-hidden"
                    >
                      <span>Back</span>
                      <div className="relative sm:ml-2 ml-0 sm:h-5 h-4 sm:w-5 w-4 overflow-hidden">
                        <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                          <svg
                            className="h-5 w-5"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="currentColor"
                          >
                            <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" />
                          </svg>

                          <svg
                            className="h-5 w-5 -translate-x-4"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="currentColor"
                          >
                            <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    <div className="flex justify-center items-center gap-2">
                      <img
                        src="/images/footer/singapore-logo.png"
                        alt="Singapore logo"
                        className="sm:h-17 h-12 mb-5 mt-4"
                      />
                      <div
                        onClick={() => {
                          setShowSingaporeBranch(true);
                          setShowIndianBranch(false);
                        }}
                      >
                        <img
                          src="images/icons/right-arrow.png"
                          alt="Arrow image"
                          className="sm:h-17 h-12 cursor-pointer animate-pulse transform transition-transform duration-300 ease-in-out hover:translate-x-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondHeroSection;
