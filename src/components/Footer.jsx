"use client";
import React, { useState } from "react";
import Button from "./Button";
import SmartHomeLink from "./SmartHomeLink";

const Gallery = [
  {
    image: (
      <img
        src="images/footer/service-img-1.jpg"
        alt="Gallery 1"
        className="w-full h-full object-cover rounded cursor-pointer"
      />
    ),
  },
  {
    image: (
      <img
        src="images/footer/service-img-2.jpg"
        alt="Gallery 2"
        className="w-full h-full object-cover rounded cursor-pointer"
      />
    ),
  },
  {
    image: (
      <img
        src="images/footer/service-img-3.jpg"
        alt="Gallery 3"
        className="w-full h-full object-cover rounded cursor-pointer"
      />
    ),
  },
  {
    image: (
      <img
        src="images/footer/service-img-4.jpg"
        alt="Gallery 4"
        className="w-full h-full object-cover rounded cursor-pointer"
      />
    ),
  },
  {
    image: (
      <img
        src="images/footer/service-img-5.jpg"
        alt="Gallery 5"
        className="w-full h-full object-cover rounded cursor-pointer"
      />
    ),
  },
  {
    image: (
      <img
        src="images/footer/service-img-6.jpg"
        alt="Gallery 6"
        className="w-full h-full object-cover rounded cursor-pointer"
      />
    ),
  },
];

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <footer className=" text-white">
      <div className="bg-black grid grid-cols-1 md:grid-cols-6 gap-8 border-t border-white p-5">
        {/* Company Intro */}
        <div>
          <div className="h-14">
            <a href="https://techsseract.com/" className="flex gap-2">
              <img src="images/logo.png" alt="Logo" className="h-9" />
              <img src="images/footer/singapore-logo.png" alt="Logo" className="h-11" />
            </a>
          </div>
          <p className="text-xs font-semibold mb-2">CMP TECHSSERACT LLP</p>
          <p className="text-xs font-semibold mb-2">CMP SOLUTIONS (SINGAPORE) PTE. LTD</p>
          <p className="text-xs font-semibold mb-2 text-orange-500"><span className="text-blue-500">CREATE.</span> A NEW DIMENSION FOR YOUR BUSINESS.</p>
          <p className="text-xs font-semibold mb-2"><a href="#" className="hover:text-blue-500">www.techsseract.com</a></p>
          <div className="flex items-center gap-3">
            <img src="images/footer/india.png" alt="India image" className="w-8"/>
            <img src="images/footer/singapore.png" alt="" className="w-8"/>
          </div>
        </div>

        {/* Our Services */}
        {/* <div>
          <h3 className="text-xl font-bold mb-3">Our Services</h3>
          <ul className="space-y-2 text-md font-semibold">
            <li>
              <SmartHomeLink />
            </li>
            <li>
              <a href="#AboutUs" className="hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#OurServices" className="hover:text-blue-500">
                Our Services
              </a>
            </li>
            <li>
              <a href="#WhyChooseUs" className="hover:text-blue-500">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#OurWork" className="hover:text-blue-500">
                Our Work
              </a>
            </li>
            <li>
              <a href="#Gallery" className="hover:text-blue-500">
                Gallery
              </a>
            </li>
          </ul>
        </div> */}

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-3">Socials</h3>
          <ul className="space-y-2 text-md font-semibold">
            <li>
              <a
                href="https://in.linkedin.com/company/cmptechsseract"
                className="hover:text-blue-500"
              >
                linkedin
              </a>
            </li>
          </ul>
        </div>

        {/* services */}
        <div>
          <h3 className="text-xl font-bold mb-3">Services</h3>
          <ul className="space-y-2 text-md font-semibold">
            <li>
              <a href="/portfolio" className="hover:text-blue-500">
                Web Development
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-blue-500">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="/mobileApp" className="hover:text-blue-500">
                Mobile App Development
              </a>
            </li>
          </ul>
        </div>

        {/* Our Gallery */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Gallery</h3>
          <div className="grid grid-cols-2 gap-2">
            {Gallery.map((img, index) => (
              <div key={index} onClick={() => setSelectedImage(img.image)}>
                {img.image}
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div className="fixed inset-0 z-50 overflow-auto bg-black/80 flex justify-center items-center">
            <div className="relative md:w-[70%] w-[90%] md:h-140 h-[70%] overflow-y-auto rounded-2xl bg-black">
              <button
                onClick={() => {
                  setSelectedImage(null);
                }}
                className="absolute top-4 right-4 text-black cursor-pointer hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="w-full h-full flex justify-center items-center">
                {selectedImage}
              </div>
            </div>
          </div>
        )}

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm flex gap-2 font-semibold hover:text-blue-500">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
            </span>
            <a href="tel:+919151010021">+112 (789) 568 25</a>
          </p>
          <p className="text-sm flex gap-2 mt-3 font-semibold hover:text-blue-500">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-mail-opened"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
                <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                <path d="M3 19l6 -6" />
                <path d="M15 13l6 6" />
              </svg>
            </span>
            <a href="mailto:contact@techsseract.com">contact@techsseract.com</a>
          </p>
          <div
            className="mt-4"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <Button btnText={"View On Map"} />
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 overflow-auto bg-black/80 flex justify-center items-center">
              <div className="relative md:w-[70%] w-[90%] md:h-140 h-[70%] overflow-y-auto rounded-2xl bg-black">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                  className="absolute top-4 right-4 text-white cursor-pointer hover:text-orange-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="w-full h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3559.787750358177!2d80.98947667543716!3d26.846702376686622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTknMzEuNCJF!5e0!3m2!1sen!2sin!4v1759929072259!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* QR */}
        <div>
          <img src="images/footer/techsseract-QR.png" alt="" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-blue-600 flex flex-col md:flex-row justify-between items-center p-6 text-sm text-white">
        <p>
          Copyright © 2024 | Developed by{" "}
          <a href="https://techsseract.com/" className="font-semibold">
            CMP Techsseract LLP
          </a>
        </p>
        <div className="space-x-4">
          <a href="/PrivacyPolicy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms&condition" className="hover:text-white">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
