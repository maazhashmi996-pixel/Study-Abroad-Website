"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronUp, Play } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

// --- DATA: TESTIMONIALS ---
const studentTestimonials = [
  { id: 1, name: "Abdul Mueed", image: "/images/testimonials/abdul.webp" },
  { id: 2, name: "Kapil Dev", image: "/images/testimonials/kapil.webp" },
  { id: 3, name: "Ahsan Bin Waheed", image: "/images/testimonials/ahsan.webp" },
  { id: 4, name: "Mavia", image: "/images/testimonials/mavia.webp" },
  { id: 5, name: "Abdullah", image: "/images/testimonials/abdullah.webp" },
];

const universityTestimonials = [
  { id: 1, name: "University Rep 1", image: "/images/testimonials/univ1.webp" },
  { id: 2, name: "University Rep 2", image: "/images/testimonials/univ2.webp" },
];

// --- DATA: STEPS WITH LINKS & CONTENT ---
const journeySteps = [
  {
    title: "Select Your Program",
    image: "/images/home/study1.webp",
    link: "/select",
    description: "Explore thousands of courses and find the right match for your career goals.",
  },
  {
    title: "Submit Application",
    image: "/images/home/study2.webp",
    link: "/apply",
    description: "Fill in your details and upload required documents effortlessly through our portal.",
  },
  {
    title: "Receive Offer Letter",
    image: "/images/home/study3.webp",
    link: "/receive",
    description: "Get conditional or unconditional offers from top-ranked global institutions.",
  },
  {
    title: "Fulfill Conditions",
    image: "/images/home/study4.webp",
    link: "/condition",
    description: "Meet language requirements and upload final academic credentials.",
  },
  {
    title: "Pay Tuition Deposit",
    image: "/images/home/study5.webp",
    link: "/tution",
    description: "Secure your seat by submitting tuition deposits via secure payment gateways.",
  },
  {
    title: "Get Unconditional Offer",
    image: "/images/home/study6.webp",
    link: "/start",
    description: "Receive final acceptance and start your visa application process smoothly.",
  },
];

export default function Speak() {
  const [activeTab, setActiveTab] = useState<"student" | "university">("student");
  const [openStep, setOpenStep] = useState<number | null>(0);

  // Auto Slider Effect (Changes slide every 3.5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setOpenStep((prev) => (prev === null || prev >= journeySteps.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const activeIndex = openStep ?? 0;
  const testimonials = activeTab === "student" ? studentTestimonials : universityTestimonials;

  return (
    <div className="w-full bg-[#3b1d5c] font-sans text-white overflow-hidden">
      
      {/* ================= 1. EXPERIENCES THAT SPEAK FOR US ================= */}
      <section className="bg-white text-gray-800 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3b1d5c] mb-6 sm:mb-8">
            Experiences That Speak for Us
          </h2>

          {/* TABS */}
          <div className="inline-flex bg-gray-100 rounded-full p-1 mb-8 sm:mb-12 shadow-inner max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab("student")}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "student"
                  ? "bg-[#3b1d5c] text-white shadow"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Student Testimonials
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("university")}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "university"
                  ? "bg-[#3b1d5c] text-white shadow"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              University Testimonials
            </button>
          </div>

          {/* TESTIMONIAL CARDS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 justify-center">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="relative bg-[#3b1d5c] rounded-2xl p-1.5 shadow-xl overflow-hidden border-2 border-[#f1b317] group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Yellow Top Banner Tag */}
                <div className="text-center py-1 px-1 truncate">
                  <span className="text-[#f1b317] text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase truncate block">
                    {item.name}
                  </span>
                </div>

                {/* Video Frame Placeholder */}
                <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden bg-purple-950 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Play Icon */}
                  <div className="absolute z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f1b317]/90 text-[#3b1d5c] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-[#3b1d5c] ml-0.5" />
                  </div>

                  {/* Side Label */}
                  <div className="absolute left-1 bottom-10 -rotate-90 origin-left text-[8px] sm:text-[9px] text-[#f1b317] font-bold tracking-widest uppercase opacity-80 pointer-events-none">
                    SUCCESS STORY
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 2. STUDY ABROAD JOURNEY STEP BY STEP ================= */}
      <section className="bg-[#3b1d5c] py-12 sm:py-16 px-4 sm:px-6 md:px-12 text-white border-t border-purple-900">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center tracking-tight">
            Study Abroad Journey Step by Step
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Interactive Accordion List */}
            <div className="space-y-3">
              {journeySteps.map((step, index) => {
                const isOpen = openStep === index;
                return (
                  <div
                    key={index}
                    className={`rounded-xl overflow-hidden transition-all duration-300 ${
                      isOpen ? "bg-white shadow-xl scale-[1.01]" : "bg-white/90 hover:bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenStep(index)}
                      className="w-full px-5 sm:px-6 py-3.5 sm:py-4 text-left text-xs sm:text-sm font-bold flex justify-between items-center text-[#3b1d5c] cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#f1b317] text-[#3b1d5c] flex items-center justify-center text-xs font-black shrink-0">
                          {index + 1}
                        </span>
                        <span>{step.title}</span>
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#3b1d5c] shrink-0" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-[#3b1d5c]/60 shrink-0" />
                      )}
                    </button>

                    {/* Expanded Accordion Body */}
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs text-gray-600 bg-white leading-relaxed space-y-3 border-t border-gray-100">
                        {step.description && <p>{step.description}</p>}
                        
                        {/* Navigation Link Button */}
                        <div>
                          <Link href={step.link}>
                            <button className="px-4 py-2 bg-[#f1b317] hover:bg-[#3b1d5c] text-[#3b1d5c] hover:text-white text-xs font-extrabold rounded-md shadow transition-colors duration-200 cursor-pointer active:scale-95">
                              Learn More →
                            </button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Screenshot Frame & Auto Slider */}
            <div className="flex flex-col items-center">
              
              {/* Image Outer Container */}
              <div className="relative w-full max-w-[320px] sm:max-w-[420px] aspect-square rounded-[2rem] sm:rounded-[2.5rem] p-3 sm:p-4 bg-gradient-to-br from-purple-800/40 to-purple-950/80 border border-purple-400/20 shadow-2xl overflow-hidden">
                
                {/* Image Frame Wrapper */}
                <div className="relative w-full h-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-black/20">
                  {journeySteps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="object-cover"
                        priority={idx === 0}
                      />
                    </div>
                  ))}

                  {/* Decorative Overlay Frame */}
                  <div className="absolute inset-0 border-4 sm:border-8 border-[#3b1d5c]/30 rounded-[1.5rem] sm:rounded-[2rem] pointer-events-none z-20" />
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex space-x-2 mt-6">
                {journeySteps.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setOpenStep(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      dotIdx === activeIndex
                        ? "w-8 bg-white"
                        : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}