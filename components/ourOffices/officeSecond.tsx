"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, MessageCircle, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How can I find study abroad consultants near me?",
    answer: "You can find your nearest D.Education Zone office by visiting our 'Our Offices' section on the website or contacting our central helpline for guidance.",
  },
  {
    question: "Do I need an appointment before visiting a D.Education Zone office?",
    answer: "Walk-ins are always welcome, but scheduling an appointment in advance helps us match you with the right regional counselor immediately.",
  },
  {
    question: "What services do your offices provide for study abroad help?",
    answer: "Our offices provide course and university selection, application processing, scholarship guidance, visa counseling, financial documentation assistance, and pre-departure briefings.",
  },
  {
    question: "Can I get student visa help if I don't live near a branch?",
    answer: "Yes! We offer full virtual and online counseling services so you can complete your entire application process remotely.",
  },
  {
    question: "Do your international offices offer the same services as offices in Pakistan?",
    answer: "Our international offices specialize in post-arrival support, accommodation aid, airport pickup arrangements, local orientation, and ongoing student welfare.",
  },
  {
    question: "What should I bring when I visit a D.Education Zone office for the first time?",
    answer: "Please bring your educational documents (transcripts, degrees, certificates), updated CV, passport (if available), and any English proficiency test scores (IELTS/PTE).",
  },
];

export default function OfficeSecond() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showCookie, setShowCookie] = useState(true);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white text-gray-800 font-sans relative">
      
      {/* 1. International Support Section */}
      <section className="bg-[#3b1d5c] max-w-7xl mx-auto text-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
          
          <div className="space-y-4 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
              International Offices for On-Ground Support
            </h2>  
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              Our international presence in Australia, Germany, Saudi Arabia and Dubai sets D.Education Zone apart from other study abroad consultants. These offshore offices provide invaluable on-ground support once you arrive in your destination country. From accommodation assistance to opening bank accounts and understanding local regulations, our teams offer comprehensive student visa help and settlement services.
            </p>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              Students benefit from pre-departure orientations at our Pakistan offices and continued support from our international teams, ensuring a smooth transition to student life abroad.
            </p>
          </div>

          {/* Map / Image Graphic Box */}
          <div className="flex justify-center w-full">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <Image 
                src="/images/offices/International.jpg"
                alt="International Support"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. FAQ Accordion Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8 leading-snug">
          Can't talk? Don't worry, we have got all the answers right here.
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 pr-2">
                    {faq.question}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-90 text-[#3b1d5c]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-100 bg-gray-50/50 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

     
    </div>
  );
}