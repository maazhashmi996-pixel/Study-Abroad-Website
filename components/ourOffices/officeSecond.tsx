"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How can I find study abroad consultants near me?",
    answer: "You can find your nearest D. Education Zone office by visiting our 'Our Offices' section on the website or contacting our central helpline for guidance.",
  },
  {
    question: "Do I need an appointment before visiting a D. Education Zone office?",
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
    question: "What should I bring when I visit a D. Education Zone office for the first time?",
    answer: "Please bring your educational documents (transcripts, degrees, certificates), updated CV, passport (if available), and any English proficiency test scores (IELTS/PTE).",
  },
];

export default function OfficeSecond() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full  text-slate-800 font-sans relative">
      
      {/* 1. International Support Section */}
      <section className=" max-w-7xl mx-auto text-slate-800 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border border-slate-800 rounded-2xl my-8 shadow-2xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
          
          <div className="space-y-4 text-left">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0b5cff] bg-black px-4 py-1.5 rounded-full inline-block border border-slate-800">
              Global Support Network <span className="text-red-500">•</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug text-slate-800">
              International Offices for On-Ground Support
            </h2>  
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our international presence in Australia, Germany, Saudi Arabia, and Dubai sets D. Education Zone apart from other study abroad consultants. These offshore offices provide invaluable on-ground support once you arrive in your destination country. From accommodation assistance to opening bank accounts and understanding local regulations, our teams offer comprehensive student visa help and settlement services.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Students benefit from pre-departure orientations at our Pakistan offices and continued support from our international teams, ensuring a smooth transition to student life abroad.
            </p>
          </div>

          {/* Map / Image Graphic Box */}
          <div className="flex justify-center w-full">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-700 bg-slate-950">
              <Image 
                src="/images/offices/community.jpg"
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
      <section className="bg-white text-slate-900 py-12 sm:py-16 px-4 sm:px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff] bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-3 border border-blue-100 text-center mx-auto block w-fit">
            Help Center <span className="text-red-500">•</span>
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center text-slate-900 mb-6 sm:mb-8 leading-snug">
            Can't talk? Don't worry, we have got all the answers right here.
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900 pr-2">
                      {faq.question}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-90 text-[#0b5cff]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-600 border-t border-slate-200 bg-white leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}