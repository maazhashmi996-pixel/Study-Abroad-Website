"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Globe,
  Home,
  Languages,
  CheckCircle2,
  Award,
  Users,
  Target,
} from "lucide-react";
import Image from "next/image";

interface CourseCard {
  title: string;
  badgeText: string;
  logoText: string;
  features: string[];
}

const coursesData: CourseCard[] = [
  {
    title: "IELTS Preparation",
    badgeText: "Includes up to 50% discount voucher",
    logoText: "IELTS",
    features: [
      "Free orientation sessions",
      "Focused training for each module",
      "One-on-one speaking practice",
      "Mock exams with feedback",
      "Includes up to 50% discount voucher",
    ],
  },
  {
    title: "PTE Preparation",
    badgeText: "Comes with up to 50% discount for a pocket-friendly start",
    logoText: "PTE",
    features: [
      "Free introductory class",
      "Skill-based practice sessions",
      "AI-based speaking evaluation",
      "Mock tests with tips",
      "Comes with up to 50% discount for a pocket-friendly start",
    ],
  },
  {
    title: "TOEFL Preparation",
    badgeText: "Comes with up to 50% discount for added value",
    logoText: "TOEFL",
    features: [
      "Understand the test format",
      "Enhance your writing",
      "Improve speaking fluency",
      "Practice tests and score analysis",
      "Comes with up to 50% discount for added value",
    ],
  },
  {
    title: "Duolingo English Test Preparation",
    badgeText: "Includes up to 50% discount for affordable learning",
    logoText: "DUOLINGO",
    features: [
      "Free trial session for test pattern",
      "Vocabulary and grammar sessions",
      "Performance tracking after every module",
      "Performance tracking with feedback",
      "Includes up to 50% discount for affordable learning",
    ],
  },
  {
    title: "German Test Preparation",
    badgeText: "Up to 50% discount for cost-effective prep",
    logoText: "DSH / GERMAN",
    features: [
      "Free introductory session",
      "Individual module practice",
      "German writing and speaking skills",
      "Mock exams with feedback",
      "Up to 50% discount for cost-effective prep",
    ],
  },
  {
    title: "GMAT Preparation",
    badgeText: "Up to 50% discount on your registration",
    logoText: "GMAT",
    features: [
      "Free trial session",
      "Analytical writing assessment",
      "Learn time-saving strategies",
      "Practice test with feedback",
      "Up to 50% discount on your registration",
    ],
  },
  {
    title: "GRE Preparation",
    badgeText: "Enroll with an up to 50% discount voucher",
    logoText: "GRE",
    features: [
      "Free GRE overview session",
      "Strengthen specific modules",
      "Daily vocabulary builder",
      "Tests with scoring analytics",
      "Enroll with an up to 50% discount voucher",
    ],
  },
];

