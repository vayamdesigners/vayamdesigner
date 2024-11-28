import { useRouter } from "next/router";
import React from "react";

export default function NavigationNumbers() {
  const router = useRouter();
  return (
    <div
      className="w-[75%] mx-auto flex justify-evenly "
      style={{ fontFamily: "futura-lt-w01-book, sans-serif;" }}
    >
      <div className="mx-8 relative ">
        <h1
          className="text-[110px] m-0 font-bold cursor-pointer text-gray-200 hover:text-red-600 transition-colors duration-300"
          onClick={() => {
            router.push("/about");
          }}
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          01
        </h1>

        <a
          href="/about"
          className="underline absolute bottom-2  text-gray-200 tracking-widest"
        >
          ABOUT US
        </a>
      </div>

      <div className="mx-8 relative ">
        <h1
          className="text-[110px] font-bold  cursor-pointer text-gray-200 hover:text-red-600 transition-colors duration-300"
          onClick={() => {
            router.push("/services");
          }}
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          02
        </h1>
        <a
          href="/services"
          className="mx-2 underline text-gray-200 tracking-widest absolute bottom-2"
        >
          OURSERVICES
        </a>
      </div>
      <div className="mx-8 relative">
        <h1
          className="text-[110px] m-0 font-bold cursor-pointer text-gray-200 hover:text-red-600 transition-colors duration-300"
          onClick={() => {
            router.push("/work");
          }}
          data-aos="fade-right"
          data-aos-delay="350"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          03
        </h1>
        <a
          href="/work"
          className="mx-2 underline absolute bottom-2 text-gray-200 tracking-widest"
        >
          OUR WORK
        </a>
      </div>
      <div className="mx-8 relative">
        <h1
          className="text-[110px] m-0 font-bold cursor-pointer text-gray-200 hover:text-red-600 transition-colors duration-300"
          onClick={() => {
            router.push("/contact");
          }}
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          04
        </h1>
        <a
          href="/contact"
          className="mx-2 absolute bottom-2 underline text-gray-200 tracking-widest"
        >
          CONTACTUS
        </a>
      </div>
    </div>
  );
}
