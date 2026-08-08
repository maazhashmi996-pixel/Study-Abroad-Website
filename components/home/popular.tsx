
"use client";

import React, { useMemo } from "react";
import Image from "next/image";

function Popular() {
  const rowsData = useMemo(
    () => [
      // Row 1
      [
        { image: "/images/home/2.png", alt: "Queen's College" },
        {
          image: "/images/home/alabama.png",
          alt: "James Madison University",
        },
        { image: "/images/home/American.png", alt: "LIU Post" },
        { image: "/images/home/aston2.png", alt: "Mercer University" },
        { image: "/images/home/columbia7.png", alt: "Pace University" },
        {
          image: "/images/home/copenhagen.webp",
          alt: "American University",
        },
        {
          image: "/images/home/design-2.png",
          alt: "University of Alabama",
        },
        {
          image: "/images/home/essex.png.webp",
          alt: "DePaul University",
        },
      ],

      // Row 2
      [
        {
          image: "/images/home/exeter.png.webp",
          alt: "UNB University",
        },
        { image: "/images/home/4.png", alt: "Laurier" },
        {
          image: "/images/home/5.png",
          alt: "University of Saskatchewan",
        },
        {
          image: "/images/home/illinois-chicago5.png",
          alt: "University of Manitoba",
        },
        {
          image: "/images/home/2.png",
          alt: "Columbia College",
        },
        {
          image: "/images/home/columbia7.png",
          alt: "UIC",
        },
        {
          image: "/images/home/james-madison.png",
          alt: "Trent University",
        },
        {
          image: "/images/home/kulibraries4.png",
          alt: "MacEwan University",
        },
      ],

      // Row 3
      [
        {
          image: "/images/home/long-island.png",
          alt: "University of Sheffield",
        },
        {
          image: "/images/home/MacEwanU3.png",
          alt: "Acadia University",
        },
        {
          image: "/images/home/Manitoba.png8.webp",
          alt: "Queen Mary University",
        },
        {
          image: "/images/home/victoria2.png",
          alt: "UVIC",
        },
        {
          image: "/images/home/queens.webp",
          alt: "Toronto Metropolitan",
        },
        {
          image: "/images/home/7.png",
          alt: "University of Exeter",
        },
        {
          image: "/images/home/wilfred-laurier.pn.webp",
          alt: "Aston University",
        },
        {
          image: "/images/home/6.png",
          alt: "University of Essex",
        },
      ],
    ],
    []
  );

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#0b5cff]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#1a233d]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-[#0b5cff]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0b5cff]">
            Our Global Network
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#1a233d] sm:text-4xl md:text-5xl">
            Popular & Partner
            <span className="block text-[#0b5cff]">
              Universities
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Explore universities and institutions from around the world
            connected with our international education network.
          </p>

        </div>

        {/* =====================================================
            MOVING LOGO ROWS
        ===================================================== */}

        <div className="mt-12 space-y-5 sm:mt-14 sm:space-y-6">

          {rowsData.map((rowLogos, rowIndex) => {

            const isReverse = rowIndex === 1;

            const animationClass = isReverse
              ? "animate-marquee-right"
              : "animate-marquee-left";

            // Duplicate 3 times for smooth infinite movement
            const duplicatedLogos = [
              ...rowLogos,
              ...rowLogos,
              ...rowLogos,
            ];

            return (
              <div
                key={`row-${rowIndex}`}
                className="marquee-container relative mx-auto max-w-7xl overflow-hidden"
              >

                {/* Left Fade */}

                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent sm:w-24" />

                {/* Right Fade */}

                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent sm:w-24" />

                {/* Moving Track */}

                <div
                  className={`${animationClass} flex w-max items-center gap-4 sm:gap-6 md:gap-8`}
                >

                  {duplicatedLogos.map((logo, idx) => (
                    <div
                      key={`r${rowIndex}-${idx}`}
                      className="group flex h-24 w-[170px] shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0b5cff]/30 hover:shadow-lg sm:h-28 sm:w-[200px]"
                    >

                      <Image
                        src={logo.image}
                        alt={logo.alt || "University Logo"}
                        width={180}
                        height={70}
                        className="h-10 w-auto max-w-[150px] object-contain opacity-75 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 sm:h-12 sm:max-w-[175px]"
                      />

                    </div>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM INFO
        ===================================================== */}

        <div className="mt-10 flex justify-center sm:mt-12">

          <div className="flex max-w-2xl items-center gap-3 rounded-2xl border border-[#0b5cff]/10 bg-[#0b5cff]/5 px-5 py-4">

            <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0b5cff]" />

            <p className="text-center text-xs leading-5 text-slate-600 sm:text-sm">
              Find the right institution for your academic goals with
              guidance from our education experts.
            </p>

          </div>

        </div>

      </div>

      {/* =====================================================
          MARQUEE ANIMATIONS
      ===================================================== */}

      <style jsx>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0);
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
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marqueeLeft 35s linear infinite;
        }

        .animate-marquee-right {
          animation: marqueeRight 35s linear infinite;
        }

        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  );
}

export default Popular;

