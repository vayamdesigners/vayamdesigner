import React from "react";
import { motion } from "motion/react";

export default function Services() {
  return (
    <div
      className="min-h-screen bg-black pb-24  pt-28 text-white"
      style={{
        fontFamily: "Futura LT W01 Medium",
      }}
    >
      <div className="ml-64 mt-10 flex items-center relative">
        <h1
          className="text-[98px] relative "
          style={{
            fontFamily: "Futura LT W01 Medium",
          }}
        >
          02
          <motion.span
            className="absolute w-[calc(100%+80px)] h-[10px]  top-1/2 left-[-40px] transform -translate-y-1/2"
            style={{ backgroundColor: "rgb(252,0,0)" }}
            initial={{ width: "0%" }} // Initial width
            animate={{ width: "calc(100% + 80px)" }} // Final width
            transition={{
              duration: 2, // Duration of the animation in seconds
              ease: "easeInOut", // Easing function
            }}
          ></motion.span>
        </h1>
        <h1
          className="text-[57px] ml-16 font-semibold "
          style={{ color: "rgb(252,0,0)", fontFamily: "Futura LT W01 Medium" }}
        >
          OUR SERVICES
        </h1>
      </div>
      <div className="h-screen">
        <div>
          <h1
            className=" text-[57px] mt-10 text-center font-semibold"
            style={{
              fontFamily: "futura-lt-w01-book,sans-serif;",
            }}
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            PHOTOGRAPHY
          </h1>
        </div>
        <div className="flex justify-between pt-10">
          <div className="w-[50%] flex ">
            <div className="w-[75%] mx-auto my-auto">
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
                data-aos="fade-up"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                Commercial Photography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
                data-aos="fade-up"
                data-aos-delay="30"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                Potrait Photography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                Travel Photography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                Product Photography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                Food Photography
              </li>
              <button
                className="block px-3 py-2 border  bg-white rounded-md text-black my-5 mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                OUR WORKS
              </button>
            </div>
          </div>
          <div className="w-[50%]">
            <img src="/services/PHOTGRAPHYIMAGE.jpg" className="w-full" />
          </div>
        </div>
      </div>
      <div className="h-screen">
        <div>
          <h1
            className=" text-[57px] my-[14px] text-center font-semibold"
            style={{
              fontFamily: "futura-lt-w01-book,sans-serif;",
            }}
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            VIDEOGRAPHY
          </h1>
        </div>
        <div className="flex justify-between pt-10">
          <div className="w-[50%] flex ">
            <img src="/services/VIDEOGRAPHYIMAGE.png" className="w-full" />
          </div>
          <div className="w-[50%] flex ">
            <div className="w-[75%] mx-auto my-auto">
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
                data-aos="fade-up"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                Commercial Videography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
                data-aos="fade-up"
                data-aos-delay="30"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                Potrait Videography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                Travel Videography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                Product Videography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
                data-aos="fade-up"
                data-aos-delay="90"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                Food Videography
              </li>
              <button
                className="block px-3 py-2 border  bg-white rounded-md text-black my-5 mx-auto"
                data-aos="fade-up"
                data-aos-delay="110"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                OUR WORKS
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <div>
          <h1
            className=" text-[57px] my-[14px] text-center font-semibold"
            style={{
              fontFamily: "futura-lt-w01-book,sans-serif;",
            }}
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            GRAPHIC DESIGN
          </h1>
        </div>
        <div className="flex justify-between pt-10">
          <div className="w-[50%] flex ">
            <div className="w-[75%] mx-auto my-auto">
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
                data-aos="fade-up"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                Logo & Branding
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
                data-aos="fade-up"
                data-aos-delay="30"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                UI/UX
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                Print Design
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                Visual Design
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                Packaging & Cover
              </li>
              <button
                className="block px-3 py-2 border  bg-white rounded-md text-black my-5 mx-auto"
                data-aos="fade-up"
                data-aos-delay="120"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
              >
                OUR WORKS
              </button>
            </div>
          </div>
          <div className="w-[50%] flex ">
            <img src="/services/GRAPHICDESIGNIMAGE.png" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
