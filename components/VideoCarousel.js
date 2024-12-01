import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function VideoCarousel({ videos }) {
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

  const [visibleOverlays, setVisibleOverlays] = useState(
    Array(videos.length).fill(false)
  );

  const handleMouseEnter = (index, videoElement) => {
    videoElement.play(); // Start video playback
    setVisibleOverlays((prev) => {
      const updated = [...prev];
      updated[index] = true; // Show overlay
      return updated;
    });

    // Hide overlay after 3 seconds
    setTimeout(() => {
      setVisibleOverlays((prev) => {
        const updated = [...prev];
        updated[index] = false; // Hide overlay after 3 seconds
        return updated;
      });
    }, 3000);
  };

  const handleMouseLeave = (videoElement) => {
    videoElement.pause(); // Pause video playback
  };

  return (
    <div className="relative">
      <div className="overflow-hidden touch-pan-y" ref={emblaRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {videos.map((src, index) => (
            <div
              className="relative p-4 group"
              key={index}
              onMouseEnter={(e) =>
                handleMouseEnter(index, e.currentTarget.querySelector("video"))
              }
              onMouseLeave={(e) =>
                handleMouseLeave(e.currentTarget.querySelector("video"))
              }
            >
              {/* Video */}
              <video
                src={src}
                muted
                loop
                className="block h-[75vh] w-full object-cover"
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center transition-opacity duration-500 ${
                  visibleOverlays[index] ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Overlay content */}
                <p className="text-white text-lg"></p>
              </div>
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
