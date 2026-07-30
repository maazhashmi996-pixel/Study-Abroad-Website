"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";

// Swiper Components & Styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import {
  FaUser,
  FaAward,
  FaCheck,
  FaNetworkWired,
  FaNewspaper,
  FaCertificate,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-fade";

type TabType = "courses" | "universities" | "scholarships" | "intelligent";

export default function HeroSection() {
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
      image: "/images/hero-bg-1.webp",
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
    {
      id: 4,
      image: "/images/award3.webp",
      hasText: false,
    },
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
    <div className="relative w-full font-sans bg-[#43246f]  rounded-2xl">
      {/* ---------------- 1. TOP HERO SLIDER ---------------- */}
      <section className="relative w-full h-[480px] md:h-[580px]">
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
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-full  rounded-2xl">
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt="Study Abroad"
                  fill
                  priority
                  className="object-cover"
                />

                {/* Purple Overlay */}
                <div className="absolute inset-0 bg-[#3b1d5c]/40" />

                {/* CONDITIONAL TEXT CONTENT */}
                {item.hasText && (
                  <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-6 md:px-12 pb-28">
                    <div className="max-w-2xl text-white z-10">
                      <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-md">
                        {item.title}
                      </h1>

                      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-100 font-medium whitespace-pre-line leading-relaxed">
                        {item.subtitle}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-4">
                        <button className="bg-white hover:bg-gray-100 text-[#3b1d5c] px-7 py-3 rounded-full font-bold text-sm md:text-base shadow-md transition-transform active:scale-95 cursor-pointer">
                          Free consultation
                        </button>

                        <button className="bg-[#f1b317] hover:bg-[#d99f12] text-[#3b1d5c] px-7 py-3 rounded-full font-bold text-sm md:text-base shadow-md transition-transform active:scale-95 cursor-pointer">
                          Check Eligibility
                        </button>
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
      <div className="relative mt-18 w-full bg-[#43246f] ">
        
        {/* OVERLAPPING SEARCH CARD */}
        <div className="relative -mt-24 sm:-mt-28 md:-mt-32 z-30 max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-[28px] shadow-2xl p-6 md:p-8 border border-gray-100 relative">
            
            {/* TABS HEADER */}
            <div className="flex items-center gap-6 sm:gap-10 border-b border-gray-100 pb-4 mb-6 overflow-x-auto scrollbar-none">
              <button
                onClick={() => {
                  setActiveTab("courses");
                  setOpenDropdown(null);
                }}
                className={`text-sm md:text-base font-semibold transition-colors whitespace-nowrap pb-1 relative ${
                  activeTab === "courses"
                    ? "text-[#3b1d5c] font-bold"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Courses
                {activeTab === "courses" && (
                  <span className="absolute bottom-[-17px] left-0 right-0 h-[3px] bg-[#3b1d5c] rounded-full" />
                )}
              </button>

              <button
                onClick={() => {
                  setActiveTab("universities");
                  setOpenDropdown(null);
                }}
                className={`text-sm md:text-base font-semibold transition-colors whitespace-nowrap pb-1 relative ${
                  activeTab === "universities"
                    ? "text-[#3b1d5c] font-bold"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Universities
                {activeTab === "universities" && (
                  <span className="absolute bottom-[-17px] left-0 right-0 h-[3px] bg-[#3b1d5c] rounded-full" />
                )}
              </button>

              <button
                onClick={() => {
                  setActiveTab("scholarships");
                  setOpenDropdown(null);
                }}
                className={`text-sm md:text-base font-semibold transition-colors whitespace-nowrap pb-1 relative ${
                  activeTab === "scholarships"
                    ? "text-[#3b1d5c] font-bold"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Scholarships
                {activeTab === "scholarships" && (
                  <span className="absolute bottom-[-17px] left-0 right-0 h-[3px] bg-[#3b1d5c] rounded-full" />
                )}
              </button>

              <button
                onClick={() => {
                  setActiveTab("intelligent");
                  setOpenDropdown(null);
                }}
                className={`text-sm md:text-base font-semibold transition-colors whitespace-nowrap flex items-center gap-2 pb-1 relative ${
                  activeTab === "intelligent"
                    ? "text-[#3b1d5c] font-bold"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Intelligent Search
                <span className="bg-[#fef08a] text-[#a16207] text-[10px] font-bold px-2.5 py-0.5 rounded-full lowercase">
                  coming soon
                </span>
                {activeTab === "intelligent" && (
                  <span className="absolute bottom-[-17px] left-0 right-0 h-[3px] bg-[#3b1d5c] rounded-full" />
                )}
              </button>
            </div>

            {/* TAB 1: COURSES */}
            {activeTab === "courses" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown("course")}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm text-left text-gray-700 flex justify-between items-center focus:border-[#3b1d5c] transition"
                  >
                    <span className="truncate">
                      {selectedCourse || "Select Course"}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
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
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#3b1d5c] rounded-xl cursor-pointer transition"
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
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm text-left text-gray-700 flex justify-between items-center focus:border-[#3b1d5c] transition"
                  >
                    <span className="truncate">
                      {selectedQualifications.length > 0
                        ? selectedQualifications.join(", ")
                        : "Select Qualification"}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>

                  {openDropdown === "qualification" && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl p-4 z-50 space-y-3">
                      {qualificationList.map((qual) => (
                        <label
                          key={qual}
                          className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer select-none"
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
                    className="w-full appearance-none bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm text-gray-700 outline-none focus:border-[#3b1d5c] cursor-pointer pr-10"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                <input
                  type="text"
                  value={universityQuery}
                  onChange={(e) => setUniversityQuery(e.target.value)}
                  placeholder="Start typing university name..."
                  className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm text-gray-700 outline-none focus:border-[#3b1d5c] transition"
                />

                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full appearance-none bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm text-gray-700 outline-none focus:border-[#3b1d5c] cursor-pointer pr-10"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown("qualification")}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm text-left text-gray-700 flex justify-between items-center focus:border-[#3b1d5c] transition"
                  >
                    <span className="truncate">
                      {selectedQualifications.length > 0
                        ? selectedQualifications.join(", ")
                        : "Select Qualification"}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>

                  {openDropdown === "qualification" && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl p-4 z-50 space-y-3">
                      {qualificationList.map((qual) => (
                        <label
                          key={qual}
                          className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer select-none"
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
                    className="w-full appearance-none bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm text-gray-700 outline-none focus:border-[#3b1d5c] cursor-pointer pr-10"
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
              <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center text-gray-400 my-2">
                <span className="text-sm font-medium block text-gray-500">
                  Intelligent Search coming soon — placeholder area
                </span>
              </div>
            )}

            {/* FLOATING SEARCH BUTTON */}
            <div className="flex justify-center -mb-12 mt-6">
              <button
                type="button"
                className="bg-[#f1b317] hover:bg-[#e0a30f] text-[#3b1d5c] font-extrabold text-sm px-8 py-3 rounded-full shadow-lg flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
              >
                <Search className="w-4 h-4 stroke-[3]" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE CONTENT AREA */}
        <div className="flex flex-col px-6 md:px-20 pt-20 pb-16 text-white  rounded-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-10 flex items-center justify-center md:text-left">
            Why Choose Times Consultant?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="flex flex-col border border-white/20 rounded-2xl bg-[#61389b] hover:bg-amber-500 transition-colors duration-500 p-7 gap-5"
              >
                <h3 className="font-bold text-2xl">{box.years}</h3>

                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold">{box.title}</h4>
                  <div className="h-12 w-12 items-center justify-center flex rounded-full text-2xl bg-amber-500 text-white shrink-0">
                    {box.icon}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-gray-100">{box.paragraph}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}