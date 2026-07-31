"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function Choose() {
  const [destinationTab, setDestinationTab] = useState("countries");
  const [destSlideIndex, setDestSlideIndex] = useState(0);
  const [isDestPaused, setIsDestPaused] = useState(false);

  const destinations = [
    { country: "copenhagen", flag: "/images/home/copenhagen.webp", details: ["10+ Universities", "€2,000 – €5,000 Annual Tuition", "Post-Study Work Options"] },
    { country: "Canada", flag: "/images/home/canada.webp", details: ["100+ Universities", "CAD 15,000+ Annual Tuition", "PGWP Available"] },
    { country: "Cyprus", flag: "/images/home/cyprus.webp", details: ["15+ Universities", "€4,000 – €9,000 Annual Tuition Fee", "Limited Post Study Work Options"] },
    { country: "Finland", flag: "/images/home/Finland.webp", details: ["8+ Universities", "€6,000 – €16,000 Annual Tuition", "Post-Study Work Permits"] },
    { country: "Europe", flag: "/images/home/europe.webp", details: ["500+ Universities", "Varies by Country", "Schengen Area Access"] },
    { country: "Germany", flag: "/images/home/germany.webp", details: ["40+ Universities", "AUD 20,000+ Annual Tuition", "Subclass 485 Visa Options"] },
    { country: "Hungary", flag: "/images/home/hungary.webp", details: ["130+ Universities", "£12,000+ Annual Tuition", "2-Year Graduate Route"] },
    { country: "Paris", flag: "/images/home/Paris.webp", details: ["1000+ Universities", "$20,000+ Annual Tuition", "OPT STEM Extension Options"] },
  ];

  useEffect(() => {
    if (isDestPaused) return;
    const interval = setInterval(() => {
      setDestSlideIndex((prev) => (prev + 1) % destinations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isDestPaused, destinations.length]);

  const getVisibleDestinations = () => {
    const items = [];
    for (let i = 0; i < 5; i++) {
      items.push(destinations[(destSlideIndex + i) % destinations.length]);
    }
    return items;
  };

  return (
    <section className="bg-[#f7a600] py-10 sm:py-16 px-4 sm:px-8 lg:px-16 text-[#3b2768]">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Choose Your Next Study Destination
          </h2>
          <div>
            <button 
              type="button"
              className="bg-[#3b2768] text-white hover:bg-[#2b1c4d] font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm transition-transform active:scale-95 shadow-md cursor-pointer"
            >
              View all destinations
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center sm:justify-start space-x-6 border-b border-[#3b2768]/20 pb-2 text-lg sm:text-xl font-bold">
          <button
            type="button"
            onClick={() => setDestinationTab("countries")}
            className={`pb-2 border-b-4 transition-all cursor-pointer ${
              destinationTab === "countries"
                ? "border-[#3b2768] text-[#3b2768]"
                : "border-transparent text-[#3b2768]/60 hover:text-[#3b2768]"
            }`}
          >
            Countries
          </button>
          <button
            type="button"
            onClick={() => setDestinationTab("programmes")}
            className={`pb-2 border-b-4 transition-all cursor-pointer ${
              destinationTab === "programmes"
                ? "border-[#3b2768] text-[#3b2768]"
                : "border-transparent text-[#3b2768]/60 hover:text-[#3b2768]"
            }`}
          >
            Programmes
          </button>
        </div>

        {/* Carousel Slider */}
        <div
          className="relative px-2 sm:px-0"
          onMouseEnter={() => setIsDestPaused(true)}
          onMouseLeave={() => setIsDestPaused(false)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 transition-all duration-700 ease-in-out">
            {getVisibleDestinations().map((item, idx) => (
              <div key={`${item.country}-${idx}`} className="flex flex-col items-center">
                
                {/* CARD CONTAINER */}
                <div className="relative w-full h-[280px] sm:h-[300px] rounded-3xl border-4 border-dashed border-[#3b2768]/30 shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden group">
                  
                  {/* Background Image */}
                  <Image
                    src={item.flag}
                    alt={item.country}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized={process.env.NODE_ENV === "development"}
                  />

                  {/* OVERLAY & TEXT (Shown on hover/focus) */}
                  <div className="absolute inset-0 bg-[#3b2768]/85 backdrop-blur-sm p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    
                    {/* Top Tag Header */}
                    <div className="flex justify-start">
                      <span className="bg-[#f7a600] text-[#3b2768] text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                        {item.country}
                      </span>
                    </div>

                    {/* Bullet Points */}
                    <div className="my-auto space-y-1.5 text-center text-xs font-semibold text-white">
                      {item.details.map((detail, dIdx) => (
                        <p key={dIdx} className="leading-snug bg-black/30 py-1.5 px-2 rounded-lg backdrop-blur-sm shadow-sm">
                          • {detail}
                        </p>
                      ))}
                    </div>

                    {/* Footer Skyline Indicator */}
                    <div className="w-full h-8 bg-white/10 rounded-xl flex items-center justify-center text-[10px] text-white/80 font-mono font-bold">
                      [ SKYLINE SILHOUETTE ]
                    </div>
                  </div>

                </div>

                {/* Country Title below card */}
                <span className="mt-2.5 text-base sm:text-lg font-bold text-[#3b2768] capitalize">
                  {item.country}
                </span>
              </div>
            ))}
          </div>

          {/* Controls Navigation Arrows */}
          <div className="flex justify-center sm:block space-x-4 sm:space-x-0 mt-4 sm:mt-0 sm:absolute sm:-right-4 sm:top-1/2 sm:-translate-y-1/2 sm:flex sm:flex-col sm:space-y-2 z-10">
            <button
              type="button"
              onClick={() => setDestSlideIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1))}
              aria-label="Previous slide"
              className="bg-[#3b2768] text-white p-2.5 rounded-full hover:bg-black transition-colors shadow-md active:scale-90 cursor-pointer"
            >
              ❮
            </button>
            <button
              type="button"
              onClick={() => setDestSlideIndex((prev) => (prev + 1) % destinations.length)}
              aria-label="Next slide"
              className="bg-[#3b2768] text-white p-2.5 rounded-full hover:bg-black transition-colors shadow-md active:scale-90 cursor-pointer"
            >
              ❯
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Choose;