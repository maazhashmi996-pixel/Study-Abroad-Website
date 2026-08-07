"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface CityItem {
  name: string;
  image: string;
}

// City Lists by Country
const cityDataByCountry: Record<string, CityItem[]> = {
  Pakistan: [
    { name: "Abbottabad", image: "/images/home/abbottabad.webp" },
    { name: "Bahawalpur", image: "/images/events/bahawalpur.webp" },
    { name: "Faisalabad", image: "/images/events/faisalaabad.webp" },
    { name: "Gujranwala", image: "/images/events/gujranwala.webp" },
    { name: "Gujrat", image: "/images/events/gujrat.webp" },
    { name: "Hyderabad", image: "/images/events/hyderabad.webp" },
    { name: "Islamabad", image: "/images/home/abbottabad.webp" },
    { name: "Jhelum", image: "/images/home/abbottabad.webp" },
    { name: "Karachi", image: "/images/home/abbottabad.webp" },
    { name: "Kharian", image: "/images/home/abbottabad.webp" },
    { name: "Kotli", image: "/images/home/abbottabad.webp" },
    { name: "Lahore", image: "/images/home/abbottabad.webp" },
    { name: "Mardan", image: "/images/steps/mardan.webp" },
    { name: "Mirpur", image: "/images/steps/mirpur.webp" },
    { name: "Multan", image: "/images/home/abbottabad.webp" },
    { name: "Peshawar", image: "/images/home/peshawar.png" },
    { name: "Rawalpindi", image: "/images/steps/rawalpindi.webp" },
    { name: "Sahiwal", image: "/images/steps/sahiwal.webp" },
    { name: "Sargodha", image: "/images/home/abbottabad.webp" },
    { name: "Sheikhupura", image: "/images/home/abbottabad.webp" },
    { name: "Sialkot", image: "/images/home/abbottabad.webp" },
  ],
  Australia: [
    { name: "Sydney", image: "/images/home/abbottabad.webp" },
    { name: "Melbourne", image: "/images/home/abbottabad.webp" },
    { name: "Brisbane", image: "/images/home/abbottabad.webp" },
  ],
  Germany: [
    { name: "Berlin", image: "/images/home/abbottabad.webp" },
    { name: "Frankfurt", image: "/images/home/abbottabad.webp" },
  ],
  UAE: [
    { name: "Dubai", image: "/images/home/abbottabad.webp" },
    { name: "Abu Dhabi", image: "/images/home/abbottabad.webp" },
  ],
};

const countries = ["Pakistan", "Australia", "Germany", "UAE"];

export default function OfficesHero() {
  const [selectedCountry, setSelectedCountry] = useState<string>("Pakistan");

  const currentCities = cityDataByCountry[selectedCountry] || [];

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        <div className="space-y-4 sm:space-y-6 text-left max-w-xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3b1d5c] leading-tight tracking-tight">
            Global Presence, Local Expertise for Your Study Abroad Dreams
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Finding trusted study abroad consultants near me is now easier than ever. D.Education Zone operates across multiple countries with 36+ branches in Pakistan and international offices in Australia, Germany, Saudi Arabia, and Dubai, bringing expert study abroad help right to your doorstep.
          </p>
          <div>
            <button 
              type="button"
              className="bg-[#3b1d5c] hover:bg-[#2a1443] text-white text-xs font-bold px-6 py-3 rounded-full tracking-wider uppercase transition-colors cursor-pointer shadow-md active:scale-95"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Hero Graphic Illustration */}
        <div className="flex justify-center w-full">
          <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden">
            <Image 
              src="/images/offices/Dreams.jpg"
              alt="Study abroad dreams"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-contain"
              priority
            />
          </div>
        </div>

      </section>

      {/* 2. VISIT OFFICES SECTION */}
      <section className="bg-[#f1b317] py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8">
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3b1d5c] tracking-tight">
            Visit Your Nearest D.Education Zone Office Today
          </h2>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            
            {/* Country Selector Sidebar */}
            <div className="w-full md:w-56 flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 shrink-0">
              {countries.map((country) => (
                <button
                  key={country}
                  type="button"
                  onClick={() => setSelectedCountry(country)}
                  className={`flex justify-between items-center px-4 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 md:shrink ${
                    selectedCountry === country
                      ? "bg-[#3b1d5c] text-white shadow-md md:bg-white md:text-[#3b1d5c]"
                      : "bg-white/80 text-gray-800 hover:bg-white"
                  }`}
                >
                  <span>{country}</span>
                  <ChevronRight className="w-4 h-4 hidden md:block" />
                </button>
              ))}
            </div>

            {/* Cities Grid with Circular Thumbnails */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3 flex-1 w-full">
              {currentCities.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-full px-3 py-2 flex items-center gap-2.5 shadow-sm hover:shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
                >
                  {/* City Image Container */}
                  <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0 border border-gray-200">
                    <Image 
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>

                  <span className="text-xs font-semibold text-gray-800 truncate">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 3. WHY PHYSICAL PRESENCE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        <div className="space-y-3 sm:space-y-4 max-w-lg text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-[#3b1d5c] tracking-tight">
            Why Our Physical Presence Matters
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            When searching for reliable study abroad consultants near me, having access to local offices makes all the difference. Our extensive network of 36+ branches across Pakistan ensures that students from Karachi, Lahore, Islamabad, Faisalabad, and beyond can receive personalized study abroad help without traveling long distances.
          </p>
        </div>

        {/* Feature Graphic */}
        <div className="flex justify-center w-full">
          <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image 
              src="/images/offices/Matters.jpg"
              alt="Physical presence matters"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>
        </div>

      </section>

    </div>
  );
}