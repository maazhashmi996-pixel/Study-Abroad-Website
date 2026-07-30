"use client";

import { useState } from "react";
import Image from "next/image";

function Adventages() {
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
    <>
      {/* ================= 4. TIMES TECH ADVANTAGES SECTION ================= */}
      <section className="bg-white py-16 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Times Tech Advantages
            </h2>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Sophisticated Online Platforms
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side */}
            <div className="lg:col-span-6 space-y-1">
              {techAdvantages.map((item) => {
                const isActive = activeAdvantage === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveAdvantage(item.id)}
                    className={`w-full text-left py-4 px-3 flex items-start gap-3 border-b border-gray-200 transition-colors ${
                      isActive
                        ? "text-[#f7a600] font-semibold"
                        : "text-[#3b2768] hover:text-[#f7a600] font-medium"
                    }`}
                  >
                    <span className="text-lg mt-0.5">📄</span>

                    <span className="text-sm sm:text-base leading-snug">
                      {item.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="lg:col-span-6">
              <div className="relative bg-[#f0ebf8] rounded-2xl p-6 sm:p-8 overflow-hidden min-h-[420px] border border-purple-50 flex items-center justify-center">
                {/* Background Image */}
                <Image
                  src="/images/home/times.jpg"
                  alt="Times"
                  fill
                  priority
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Search Card */}
                <div className="relative z-10 w-full max-w-md bg-gradient-to-br from-[#f2d398] via-[#e8a338] to-[#f7a600] rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
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
                    className="w-full bg-white rounded-full px-5 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
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
                    className="w-full bg-white rounded-full px-5 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                  />

                  <div className="flex justify-end">
                    <button className="bg-[#3b2768] hover:bg-[#2e1f52] text-white font-semibold px-8 py-3 rounded-full transition">
                      Search
                    </button>
                  </div>

                  {/* Labels */}
                  <div className="absolute -left-6 bottom-8 bg-gray-700 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full -rotate-45">
                    Deadlines
                  </div>

                  <div className="absolute -right-5 top-12 bg-gray-700 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full rotate-45">
                    Scholarships
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Adventages;