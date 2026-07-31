"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does Times Consultant provide for student visas?",
    answer:
      "Times Consultant offers comprehensive support for student visas, including visa application help, document preparation, interview practice, and ongoing support throughout the application process.",
  },
  {
    question: "How does Times Consultant assist with university and course selection?",
    answer:
      "We provide personalized counseling based on your academic background, career goals, and budget, guiding you to select the top universities and programs that best fit your profile.",
  },
  {
    question: "What kind of admission support does Times Consultant offer?",
    answer:
      "Our admission guidance includes application reviews, SOP (Statement of Purpose) writing assistance, recommendation letter preparation, and mock interview coaching.",
  },
  {
    question: "Can Times Consultant help me find scholarships?",
    answer:
      "Yes, we help identify eligible scholarships matching your academic profile, assist with scholarship application forms, and offer guidance on financial planning.",
  },
  {
    question: "What pre-departure support does Times Consultant provide?",
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
    <div className="w-full bg-slate-50 min-h-screen py-6 sm:py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
        
        {/* HERO BANNER SECTION */}
        <div className="bg-[#ECA82C] rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-center p-5 sm:p-8 lg:p-12 gap-6 sm:gap-8">
          
          {/* Banner Left Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-[#3B1E54] text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Your Gateway to Global Education
            </h1>
            <p className="text-sm sm:text-lg font-medium text-[#3B1E54]/90 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Times Consultant helps students secure admission to 3000+ leading universities across the world.
            </p>
            <div>
              <button
                type="button"
                className="bg-[#3B1E54] hover:bg-[#2A153E] text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-200 text-xs sm:text-base active:scale-95 cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Banner Right Image / Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative w-full aspect-video sm:aspect-[4/3] max-w-md bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-inner border border-white/40 overflow-hidden">
              <Image
                src="/images/services/Gateway-lang.jpg"
                alt="Gateway to Global Education"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover rounded-lg"
              />
            </div>
          </div>

        </div>

        {/* FAQ ACCORDION SECTION */}
        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          
          {/* FAQ Header */}
          <div className="text-center px-2">
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
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
                  className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 text-left flex justify-between items-center space-x-4 hover:bg-slate-50 transition-colors cursor-pointer focus:outline-none"
                  >
                    <span className="font-semibold text-slate-800 text-xs sm:text-base leading-snug">
                      {item.question}
                    </span>
                    {isOpen ? (
                      <ChevronDown className="w-5 h-5 text-[#3B1E54] shrink-0" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
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