"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, MapPin, GradCap } from "lucide-react";
import Link from "next/link";

interface CityItem {
  name: string;
  image: string;
}

// City Lists by Country
const cityDataByCountry: Record<string, CityItem[]> = {
  Pakistan: [
    { name: "Lahore Lums University", image: "/images/offices/lums-uni.jpg" },
    { name: "Forman Christian Collage ", image: "/images/offices/forman-col.jpg" },
    { name: "BeaconHouse University", image: "/images/offices/beaconhouse-uni.jpg" },
    { name: "Government Collage University ", image: "/images/offices/government-col.jpg" },
    { name: "Hajvery University", image: "/images/offices/hajvery.jpg" },
    { name: "Information Technology University", image: "/images/offices/it-uni.jpg" },
    { name: "King Edward University", image: "/images/offices/king-edward.jpg" },
    { name: "Kinnaired Collage", image: "/images/offices/kinnaired-col.jpg" },
    { name: "Lahore Collage For Women  University", image: "/images/offices/lahore-col.jpg" },
    { name: "Lahore University", image: "/images/offices/lahore-uni.jpg" },
    { name: "University Of Punjab", image: "/images/offices/uni-of-punjab.jpg" },
    { name: "Lahore Leads University", image: "/images/offices/leads-uni.jpg" },
    { name: "Lahore Garrision Universty", image: "/images/offices/lgu-uni.jpg" },
    { name: "Minhaj University", image: "/images/offices/minhaj-uni.jpg" },
    { name: "Natinal Collage Of Arts", image: "/images/offices/national-col-arts.jpg" },
    { name: "Lahore University Of Mediacal Sciences", image: "/images/offices/lums-uni.jpg" },
    { name: "South Asia University", image: "/images/offices/south-uni.jpg" },
    { name: "Superior University", image: "/images/offices/superior-uni.jpg" },
    { name: "University Of Engeeniering & Technology", image: "/images/offices/uet-uni.jpg" },
    { name: "University Of Central Punjab", image: "/images/offices/ucp-uni.jpg" },
    { name: "University Of Medical & Technology", image: "/images/offices/umt-uni.jpg" },
    { name: "University Of Education", image: "/images/offices/uni-of-education.jpg" },
    { name: "Virtual University", image: "/images/offices/virtual-uni.jpg" },
  ],
};

const country = ["Pakistan", "Punjab", "Lahore"];

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
    <div className="w-full min-h-screen text-slate-800 font-sans overflow-hidden">
      
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
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-900">
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
              {country.map((countryName) => (
                <button
                  key={countryName}
                  type="button"
                  onClick={() => setSelectedCountry(countryName)}
                  className={`flex justify-between items-center px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 md:shrink border ${
                    selectedCountry === countryName
                      ? "bg-[#0b5cff] text-white shadow-md border-blue-400/30"
                      : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span>{countryName}</span>
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

          {/* 📍 LAHORE UNIVERSITIES MAP SECTION */}
          <div className="mt-12 text-left bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-[#0b5cff]" />
              <h3 className="text-lg font-bold text-white">
                All Major Universities in Lahore
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mb-4">
              Explore locations of LUMS, Punjab University, GCU, UET, LGU, and other major universities across Lahore.
            </p>
            
            {/* Google Maps iFrame Search Query for Universities in Lahore */}
            <div className="w-full h-80 sm:h-[450px] rounded-xl overflow-hidden border border-slate-800 relative shadow-inner">
              <iframe
                title="Universities in Lahore Google Map"
                src="https://maps.google.com/maps?q=Universities%20in%20Lahore&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-105 brightness-95"
              />
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
          <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
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