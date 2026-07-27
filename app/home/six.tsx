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

export default function SixPage() {
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
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Tech Advantages Active Tab State
  const [activeAdvantage, setActiveAdvantage] = useState<number>(1);
  const [techSearch, setTechSearch] = useState({ university: "", location: "" });

  const destinations = [
    {
      country: "Belgium",
      flag: "🇧🇪",
      details: ["10+ Universities", "€2,000 – €5,000 Annual Tuition", "Post-Study Work Options"],
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      details: ["100+ Universities", "CAD 15,000+ Annual Tuition", "PGWP Available"],
    },
    {
      country: "Cyprus",
      flag: "🇨🇾",
      details: ["15+ Universities", "€4,000 – €9,000 Annual Tuition Fee", "Limited Post Study Work Options"],
    },
    {
      country: "Denmark",
      flag: "🇩🇰",
      details: ["8+ Universities", "€6,000 – €16,000 Annual Tuition", "Post-Study Work Permits"],
    },
    {
      country: "Europe",
      flag: "🇪🇺",
      details: ["500+ Universities", "Varies by Country", "Schengen Area Access"],
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      details: ["40+ Universities", "AUD 20,000+ Annual Tuition", "Subclass 485 Visa Options"],
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      details: ["130+ Universities", "£12,000+ Annual Tuition", "2-Year Graduate Route"],
    },
    {
      country: "USA",
      flag: "🇺🇸",
      details: ["1000+ Universities", "$20,000+ Annual Tuition", "OPT STEM Extension Options"],
    },
  ];

  // 3-Second Automatic Slider Effect
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, destinations.length]);

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % destinations.length);
  };

  const handlePrevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
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

  // Get visible items for carousel display
  const getVisibleDestinations = () => {
    const items = [];
    for (let i = 0; i < 5; i++) {
      items.push(destinations[(slideIndex + i) % destinations.length]);
    }
    return items;
  };

  return (
    <div className="w-full bg-white text-gray-900 font-sans selection:bg-[#f7a600] selection:text-[#3b2768]">
      
      {/* ================= 1. HERO CONSULTATION FORM SECTION ================= */}
      <section className="bg-[#3c2560] text-white py-14 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1 text-lg sm:text-xl font-medium">
              <div>
                <span className="text-[#f7a600] font-bold text-2xl sm:text-3xl">65+</span> Countries
              </div>
              <div>
                <span className="text-[#f7a600] font-bold text-2xl sm:text-3xl">3000+</span> Universities
              </div>
              <div>
                <span className="text-[#f7a600] font-bold text-2xl sm:text-3xl">3.4 Million+</span> Programs
              </div>
            </div>

            <div className="pt-2 space-y-1">
              <h3 className="text-[#f7a600] text-xl sm:text-2xl font-bold">
                Not Sure Where to begin?
              </h3>
              <p className="text-gray-200 text-base sm:text-lg font-light">
                Let our experts guide you towards right choice.
              </p>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
              Share Your <span className="text-[#f7a600]">Details</span> - Our{" "}
              <span className="text-[#f7a600]">Experts</span> Will Contact You
            </h1>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <div className="sm:col-span-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="w-full bg-[#756493]/70 border border-transparent rounded-xl px-4 py-3 text-white placeholder-purple-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#f7a600]"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-[#756493]/70 border border-transparent rounded-xl px-4 py-3 text-white placeholder-purple-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#f7a600]"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  required
                  className="w-full bg-[#756493]/70 border border-transparent rounded-xl px-4 py-3 text-white placeholder-purple-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#f7a600]"
                />
              </div>

              <div>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-[#756493]/70 border border-transparent rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#f7a600] appearance-none"
                >
                  <option value="" disabled>Preferred Study Destination</option>
                  <option value="uk" className="text-gray-900">United Kingdom</option>
                  <option value="usa" className="text-gray-900">USA</option>
                  <option value="canada" className="text-gray-900">Canada</option>
                  <option value="australia" className="text-gray-900">Australia</option>
                </select>
              </div>

              <div>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-[#756493]/70 border border-transparent rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#f7a600] appearance-none"
                >
                  <option value="" disabled>Select City</option>
                  <option value="lahore" className="text-gray-900">Lahore</option>
                  <option value="karachi" className="text-gray-900">Karachi</option>
                  <option value="islamabad" className="text-gray-900">Islamabad</option>
                </select>
              </div>

              <div>
                <select
                  value={formData.counsellingMode}
                  onChange={(e) => setFormData({ ...formData, counsellingMode: e.target.value })}
                  className="w-full bg-[#756493]/70 border border-transparent rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#f7a600] appearance-none"
                >
                  <option value="" disabled>Preferred Mode of Counselling</option>
                  <option value="online" className="text-gray-900">Online</option>
                  <option value="office" className="text-gray-900">In-Office</option>
                </select>
              </div>

              <div>
                <select
                  value={formData.studyLevel}
                  onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value })}
                  className="w-full bg-[#756493]/70 border border-transparent rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#f7a600] appearance-none"
                >
                  <option value="" disabled>Preferred Study Level</option>
                  <option value="undergraduate" className="text-gray-900">Undergraduate</option>
                  <option value="postgraduate" className="text-gray-900">Postgraduate</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <textarea
                  placeholder="Ask Your Question"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  rows={3}
                  className="w-full bg-[#756493]/70 border border-transparent rounded-xl px-4 py-3 text-white placeholder-purple-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#f7a600] resize-y"
                ></textarea>
              </div>

              <div className="sm:col-span-2 flex items-start gap-2 text-xs text-gray-200">
                <input
                  type="checkbox"
                  id="agree"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="mt-0.5 accent-[#f7a600] rounded cursor-pointer"
                />
                <label htmlFor="agree" className="cursor-pointer">
                  By selecting this you agree to Times&apos;s{" "}
                  <a href="#" className="text-indigo-300 underline">privacy policy</a> and{" "}
                  <a href="#" className="text-indigo-300 underline">Terms & conditions</a> you agree to be contacted by phone, email or messages.
                </label>
              </div>

              <div className="sm:col-span-2 pt-1">
                <button
                  type="submit"
                  className="bg-[#f7a600] hover:bg-amber-500 text-[#3b2768] font-extrabold px-8 py-3 rounded-full text-sm flex items-center space-x-2 transition-transform active:scale-95 shadow-md"
                >
                  <span>Submit</span>
                  <span>➔</span>
                </button>
              </div>
            </form>
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

          {/* Navigation Tabs */}
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

          {/* Auto-sliding Stamp Cards Grid */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 transition-all duration-700 ease-in-out">
              {getVisibleDestinations().map((item, idx) => (
                <div key={`${item.country}-${idx}`} className="flex flex-col items-center animate-fadeIn">
                  
                  {/* Postage Stamp Card */}
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

            {/* Slider Controls */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col space-y-2 z-10">
              <button
                onClick={handlePrevSlide}
                aria-label="Previous slide"
                className="bg-[#3b2768] text-white p-2.5 rounded-full hover:bg-black transition-colors shadow active:scale-90"
              >
                ❮
              </button>
              <button
                onClick={handleNextSlide}
                aria-label="Next slide"
                className="bg-[#3b2768] text-white p-2.5 rounded-full hover:bg-black transition-colors shadow active:scale-90"
              >
                ❯
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. TIMES TECH ADVANTAGES SECTION ================= */}
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

      {/* ================= 4. STUDY ABROAD EXPO BANNER SECTION ================= */}
      <section className="bg-white py-12 px-6 lg:px-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-center text-3xl sm:text-5xl font-extrabold text-[#3b2768]">
            The Largest Study Abroad Expo 2026
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">
            <div className="bg-[#f7a600] rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[260px]">
              <h3 className="text-[#3b2768] font-black text-2xl leading-tight">
                Meet <br /> 500+ <br /> Universities
              </h3>
              <div className="mt-4 bg-white/20 rounded-xl p-3 text-center text-3xl">🏛️</div>
            </div>

            <div className="bg-[#3b2768] text-white rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[260px]">
              <h3 className="text-[#f7a600] font-black text-2xl leading-tight">
                Your Dream <br /> City Awaits
              </h3>
              <div className="mt-4 bg-white/10 rounded-xl p-3 text-center text-3xl">🏙️</div>
            </div>

            <div className="bg-gradient-to-br from-[#3b2768] via-[#523d7f] to-[#f7a600] text-white rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-sm min-h-[260px]">
              <span className="text-xs tracking-widest uppercase font-bold text-[#f7a600]">
                Study Abroad
              </span>
              <h3 className="font-black text-5xl tracking-wider my-2">EXPO</h3>
            </div>

            <div className="bg-[#f7a600] rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[260px]">
              <h3 className="text-[#3b2768] font-black text-2xl leading-tight">
                Scholarships <br /> & Funding
              </h3>
              <div className="mt-4 bg-white/20 rounded-xl p-3 text-center text-3xl">🎓</div>
            </div>

            <div className="bg-[#3b2768] text-white rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[260px]">
              <h3 className="text-[#f7a600] font-black text-2xl leading-tight">
                Visas <br /> Simplified
              </h3>
              <div className="mt-4 bg-white/10 rounded-xl p-3 text-center text-3xl">✈️</div>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button className="bg-[#f7a600] hover:bg-amber-500 text-[#3b2768] font-extrabold px-10 py-3.5 rounded-full text-base transition-transform active:scale-95 shadow-md">
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* ================= 5. SIMPLIFYING JOURNEY SECTION ================= */}
      <section className="bg-[#f8f8fb] py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <h2 className="text-center text-3xl sm:text-5xl font-bold text-[#44246f]">
            Simplifying the Study Abroad Journey
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {journeyCards.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-300 p-6 h-32 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="text-[#44246f] text-3xl">{item.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#44246f]">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm w-full max-w-[420px] aspect-square relative flex items-center justify-center">
                <Image
                  src="/images/about/Simplifying.jpg"
                  alt="Simplifying Study Abroad Journey"
                  width={420}
                  height={420}
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}