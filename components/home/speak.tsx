"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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

// --- DATA: STEPS ---
const journeySteps = [
  { title: "Select Your Program", image: "/images/home/study1.webp", content: "Choose from thousands of degrees across top global universities." },
  { title: "Submit Application", image: "/images/home/study2.webp", content: "Prepare and submit your academic documents carefully." },
  { title: "Receive Offer Letter", image: "/images/home/study3.webp", content: "Get your conditional or unconditional acceptance letter." },
  { title: "Fulfill Conditions", image: "/images/home/study4.webp", content: "Complete required language tests or document verification." },
  { title: "Pay Tuition Deposit", image: "/images/home/study5.webp", content: "Pay your initial fee deposit to secure your seat." },
  { title: "Get Unconditional Offer", image: "/images/home/study6.webp", content: "Receive confirmation and official confirmation of acceptance." },
];

export default function Speak() {
  const [activeTab, setActiveTab] = useState<"student" | "university">("student");
  const [openStep, setOpenStep] = useState<number | null>(0);

  // Auto Slider Effect (Changes slide every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setOpenStep((prev) => (prev === null || prev >= journeySteps.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const activeIndex = openStep ?? 0;
  const testimonials = activeTab === "student" ? studentTestimonials : universityTestimonials;

  return (
    <div className="w-full bg-[#3b1d5c] font-sans text-white overflow-hidden">
      
      {/* ================= 1. EXPERIENCES THAT SPEAK FOR US ================= */}
      <section className="bg-white text-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3b1d5c] mb-8">
            Experiences That Speak for Us
          </h2>

          {/* TABS */}
          <div className="inline-flex bg-gray-100 rounded-full p-1 mb-12 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("student")}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer ${
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
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "university"
                  ? "bg-[#3b1d5c] text-white shadow"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              University Testimonials
            </button>
          </div>

          {/* TESTIMONIAL CARDS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 justify-center">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="relative bg-[#3b1d5c] rounded-2xl p-1.5 shadow-xl overflow-hidden border-2 border-[#f1b317] group cursor-pointer transition-transform hover:-translate-y-1"
              >
                {/* Yellow Top Banner Tag */}
                <div className="text-center py-1">
                  <span className="text-[#f1b317] text-[11px] font-extrabold tracking-wider uppercase">
                    {item.name}
                  </span>
                </div>

                {/* Video Frame Placeholder */}
                <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-purple-950 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Play Icon */}
                  <div className="absolute z-10 w-10 h-10 rounded-full bg-[#f1b317]/90 text-[#3b1d5c] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-[#3b1d5c] ml-0.5" />
                  </div>

                  {/* Side Label */}
                  <div className="absolute left-1 bottom-12 -rotate-90 origin-left text-[9px] text-[#f1b317] font-bold tracking-widest uppercase opacity-80">
                    SUCCESS STORY
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 2. STUDY ABROAD JOURNEY STEP BY STEP ================= */}
      <section className="bg-[#3b1d5c] py-16 px-4 md:px-12 text-white border-t border-purple-900">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Section Heading */}
          <h2 className="text-3xl md:text-5xl font-black text-center tracking-tight">
            Study Abroad Journey Step by Step
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Interactive Accordion List */}
            <div className="space-y-3">
              {journeySteps.map((step, index) => {
                const isOpen = openStep === index;
                return (
                  <div
                    key={index}
                    className={`rounded-full overflow-hidden transition-all duration-300 ${
                      isOpen ? "bg-white shadow-xl scale-[1.02]" : "bg-white/90 hover:bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenStep(index)}
                      className="w-full px-6 py-4 text-left text-sm font-bold flex justify-between items-center text-[#3b1d5c] cursor-pointer"
                    >
                      <span>{step.title}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#3b1d5c]" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-[#3b1d5c]/60" />
                      )}
                    </button>

                    {isOpen && step.content && (
                      <div className="px-6 pb-4 text-xs text-gray-600 bg-white leading-relaxed">
                        {step.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Custom Screenshot Frame & Auto Slider */}
            <div className="flex flex-col items-center">
              
              {/* Image Outer Container */}
              <div className="relative w-full max-w-[420px] aspect-square rounded-[2.5rem] p-4 bg-gradient-to-br from-purple-800/40 to-purple-950/80 border border-purple-400/20 shadow-2xl overflow-hidden group">
                
                {/* Image Frame Wrapper */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black/20">
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

                  {/* Decorative Pattern / Cutout Style Overlay */}
                  <div className="absolute inset-0 border-8 border-[#3b1d5c]/30 rounded-[2rem] pointer-events-none z-20" />
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