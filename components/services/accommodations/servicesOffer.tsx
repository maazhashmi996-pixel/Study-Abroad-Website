"use client";

import React from "react";
import { CheckCircle2, Globe, Home, Languages, Calendar } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      "Finding the ideal accommodation service is integral to having a comfortable and successful study or work stay abroad. At D. Education Zone, we are committed to assisting you in finding the finest area to live based on your requirements and preferences.",
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
        title: "Trust D. Education Zone for Safety and Security",
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

  const sidebarItems = [
    { name: "Study Abroad" as TabName, icon: Globe, href: "/study-abroad" },
    { name: "Accommodation" as TabName, icon: Home, href: "/Accommodation" },
    { name: "Languages" as TabName, icon: Languages, href: "/languages" },
  ];

  const currentContent = servicesData["Accommodations"];

  return (
    <div className="min-h-screen  text-slate-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          
          {/* NAVIGATION SIDEBAR */}
          <div className="lg:col-span-1 w-full sticky top-4 sm:top-6 z-20">
            <div className="bg-slate-900 p-2.5 sm:p-4 rounded-2xl shadow-xl border border-slate-800 flex lg:flex-col gap-2 overflow-x-auto no-scrollbar">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-2.5 sm:space-x-3 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 text-left whitespace-nowrap shrink-0 lg:shrink lg:w-full cursor-pointer border ${
                      isActive
                        ? "bg-[#0b5cff] text-slate-800 border-blue-400/30 shadow-lg"
                        : "bg-slate-950/60 text-slate-300 border-slate-800/80 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${isActive ? "text-white" : "text-[#0b5cff]"}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-3 bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-800 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff] bg-black px-3.5 py-1 rounded-full inline-block border border-slate-800">
                {currentContent.subtitle} <span className="text-red-500">•</span>
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                {currentContent.title}
              </h1>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {currentContent.intro}
            </p>

            {/* Bullets Box */}
            <div className="space-y-3 bg-slate-950 p-5 rounded-xl border border-slate-800">
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                {currentContent.bulletHeader}
              </h2>
              <ul className="space-y-2.5">
                {currentContent.bullets.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0b5cff] shrink-0" />
                    <span className="font-semibold text-xs sm:text-sm text-slate-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections Details */}
            <div className="space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
              {currentContent.sections.map((sec, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                    <span className="text-[#0b5cff]">#</span> {sec.title}
                  </h3>
                  <p className="text-slate-400">{sec.text}</p>
                </div>
              ))}

              <div className="pt-4">
                <Link
                 href="/login"
                  className="bg-[#0b5cff] hover:bg-blue-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all duration-200 text-xs sm:text-sm flex items-center space-x-2.5 cursor-pointer active:scale-95 border border-blue-400/20 uppercase tracking-wider"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>{currentContent.ctaText}</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}