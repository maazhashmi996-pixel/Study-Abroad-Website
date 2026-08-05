"use client";

import React, { useState } from "react";
import { CheckCircle2, Globe, Home, Languages, Calendar } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Active link highlighted rakhne ke liye

type TabName = "Study Abroad" | "Accommodations" | "Languages";

interface TabContent {
  title: string;
  subtitle: string;
  intro: string;
  bulletHeader: string;
  bullets: string[];
  sections: { title: string; text: string }[];
  ctaText: string;
}

const servicesData: Record<TabName, TabContent> = {
  Accommodations: {
    title: "Accommodations",
    subtitle: "Helping You Secure the Best Place to Stay",
    intro:      "Finding the ideal accommodation service is integral to having a comfortable and successful study or work stay abroad. At D.Education Zone, we are committed to assisting you in finding the finest area to live based on your requirements and preferences.",
    bulletHeader: "Accommodation Services We Offer",
    bullets: [
      "Student Accommodation",
      "University Accommodation",
      "Customized Accommodation Services",
    ],
    sections: [
      {
        title: "Student Accommodation",
        text: "We recognize that students have specific accommodation demands. Our comprehensive services ensure that you discover the ideal student accommodation.",
      },
      {
        title: "University Accommodation",
        text: "Living on campus can significantly improve your education experience. We offer special accommodation services for all major universities.",
      },
      {
        title: "Customized Accommodation",
        text: "Recognizing that each student has unique needs, we provide specialized accommodation alternatives.",
      },
      {
        title: "Trust D.Education Zone for Safety and Security",
        text: "Your safety is our top priority. We ensure that the accommodation options we recommend are in safe neighborhoods.",
      },
    ],
    ctaText: "Book Accommodation",
  },
  "Study Abroad": {
    title: "Study Abroad",
    subtitle: "Explore International Education Opportunities",
    intro: "Get guidance on choosing universities, courses, and visas worldwide.",
    bulletHeader: "Study Abroad Services",
    bullets: ["University Selection", "Visa Guidance", "Scholarship Assistance"],
    sections: [{ title: "Overview", text: "Complete end-to-end guidance for students." }],
    ctaText: "Apply Now",
  },
  Languages: {
    title: "Languages",
    subtitle: "Language Prep & Certification",
    intro: "Prepare for IELTS, TOEFL, and other language tests.",
    bulletHeader: "Language Courses Offered",
    bullets: ["IELTS Prep", "TOEFL Prep", "Spoken English"],
    sections: [{ title: "Prep Classes", text: "Expert tutors and practice materials." }],
    ctaText: "Enroll Now",
  },
};


export default function ServicesOffer() {
  const pathname = usePathname();

  // Sidebar Items list with proper href strings
  const sidebarItems = [
    { name: "Study Abroad" as TabName, icon: Globe, href: "/study-abroad" },
    { name: "Accommodation" as TabName, icon: Home, href: "/Accommodation" },
    { name: "Languages" as TabName, icon: Languages, href: "/languages" },
  ];

  // Default fallback content if needed
  const currentContent = servicesData["Accommodations"];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-6 sm:py-12 px-4 sm:px-6 lg:px-2 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          
          {/* NAVIGATION SIDEBAR */}
          <div className="lg:col-span-1 w-full sticky top-4 sm:top-6 z-20">
            <div className="bg-[#3B1E54] p-2.5 sm:p-4 rounded-2xl shadow-md flex lg:flex-col gap-2 overflow-x-auto no-scrollbar">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-2.5 sm:space-x-3 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 text-left whitespace-nowrap shrink-0 lg:shrink lg:w-full cursor-pointer focus:outline-none ${
                      isActive
                        ? "bg-[#ECA82C] text-[#3B1E54] shadow-md"
                        : "bg-white/10 lg:bg-white text-white lg:text-[#3B1E54] hover:bg-white/20 lg:hover:bg-slate-100"
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-3 bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3B1E54] tracking-tight">
                {currentContent.title}
              </h1>
              <div>
                <span className="text-xs sm:text-sm font-semibold text-[#ECA82C] bg-[#3B1E54] px-3 py-1 rounded-md inline-block">
                  {currentContent.subtitle}
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {currentContent.intro}
            </p>

            <div className="space-y-3 bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-100">
              <h2 className="text-base sm:text-lg font-bold text-[#3B1E54]">
                {currentContent.bulletHeader}
              </h2>
              <ul className="space-y-2">
                {currentContent.bullets.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3B1E54] shrink-0" />
                    <span className="font-semibold text-xs sm:text-sm text-[#3B1E54]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 text-slate-600 text-xs sm:text-sm leading-relaxed">
              {currentContent.sections.map((sec, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h3 className="font-bold text-[#3B1E54] text-sm sm:text-base">
                    {sec.title}
                  </h3>
                  <p>{sec.text}</p>
                </div>
              ))}

              <div className="pt-4">
                <button
                  type="button"
                  className="bg-[#3B1E54] hover:bg-[#2B153E] text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all duration-200 text-xs sm:text-sm flex items-center space-x-2.5 cursor-pointer active:scale-95"
                >
                  <Calendar className="w-4 h-4 text-[#ECA82C]" />
                  <span>{currentContent.ctaText}</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}