import React from "react";

const bgImage = [
  {
    img: "/images/portfolio/mac-uprrda.jpg",
    heading: "UPRRDA Website",
    para: "This website was developed using Wordpress for UPRRDA (Uttar Pradesh Rural Road Development Agency).",
  },
  {
    img: "/images/portfolio/mac-upfdr.jpg",
    heading: "UTTAM-FDR",
    para: "This Project is developed as Website aswell as Mobile App aswell. it provides the means to manage and track the Quality Tests at the road sites and provide the functionality to the contractor of the site to raise their bill, which can be tracked and approved by other stakeholders.",
  },
  {
    img: "/images/portfolio/mac-upnoms.jpg",
    heading: "UPNOMS Project",
    para: "The notary management system is to handle the problems related to time for finding documents, records of customer, and matching documents or other related photos.",
  },
  {
    img: "/images/portfolio/mac-dms.png",
    heading: "UPDESCO DMS",
    para: "This portal was developed to help Updesco manage and organize documents efficiently.",
  },
  {
    img: "/images/portfolio/mac-hcm.jpg",
    heading: "Hot Cooked Meal Portal",
    para: "This portal was developed for ICDS Hot Cooked Meal scheme and helps in managing different aspects related to food being served to younger children.",
  },
  {
    img: "/images/portfolio/mac-kumbh.png",
    heading: "Mahakumbh 2025 Land & Suvidha Allotment",
    para: "The Mahakumbh 2025 Land & Suvidha Allotment portal provides a comprehensive platform for managing the allocation of land and suvidha required for the event",
  },
  {
    img: "images/portfolios/mac-dms.png",
    heading: "UPDESCO PMS",
    para: "This portal was developed to help Updesco manage and organize Projects under it in an easy and efficient manner.",
  },
  {
    img: "images/portfolios/mac-aec.jpg",
    heading: "UPDESCO AEC",
    para: "This portal was developed to help Updesco manage and organize working of all Institutes under it in an easy and efficient manner.",
  },
  {
    img: "images/portfolios/mac-aww.jpg",
    heading: "Aww Recruitment Portal 2024",
    para: "This portal was developed to help for the recruitment of positions under Anganwadi Bharti Scheme 2024.",
  },
  {
    img: "images/portfolios/mac-flat.jpg",
    heading: "FLAT/RENT MANAGEMENT",
    para: "This software is helpful for keeping the record of customers who are buying new flats and the payment record as well. Not only this, the project rent management is done properly through this software.",
  },
  {
    img: "images/portfolios/default.png",
    heading: "IGSTAMP PMU",
    para: "IGSTAMP PMU is responsible for detailed planning of development projects, which includes defining clear objectives, and creating timelines along with resource allocation strategies.",
  },
  {
    img: "images/portfolios/default.png",
    heading: "UPDEMP PMU",
    para: "UPDEMP PMU is responsible for detailed planning of development projects, which includes assessing community needs, defining clear objectives, and creating timelines along with resource allocation strategies.",
  },
  {
    img: "images/portfolios/mac-updemp.jpg",
    heading: "UPDEMP",
    para: "This is a project of UPDESCO in which vendors will register themselves. Through UPDEMP we can Add Vendor, Recommend by inspection team, category wise adding and approving vendors. It helps in keeping the record of vendors across UP",
  },
];

const Portfolio = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center md:h-[100vh] h-[60vh] w-full transition-opacity duration-700 flex flex-col justify-between relative"
        style={{
          backgroundImage: `url("images/portfolios/portfolioHero.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10">
          <img
            src="images/icons/hero_bg_shape2_1.jpg"
            alt="bg-shape"
            className="h-15 sm:h-16 md:h-25 w-auto"
          />
        </div>

        <div className="flex flex-col justify-center items-center z-20 h-[80vh]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Portfolio
          </h1>
          <ul className="flex gap-2 mt-4 font-semibold text-white">
            <li>
              <a href="/" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>{`>`}</li>
            <li className="text-blue-500">Portfolio</li>
          </ul>
        </div>

        <div className="relative z-10">
          <img
            src="images/icons/hero_bg_shape2_2.jpg"
            alt="bg-shape"
            className="h-15 sm:h-16 md:h-25 w-auto"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:py-20 py-10 md:w-6/7 w-[90%]  mx-auto">
        {bgImage.map((bg, index) => (
          <div
            key={index}
            className="md:h-150 h-120 rounded-lg shadow-xl inset-shadow-sm/30 overflow-hidden flex flex-col justify-between"
          >
            <div className="bg-cover bg-center md:h-75 h-55 w-full p-5 rounded-lg">
              <img
                src={`${bg.img}`}
                alt="Portfolio-Images"
                className="bg-cover bg-center h-50 w-full md:h-75 rounded-lg hover:scale-110 transition-all"
              />
            </div>
            <div className="rounded-lg flex justify-center items-center md:mt-10">
              <div className="rounded-lg flex flex-col justify-center items-center px-4 text-center">
                <h1 className="text-lg sm:text-xl md:text-2xl text-zinc-700 font-semibold mb-3">
                  {bg.heading}
                </h1>
                <p className="text-sm text-zinc-500 px-5">{bg.para}</p>
              </div>
            </div>
            <div className="flex items-end">
              <img
                src="images/icons/service_card_bg_1.jpg"
                alt="icon"
                className="rotate-180"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
