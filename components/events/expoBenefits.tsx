"use client";

import Image from "next/image";
import { Check } from "lucide-react";

// Top 5 Benefits Cards Data
const benefits = [
  {
    number: "01",
    title: "Meet 100+ International Universities",
    description: "Direct interaction with official university representatives.",
  },
  {
    number: "02",
    title: "Instant Eligibility Assessment",
    description: "Get on-spot evaluation of your profile, academics, and documents.",
  },
  {
    number: "03",
    title: "Exclusive Scholarships & Application Fee Waivers",
    description: "Special offers only available to expo attendees.",
  },
  {
    number: "04",
    title: "Fast-Track Admission Guidance",
    description: "Secure quick admissions for upcoming intakes with Times expert counsellors.",
  },
  {
    number: "05",
    title: "Personalized Counselling With Country Specialists",
    description: "Get tailored advice for UK, USA, Australia, Canada, Europe, and more.",
  },
];



export default function ExpoBenefits() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      
      {/* 1. BENEFITS SECTION (Yellow Background) */}
      <section className="bg-[#f1b317] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3b1d5c] leading-tight">
              Benefits To Join Our Study Abroad Expo
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-semibold text-[#3b1d5c]/80 mt-2">
              Tailored Services For Your Study Abroad Success
            </p>
          </div>

          {/* Cards Layout Grid */}
          <div className="space-y-4">
            {/* Top Row - 3 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {benefits.slice(0, 3).map((item) => (
                <div
                  key={item.number}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-gray-300">
                    {item.number}
                  </span>
                  <div className="mt-3 sm:mt-4">
                    <h3 className="text-sm sm:text-base font-bold text-[#3b1d5c] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row - 2 Centered Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
              {benefits.slice(3, 5).map((item) => (
                <div
                  key={item.number}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-gray-300">
                    {item.number}
                  </span>
                  <div className="mt-3 sm:mt-4">
                    <h3 className="text-sm sm:text-base font-bold text-[#3b1d5c] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    

    </div>
  );
}