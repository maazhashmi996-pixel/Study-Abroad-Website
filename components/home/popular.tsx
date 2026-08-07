"use client";

import React, { useMemo } from "react";
import Image from "next/image";

function Popular() {
  const rowsData = useMemo(
    () => [
      // Row 1
      [
        { image: "/images/home/2.png", alt: "Queen's College" },
        { image: "/images/home/alabama.png", alt: "James Madison University" },
        { image: "/images/home/American.png", alt: "LIU Post" },
        { image: "/images/home/aston2.png", alt: "Mercer University" },
        { image: "/images/home/columbia7.png", alt: "Pace University" },
        { image: "/images/home/copenhagen.webp", alt: "American University" },
        { image: "/images/home/design-2.png", alt: "University of Alabama" },
        { image: "/images/home/essex.png.webp", alt: "DePaul University" },
      ],
      // Row 2
      [
        { image: "/images/home/exeter.png.webp", alt: "UNB University" },
        { image: "/images/home/4.png", alt: "Laurier" },
        { image: "/images/home/5.png", alt: "University of Saskatchewan" },
        { image: "/images/home/illinois-chicago5.png", alt: "University of Manitoba" },
        { image: "/images/home/2.png", alt: "Columbia College" },
        { image: "/images/home/columbia7.png", alt: "UIC" },
        { image: "/images/home/james-madison.png", alt: "Trent University" },
        { image: "/images/home/kulibraries4.png", alt: "MacEwan University" },
      ],
      // Row 3
      [
        { image: "/images/home/long-island.png", alt: "University of Sheffield" },
        { image: "/images/home/MacEwanU3.png", alt: "Acadia University" },
        { image: "/images/home/Manitoba.png8.webp", alt: "Queen Mary University" },
        { image: "/images/home/victoria2.png", alt: "UVIC" },
        { image: "/images/home/queens.webp", alt: "Toronto Metropolitan" },
        { image: "/images/home/7.png", alt: "University of Exeter" },
        { image: "/images/home/wilfred-laurier.pn.webp", alt: "Aston University" },
        { image: "/images/home/6.png", alt: "University of Essex" },
      ],
    ],
    []
  );

  return (
    <section className="bg-[#fdb813] w-full py-10 sm:py-14 px-4 sm:px-8 text-[#3b2768] overflow-hidden">
      {/* Inline Styles for Animation & Hover Pause */}
      <style jsx>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 35s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 35s linear infinite;
        }
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-tight">
            Popular And Partner Universities
          </h2>
          <p className="text-[#3b2768] font-semibold text-sm sm:text-lg">
            Universities And Institutions We Serve
          </p>
        </div>

        {/* Continuous Moving Carousel Rows */}
        <div className="space-y-6 sm:space-y-8 pt-2 sm:pt-4">
          {rowsData.map((rowLogos, rowIndex) => {
            const isReverse = rowIndex === 1;
            const animationClass = isReverse
              ? "animate-marquee-right"
              : "animate-marquee-left";

            // Duplicating logos x3 for smooth continuous loop across wider screens
            const duplicatedLogos = [...rowLogos, ...rowLogos, ...rowLogos];

            return (
              <div
                key={`row-${rowIndex}`}
                className="relative max-w-7xl mx-auto overflow-hidden marquee-container flex items-center"
              >
                <div className={`${animationClass} flex items-center space-x-8 sm:space-x-12 md:space-x-16`}>
                  {duplicatedLogos.map((logo, idx) => (
                    <div
                      key={`r${rowIndex}-${idx}`}
                      className="flex items-center justify-center shrink-0 cursor-pointer px-2"
                    >
                      <Image
                        src={logo.image}
                        alt={logo.alt || "University Logo"}
                        width={180}
                        height={60}
                        className="h-9 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Popular;