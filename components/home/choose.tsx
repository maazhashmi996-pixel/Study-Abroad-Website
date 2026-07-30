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
    <section className="bg-[#f7a600] py-16 px-6 lg:px-16 text-[#3b2768]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Choose Your Next Study Destination
          </h2>
          <button 
            type="button"
            className="bg-[#3b2768] text-white hover:bg-[#2b1c4d] font-bold px-6 py-2.5 rounded-full text-sm transition-transform active:scale-95 shadow-md cursor-pointer"
          >
            View all destinations
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-start space-x-6 border-b border-[#3b2768]/20 pb-2 text-xl font-bold">
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
          className="relative"
          onMouseEnter={() => setIsDestPaused(true)}
          onMouseLeave={() => setIsDestPaused(false)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 transition-all duration-700 ease-in-out">
            {getVisibleDestinations().map((item, idx) => (
              <div key={`${item.country}-${idx}`} className="flex flex-col items-center">
                
                {/* CARD CONTAINER (Must have group & relative) */}
                <div className="relative w-full h-[300px] rounded-3xl border-4 border-dashed border-[#b3a7d4] shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden group">
                  
                  {/* Background Image (Always Visible) */}
                  <Image
                    src={item.flag}
                    alt={item.country}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized={process.env.NODE_ENV === "development"}
                  />

                  {/* OVERLAY & TEXT (Hidden by default, shown on hover) */}
                  <div className="absolute inset-0 bg-[#3b2768]/80 backdrop-blur-xs p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    
                    {/* Top Tag Header */}
                    <div className="flex justify-start">
                      <span className="bg-[#f7a600] text-[#3b2768] text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                        {item.country}
                      </span>
                    </div>

                    {/* Bullet Points */}
                    <div className="my-auto space-y-2 text-center text-xs font-semibold text-white">
                      {item.details.map((detail, dIdx) => (
                        <p key={dIdx} className="leading-snug bg-black/30 py-1.5 px-2 rounded-lg backdrop-blur-xs shadow-xs">
                          • {detail}
                        </p>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="w-full h-8 bg-white/10 rounded-xl flex items-center justify-center text-[10px] text-white/80 font-mono font-bold">
                      [ SKYLINE SILHOUETTE ]
                    </div>
                  </div>

                </div>

                {/* Country Title below card */}
                <span className="mt-3 text-lg font-bold text-[#3b2768] capitalize">
                  {item.country}
                </span>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col space-y-2 z-10">
            <button
              type="button"
              onClick={() => setDestSlideIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1))}
              aria-label="Previous slide"
              className="bg-[#3b2768] text-white p-2.5 rounded-full hover:bg-black transition-colors shadow active:scale-90 cursor-pointer"
            >
              ❮
            </button>
            <button
              type="button"
              onClick={() => setDestSlideIndex((prev) => (prev + 1) % destinations.length)}
              aria-label="Next slide"
              className="bg-[#3b2768] text-white p-2.5 rounded-full hover:bg-black transition-colors shadow active:scale-90 cursor-pointer"
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