"use client";

import React, { useState } from "react";
import { CheckCircle2, Globe, Home, Languages, Calendar } from "lucide-react";

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
    intro:
      "Finding the ideal accommodation service is integral to having a comfortable and successful study or work stay abroad. At Times Consultant, we are committed to assisting you in finding the finest area to live based on your requirements and preferences.",
    bulletHeader: "Accommodation Services We Offer",
    bullets: [
      "Student Accommodation",
      "University Accommodation",
      "Customized Accommodation Services",
    ],
    sections: [
      {
        title: "Student Accommodation",
        text: "We recognize that students have specific accommodation demands. Our comprehensive services ensure that you discover the ideal student accommodation. We help students choose college accommodation that is both convenient and provides a sense of belonging. In addition, we can help you identify private rental options that fit your budget and lifestyle.",
      },
      {
        title: "University Accommodation",
        text: "Living on campus can significantly improve your education experience. We offer special accommodation services for all major and high-ranking universities, ensuring that you find comfortable and convenient housing. We also help you secure housing at various universities, providing a safe and supportive atmosphere for your study.",
      },
      {
        title: "Customized Accommodation",
        text: "Recognizing that each student has unique needs, we provide specialized accommodation alternatives. This includes personalized counseling sessions to better understand your preferences and needs, and assisting you in completing and submitting applications to ensure a smooth experience.",
      },
      {
        title: "Trust Times Consultant for Safety and Security",
        text: "Your safety is our top priority. We ensure that the accommodation options we recommend to book are in safe neighborhoods and have necessary security measures in place.",
      },
    ],
    ctaText: "Book Accommodation",
  },
  "Study Abroad": {
    title: "Study Abroad",
    subtitle: "Your Gateway to Global Education",
    intro:
      "Navigating international admissions can be overwhelming. We guide you step-by-step through university applications, course selections, and visa processes for top destinations globally.",
    bulletHeader: "Our Core Study Abroad Services",
    bullets: [
      "University & Course Selection",
      "Visa Guidance & Filing",
      "Scholarship Applications",
    ],
    sections: [
      {
        title: "University Admissions",
        text: "We assist in matching your career goals with the best-fit global universities and guide you through the complete application workflow.",
      },
      {
        title: "Visa Assistance",
        text: "Our experts provide complete documentation review and mock interview sessions to maximize your student visa approval success rate.",
      },
    ],
    ctaText: "Apply For Consultation",
  },
  Languages: {
    title: "Language Courses",
    subtitle: "Master the Language, Master Your Future",
    intro:
      "Achieve your required proficiency test scores with our specialized prep classes for IELTS, PTE, TOEFL, and regional languages.",
    bulletHeader: "Available Language Programs",
    bullets: [
      "IELTS & PTE Preparation",
      "German Language Courses",
      "English Communication Skills",
    ],
    sections: [
      {
        title: "IELTS & PTE Training",
        text: "Interactive lectures and periodic mock tests led by certified trainers to ensure you achieve target band scores.",
      },
      {
        title: "German Language Modules",
        text: "Structured courses covering A1 to B2 levels designed specifically for students planning to study in Germany.",
      },
    ],
    ctaText: "Enroll in a Course",
  },
};

export default function ServicesOffer() {
  const [activeTab, setActiveTab] = useState<TabName>("Accommodations");

  const sidebarItems = [
    { name: "Study Abroad" as TabName, icon: Globe },
    { name: "Accommodations" as TabName, icon: Home },
    { name: "Languages" as TabName, icon: Languages },
  ];

  const currentContent = servicesData[activeTab];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* MAIN SECTION LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          
          {/* NAVIGATION SIDEBAR */}
          <div className="lg:col-span-1 w-full sticky top-4 sm:top-6 z-20">
            <div className="bg-[#3B1E54] p-2.5 sm:p-4 rounded-2xl shadow-md flex lg:flex-col gap-2 overflow-x-auto no-scrollbar">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.name;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveTab(item.name)}
                    className={`flex items-center space-x-2.5 sm:space-x-3 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 text-left whitespace-nowrap shrink-0 lg:shrink lg:w-full cursor-pointer focus:outline-none ${
                      isActive
                        ? "bg-[#ECA82C] text-[#3B1E54] shadow-md"
                        : "bg-white/10 lg:bg-white text-white lg:text-[#3B1E54] hover:bg-white/20 lg:hover:bg-slate-100"
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-3 bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6 sm:space-y-8">
            
            {/* Header Titles */}
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

            {/* Introductory Text */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {currentContent.intro}
            </p>

            {/* Bullet Points Section */}
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

            {/* Detail Content Sections */}
            <div className="space-y-6 text-slate-600 text-xs sm:text-sm leading-relaxed">
              {currentContent.sections.map((sec, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h3 className="font-bold text-[#3B1E54] text-sm sm:text-base">
                    {sec.title}
                  </h3>
                  <p>{sec.text}</p>
                </div>
              ))}

              {/* Call-to-Action Button */}
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