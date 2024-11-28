import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function Work() {
  return (
    <div className="min-h-screen bg-black pb-10   pt-28 text-white">
      <div className="ml-64 mt-10 flex items-center relative">
        <h1
          className="text-[98px] relative "
          style={{
            fontFamily: "Futura LT W01 Medium",
          }}
        >
          03
          <span
            className="absolute w-[calc(100%+80px)] h-[10px]  top-1/2 left-[-40px] transform -translate-y-1/2"
            style={{ backgroundColor: "rgb(252,0,0)" }}
          ></span>
        </h1>
        <h1
          className="text-[57px] ml-16 font-semibold "
          style={{ color: "rgb(252,0,0)", fontFamily: "Futura LT W01 Medium" }}
        >
          OUR WORKS
        </h1>
      </div>
      <div className="w-[68%] mx-auto">
        <p className="text-[35px] font-semibold">
          Explore our diverse portfolio of creative projects. We invite you to
          witness our work and get inspired to create something extraordinary
          for your brand.
        </p>
      </div>
      <div
        className="relative mt-10  h-[407px] bg-cover bg-center"
        style={{ backgroundImage: "url('/works/PHOTOGRAPHYBG.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center px-10 ">
          <p className="text-white text-[57px] cursor-pointer font-semibold heading tracking-wider ml-24 ">
            PHOTOGRAPHY
          </p>
          <div className="">
            <span className="text-gray-200 flex  cursor-pointer viewHeading  font-extralight text-sm ml-24 ">
              V I E W <MdOutlineKeyboardArrowRight size={20} />
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="relative  h-[407px]">
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://res.cloudinary.com/dvl0qtkko/video/upload/v1732775255/video_kev0pf.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Overlay for Text */}
          <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center px-10 ">
            <p className="text-white text-[57px] cursor-pointer font-semibold heading tracking-wider ml-24 ">
              VIDEOGRAPHY
            </p>
            <div className="">
              <span className="text-gray-200 flex  cursor-pointer viewHeading  font-extralight text-sm ml-28 ">
                V I E W <MdOutlineKeyboardArrowRight size={20} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative  h-[407px] bg-cover bg-center"
        style={{ backgroundImage: "url('/works/GRAPHICDESIGNBG.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center px-10 ">
          <p className="text-white text-[57px] cursor-pointer font-semibold heading tracking-wider ml-24 ">
            GRAPHIC DESIGN
          </p>
          <div className="">
            <span className="text-gray-200 flex  cursor-pointer viewHeading  font-extralight text-sm ml-28 ">
              V I E W <MdOutlineKeyboardArrowRight size={20} />
            </span>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .heading {
            font-family: "Futura LT W01 Medium";
          }
          .viewHeading {
            font-family: "Futura LT W01 Medium";
          }
        `}
      </style>
    </div>
  );
}
