import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className=" flex justify-between px-5 w-[98%] text-white fixed pt-10 z-50">
      <div className="w-[60%] ">
        <img src="/l.png" className="h-[50px]" />
      </div>
      <div className="flex w-[50%] justify-end">
        <Link href={"/"} className={``}>
          <span
            className={`border mx-1 px-5 py-2  hover:bg-black hover:text-white font-semibold ${
              router.pathname == "/"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {" "}
            Home
          </span>
        </Link>
        <Link href={"/about"}>
          <span
            className={`border mx-1 px-5 py-2  hover:bg-black hover:text-white  font-semibold ${
              router.pathname == "/about"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {" "}
            About Us
          </span>
        </Link>
        <Link href={"/services"}>
          <span
            className={`border mx-1 px-5 py-2  hover:bg-black hover:text-white font-semibold ${
              router.pathname == "/services"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {" "}
            Our Services
          </span>
        </Link>
        <Link href={"/works"}>
          <span
            className={`border mx-1 px-5 py-2  font-semibold hover:bg-black hover:text-white ${
              router.pathname == "/works"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {" "}
            Our Works
          </span>
        </Link>
        <Link href={"/contact"}>
          <span
            className={`border mx-1 px-5 py-2   hover:bg-black hover:text-white font-semibold ${
              router.pathname == "/contact"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {" "}
            Contact Us
          </span>
        </Link>
      </div>
      <style jsx>{``}</style>
    </div>
  );
}
