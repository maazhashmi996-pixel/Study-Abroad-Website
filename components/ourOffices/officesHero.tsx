"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

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
  // Australia: [
  //   { name: "Sydney", image: "/images/home/abbottabad.webp" },
  //   { name: "Melbourne", image: "/images/home/abbottabad.webp" },
  //   { name: "Brisbane", image: "/images/home/abbottabad.webp" },
  // ],
  // Germany: [
  //   { name: "Berlin", image: "/images/home/abbottabad.webp" },
  //   { name: "Frankfurt", image: "/images/home/abbottabad.webp" },
  // ],
  // UAE: [
  //   { name: "Dubai", image: "/images/home/abbottabad.webp" },
  //   { name: "Abu Dhabi", image: "/images/home/abbottabad.webp" },
  // ],
};

const country = ["Pakistan"];

export default function OfficesHero() {

   const openWhatsApp = (
    phoneNumber: string = "923452066100",
    message: string = "Hello! I need some information."
  ) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const [selectedCountry, setSelectedCountry] = useState<string>("Pakistan");

  const currentCities = cityDataByCountry[selectedCountry] || [];

  return (
    <div className="w-full min-h-screen  text-slate-800 font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        <div className="space-y-4 sm:space-y-6 text-left max-w-xl">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0b5cff] bg-slate-900 px-4 py-1.5 rounded-full inline-block border border-slate-800">
            Global Network <span className="text-red-500">•</span>
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 leading-tight tracking-tight">
            Global Presence, <span className="text-[#0b5cff]">Local Expertise</span> for Your Study Abroad Dreams
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Finding trusted study abroad consultants near you is now easier than ever. D. Education Zone operates across multiple countries with 36+ branches in Pakistan and international offices in Australia, Germany, Saudi Arabia, and Dubai, bringing expert study abroad help right to your doorstep.
          </p>
          <div>
            <button 
              type="button"
               onClick={() => openWhatsApp("923452066100", "Hi, I clicked Contact Us!")}
              className="bg-[#0b5cff] hover:bg-white hover:text-slate-800 hover:border-[#0b5cff] text-white text-xs font-bold px-8 py-3.5 rounded-xl tracking-wider uppercase transition-all cursor-pointer shadow-lg active:scale-95 border border-blue-400/20"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Hero Graphic Illustration */}
        <div className="flex justify-center w-full">
          <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/70 shadow-2xl">
            <Image 
              src="/images/offices/aeroplan.jpg"
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
      <section className=" py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-900">
        <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8">
          
          <div className="text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff] bg-slate-900 px-3.5 py-1 rounded-full inline-block mb-3 border border-slate-800">
              Branch Locator <span className="text-red-500">•</span>
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
              Visit Your Nearest D. Education Zone Office Today
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            
            {/* Country Selector Sidebar */}
            <div className="w-full md:w-56 flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 shrink-0">
              {country.map((country) => (
                <button
                  key={country}
                  type="button"
                  onClick={() => setSelectedCountry(country)}
                  className={`flex justify-between items-center px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 md:shrink border ${
                    selectedCountry === country
                      ? "bg-[#0b5cff] text-white shadow-md border-blue-400/30"
                      : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white"
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
                  className="bg-slate-900 border border-slate-800 rounded-full px-3 py-2 flex items-center gap-2.5 shadow-sm hover:border-[#0b5cff]/50 hover:bg-slate-800/80 transition-all cursor-pointer hover:-translate-y-0.5"
                >
                  {/* City Image Container */}
                  <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0 border border-slate-700">
                    <Image 
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>

                  <span className="text-xs font-semibold text-slate-200 truncate">
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
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
              Local Access
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-salte-800 tracking-tight">
            Why Our Physical Presence Matters
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            When searching for reliable study abroad consultants near you, having access to local offices makes all the difference. Our extensive network of 36+ branches across Pakistan ensures that students from Karachi, Lahore, Islamabad, Faisalabad, and beyond can receive personalized study abroad help without traveling long distances.
          </p>
        </div>

        {/* Feature Graphic */}
        <div className="flex justify-center w-full">
          <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
            <Image 
              src="/images/offices/consultation.jpg"
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