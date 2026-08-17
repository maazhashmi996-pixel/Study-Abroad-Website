"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import {  FaGlobeEurope, FaGraduationCap, FaShieldAlt, FaWallet } from "react-icons/fa";

export default function AustraliaHero() {
  const tableOfContents = [
    { title: "Admission requirements in Australia", id: "admission-requirements" },
    { title: "Cost of studying in Australia", id: "cost-of-studying" },
    { title: "Scholarships for International Students in Australia", id: "scholarships" },
    { title: "Visa requirements in Australia", id: "visa-requirements" },
    { title: "Popular courses to Study in Australia", id: "popular-courses" },
    { title: "Post-Study work opportunities", id: "post-study-work" },
    { title: "Cost of living in Australia", id: "cost-of-living" },
    { title: "Book a meeting with an expert", id: "book-meeting" },
  ];
  const reasons = [
              {
                title: "World-Class Universities With Global Standards",
                description:
                  "Australia’s education system is globally recognized, featuring top-ranking institutions such as The University of Melbourne, The University of Sydney, and The Australian National University (ANU). Known for research, engineering, business, and innovation, Australian degrees carry high prestige worldwide.",
                icon: FaGraduationCap,
                accentBorder: "border-l-red-500",
                iconBg: "bg-red-50 text-red-600 border-red-100",
              },
              {
                title: "Flexible and High-Value Education",
                description:
                  "While Australia offers premium higher education, flexible study options, scholarships, and generous post-study work rights make it one of the most attractive international study destinations.",
                icon: FaWallet,
                accentBorder: "border-l-[#0b5cff]",
                iconBg: "bg-blue-50 text-[#0b5cff] border-blue-100",
              },
              {
                title: "Global Language & Cultural Exposure",
                description:
                  "Programs in Australia are fully English-taught, allowing students to seamlessly study and integrate. Living in a vibrant, multicultural environment provides networking and career benefits across global markets.",
                icon: FaGlobeEurope,
                accentBorder: "border-l-slate-700",
                iconBg: "bg-slate-100 text-slate-700 border-slate-200",
              },
              {
                title: "student-friendly-living",
                description:
                  "Cities like Melbourne, Sydney, Brisbane, and Adelaide consistently rank high in international livability indices. Students enjoy top-tier healthcare, reliable public transport, and safe environments.",
                icon: FaShieldAlt,
                accentBorder: "border-l-red-500",
                iconBg: "bg-red-50 text-red-600 border-red-100",
              },
            ];

 

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Responsive Image Container */}
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[550px]">
          <Image
            src="/images/study-dest/australia.jpg"
            alt="Study in Australia"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/60 to-transparent"></div>

        {/* Hero Content List */}
        <div className="absolute inset-0 flex items-end pb-6 sm:pb-8 px-4 sm:px-10 z-20">
          <div className="max-w-7xl mx-auto w-full">
            <ul className="list-disc pl-6 text-white text-sm sm:text-base md:text-lg font-medium space-y-2 drop-shadow-md">
              <li>AUD 20,000 – 45,000+ Average Annual Tuition Fee</li>
              <li>2 Main Intakes Per Year – February (Semester 1) & July (Semester 2)</li>
              <li>40+ World-Class Universities & Colleges</li>
              <li>Post-Study Work Opportunities Available</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#1a233d] font-bold border-b-2 pb-2">
            Australia
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-800 font-medium">
            Australia continues to be one of the top choices for international students globally.
            At Times Consultant, we see a steady influx of students choosing Australian institutions for high-quality
            education, globally recognized degrees, and exceptional post-study opportunities.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-800 font-medium">
            Studying in Australia isn't just about gaining a degree—it's about building a strong foundation for your international
            career while enjoying high living standards, top-tier healthcare, and an incredible lifestyle.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-800 font-medium">
            Students consistently value the structured academic framework, excellent student support systems, and vibrant campus life
            that Australian universities provide.
          </p>
        </div>
      </section>

      {/* Table of Contents Section */}
      <section className="bg-slate-50/70 border-y border-slate-100 px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-10 text-center md:text-left">
            <span className="text-[#0b5cff] text-xs uppercase tracking-widest font-semibold bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100 inline-block mb-3">
              Quick Overview
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a233d] tracking-tight">
              Table Of <span className="text-[#0b5cff]">Content</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-center gap-4 bg-white border border-slate-200/80 p-4 sm:p-5 rounded-2xl shadow-sm hover:border-[#0b5cff] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <div className="shrink-0 w-9 h-9 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-[#0b5cff] font-bold group-hover:bg-[#0b5cff] group-hover:text-white transition-colors duration-200">
                  <FaCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-slate-800 text-sm sm:text-base font-semibold leading-snug group-hover:text-[#0b5cff] transition-colors duration-200">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
         <section className="bg-slate-50/80 text-slate-900 py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0b5cff] px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse" />
            Destination Guide
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Study in <span className="text-[#0b5cff]">Australia?</span>
          </h2>
        </div>

        {/* Structured Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reasons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`bg-white border border-slate-200/80 border-l-4 ${item.accentBorder} rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl border ${item.iconBg} shrink-0`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
      {/* Go8 Section */}
      <section className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-14">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-700">What Is Go8 Australia?</h2>
          <p className="text-base sm:text-lg text-slate-900">
            The Group of Eight (Go8) comprises Australia's leading research-intensive universities, established in 1999:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm sm:text-base md:text-lg">
            <li>The University of Adelaide</li>
            <li>The Australian National University</li>
            <li>The University of Melbourne</li>
            <li>Monash University</li>
            <li>The University of New South Wales</li>
            <li>The University of Queensland</li>
            <li>The University of Sydney</li>
            <li>The University of Western Australia</li>
          </ul>
        </div>
      </section>

    </div>
  );
}