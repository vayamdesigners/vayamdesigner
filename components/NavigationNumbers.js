import { useRouter } from "next/router";
import React from "react";

export default function NavigationNumbers() {
  const router = useRouter();
  return (
    <div className="mx-52 flex justify-center ">
      <div className="mx-8 ">
        <h1
          className="text-7xl font-bold cursor-pointer text-gray-200 hover:text-red-600 transition-colors duration-300"
          onClick={() => {
            router.push("/about");
          }}
        >
          01
        </h1>

        <a
          href="/about"
          className="mx-2 underline text-gray-200 tracking-widest"
        >
          ABOUT US
        </a>
      </div>
      <div className="mx-8 ">
        <h1
          className="text-7xl font-bold cursor-pointer text-gray-200 hover:text-red-600 transition-colors duration-300"
          onClick={() => {
            router.push("/services");
          }}
        >
          02
        </h1>
        <a
          href="/services"
          className="mx-2 underline text-gray-200 tracking-widest"
        >
          OUR SERVICES
        </a>
      </div>
      <div className="mx-8 ">
        <h1
          className="text-7xl font-bold cursor-pointer text-gray-200 hover:text-red-600 transition-colors duration-300"
          onClick={() => {
            router.push("/work");
          }}
        >
          03
        </h1>
        <a
          href="/work"
          className="mx-2 underline text-gray-200 tracking-widest"
        >
          OUR WORK
        </a>
      </div>
      <div className="mx-8 ">
        <h1
          className="text-7xl font-bold cursor-pointer text-gray-200 hover:text-red-600 transition-colors duration-300"
          onClick={() => {
            router.push("/contact");
          }}
        >
          04
        </h1>
        <a
          href="/contact"
          className="mx-2 underline text-gray-200 tracking-widest"
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
}
