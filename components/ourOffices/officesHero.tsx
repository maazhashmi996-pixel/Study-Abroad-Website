"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ChevronRight, Phone } from "lucide-react";

const cities = [
  "Abbottabad", "Bahawalpur", "Faisalabad", "Gujranwala",
  "Gujrat", "Hyderabad", "Islamabad", "Jhelum",
  "Karachi", "Kharian", "Kotli", "Lahore",
  "Mardan", "Mirpur", "Multan", "Peshawar",
  "Rawalpindi", "Sahiwal", "Sargodha", "Sheikhupura",
  "Sialkot"
];

const countries = ["Pakistan", "Australia", "Germany", "UAE"];

export default function OfficesHero() {
  const [selectedCountry, setSelectedCountry] = useState("Pakistan");

  return (
    <div className="min-h-screen bg-white text-gray-800 ">
    

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6   grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5 max-w-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3b1d5c] leading-tight">
            Global Presence, Local Expertise for Your Study Abroad Dreams
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Finding trusted study abroad consultants near me is now easier than ever. Times Consultant operates across multiple countries with 36+ branches in Pakistan and international offices in Australia, Germany, Saudi Arabia, and Dubai, bringing expert study abroad help right to your doorstep.
          </p>
          <button className="bg-[#3b1d5c] hover:bg-[#2a1443] text-white text-xs font-bold px-6 py-3 rounded-full tracking-wider uppercase transition-colors">
            Get In Touch
          </button>
        </div>

        {/* Hero Graphic Illustration */}
              <div className="">
              <Image 

              src="/images/offices/Dreams.jpg"
              alt="dreams"
              width={500}
              className=""
              height={300}
              />
              </div>
         
      </section>

      {/* Visit Offices Section */}
      <section className="bg-[#f1b317] py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#3b1d5c] mb-8">
            Visit Your Nearest Times Consultant Office Today
          </h2>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Country Selector Sidebar */}
            <div className="w-full md:w-56 flex flex-col gap-1 shrink-0">
              {countries.map((country) => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`flex justify-between items-center px-4 py-3 rounded text-sm font-medium transition-all ${
                    selectedCountry === country
                      ? "bg-white text-[#3b1d5c] font-bold shadow-sm"
                      : "bg-white/90 text-gray-700 hover:bg-white"
                  }`}
                >
                  <span>{country}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ))}
            </div>

            {/* Cities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 flex-1 w-full">
              {cities.map((city) => (
                <div
                  key={city}
                  className="bg-white rounded-full px-4 py-2.5 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="w-7 h-7 bg-[#3b1d5c] rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-gray-800">
                    {city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Physical Presence Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 max-w-lg">
          <h3 className="text-xl md:text-2xl font-bold text-[#3b1d5c]">
            Why Our Physical Presence Matters
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            When searching for reliable study abroad consultants near me, having access to local offices makes all the difference. Our extensive network of 36+ branches across Pakistan ensures that students from Karachi, Lahore, Islamabad, Faisalabad, and beyond can receive personalized study abroad help without traveling long distances. Each office is staffed with experienced study abroad counselors who understand regional education systems and can guide you through university selection, application processes, scholarship opportunities, and student visa help with proven success rates.
          </p>
        </div>

        {/* Feature Graphic */}
<div>
                 <Image 
                         src="/images/offices/Matters.jpg"
                         alt="international"
                         width={400}
                         height={200}
                         className=" rounded-2xl"
                         />
              </div>
        
      </section>
    </div>
  );
}