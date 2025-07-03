"use client";
import React, { useRef } from "react";

const Carousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -220, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 220, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex space-x-4 overflow-x-scroll scroll-smooth scrollbar-hide"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="min-w-[200px] bg-gray-300 p-6 rounded-md">
            Card {i + 1}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-md"
      >
        ◀
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-md"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;
