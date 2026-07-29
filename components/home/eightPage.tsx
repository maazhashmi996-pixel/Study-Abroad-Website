"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// SVG Icons for the Journey Section
const Icons = {
  Briefcase: () => (
    <svg className="w-7 h-7 fill-current" viewBox="0 0 512 512">
      <path d="M128 48C128 21.5 149.5 0 176 0l160 0c26.5 0 48 21.5 48 48l0 48 96 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L32 512c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l96 0 0-48zm48 48l160 0 0-48-160 0 0 48z" />
    </svg>
  ),
  SearchLocation: () => (
    <svg className="w-7 h-7 fill-current" viewBox="0 0 512 512">
      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
    </svg>
  ),
  BalanceScale: () => (
    <svg className="w-7 h-7 fill-current" viewBox="0 0 640 512">
      <path d="M256 32V64H384V32C384 14.3 369.7 0 352 0H288c-17.7 0-32 14.3-32 32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H288v64H160c-17.7 0-32 14.3-32 32v32c0 88.4 71.6 160 160 160s160-71.6 160-160V320c0-17.7-14.3-32-32-32H352V224H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" />
    </svg>
  ),
  ClipboardCheck: () => (
    <svg className="w-7 h-7 fill-current" viewBox="0 0 384 512">
      <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H48C21.5 64 0 85.5 0 112V464c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm116.3 180.3l-112 112c-6.2 6.2-16.4 6.2-22.6 0l-56-56c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L185 322.7l100.7-100.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </svg>
  ),
  University: () => (
    <svg className="w-7 h-7 fill-current" viewBox="0 0 512 512">
      <path d="M243.4 2.6l-224 96c-14 6-21.4 21.5-17.4 36.1S19.6 160 34.7 160H477.3c15.1 0 28.7-10.7 32.7-25.3s-3.4-30.1-17.4-36.1l-224-96c-7.9-3.4-16.8-3.4-24.7 0zM32 208H96v208H32V208zm128 0h64v208H160V208zm160 0h64v208H320V208zm128 0h64v208H448V208zM0 464c0 13.3 10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24z" />
    </svg>
  ),
  Passport: () => (
    <svg className="w-7 h-7 fill-current" viewBox="0 0 448 512">
      <path d="M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm224 64a96 96 0 1 0 0 192 96 96 0 1 0 0-192zm0 48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </svg>
  ),
};

