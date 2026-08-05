"use client";

import React, { useState } from "react";
import Image from "next/image";

// Types for FAQs
type FaqCategory = "company" | "services" | "destinations";

interface FaqItem {
  question: string;
  answer: string;
}

export default function EightPage() {
  // FAQ Accordion & Tab State
  const [faqTab, setFaqTab] = useState<FaqCategory>("company");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Categorized FAQ Data
  const faqsByCategory: Record<FaqCategory, FaqItem[]> = {
    company: [
      {
        question: "Who is D.Education Zone?",
        answer:
          "D.Education Zone is a leading education and study abroad consultancy in Pakistan helping students achieve their international academic goals.",
      },
      {
        question: "What is the mission of D.Education Zone?",
        answer:
          "Our mission is to empower students through personalized counseling, application guidance, and visa support to access world-class education.",
      },
      {
        question: "What is the vision of D.Education Zone?",
        answer:
          "To be the most trusted international education platform connecting students with global learning opportunities seamlessly.",
      },
      {
        question: "Why should I choose D.Education Zone as my study abroad consultant in Pakistan?",
        answer:
          "We offer end-to-end guidance from expert counselors, direct university partnerships, high visa success rates, and full transparency.",
      },
      {
        question: "How much experience does D.Education Zone have?",
        answer:
          "D.Education Zone has over 20 years of industry experience assisting thousands of students worldwide.",
      },
    ],
    services: [
      {
        question: "What services do you offer to students?",
        answer:
          "We provide university selection assistance, application processing, scholarship guidance, visa support, and pre-departure briefings.",
      },
      {
        question: "Are counselling sessions free of charge?",
        answer:
          "Yes! Initial counseling sessions with our expert advisors are completely free of charge.",
      },
      {
        question: "Do you help with scholarship applications?",
        answer:
          "Yes, we help eligible students identify merit-based and need-based scholarship options available at partner universities.",
      },
    ],
    destinations: [
      {
        question: "Which study destinations do you assist with?",
        answer:
          "We assist with popular study destinations including the UK, USA, Canada, Australia, Germany, Cyprus, and other European countries.",
      },
      {
        question: "Can I work part-time while studying abroad?",
        answer:
          "Yes, most study destinations allow international students to work up to 20 hours per week during academic semesters.",
      },
    ],
  };

  // Get current active FAQ list
  const currentFaqs = faqsByCategory[faqTab];

  // Tab switch handler
  const handleTabChange = (category: FaqCategory) => {
    setFaqTab(category);
    setOpenFaq(0); // Reset to open the first FAQ in the new tab
  };

  return (
    <div className="w-full bg-white text-gray-900 font-sans selection:bg-[#f7a600] selection:text-[#3b2768]">
      {/* ================= FAQ SECTION ================= */}
      <section className="bg-white py-10 sm:py-16 px-4 sm:px-8 lg:px-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-10">
          
          {/* Header */}
          <h2 className="text-center text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Can&apos;t talk? Don&apos;t worry, we have got all the answers right here.
          </h2>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-8 text-base sm:text-xl font-bold pt-2">
            {(["company", "services", "destinations"] as FaqCategory[]).map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleTabChange(category)}
                className={`capitalize transition-colors pb-1 border-b-2 cursor-pointer ${
                  faqTab === category
                    ? "text-[#f7a600] border-[#f7a600]"
                    : "text-gray-400 border-transparent hover:text-[#3b2768]"
                }`}
              >
                About {category}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-2 sm:pt-4">
            
            {/* Image Container */}
            <div className="lg:col-span-5 flex justify-center">
              <Image
                src="/images/home/times-consultants.webp"
                alt="D.Education Zones"
                width={500}
                height={400}
                className="w-full max-w-xs sm:max-w-md h-auto object-contain rounded-2xl"
                priority
              />
            </div>

            {/* Accordion Container */}
            <div className="lg:col-span-7 space-y-3">
              {currentFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={`${faqTab}-${idx}`}
                    className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-shadow hover:shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center px-4 sm:px-6 py-3.5 sm:py-4 text-left font-semibold text-gray-800 text-xs sm:text-base hover:bg-gray-50 transition-colors gap-3 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`text-xs sm:text-sm font-bold transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-90 text-[#f7a600]" : "text-gray-400"
                        }`}
                      >
                        ❯
                      </span>
                    </button>

                    {/* Smooth height transition */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-gray-600 bg-gray-50/50 leading-relaxed border-t border-gray-100">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}