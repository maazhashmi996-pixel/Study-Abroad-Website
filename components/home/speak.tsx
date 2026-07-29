"use client";


import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Play } from "lucide-react";

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
const steps = [
  { title: "Select Your Program", content: "Explore hundreds of programs and choose the one that aligns best with your academic background and career goals." },
  { title: "Submit Application", content: "Our team helps you compile all required documents and submits your application directly to your chosen universities." },
  { title: "Receive Offer Letter", content: "Get conditional or unconditional offer letters directly from top international universities." },
  { title: "Fulfill Conditions", content: "Complete any pending requirements such as English proficiency tests, fee deposits, or academic verification." },
  { title: "Pay Tuition Deposit", content: "Secure your admission seat by making the necessary fee deposit directly to the university." },
  { title: "Get Unconditional Offer", content: "Receive your final acceptance letter/CAS required for official visa processing." },
  { title: "Apply For Visa", content: "Get expert step-by-step guidance on visa documentation, interview prep, and filing." },
];

// --- DATA: EVENTS ---
const events = [
  {
    id: 1,
    city: "ISLAMABAD",
    title: "Islamabad Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Thursday, 13 August 2026",
    location: "Movenpick Hotel - Islamabad",
    image: "/images/events/islamabad.webp",
  },
  {
    id: 2,
    city: "JHELUM",
    title: "Jhelum Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Wednesday, 05 August 2026",
    location: "Times Office - Jhelum",
    image: "/images/events/jhelum.webp",
  },
  {
    id: 3,
    city: "KARACHI",
    title: "Karachi Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Saturday, 08 August 2026 || Sunday, 09 August 2026",
    location: "PC Hotel - Karachi",
    image: "/images/events/karachi.webp",
  },
  {
    id: 4,
    city: "PESHAWAR",
    title: "Peshawar Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Sunday, 16 August 2026",
    location: "Pearl Continental - Peshawar",
    image: "/images/events/peshawar.png",
  },
];

export default function Speak() {
  const [activeTab, setActiveTab] = useState<"student" | "university">("student");
  const [openStep, setOpenStep] = useState<number | null>(0);

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
              onClick={() => setActiveTab("student")}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all ${
                activeTab === "student"
                  ? "bg-[#3b1d5c] text-white shadow"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Student Testimonials
            </button>
            <button
              onClick={() => setActiveTab("university")}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all ${
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
      <section className="bg-[#3b1d5c] py-16 px-4 md:px-12 flex gap-20 border-t border-purple-900">
        <div className="max-w-6xl mx-auto ">
          
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Study Abroad Journey Step by Step
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left Column: Accordion List */}
            <div className="space-y-3">
              {steps.map((step, index) => {
                const isOpen = openStep === index;
                return (
                  <div
                    key={index}
                    className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100"
                  >
                    <button
                      onClick={() => setOpenStep(isOpen ? null : index)}
                      className="w-full px-5 py-3.5 text-left text-sm font-semibold flex justify-between items-center text-[#3b1d5c] hover:bg-purple-50 transition-colors"
                    >
                      <span>{step.title}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#3b1d5c]" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-4 text-xs text-gray-600 border-t border-gray-100 bg-gray-50/50 leading-relaxed">
                        {step.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Graphic Graphic Box */}
         
          <div>
          <Image
                  src="/images/home/graduating.webp"
                  alt="graduating"
                 width={300}
                 height={200}
                  className="object-cover"
                />
                </div>
          </div>

        </div>
      </section>

    </div>
  );
}