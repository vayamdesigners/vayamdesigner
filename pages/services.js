import React from "react";

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
          <span
            className="absolute w-[calc(100%+80px)] h-[10px]  top-1/2 left-[-40px] transform -translate-y-1/2"
            style={{ backgroundColor: "rgb(252,0,0)" }}
          ></span>
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
              margin: "14px 0px 29px calc((100% - 980px)* 0.5);",
            }}
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
              >
                Commercial Photography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
              >
                Potrait Photography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
              >
                Travel Photography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
              >
                Product Photography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
              >
                Food Photography
              </li>
              <button className="block px-3 py-2 border  bg-white rounded-md text-black my-5 mx-auto">
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
              margin: "14px 0px 29px calc((100% - 980px)* 0.5);",
            }}
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
              >
                Commercial Videography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
              >
                Potrait Videography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
              >
                Travel Videography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
              >
                Product Videography
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
              >
                Food Videography
              </li>
              <button className="block px-3 py-2 border  bg-white rounded-md text-black my-5 mx-auto">
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
              margin: "14px 0px 29px calc((100% - 980px)* 0.5);",
            }}
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
              >
                Logo & Branding
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
              >
                UI/UX
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
              >
                Print Design
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
              >
                Visual Design
              </li>
              <li
                className="text-[40px]"
                style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
              >
                Packaging & Cover
              </li>
              <button className="block px-3 py-2 border  bg-white rounded-md text-black my-5 mx-auto">
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
