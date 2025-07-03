"use client";
import { useRef } from "react";
import { packages } from "@/app/lib/placeholder-data";
import Link from "next/link";

const Carousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -359.4, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 359.4, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="px-36 flex space-x-10 snap-x overflow-x-scroll scroll-smooth scrollbar-hide
        before:z-10 before:absolute before:w-36 before:top-0 before:bottom-0 before:left-0 before:pointer-events-none before:bg-gradient-to-r before:from-white before:to-transparent
        after:z-10 after:absolute after:w-36 after:top-0 after:bottom-0 after:right-0 after:pointer-events-none after:bg-gradient-to-l after:from-white after:to-transparent"
      >
        {Array.from(packages).map((item) => (
          <Link
            href={`/pages/packages/${item.packageId}`}
            key={item.packageId}
            className="max-lg:mb-8 snap-center w-fit min-w-80 h-fit min-h-40 p-2 flex bg-neutral-500 rounded-lg box-border"
          >
            <div className="mx-1 w-full">
              <h2 className="mt-3">{item.name}</h2>
              <hr className="mt-1 w-full" />
              <p className="mt-4 mx-3">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white p-1 z-20 rounded-md hover:opacity-85"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="7 8 12 8"
        >
          <path d="M14 7l-5 5 5 5V7z" fill="white" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-1 z-20 rounded-md hover:opacity-85"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="6 8 12 8"
        >
          <path d="M10 17l5-5-5-5v10z" fill="white" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
