"use client";

import React, { useState } from "react";
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
  // First item open by default as shown in reference screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* HERO BANNER SECTION */}
        <div className="bg-[#ECA82C] rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-center p-6 sm:p-10 lg:p-12 gap-8">
          
          {/* Banner Left Content */}
          <div className="lg:col-span-6 space-y-6 text-[#3B1E54]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Your Gateway to Global Education
            </h1>
            <p className="text-base sm:text-lg font-medium text-[#3B1E54]/90 max-w-lg leading-relaxed">
              Times Consultant helps students secure admission to 3000+ leading universities across the world.
            </p>
            <div>
              <button className="bg-[#3B1E54] hover:bg-[#2A153E] text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-200 text-sm sm:text-base">
                Apply Now
              </button>
            </div>
          </div>

          {/* Banner Right Image / Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-inner border border-white/40 max-w-lg w-full">
              <img
                src="/images/services/Gateway-lang.jpg"
                alt=""
                className="w-full h-auto object-contain max-h-64"
                onError={(e) => {
                  // Fallback vector placeholder if exact asset URL changes
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>

        {/* FAQ ACCORDION SECTION */}
        <div className="space-y-8 max-w-4xl mx-auto">
          
          {/* FAQ Header */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Can’t talk? Don’t worry, we have got all the answers right here.
            </h2>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-4 sm:p-5 text-left flex justify-between items-center space-x-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-800 text-sm sm:text-base">
                      {item.question}
                    </span>
                    {isOpen ? (
                      <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-slate-500 flex-shrink-0" />
                    )}
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
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