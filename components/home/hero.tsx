"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";

// Swiper Components & Styles

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import {
  FaUser,
  FaAward,
  FaCheck,
  FaNetworkWired,
  FaNewspaper,
  FaCertificate,
} from "react-icons/fa";
import Link from "next/link";

type TabType = "courses" | "universities" | "scholarships" | "intelligent";

export default function HeroSlider() {

  // SLIDER IMAGES & BOXES DATA
  const boxes = [
    {
      years: "22 years",
      title: "Experienced Mentors",
      icon: <FaUser />,
      paragraph:
        "2.2 M students who trusted us with their future and we delivered with our expert guidance.",
    },
    {
      years: "65+",
      title: "Study Destinations Covered",
      icon: <FaCertificate />,
      paragraph:
        "Pursue your education in the world’s best study destinations. Explore the world while you study.",
    },
    {
      years: "40+",
      title: "Offices Across the Globe",
      icon: <FaAward />,
      paragraph:
        "Local presence with global reach to serve you better through our established global network.",
    },
    {
      years: "1000+",
      title: "University Partners",
      icon: <FaCheck />,
      paragraph:
        "Direct partnerships with top-ranked institutions worldwide to get you placed in your dream university.",
    },
    {
      years: "50+",
      title: "Strong Alumni Network",
      icon: <FaNewspaper />,
      paragraph:
        "Local presence with global reach to serve you better through our established global network.",
    },
    {
      years: "2.2M+",
      title: "Students Counseled",
      icon: <FaNetworkWired />,
      paragraph:
        "2.2 M students who trusted us with their future and we delivered with our expert guidance.",
    },
  ];

  const images = [
    {
      id: 1,
      image: "/images/award3.webp",
      title: "Pakistan #1 Study Abroad Consultant With The Largest Network",
      subtitle:
        "Largest Network of Offices in Pakistan Nationwide Access. One Standard of Excellence.",
      hasText: true,
    },
    {
      id: 2,
      image: "/images/award1.webp",
      hasText: false,
    },
    {
      id: 3,
      image: "/images/award2.webp",
      hasText: false,
    },
    // {
    //   id: 4,
    //   image: "/images/award3.webp",
    //   hasText: false,
    // },
  ];

  // SEARCH WIDGET STATES
  const [activeTab, setActiveTab] = useState<TabType>("courses");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [universityQuery, setUniversityQuery] = useState("");
  const [selectedQualifications, setSelectedQualifications] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const courseList = [
    "Architecture",
    "Arts & Humanities",
    "Business & Management",
    "Computer & IT",
    "Education",
    "Engineering & Technology",
    "Health & Medicine",
    "Law",
  ];

  const qualificationList = [
    "Undergraduate",
    "Postgraduate",
    "Postgraduate by Research",
  ];

  const handleQualificationToggle = (value: string) => {
    setSelectedQualifications((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
    <div className="relative w-full font-sans bg-[#43246f] rounded-2xl">
      {/* ---------------- 1. TOP HERO SLIDER ---------------- */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] md:h-[650px] lg:h-[720px] overflow-hidden rounded-t-2xl">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id} className="w-full h-full">
            <div className="relative w-full h-full min-h-[520px] sm:min-h-[580px] md:min-h-full flex items-center">
              
              {/* Background Image: Mobile par center-contain/fit aur desktop par cover */}
              <Image
                src={item.image}
                alt="Study Abroad"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center sm:object-center"
              />

              {/* Purple Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#3b1d5c]/70 via-[#3b1d5c]/50 to-[#3b1d5c]/80 sm:bg-[#3b1d5c]/40 z-10" />

                  {/* CONDITIONAL TEXT CONTENT */}
                   {item.hasText && (
                  <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-10 pb-20 sm:pb-24 flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
                  <div className="max-w-2xl text-white">
                    
                    {/* Heading: Responsive Text Sizing */}
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-lg">
                      {item.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-gray-100 font-medium leading-relaxed max-w-lg mx-auto sm:mx-0">
                      {item.subtitle}
                    </p>

                    {/* Action Buttons: Mobile par centered flex wrap */}
                    <div className="mt-6 sm:mt-8 flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
                      
                        <Link href="/free-consultation" className="text-white hover:bg-[#f1b317] hover:text-[#3b1d5c] border-2 border-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base shadow-md transition-all active:scale-95 cursor-pointer">
                        Free consultation
                        </Link>
                      

                        <Link href="/eligibility "  className="bg-[#f1b317] text-[#3b1d5c] hover:bg-white hover:text-[#3b1d5c] px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base shadow-md transition-all active:scale-95 cursor-pointer">
                        Check Eligibility
                        </Link>
                    </div>

                  </div>
               </div>
                )}
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
       </section>

      {/* ---------------- 2. WHY CHOOSE SECTION WITH OVERLAPPING CARD ---------------- */}
      <div className="relative w-full bg-[#43246f] rounded-b-2xl">
        
        {/* OVERLAPPING SEARCH CARD */}
           <div className="relative -mt-16 sm:-mt-24 md:-mt-28 z-30 w-full max-w-3xl mx-auto px-3 sm:px-4">          <div className="bg-white rounded-2xl sm:rounded-[28px] shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100 relative">
            
            {/* TABS HEADER */}
            <div className="flex items-center gap-4 sm:gap-8 border-b border-gray-100 pb-3 mb-5 overflow-x-auto scrollbar-none">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("courses");
                  setOpenDropdown(null);
                }}
                className={`text-xs sm:text-sm md:text-base font-semibold transition-colors whitespace-nowrap pb-1 relative cursor-pointer ${
                  activeTab === "courses"
                    ? "text-[#3b1d5c] font-bold"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Courses
                {activeTab === "courses" && (
                  <span className="absolute bottom-[-13px] sm:bottom-[-16px] left-0 right-0 h-[3px] bg-[#3b1d5c] rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("universities");
                  setOpenDropdown(null);
                }}
                className={`text-xs sm:text-sm md:text-base font-semibold transition-colors whitespace-nowrap pb-1 relative cursor-pointer ${
                  activeTab === "universities"
                    ? "text-[#3b1d5c] font-bold"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Universities
                {activeTab === "universities" && (
                  <span className="absolute bottom-[-13px] sm:bottom-[-16px] left-0 right-0 h-[3px] bg-[#3b1d5c] rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("scholarships");
                  setOpenDropdown(null);
                }}
                className={`text-xs sm:text-sm md:text-base font-semibold transition-colors whitespace-nowrap pb-1 relative cursor-pointer ${
                  activeTab === "scholarships"
                    ? "text-[#3b1d5c] font-bold"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Scholarships
                {activeTab === "scholarships" && (
                  <span className="absolute bottom-[-13px] sm:bottom-[-16px] left-0 right-0 h-[3px] bg-[#3b1d5c] rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("intelligent");
                  setOpenDropdown(null);
                }}
                className={`text-xs sm:text-sm md:text-base font-semibold transition-colors whitespace-nowrap flex items-center gap-1.5 pb-1 relative cursor-pointer ${
                  activeTab === "intelligent"
                    ? "text-[#3b1d5c] font-bold"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Intelligent Search
                <span className="bg-[#fef08a] text-[#a16207] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full lowercase">
                  coming soon
                </span>
                {activeTab === "intelligent" && (
                  <span className="absolute bottom-[-13px] sm:bottom-[-16px] left-0 right-0 h-[3px] bg-[#3b1d5c] rounded-full" />
                )}
              </button>
            </div>

            {/* TAB 1: COURSES */}
            {activeTab === "courses" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-2">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown("course")}
                    className="w-full bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 text-xs sm:text-sm text-left text-gray-700 flex justify-between items-center focus:border-[#3b1d5c] transition cursor-pointer"
                  >
                    <span className="truncate">
                      {selectedCourse || "Select Course"}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  </button>

                  {openDropdown === "course" && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl p-2 z-50 max-h-60 overflow-y-auto">
                      {courseList.map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            setSelectedCourse(item);
                            setOpenDropdown(null);
                          }}
                          className="px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-purple-50 hover:text-[#3b1d5c] rounded-xl cursor-pointer transition"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown("qualification")}
                    className="w-full bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 text-xs sm:text-sm text-left text-gray-700 flex justify-between items-center focus:border-[#3b1d5c] transition cursor-pointer"
                  >
                    <span className="truncate">
                      {selectedQualifications.length > 0
                        ? selectedQualifications.join(", ")
                        : "Select Qualification"}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  </button>

                  {openDropdown === "qualification" && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl p-4 z-50 space-y-3">
                      {qualificationList.map((qual) => (
                        <label
                          key={qual}
                          className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 cursor-pointer select-none"
                        >
                          <input
                            type="checkbox"
                            checked={selectedQualifications.includes(qual)}
                            onChange={() => handleQualificationToggle(qual)}
                            className="h-4 w-4 rounded accent-[#3b1d5c] cursor-pointer"
                          />
                          <span>{qual}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full appearance-none bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 text-xs sm:text-sm text-gray-700 outline-none focus:border-[#3b1d5c] cursor-pointer pr-10"
                  >
                    <option value="" disabled>
                      Select Location
                    </option>
                    <option value="uk">United Kingdom (UK)</option>
                    <option value="usa">United States (USA)</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            )}

            {/* TAB 2: UNIVERSITIES */}
            {activeTab === "universities" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-2">
                <input
                  type="text"
                  value={universityQuery}
                  onChange={(e) => setUniversityQuery(e.target.value)}
                  placeholder="Start typing university name..."
                  className="w-full bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 text-xs sm:text-sm text-gray-700 outline-none focus:border-[#3b1d5c] transition"
                />

                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full appearance-none bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 text-xs sm:text-sm text-gray-700 outline-none focus:border-[#3b1d5c] cursor-pointer pr-10"
                  >
                    <option value="" disabled>
                      Select Location
                    </option>
                    <option value="uk">United Kingdom (UK)</option>
                    <option value="usa">United States (USA)</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            )}

            {/* TAB 3: SCHOLARSHIPS */}
            {activeTab === "scholarships" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-2">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown("qualification")}
                    className="w-full bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 text-xs sm:text-sm text-left text-gray-700 flex justify-between items-center focus:border-[#3b1d5c] transition cursor-pointer"
                  >
                    <span className="truncate">
                      {selectedQualifications.length > 0
                        ? selectedQualifications.join(", ")
                        : "Select Qualification"}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  </button>

                  {openDropdown === "qualification" && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl p-4 z-50 space-y-3">
                      {qualificationList.map((qual) => (
                        <label
                          key={qual}
                          className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 cursor-pointer select-none"
                        >
                          <input
                            type="checkbox"
                            checked={selectedQualifications.includes(qual)}
                            onChange={() => handleQualificationToggle(qual)}
                            className="h-4 w-4 rounded accent-[#3b1d5c] cursor-pointer"
                          />
                          <span>{qual}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full appearance-none bg-white border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 text-xs sm:text-sm text-gray-700 outline-none focus:border-[#3b1d5c] cursor-pointer pr-10"
                  >
                    <option value="" disabled>
                      Select Location
                    </option>
                    <option value="uk">United Kingdom (UK)</option>
                    <option value="usa">United States (USA)</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            )}

            {/* TAB 4: INTELLIGENT SEARCH */}
            {activeTab === "intelligent" && (
              <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-4 sm:p-6 text-center text-gray-400 my-2">
                <span className="text-xs sm:text-sm font-medium block text-gray-500">
                  Intelligent Search coming soon — placeholder area
                </span>
              </div>
            )}

            {/* FLOATING SEARCH BUTTON */}
            <div className="flex justify-center -mb-10 sm:-mb-12 mt-4 sm:mt-6">
              <button
                type="button"
                className="bg-[#f1b317] hover:bg-[#e0a30f] text-[#3b1d5c] font-extrabold text-xs sm:text-sm px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
              >
                <Search className="w-4 h-4 stroke-[3]"/>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE CONTENT AREA */}
        <div className="flex flex-col  px-4 sm:px-8 md:px-16 lg:px-20 pt-16 sm:pt-20 pb-12 sm:pb-16 text-white rounded-2xl">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center md:text-left">
            Why Choose D.Education Zone?
          </h2>

          <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="flex flex-col border border-white/20 rounded-2xl bg-[#61389b] hover:bg-amber-500 transition-colors duration-500p-5 sm:p-7 gap-4 sm:gap-5"
              >
                <h3 className="font-bold text-xl sm:text-2xl">{box.years}</h3>

                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-lg sm:text-xl font-bold">{box.title}</h4>
                  <div className="h-10 w-10 sm:h-12 sm:w-12 items-center justify-center flex rounded-full text-xl sm:text-2xl bg-amber-500 text-white shrink-0">
                    {box.icon}
                  </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-gray-100">{box.paragraph}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    </>
  );
}