export default function LanguageTestPreparationPage() {
  const pathname = usePathname();

  const sidebarItems = [
    { name: "Study Abroad", icon: Globe, href: "/study-abroad" },
    { name: "Accommodations", icon: Home, href: "/Accommodation" },
    { name: "Languages", icon: Languages, href: "/languages" },
  ];

  return (
    <div className="min-h-screen  text-slate-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Section Grid Layout */}
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
                        ? "bg-[#0b5cff] text-slate-900 border-blue-400/30 shadow-lg"
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

          {/* RIGHT CONTENT AREA */}
          <div className="lg:col-span-3 space-y-8 sm:space-y-10">
            
            {/* Header Titles */}
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff] bg-slate-900 px-3.5 py-1.5 rounded-full inline-block border border-slate-800">
                Master a New Language with D. Education Zone <span className="text-red-500">•</span>
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Language Test Preparation
              </h1>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
                Whether you are planning to study, work, or live abroad, mastering the local language can significantly enhance your experience and opportunities.
              </p>
            </div>

            {/* We Are Here To Help You With */}
            <div className="space-y-3 bg-slate-900 p-5 sm:p-6 rounded-2xl shadow-xl border border-slate-800">
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                We Are Here to Help You With
              </h2>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                Take the first step to your career with D. Education Zone. Looking for solutions? We have got everything covered for you from visa services to career development.
              </p>

              <ul className="space-y-2 pt-1">
                {["Language Courses", "Conversation Practices", "Test Preparation"].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0b5cff] shrink-0" />
                    <span className="font-semibold text-xs sm:text-sm text-slate-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Language Courses Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <span className="text-[#0b5cff]">#</span> Language Courses
                </h2>
                <p className="text-slate-700 text-xs sm:text-sm mt-1">
                  We offer comprehensive language courses in Pakistan to help you master new languages and achieve your goals. Our offerings include:
                </p>
              </div>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {coursesData.map((course, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 border border-slate-800 hover:border-[#0b5cff]/50 text-white rounded-2xl p-5 shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Logo Box */}
                      <div className="bg-[#0b5cff] text-white font-black text-center py-2 px-3 rounded-xl text-xs sm:text-sm tracking-wider mb-3 shadow-md">
                        {course.logoText}
                      </div>

                      {/* Course Title */}
                      <h3 className="font-bold text-center text-sm sm:text-base mb-4 text-white group-hover:text-[#0b5cff] transition-colors">
                        {course.title}
                      </h3>

                      {/* Bullet Features */}
                      <ul className="space-y-2 mb-6">
                        {course.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0b5cff] mr-1.5 mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Badge / Footer */}
                    <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-2 text-center text-[11px] font-semibold text-[#0b5cff]">
                      {course.badgeText}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Callback Form Card */}
            <div className="bg-slate-900 rounded-2xl p-5 sm:p-8 border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-2xl">
              
              {/* Left Graphic Illustration */}
              <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-2">
                <div className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-2">
                  <Image
                    src="/images/services/10-1.png"
                    alt="Language test preparation representation"
                    fill
                    sizes="280px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right Form */}
              <div className="md:col-span-8 bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800 space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Get a call-back within 24 hours
                </h3>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#0b5cff] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#0b5cff] transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#0b5cff] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <select className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-900 border border-slate-800 rounded-xl text-slate-300 focus:outline-none focus:border-[#0b5cff] transition-colors">
                      <option value="">Test You Want</option>
                      <option value="IELTS">IELTS</option>
                      <option value="PTE">PTE</option>
                      <option value="TOEFL">TOEFL</option>
                      <option value="Duolingo">Duolingo</option>
                      <option value="German">German</option>
                    </select>
                    <select className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-900 border border-slate-800 rounded-xl text-slate-300 focus:outline-none focus:border-[#0b5cff] transition-colors">
                      <option value="">Preferred Mode of Learning</option>
                      <option value="Online">Online</option>
                      <option value="In-person">In-person</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <select className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-900 border border-slate-800 rounded-xl text-slate-300 focus:outline-none focus:border-[#0b5cff] transition-colors">
                      <option value="">Select City</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Islamabad">Islamabad</option>
                    </select>
                    <select className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-900 border border-slate-800 rounded-xl text-slate-300 focus:outline-none focus:border-[#0b5cff] transition-colors">
                      <option value="">Nearest Office</option>
                      <option value="Gulberg">Gulberg, Lahore</option>
                      <option value="DHA">DHA, Lahore</option>
                      <option value="Blue Area">Blue Area, Islamabad</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-[#0b5cff] hover:bg-blue-600 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all uppercase tracking-wider mt-2 cursor-pointer border border-blue-400/20 active:scale-[0.99]"
                  >
                    Get Free Consultation
                  </button>
                </form>
              </div>
            </div>

            {/* Content Text Sections */}
            <div className="space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
              <div className="space-y-1.5">
                <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-[#0b5cff]">#</span> Test Preparation
                </h2>
                <p className="text-slate-700">
                  Get structured coaching for language tests like IELTS and PTE with D. Education Zone. Our trainers focus on all test modules, share proven strategies, and provide regular mock tests so you understand the format, manage time better, and aim for your target score with confidence.
                </p>
              </div>

              <div className="space-y-1.5">
                <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-[#0b5cff]">#</span> Conversation Practices
                </h2>
                <p className="text-slate-700">
                  Build real speaking confidence with guided conversation practice sessions. We help you improve pronunciation, fluency, and everyday vocabulary through one-to-one and group speaking activities, so you feel prepared for the speaking section of exams and real-life communication abroad.
                </p>
              </div>
            </div>

            {/* Why Choose D.Education Zone Cards */}
            <div className="space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-white">
                Why Choose D. Education Zone for Test Preparation?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3 shadow-lg">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-[#0b5cff] border border-slate-800">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Experienced instructors with a focus on getting students ready for exams like the PTE, IELTS, and German language proficiency provide individualized coaching through D. Education Zone in Pakistan.
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3 shadow-lg">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-[#0b5cff] border border-slate-800">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    D. Education Zone provides individualized one-on-one coaching sessions to help you master particular test portions, guaranteeing you receive tailored feedback and support.
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3 shadow-lg">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-[#0b5cff] border border-slate-800">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our team of experts will be there for you at every step of the exam preparation process. To make sure you're on track to meet your objectives, we provide regular feedback on performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Text */}
            <div className="space-y-2 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-900 pt-6">
              <h3 className="font-bold text-white text-base">
                Start Your Language Learning Journey Today!
              </h3>
              <p>
                Don't let language barriers hold you back. Contact D. Education Zone now to enroll in our language courses and take the first step towards mastering a new language. Visit or Call us today to learn more and begin your language learning journey with confidence!
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}