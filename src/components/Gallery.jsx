"use client";
import React, { useState } from "react";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const Gallerys = [
    {
      item: (
        <img
          src="images/gallery/IMG_8215.jpg"
          alt=""
          className="h-70 md:w-70 w-full bg-cover bg-center"
        />
      ),
    },
    {
      item: (
        <img
          src="images/gallery/maxresdefault.jpg"
          alt=""
          className="h-70 md:w-70 w-full bg-cover bg-center"
        />
      ),
    },
    {
      item: (
        <img
          src="images/gallery/maxresdefault (1).jpg"
          alt=""
          className="h-70 md:w-70 w-full bg-cover bg-center"
        />
      ),
    },
    {
      item: (
        <img
          src="images/gallery/maxresdefault (2).jpg"
          alt=""
          className="h-70 md:w-70 w-full bg-cover bg-center"
        />
      ),
    },
    {
      item: (
        <img
          src="images/gallery/hqdefault.jpg"
          alt=""
          className="h-70 md:w-70 w-full bg-cover bg-center"
        />
      ),
    },
  ];

  const Video = [
    {
      VideoItem: (
        <img
          src="images/gallery/IMG_8215.jpg"
          alt=""
          className="w-full h-full"
        />
      ),
    },
    {
      VideoItem: (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/3z_d_WoPFzs?si=cdc_pe78_yRPXnMJ"
          referrerPolicy="no-referrer"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      VideoItem: (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/TEzzoN0ofXo?si=tljmiGsot_64c5wz"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      VideoItem: (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dRuHC521W-k?si=MttXjDzlwg9_QSRi"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      VideoItem: (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/MNW3ImRXhS4?si=kRM-v9sGu9X3OTx6"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ),
    },
  ];
  return (
    <div id="Gallery" className="scroll-mt-24">
      <div>
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
            Gallery
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
      </div>
      <h1 className="md:text-5xl text-xl font-bold text-center py-5">See the moments that define us</h1>
      <div>
        <div className=" flex items-center justify-center p-">
          <div className="lg:w-7/8 md:w-[95%] w-full mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 bg-white shadow-lg hover:shadow-xl rounded-lg p-6 py-12 border border-gray-300">
            {Gallerys.map((data, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedVideoIndex(index);
                  setIsModalOpen(true);
                }}
                className="flex justify-center items-center cursor-pointer hover:scale-105 transition-all"
              >
                {data.item}
              </div>
            ))}
          </div>
        </div>

        {isModalOpen && selectedVideoIndex !== null && (
          <div className="fixed inset-0 z-50 overflow-auto bg-black/80 flex justify-center items-center">
            <div className="relative md:w-[70%] w-[90%] md:h-140 h-[70%] overflow-y-auto rounded-2xl bg-black">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedVideoIndex(null);
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
                {Video[selectedVideoIndex]?.VideoItem}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
