"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does D. Education Zone provide for student visas?",
    answer:
      "D. Education Zone offers comprehensive support for student visas, including visa application help, document preparation, interview practice, and ongoing support throughout the application process.",
  },
  {
    question: "How does D. Education Zone assist with university and course selection?",
    answer:
      "We provide personalized counseling based on your academic background, career goals, and budget, guiding you to select the top universities and programs that best fit your profile.",
  },
  {
    question: "What kind of admission support does D. Education Zone offer?",
    answer:
      "Our admission guidance includes application reviews, SOP (Statement of Purpose) writing assistance, recommendation letter preparation, and mock interview coaching.",
  },
  {
    question: "Can D. Education Zone help me find scholarships?",
    answer:
      "Yes, we help identify eligible scholarships matching your academic profile, assist with scholarship application forms, and offer guidance on financial planning.",
  },
  {
    question: "What pre-departure support does D. Education Zone provide?",
    answer:
      "We offer comprehensive pre-departure orientation, assistance with flight bookings and accommodation arrangements, packing checklists, and cultural adaptation guidance.",
  },
];

export default function StudyAbroadBannerAndFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-black min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans border-t border-slate-900">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
        
        {/* HERO BANNER SECTION */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center p-6 sm:p-8 lg:p-12 gap-6 sm:gap-8 relative">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0b5cff]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Banner Left Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-white text-center lg:text-left z-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff] bg-slate-950 px-3.5 py-1.5 rounded-full inline-block border border-slate-800">
              Study Abroad Support <span className="text-red-500">•</span>
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Your Gateway to Global Education
            </h1>
            <p className="text-sm sm:text-base font-medium text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              D. Education Zone helps students secure admission to 3000+ leading universities across the world.
            </p>
            <div className="pt-2">
              <Link
                href="/get"
                className="inline-block bg-[#0b5cff] hover:bg-blue-600 text-white font-extrabold py-3.5 px-8 rounded-xl shadow-lg transition-all duration-200 text-xs sm:text-sm uppercase tracking-wider border border-blue-400/20 active:scale-95 cursor-pointer"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* Banner Right Image / Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full z-10">
            <div className="relative w-full aspect-video sm:aspect-[4/3] max-w-md bg-slate-950 p-2 sm:p-3 rounded-2xl shadow-xl border border-slate-800 overflow-hidden">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/services/Gateway-lang.jpg"
                  alt="Gateway to Global Education"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* FAQ ACCORDION SECTION */}
        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          
          {/* FAQ Header */}
          <div className="text-center px-2 space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0b5cff]">Frequently Asked Questions</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight">
              Can’t talk? Don’t worry, we have got all the answers right here.
            </h2>
          </div>

          {/* FAQ List */}
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 text-left flex justify-between items-center space-x-4 hover:bg-slate-800/50 transition-colors cursor-pointer focus:outline-none"
                  >
                    <span className="font-bold text-white text-xs sm:text-base leading-snug">
                      {item.question}
                    </span>
                    {isOpen ? (
                      <ChevronDown className="w-5 h-5 text-[#0b5cff] shrink-0" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-6 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-slate-800 pt-3 bg-slate-950/40">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}