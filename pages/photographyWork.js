import ImageCarousel from "@/components/ImageCarousel";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { GrFacebook } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function PhotographyWork() {
  const corporatePhotos = [
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058342/PHOTOGRAPHY%20WORKS%20PAGE/CORPORATE_PHOTOGRAPHY/4_r0m1z0.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058340/PHOTOGRAPHY%20WORKS%20PAGE/CORPORATE_PHOTOGRAPHY/2_mtisji.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058340/PHOTOGRAPHY%20WORKS%20PAGE/CORPORATE_PHOTOGRAPHY/1_lgpc9x.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058347/PHOTOGRAPHY%20WORKS%20PAGE/CORPORATE_PHOTOGRAPHY/7_snlz2x.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058354/PHOTOGRAPHY%20WORKS%20PAGE/CORPORATE_PHOTOGRAPHY/3_dppivj.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058355/PHOTOGRAPHY%20WORKS%20PAGE/CORPORATE_PHOTOGRAPHY/5_fvuez2.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058353/PHOTOGRAPHY%20WORKS%20PAGE/CORPORATE_PHOTOGRAPHY/6_beswbp.png",
  ];

  const potraitPhotos = [
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058360/PHOTOGRAPHY%20WORKS%20PAGE/POTRAITPHOTOGRAPHY/4_2_zth4lv.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058360/PHOTOGRAPHY%20WORKS%20PAGE/POTRAITPHOTOGRAPHY/3_imqlaj.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058340/PHOTOGRAPHY%20WORKS%20PAGE/POTRAITPHOTOGRAPHY/2_2_rmxui2.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058363/PHOTOGRAPHY%20WORKS%20PAGE/POTRAITPHOTOGRAPHY/IMG_2261.jpeg_of75th.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058357/PHOTOGRAPHY%20WORKS%20PAGE/POTRAITPHOTOGRAPHY/5_pg8ed8.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058340/PHOTOGRAPHY%20WORKS%20PAGE/POTRAITPHOTOGRAPHY/1_xt8kln.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058357/PHOTOGRAPHY%20WORKS%20PAGE/POTRAITPHOTOGRAPHY/4_ui4m10.jpg",
  ];

  const travelPhotos = [
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058359/PHOTOGRAPHY%20WORKS%20PAGE/TRAVELPHOTOGRAPHY/1_ij6lay.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058360/PHOTOGRAPHY%20WORKS%20PAGE/TRAVELPHOTOGRAPHY/2_bdqkq7.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058363/PHOTOGRAPHY%20WORKS%20PAGE/TRAVELPHOTOGRAPHY/6_okjmyb.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058364/PHOTOGRAPHY%20WORKS%20PAGE/TRAVELPHOTOGRAPHY/5_lodtj0.jpg",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058364/PHOTOGRAPHY%20WORKS%20PAGE/TRAVELPHOTOGRAPHY/9_rafdig.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058366/PHOTOGRAPHY%20WORKS%20PAGE/TRAVELPHOTOGRAPHY/7_xv6amg.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058360/PHOTOGRAPHY%20WORKS%20PAGE/TRAVELPHOTOGRAPHY/2_hjnghg.jpg",
  ];

  const foodPhotos = [
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058354/PHOTOGRAPHY%20WORKS%20PAGE/FOODPHOTOGRAPHY/2_2_1_xjjczs.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058355/PHOTOGRAPHY%20WORKS%20PAGE/FOODPHOTOGRAPHY/Copy_of_Moodale_2_hevdgo.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058356/PHOTOGRAPHY%20WORKS%20PAGE/FOODPHOTOGRAPHY/Screenshot_2024-04-14_111446_viqsbd.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058355/PHOTOGRAPHY%20WORKS%20PAGE/FOODPHOTOGRAPHY/MOJITO_tquzbp.png",
    "https://res.cloudinary.com/dvl0qtkko/image/upload/v1733058340/PHOTOGRAPHY%20WORKS%20PAGE/FOODPHOTOGRAPHY/Screenshot_2024-04-14_111654_r8a2ij.png",
  ];

  return (
    <div
      className=" bg-black text-white py-10"
      style={{
        fontFamily: "Futura LT W01 Medium",
      }}
    >
      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          CORPORATE PHOTOGRAPHY
        </h1>
        <ImageCarousel images={corporatePhotos} />
      </main>

      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          POTRAIT PHOTOGRAPHY
        </h1>
        <ImageCarousel images={potraitPhotos} />
      </main>
      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          TRAVEL PHOTOGRAPHY
        </h1>
        <ImageCarousel images={travelPhotos} />
      </main>
      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          PRODUCT PHOTOGRAPHY
        </h1>
        <ImageCarousel images={travelPhotos} />
      </main>
      <main className="pt-10">
        <h1 className="text-[20px] mx-10   my-2 sm:text-[30px] sm:mx-16 sm:my-5 ">
          FOOD PHOTOGRAPHY
        </h1>
        <ImageCarousel images={foodPhotos} />
      </main>
    </div>
  );
}
