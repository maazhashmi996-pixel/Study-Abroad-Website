"use client";

import { useState } from "react";
import Image from "next/image";

export default function Advantages() {
  const [activeAdvantage, setActiveAdvantage] = useState(1);

  const [techSearch, setTechSearch] = useState({
    university: "",
    location: "",
  });

  const techAdvantages = [
    { id: 1, text: "Search 3000+ Universities and 3.4M+ programs by location" },
    { id: 2, text: "Explore English-taught degree in 60+ countries" },
    { id: 3, text: "View intakes, modules, and deadlines in one place" },
    { id: 4, text: "Fully Funded Scholarships In Top Study Destinations" },
    { id: 5, text: "Access programs at every level – from diploma to PhDs" },
  ];

  return (
    <section className="bg-white py-10 sm:py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Times Tech Advantages
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Sophisticated Online Platforms
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side Advantages List */}
          <div className="lg:col-span-6 space-y-2">
            {techAdvantages.map((item) => {
              const isActive = activeAdvantage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveAdvantage(item.id)}
                  className={`w-full text-left py-3.5 px-4 flex items-start gap-3 rounded-xl border border-gray-100 transition-all ${
                    isActive
                      ? "text-[#f7a600] font-semibold bg-amber-50/50 border-amber-200"
                      : "text-[#3b2768] hover:text-[#f7a600] font-medium hover:bg-gray-50"
                  }`}
                >
                  <span className="text-lg mt-0.5 shrink-0">📄</span>
                  <span className="text-sm sm:text-base leading-snug">
                    {item.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Side Image & Search Card Container */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#f0ebf8] rounded-2xl p-4 sm:p-8 overflow-hidden min-h-[350px] sm:min-h-[420px] border border-purple-50 flex items-center justify-center">
              
              {/* Background Image */}
              <Image
                src="/images/home/times.jpg"
                alt="Times Tech Platform"
                fill
                priority
                className="object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Inner Interactive Search Card */}
              <div className="relative z-10 w-full max-w-md bg-gradient-to-br from-[#f2d398] via-[#e8a338] to-[#f7a600] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl space-y-3.5 sm:space-y-4">
                <input
                  type="text"
                  placeholder="Search Universities"
                  value={techSearch.university}
                  onChange={(e) =>
                    setTechSearch({
                      ...techSearch,
                      university: e.target.value,
                    })
                  }
                  className="w-full bg-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none shadow-inner"
                />

                <input
                  type="text"
                  placeholder="Location"
                  value={techSearch.location}
                  onChange={(e) =>
                    setTechSearch({
                      ...techSearch,
                      location: e.target.value,
                    })
                  }
                  className="w-full bg-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none shadow-inner"
                />

                <div className="flex justify-end pt-1">
                  <button className="w-full sm:w-auto bg-[#3b2768] hover:bg-[#2e1f52] text-white text-xs sm:text-sm font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition shadow-md active:scale-95">
                    Search
                  </button>
                </div>

                {/* Floating Decorative Badges */}
                <div className="hidden sm:block absolute -left-4 bottom-8 bg-gray-800/90 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full -rotate-12 shadow-lg border border-white/20">
                  Deadlines
                </div>

                <div className="hidden sm:block absolute -right-4 top-10 bg-gray-800/90 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full rotate-12 shadow-lg border border-white/20">
                  Scholarships
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}