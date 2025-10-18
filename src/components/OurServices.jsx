import React from "react";

const OurServices = () => {
  const cardItems = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-adobe-indesign text-blue-500"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12c0-4.243 0-6.364 1.318-7.682s3.44-1.318 7.682-1.318s6.364 0 7.682 1.318s1.318 3.44 1.318 7.682s0 6.364-1.318 7.682s-3.44 1.318-7.682 1.318s-6.364 0-7.682-1.318s-1.318-3.44-1.318-7.682" />
          <path d="M14.842 11.053v3.79c0 1.044-.49.946-1.42.946a2.368 2.368 0 0 1 0-4.736zm0 0v-2.843" />
          <path d="M8.211 8.211v7.578" />
        </svg>
      ),
      heading: "Web Design",
      para: "Crafting dynamic, user-centric websites that blend functionality with aesthetic appeal to drive engagement and growth.",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag text-blue-500"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1-2.966 2.544h-6.852a3 3 0 0 1-2.965-2.544l-1.255-8.152a2 2 0 0 1 1.977-2.304z" />
          <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
        </svg>
      ),
      heading: "Ecommerce",
      para: "Creating seamless, secure online shopping experiences that drive sales and enhance customer satisfaction.",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-nextjs text-blue-500"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255-1.993" />
          <path d="M15 12v-3" />
        </svg>
      ),
      heading: "Web Applications",
      para: "Developing robust, scalable web applications that streamline operations and deliver exceptional user experiences.",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-wordpress text-blue-500"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9.5 9h3" />
          <path d="M4 9h2.5" />
          <path d="M11 9l3 11l4 -9" />
          <path d="M5.5 9l3.5 11l3 -7" />
          <path d="M18 11c.177-.528 1-1.364 1-2.5c0-1.78-.776-2.5-1.875-2.5c-.898 0-1.125.812-1.125 1.429c0 1.83 2 2.058 2 3.571z" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
        </svg>
      ),
      heading: "WordPress Solutions",
      para: "Delivering custom WordPress solutions that combine flexibility, scalability, and ease of use to enhance your online presence.",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-copyright text-blue-500"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
          <path d="M14 9.75a3.016 3.016 0 0 0-4.163.173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163.173" />
        </svg>
      ),
      heading: "Copy Writing",
      para: "Crafting impactful, strategic content that tells your brand's story and resonates with your target audience.",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-apps text-blue-500"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" />
          <path d="M4 14m0 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" />
          <path d="M14 14m0 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" />
          <path d="M14 7l6 0" />
          <path d="M17 4l0 6" />
        </svg>
      ),
      heading: "Mobile Applications",
      para: "Transforming ideas into intuitive mobile experiences that delight users and drive business growth.",
    },
  ];

  return (
    <div id="OurServices" className="py-10 scroll-mt-24">
      <div className="flex justify-center items-center gap-2">
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
        <h3 className="text-orange-600 font-semibold text-xl sm:text-2xl uppercase">
          Our Services
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
      <h1 className="md:text-5xl text-xl font-bold text-center pb-8">
        What we can offer today
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-6/7 mx-auto">
        {cardItems.map((card, index) => (
          <div
            key={index}
            className="p-5 border border-zinc-300 w-full h-70 overflow-hidden group hover:shadow-xl hover:inset-shadow-sm/20"
          >
            <div className="flex justify-center items-center gap-8 border-b border-zinc-300">
              <div className="py-5 group-hover:rotate-y-180 group-hover:scale-110">
                {card.svg}
              </div>
              <div className="text-3xl font-bold">{card.heading}</div>
            </div>
            <div className="pt-5 relative ">
              <p>{card.para}</p>
              <button className="group relative inline-flex h-12 items-center justify-center rounded-md px-6 font-medium text-black cursor-pointer pb-1 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                <span>Hover me</span>
                <div className="relative ml-1 h-5 w-5 overflow-hidden">
                  <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 -translate-x-4"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
              <div className="flex justify-end absolute -right-5 -bottom-8">
                <img
                  src="images/icons/service_card_bg_2.jpg"
                  alt=""
                  className="opacity-50 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
