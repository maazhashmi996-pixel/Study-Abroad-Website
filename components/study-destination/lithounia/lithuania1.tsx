"use client";

import Image from "next/image";
import { 
  FaCheck, 
  FaGlobeEurope, 
  FaGraduationCap, 
  FaShieldAlt, 
  FaWallet 
} from "react-icons/fa";

export default function Lithuania1() {
  const tableOfContents = [
    { title: "Admission requirements in Lithuania", id: "admission-requirements" },
    { title: "Cost of studying in Lithuania", id: "cost-of-studying" },
    { title: "Scholarships for students in Lithuania", id: "scholarships" },
    { title: "Visa requirements in Lithuania", id: "visa-requirements" },
    { title: "Popular courses to Study in Lithuania", id: "popular-courses" },
    { title: "Post-Study work opportunities", id: "post-study-work" },
    { title: "Cost of living in Lithuania", id: "cost-of-living" },
    { title: "Book a meeting with an expert", id: "book-meeting" },
  ];

  const reasons = [
    {
      title: "A Small Country",
      description:
        "Lithuania doesn’t try to compete with Europe’s largest education hubs. Instead, it focuses on quality, accessibility, and student support. Universities work with students, and class sizes are generally smaller than in larger European countries.",
      icon: FaGraduationCap,
      accentBorder: "border-l-red-500",
      iconBg: "bg-red-50 text-red-600 border-red-100",
    },
    {
      title: "English-Taught Programs",
      description:
        "Lithuanian universities offer a growing range of English-taught programs, particularly in business, IT, engineering, health sciences, and social sciences. These programs are specifically for international classrooms, not adapted at the last minute.",
      icon: FaWallet,
      accentBorder: "border-l-[#0b5cff]",
      iconBg: "bg-blue-50 text-[#0b5cff] border-blue-100",
    },
    {
      title: "Living in a Safe Environment",
      description:
        "Cities like Vilnius and Kaunas are known for safety, cleanliness, and efficient public transport. Life moves at a steady pace. There’s enough activity to stay engaged, but not so much that it becomes overwhelming.",
      icon: FaGlobeEurope,
      accentBorder: "border-l-slate-700",
      iconBg: "bg-slate-100 text-slate-700 border-slate-200",
    },
    {
      title: "A Gateway to Europe",
      description:
        "As a member of the European Union and the Schengen Area, Lithuania helps students to travel freely across most of Europe. This exposure adds value beyond academics, culturally and professionally.",
      icon: FaShieldAlt,
      accentBorder: "border-l-red-500",
      iconBg: "bg-red-50 text-red-600 border-red-100",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* 1. Responsive Image Container */}
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[550px]">
          <Image
            src="/images/study-dest/lithounia.jpg"
            alt="Study in Lithuania"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* 2. Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/60 to-transparent"></div>

        {/* 3. Hero Content Highlights */}
        <div className="absolute inset-0 flex items-end pb-6 md:pb-10 px-4 sm:px-8 md:px-12 z-20">
          <div className="max-w-7xl mx-auto w-full">
            <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-white text-sm sm:text-base md:text-lg font-medium drop-shadow-md">
              <li>15+ Universities and Colleges</li>
              <li>€2,000 – €3,000 Average Annual Tuition Fee</li>
              <li>1 Year Post-Study Work Permit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#1a233d] font-bold border-b-2 pb-2">
            Lithuania
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 font-semibold">
            Lithuania is not the country students mention first, and it’s rarely the one families ask about by name. Instead, it comes up after a more extended discussion, when someone asks, “Is there anywhere in Europe that’s affordable, English-taught, and not overcrowded?”
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 font-semibold">
            That’s where Lithuania fits in. At Times Consultant, students who choose Lithuania are those who’ve done their homework. They aren’t chasing rankings alone. They want a degree that works, a calm environment, and a place where international students aren’t treated like extras. Lithuania, especially over the last decade, has built exactly that kind of system.
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
            {tableOfContents.map((item, index) => (
              <a
                key={index}
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

      {/* Why Study in Lithuania Section */}
      <section className="bg-slate-50/80 text-slate-900 py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0b5cff] px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse" />
              Destination Guide
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Why Study in <span className="text-[#0b5cff]">Lithuania?</span>
            </h2>
          </div>

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
    </div>
  );
}