export default function EightPage() {
  // Hero Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    destination: "",
    city: "",
    counsellingMode: "",
    studyLevel: "",
    question: "",
    agree: true,
  });

  // Destinations Active Tab & Slider State
  const [destinationTab, setDestinationTab] = useState<"countries" | "programmes">("countries");
  const [destSlideIndex, setDestSlideIndex] = useState(0);
  const [isDestPaused, setIsDestPaused] = useState(false);

  // University Partner Logos Slider State
  const [uniSlideIndex, setUniSlideIndex] = useState(0);
  const [isUniPaused, setIsUniPaused] = useState(false);

  // Tech Advantages Active Tab State
  const [activeAdvantage, setActiveAdvantage] = useState<number>(1);
  const [techSearch, setTechSearch] = useState({ university: "", location: "" });

  // FAQ Accordion State
  const [faqTab, setFaqTab] = useState<"company" | "services" | "destinations">("company");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Destinations List
  const destinations = [
    { country: "Belgium", flag: "🇧🇪", details: ["10+ Universities", "€2,000 – €5,000 Annual Tuition", "Post-Study Work Options"] },
    { country: "Canada", flag: "🇨🇦", details: ["100+ Universities", "CAD 15,000+ Annual Tuition", "PGWP Available"] },
    { country: "Cyprus", flag: "🇨🇾", details: ["15+ Universities", "€4,000 – €9,000 Annual Tuition Fee", "Limited Post Study Work Options"] },
    { country: "Denmark", flag: "🇩🇰", details: ["8+ Universities", "€6,000 – €16,000 Annual Tuition", "Post-Study Work Permits"] },
    { country: "Europe", flag: "🇪🇺", details: ["500+ Universities", "Varies by Country", "Schengen Area Access"] },
    { country: "Australia", flag: "🇦🇺", details: ["40+ Universities", "AUD 20,000+ Annual Tuition", "Subclass 485 Visa Options"] },
    { country: "United Kingdom", flag: "🇬🇧", details: ["130+ Universities", "£12,000+ Annual Tuition", "2-Year Graduate Route"] },
    { country: "USA", flag: "🇺🇸", details: ["1000+ Universities", "$20,000+ Annual Tuition", "OPT STEM Extension Options"] },
  ];

  // University Logos Data (3 Rows)
  const row1Logos = [
    { name: "Queens College", text: "QUEENS COLLEGE" },
    { name: "James Madison University", text: "JAMES MADISON UNIVERSITY" },
    { name: "LIU Post", text: "LIU Post" },
    { name: "Mercer University", text: "MERCER UNIVERSITY" },
    { name: "Pace University", text: "PACE UNIVERSITY" },
    { name: "American University", text: "AMERICAN UNIVERSITY" },
    { name: "UAB", text: "UAB BIRMINGHAM" },
    { name: "DePaul University", text: "DEPAUL UNIVERSITY" },
  ];

  const row2Logos = [
    { name: "UNB", text: "UNB" },
    { name: "Laurier", text: "LAURIER" },
    { name: "University of Saskatchewan", text: "U of Saskatchewan" },
    { name: "University of Manitoba", text: "University of Manitoba" },
    { name: "Columbia College", text: "Columbia College" },
    { name: "UIC", text: "UNIVERSITY OF ILLINOIS CHICAGO" },
    { name: "Trent University", text: "TRENT UNIVERSITY" },
    { name: "MacEwan University", text: "MacEwan UNIVERSITY" },
  ];

  const row3Logos = [
    { name: "University of Sheffield", text: "University of Sheffield" },
    { name: "Acadia University", text: "ACADIA" },
    { name: "Queen Mary", text: "Queen Mary" },
    { name: "UVIC", text: "UVIC" },
    { name: "Toronto Metropolitan", text: "Toronto Metropolitan" },
    { name: "University of Exeter", text: "UNIVERSITY OF EXETER" },
    { name: "Aston University", text: "Aston University" },
    { name: "University of Essex", text: "University of Essex" },
  ];

  // 1. Destinations 3-Second Automatic Slider Effect
  useEffect(() => {
    if (isDestPaused) return;
    const timer = setInterval(() => {
      setDestSlideIndex((prev) => (prev + 1) % destinations.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isDestPaused, destinations.length]);

  // 2. Universities 3-Second Automatic Slider Effect
  useEffect(() => {
    if (isUniPaused) return;
    const timer = setInterval(() => {
      setUniSlideIndex((prev) => (prev + 1) % row1Logos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isUniPaused, row1Logos.length]);

  const getVisibleDestinations = () => {
    const items = [];
    for (let i = 0; i < 5; i++) {
      items.push(destinations[(destSlideIndex + i) % destinations.length]);
    }
    return items;
  };

  const getVisibleLogos = (logoList: typeof row1Logos) => {
    const items = [];
    for (let i = 0; i < 7; i++) {
      items.push(logoList[(uniSlideIndex + i) % logoList.length]);
    }
    return items;
  };

  const techAdvantages = [
    { id: 1, text: "Search 3000+ Universities and 3.4M+ programs by location" },
    { id: 2, text: "Explore English-taught degree in 60+ countries" },
    { id: 3, text: "View intakes, modules, and deadlines in one place" },
    { id: 4, text: "Fully Funded Scholarships In Top Study Destinations" },
    { id: 5, text: "Access programs at every level – from diploma to PhDs" },
  ];

  const journeyCards = [
    { title: "Explore", icon: <Icons.Briefcase /> },
    { title: "Apply", icon: <Icons.SearchLocation /> },
    { title: "Compare", icon: <Icons.BalanceScale /> },
    { title: "Track", icon: <Icons.ClipboardCheck /> },
    { title: "Decide", icon: <Icons.University /> },
    { title: "Prepare", icon: <Icons.Passport /> },
  ];

  const faqs = [
    {
      question: "Who is Times Consultant?",
      answer: "Times Consultant is a leading education and study abroad consultancy in Pakistan helping students achieve their international academic goals.",
    },
    {
      question: "What is the mission of Times Consultant?",
      answer: "Our mission is to empower students through personalized counseling, application guidance, and visa support to access world-class education.",
    },
    {
      question: "What is the vision of Times Consultant?",
      answer: "To be the most trusted international education platform connecting students with global learning opportunities seamlessly.",
    },
    {
      question: "Why should I choose Times Consultant as my study abroad consultant in Pakistan?",
      answer: "We offer end-to-end guidance from expert counselors, direct university partnerships, high visa success rates, and full transparency.",
    },
    {
      question: "How much experience does Times Consultant have?",
      answer: "Times Consultant has over 20 years of industry experience assisting thousands of students worldwide.",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900 font-sans selection:bg-[#f7a600] selection:text-[#3b2768]">
      
      {/* ================= 4. TIMES TECH ADVANTAGES SECTION ================= */}
      <section className="bg-white py-16 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Times Tech Advantages
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Sophisticated Online platforms
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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
                    <span className="text-lg leading-none mt-0.5">📄</span>
                    <span className="text-sm sm:text-base leading-snug">{item.text}</span>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#f0ebf8] rounded-2xl p-6 sm:p-8 relative overflow-hidden flex items-center justify-center min-h-[380px] border border-purple-50">
                <div className="w-full max-w-md bg-gradient-to-br from-[#f2d398] via-[#e8a338] to-[#f7a600] rounded-3xl p-6 sm:p-8 shadow-xl relative z-10 space-y-4">
                  <input
                    type="text"
                    placeholder="Search Universities"
                    value={techSearch.university}
                    onChange={(e) => setTechSearch({ ...techSearch, university: e.target.value })}
                    className="w-full bg-white text-gray-800 placeholder-gray-400 rounded-full px-5 py-3 text-sm focus:outline-none shadow-sm"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={techSearch.location}
                    onChange={(e) => setTechSearch({ ...techSearch, location: e.target.value })}
                    className="w-full bg-white text-gray-800 placeholder-gray-400 rounded-full px-5 py-3 text-sm focus:outline-none shadow-sm"
                  />
                  <div className="flex justify-end pt-2">
                    <button className="bg-[#3b2768] hover:bg-[#2e1f52] text-white font-bold text-sm px-8 py-2.5 rounded-full shadow-md transition-colors">
                      Search
                    </button>
                  </div>
                  
                  <div className="absolute -left-6 bottom-8 bg-gray-600/80 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full -rotate-45 shadow">
                    Deadlines
                  </div>
                  <div className="absolute -right-4 top-12 bg-gray-600/80 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full rotate-45 shadow">
                    Scholarships
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* ================= 2. CHOOSE YOUR NEXT STUDY DESTINATION (AUTO-SLIDING 3 SECONDS) ================= */}
      <section className="bg-[#f7a600] py-16 px-6 lg:px-16 text-[#3b2768]">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Choose Your Next Study Destination
            </h2>
            <button className="bg-[#3b2768] text-white hover:bg-[#2b1c4d] font-bold px-6 py-2.5 rounded-full text-sm transition-transform active:scale-95 shadow-md">
              View all destinations
            </button>
          </div>

          <div className="flex justify-start space-x-6 border-b border-[#3b2768]/20 pb-2 text-xl font-bold">
            <button
              onClick={() => setDestinationTab("countries")}
              className={`pb-2 border-b-4 transition-all ${
                destinationTab === "countries"
                  ? "border-[#3b2768] text-[#3b2768]"
                  : "border-transparent text-[#3b2768]/60 hover:text-[#3b2768]"
              }`}
            >
              Countries
            </button>
            <button
              onClick={() => setDestinationTab("programmes")}
              className={`pb-2 border-b-4 transition-all ${
                destinationTab === "programmes"
                  ? "border-[#3b2768] text-[#3b2768]"
                  : "border-transparent text-[#3b2768]/60 hover:text-[#3b2768]"
              }`}
            >
              Programmes
            </button>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsDestPaused(true)}
            onMouseLeave={() => setIsDestPaused(false)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 transition-all duration-700 ease-in-out">
              {getVisibleDestinations().map((item, idx) => (
                <div key={`${item.country}-${idx}`} className="flex flex-col items-center">
                  <div className="w-full bg-[#c6bdde] rounded-3xl p-4 min-h-[280px] border-4 border-dashed border-[#b3a7d4] flex flex-col justify-between relative shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden group">
                    <div className="text-3xl">{item.flag}</div>

                    <div className="my-auto space-y-2 text-center text-xs font-semibold text-[#3b2768]">
                      {item.details.map((detail, dIdx) => (
                        <p key={dIdx} className="leading-snug">
                          • {detail}
                        </p>
                      ))}
                    </div>

                    <div className="w-full h-16 bg-[#3b2768]/10 rounded-b-xl flex items-end justify-center pb-1 text-xs text-[#3b2768]/40 font-mono">
                      [ SKYLINE SILHOUETTE ]
                    </div>
                  </div>

                  <span className="mt-3 text-lg font-bold text-[#3b2768]">
                    {item.country}
                  </span>
                </div>
              ))}
            </div>

            <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col space-y-2 z-10">
              <button
                onClick={() => setDestSlideIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1))}
                aria-label="Previous slide"
                className="bg-[#3b2768] text-white p-2.5 rounded-full hover:bg-black transition-colors shadow active:scale-90"
              >
                ❮
              </button>
              <button
                onClick={() => setDestSlideIndex((prev) => (prev + 1) % destinations.length)}
                aria-label="Next slide"
                className="bg-[#3b2768] text-white p-2.5 rounded-full hover:bg-black transition-colors shadow active:scale-90"
              >
                ❯
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. FAQ / CAN'T TALK SECTION ================= */}
      <section className="bg-white py-16 px-6 lg:px-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-10">
          <h2 className="text-center text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Can&apos;t talk? Don&apos;t worry, we have got all the answers right here.
          </h2>

          <div className="flex justify-center space-x-8 text-lg sm:text-xl font-bold pt-2">
            <button
              onClick={() => setFaqTab("company")}
              className={`transition-colors ${
                faqTab === "company" ? "text-[#f7a600]" : "text-gray-400 hover:text-[#3b2768]"
              }`}
            >
              About Company
            </button>
            <button
              onClick={() => setFaqTab("services")}
              className={`transition-colors ${
                faqTab === "services" ? "text-[#f7a600]" : "text-gray-400 hover:text-[#3b2768]"
              }`}
            >
              About Services
            </button>
            <button
              onClick={() => setFaqTab("destinations")}
              className={`transition-colors ${
                faqTab === "destinations" ? "text-[#f7a600]" : "text-gray-400 hover:text-[#3b2768]"
              }`}
            >
              About Destinations
            </button>
          </div>

          <div className=" flex justify-between items-center gap-20">
            <div className="">
             <Image 
             src="/images/home/times-consultants.webp"
             alt="times-consultants"
             width={500}
             height={400}
             className=""
             />
            </div>

            <div className="lg:col-span-6 space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 text-sm sm:text-base hover:bg-gray-50 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <span className="text-lg font-bold ml-2">{isOpen ? "❮" : "❯"}</span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4 text-xs sm:text-sm text-gray-600 bg-gray-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. POPULAR AND PARTNER UNIVERSITIES (3-SEC SLIDER) ================= */}
      <section className="bg-[#f7a600] py-14 px-6 lg:px-16 border-t border-[#3b2768]/10 text-[#3b2768]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#3b2768]">
              Popular And Partner Universities
            </h2>
            <p className="text-[#3b2768] font-semibold text-lg">
              Universities And Institutions We Serve
            </p>
          </div>

          <div
            className="space-y-6 pt-4"
            onMouseEnter={() => setIsUniPaused(true)}
            onMouseLeave={() => setIsUniPaused(false)}
          >
            {/* ROW 1 */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setUniSlideIndex((prev) => (prev === 0 ? row1Logos.length - 1 : prev - 1))}
                className="text-[#3b2768] hover:text-black font-black text-2xl px-2 transition-transform active:scale-90"
              >
                ❮
              </button>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 flex-1 items-center">
                {getVisibleLogos(row1Logos).map((logo, idx) => (
                  <div key={`r1-${idx}`} className="bg-white/10 hover:bg-white/30 p-3 rounded-xl flex items-center justify-center min-h-[60px] text-center font-extrabold text-xs text-[#3b2768] shadow-sm transition-all border border-[#3b2768]/10 cursor-pointer">
                    {logo.text}
                  </div>
                ))}
              </div>
              <button
                onClick={() => setUniSlideIndex((prev) => (prev + 1) % row1Logos.length)}
                className="text-[#3b2768] hover:text-black font-black text-2xl px-2 transition-transform active:scale-90"
              >
                ❯
              </button>
            </div>

            {/* ROW 2 */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setUniSlideIndex((prev) => (prev === 0 ? row2Logos.length - 1 : prev - 1))}
                className="text-[#3b2768] hover:text-black font-black text-2xl px-2 transition-transform active:scale-90"
              >
                ❮
              </button>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 flex-1 items-center">
                {getVisibleLogos(row2Logos).map((logo, idx) => (
                  <div key={`r2-${idx}`} className="bg-white/10 hover:bg-white/30 p-3 rounded-xl flex items-center justify-center min-h-[60px] text-center font-extrabold text-xs text-[#3b2768] shadow-sm transition-all border border-[#3b2768]/10 cursor-pointer">
                    {logo.text}
                  </div>
                ))}
              </div>
              <button
                onClick={() => setUniSlideIndex((prev) => (prev + 1) % row2Logos.length)}
                className="text-[#3b2768] hover:text-black font-black text-2xl px-2 transition-transform active:scale-90"
              >
                ❯
              </button>
            </div>

            {/* ROW 3 */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setUniSlideIndex((prev) => (prev === 0 ? row3Logos.length - 1 : prev - 1))}
                className="text-[#3b2768] hover:text-black font-black text-2xl px-2 transition-transform active:scale-90"
              >
                ❮
              </button>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 flex-1 items-center">
                {getVisibleLogos(row3Logos).map((logo, idx) => (
                  <div key={`r3-${idx}`} className="bg-white/10 hover:bg-white/30 p-3 rounded-xl flex items-center justify-center min-h-[60px] text-center font-extrabold text-xs text-[#3b2768] shadow-sm transition-all border border-[#3b2768]/10 cursor-pointer">
                    {logo.text}
                  </div>
                ))}
              </div>
              <button
                onClick={() => setUniSlideIndex((prev) => (prev + 1) % row3Logos.length)}
                className="text-[#3b2768] hover:text-black font-black text-2xl px-2 transition-transform active:scale-90"
              >
                ❯
              </button>
            </div>

          </div>
        </div>
      </section>

    

      


    </div>
  );
}