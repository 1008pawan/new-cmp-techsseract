import React from "react";

const WhyChosseUs = () => {
  const whyChooseCard = [
    {
      num: "01",
      title: "Innovation",
      para: "Driving transformative change with ideas and cutting-edge technology.",
      svg: "images/icons/icon-whyus-1.svg",
    },
    {
      num: "02",
      title: "Quality-Focused",
      para: "Delivering excellence through attention to detail and commitment to superior standards.",
      svg: "images/icons/icon-whyus-2.svg",
    },
    {
      num: "03",
      title: "Value For Money",
      para: "Offering exceptional solutions that maximize benefits while optimizing costs.",
      svg: "images/icons/icon-whyus-3.svg",
    },
  ];

  return (
    <div id="WhyChooseUs" className="py-10 scroll-mt-24">
      <div className="flex justify-center items-center gap-2">
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
          Why Choose Us
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
      <h1 className="md:text-5xl text-xl font-bold text-center px-5 py-5">Where expertise meets excellence</h1>
      <div className="w-[90%] mx-auto mx- px-5 py-10 gap-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center">
        {whyChooseCard.map((items, index) => (
          <div key={index} className="h-60 md:w-70 w-full group relative">
            <div className="border border-orange-500 h-60 md:w-70 w-full group-hover:border-blue-500">
              <div className="h-10 w-10 bg-orange-500 relative left-8 -top-10 z-10 group-hover:bg-blue-500 text-white flex justify-center items-center font-bold text-2xl">
                {items.num}
              </div>
              <div className="h-10 w-8 bg-orange-500 absolute left-12 -top-9 -rotate-13 group-hover:bg-blue-500 text-white flex justify-center items-center font-bold text-2xl"></div>
              <div className="bg-zinc-200 h-60 md:w-70 w-full relative left-6 bottom-15 p-3 flex flex-col justify-center items-center">
                <div className="pb-5">
                  <img
                    src={items.svg}
                    alt="first icon"
                    className="h-13 w-13 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-3xl text-zinc-700 font-semibold">
                  {items.title}
                </h3>
                <p className="text-zinc-600 text-center">{items.para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChosseUs;
