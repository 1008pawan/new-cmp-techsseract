"use client";

import React, { useState } from "react";
import Button from "./Button";

const Navebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navContent = [
    { lable: "Home", link: "/" },
    { lable: "About Us", link: "#AboutUs" },
    { lable: "Our Services", link: "#OurServices" },
    { lable: "Our Works", link: "#OurWork" },
    { lable: "Why Choose Us", link: "#WhyChooseUs" },
    { lable: "Gallery", link: "#Gallery" },
  ];
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 fixed w-full bg-white/95 backdrop-blur-lg shadow-md z-50 top-0">
      <nav>
        {/* disktop view */}
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div>
            <a href="/">
              <img src="/images/logo.png" alt="Logo" className="h-12" />
            </a>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-10 border border-b-3 border-blue-500 py-3 px-6 rounded-full">
              {navContent.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="relative text-black inline-block pb-1 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.lable}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <a href="#ContactUs">
              <Button btnText={"Contact Us"} />
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-zinc-700 hover:text-blue-500 focus:outline-none cursor-pointer"
            >
              {!isMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* mobile view */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg border-t border-zinc-200">
            <ul className="flex flex-col items-center gap-4 py-4 font-medium">
              {navContent.map((item, index) => (
                <li key={index} onClick={handleLinkClick} className="w-full text-center text-black">
                  <a
                    href={item.link}
                    className="block py-2 px-4 hover:text-blue-500 hover:bg-zinc-100 rounded-md"
                  >
                    {item.lable}
                  </a>
                </li>
              ))}
              <li className="w-full text-center" onClick={handleLinkClick}>
                <a
                  href="#ContactUs"
                  className="block text-white bg-blue-500 hover:border-blue-500 hover:bg-white hover:text-blue-500 px-4 py-2 rounded-full border transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navebar;
