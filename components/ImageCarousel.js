import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default function ImageCarousel({ images }) {
  const [likedImages, setLikedImages] = useState(
    Array(images.length).fill(false)
  );

  const toggleLike = (index) => {
    const updatedLikes = [...likedImages];
    updatedLikes[index] = !updatedLikes[index];
    setLikedImages(updatedLikes);
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden touch-pan-y" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              className="relative flex-[0_0_100%] min-w-0 lg:flex-[0_0_33.33%] md:flex-[0_0_50%] p-4 group"
              key={index}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="block h-[75vh] w-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 transition-opacity duration-300 hover:bg-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <MdKeyboardArrowLeft color="black" className="w-12 h-12" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 transition-opacity duration-300 hover:bg-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <MdKeyboardArrowRight color="black" className="w-12 h-12" />
      </button>
    </div>
  );
}
