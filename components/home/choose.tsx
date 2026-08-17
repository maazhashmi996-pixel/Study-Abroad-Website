
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

function Choose() {
  const [destinationTab, setDestinationTab] = useState("countries");
  const [destSlideIndex, setDestSlideIndex] = useState(0);
  const [isDestPaused, setIsDestPaused] = useState(false);

  const destinations = [
    {
      country: "USA",
      flag: "/images/study-Dest/usa.webp",
      details: [
        "10+ Universities",
        "€2,000 – €5,000 Annual Tuition",
        "Post-Study Work Options",
      ],
      link:"/study-Destination/usa"
    },
    {
      country: "Canada",
      flag: "/images/home/canada.webp",
      details: [
        "100+ Universities",
        "CAD 15,000+ Annual Tuition",
        "PGWP Available",
      ],
       link:"/study-Destination/canada"
    },
    {
      country: "Cyprus",
      flag: "/images/home/cyprus.webp",
      details: [
        "15+ Universities",
        "€4,000 – €9,000 Annual Tuition Fee",
        "Limited Post Study Work Options",
      ],
        link:"/study-Destination/cyprus"
    },
    {
      country: "Finland",
      flag: "/images/home/finland.webp",
      details: [
        "8+ Universities",
        "€6,000 – €16,000 Annual Tuition",
        "Post-Study Work Permits",
      ],
        link:"/study-Destination/finland"
    },
    {
      country: "France",
      flag: "/images/study-Dest/france.webp",
      details: [
        "500+ Universities",
        "Varies by Country",
        "Schengen Area Access",
      ],
        link:"/study-Destination/france"
    },
    {
      country: "Germany",
      flag: "/images/home/germany.webp",
      details: [
        "40+ Universities",
        "AUD 20,000+ Annual Tuition",
        "Subclass 485 Visa Options",
      ],
        link:"/study-Destination/germany"
    },
    {
      country: "Hungary",
      flag: "/images/study-Dest/hungary.webp",
      details: [
        "130+ Universities",
        "£12,000+ Annual Tuition",
        "2-Year Graduate Route",
      ],
        link:"/study-Destination/hungary"
    },
    {
      country: "Australia",
      flag: "/images/home/austria.webp",
      details: [
        "1000+ Universities",
        "$20,000+ Annual Tuition",
        "OPT STEM Extension Options",
      ],
        link:"/study-Destination/australia"
    },
  ];

  useEffect(() => {
    if (isDestPaused) return;

    const interval = setInterval(() => {
      setDestSlideIndex(
        (prev) => (prev + 1) % destinations.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isDestPaused, destinations.length]);

  const getVisibleDestinations = () => {
    const items = [];

    for (let i = 0; i < 5; i++) {
      items.push(
        destinations[(destSlideIndex + i) % destinations.length]
      );
    }

    return items;
  };

  const handlePrevious = () => {
    setDestSlideIndex((prev) =>
      prev === 0 ? destinations.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDestSlideIndex(
      (prev) => (prev + 1) % destinations.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#0b5cff]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#1a233d]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="text-center">

          <span className="inline-flex items-center rounded-full bg-[#0b5cff]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0b5cff]">
            Study Destinations
          </span>

          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#1a233d] sm:text-4xl lg:text-5xl">
            Choose Your Next
            <span className="block text-[#0b5cff]">
              Study Destination
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Explore international study destinations and discover
            universities, tuition options and opportunities for your
            future.
          </p>

          <div className="mt-6">
            <Link
              href="/study-Destination"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1a233d] px-6 py-3 text-xs font-bold text-white shadow-md transition-all duration-300 hover:bg-[#0b5cff] hover:shadow-lg"
            >
              View All Destinations

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* =====================================================
            TAB NAVIGATION
        ===================================================== */}
        <div className="mx-auto mt-12 flex max-w-md justify-center border-b border-slate-200">

          <button
            type="button"
            onClick={() => setDestinationTab("countries")}
            className={`relative px-6 pb-4 text-sm font-bold transition-all sm:text-base ${
              destinationTab === "countries"
                ? "text-[#0b5cff]"
                : "text-slate-400 hover:text-[#1a233d]"
            }`}
          >
            Countries

            {destinationTab === "countries" && (
              <span className="absolute bottom-[-1px] left-0 right-0 h-[3px] rounded-full bg-[#0b5cff]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setDestinationTab("programmes")}
            className={`relative px-6 pb-4 text-sm font-bold transition-all sm:text-base ${
              destinationTab === "programmes"
                ? "text-[#0b5cff]"
                : "text-slate-400 hover:text-[#1a233d]"
            }`}
          >
            Programmes

            {destinationTab === "programmes" && (
              <span className="absolute bottom-[-1px] left-0 right-0 h-[3px] rounded-full bg-[#0b5cff]" />
            )}
          </button>
        </div>

        {/* =====================================================
            COUNTRIES TAB
        ===================================================== */}
        {destinationTab === "countries" && (
          <div
            className="relative mt-10"
            onMouseEnter={() => setIsDestPaused(true)}
            onMouseLeave={() => setIsDestPaused(false)}
          >
            {/* Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

              {getVisibleDestinations().map((item, idx) => (
                <div
                  key={`${item.country}-${idx}`}
                  className="group flex flex-col items-center"
                >

                  {/* CARD */}
                  <div className="relative h-[300px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-[#0b5cff]/40 hover:shadow-2xl">

                    {/* Image */}
                    <Image
                      src={item.flag}
                      alt={`${item.country} study destination`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized={
                        process.env.NODE_ENV === "development"
                      }
                    />

                    {/* Normal Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a233d]/90 via-[#1a233d]/20 to-transparent" />

                    {/* Country Name - Always Visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-300 group-hover:opacity-0">
                      <h3 className="text-xl font-black capitalize text-white">
                        {item.country}
                      </h3>

                      <p className="mt-1 text-xs text-slate-200">
                        Explore study opportunities
                      </p>
                    </div>

                    {/* =================================================
                        HOVER OVERLAY
                    ================================================= */}
                    <div className="absolute inset-0 flex flex-col justify-between bg-[#1a233d]/95 p-5 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">

                      {/* Top */}
                      <div>
                        <span className="inline-flex rounded-full bg-[#0b5cff] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white">
                          {item.country}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="my-auto space-y-3">
                        {item.details.map((detail, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0b5cff]" />

                            <p className="text-xs font-medium leading-5 text-slate-100">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Bottom */}
                      <button 
                      // href={destinations.link}
                      className="flex items-center justify-between border-t border-white/10 pt-3">

                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                          Study Abroad
                        </span>

                        <ArrowRight className="h-4 w-4 text-[#0b5cff]" />
                    </button>
                      </div>
                  </div>

                  {/* Country Title */}
                  <div className="mt-4 text-center">
                    <span className="text-base font-bold capitalize text-[#1a233d] transition-colors group-hover:text-[#0b5cff] sm:text-lg">
                      {item.country}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* =====================================================
                SLIDER CONTROLS
            ===================================================== */}
            <div className="mt-8 flex items-center justify-center gap-3">

              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous destination"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1a233d] shadow-sm transition-all duration-300 hover:border-[#0b5cff] hover:bg-[#0b5cff] hover:text-white active:scale-90"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {destinations.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setDestSlideIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === destSlideIndex
                        ? "w-6 bg-[#0b5cff]"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next destination"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1a233d] shadow-sm transition-all duration-300 hover:border-[#0b5cff] hover:bg-[#0b5cff] hover:text-white active:scale-90"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

            </div>
          </div>
        )}

        {/* =====================================================
            PROGRAMMES TAB
        ===================================================== */}
        {destinationTab === "programmes" && (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b5cff]/10 text-[#0b5cff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12v5c3 2 5 3 7 3s4-1 7-3v-5"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-2xl font-black text-[#1a233d]">
              Find Your Right Programme
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Explore undergraduate, postgraduate and research programmes
              available across our study destinations.
            </p>

            <Link
              href="/explore-program"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0b5cff] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#1a233d]"
            >
              Explore Programmes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 sm:text-sm">
            Find the destination that fits your{" "}
            <span className="font-bold text-[#0b5cff]">
              education and career goals.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Choose;

