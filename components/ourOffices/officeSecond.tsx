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
    answer: "You can find your nearest Times Consultant office by visiting our 'Our Offices' section on the website or contacting our central helpline for guidance.",
  },
  {
    question: "Do I need an appointment before visiting a Times Consultant office?",
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
    question: "What should I bring when I visit a Times Consultant office for the first time?",
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
    <div className="w-full  bg-white text-gray-800 font-sans relative">
      {/* 1. International Support Section */}
      <section className="bg-[#3b1d5c] text-white py-12 md:py-16 px-6">
        <div className="max-w-6xl  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center justify-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              International Offices for On-Ground Support
            </h2>  
            <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
              Our international presence in Australia, Germany, Saudi Arabia and Dubai sets Times Consultant apart from other study abroad consultants. These offshore offices provide invaluable on-ground support once you arrive in your destination country. From accommodation assistance to opening bank accounts and understanding local regulations, our teams offer comprehensive student visa help and settlement services.
            </p>
            <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
              Students benefit from pre-departure orientations at our Pakistan offices and continued support from our international teams, ensuring a smooth transition to student life abroad.
            </p>
          </div>

          {/* Map Graphic Box */}
         <div className="">
          <Image 
          src="/images/offices/International.jpg"
          alt="international"
          width={400}
          height={200}
          className=" rounded-2xl"
          />
         </div>
         </div>
      </section>

      {/* 2. FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
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
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xs md:text-sm font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-90 text-[#3b1d5c]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-gray-600 border-t border-gray-100 bg-gray-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Floating Chat Button */}
      <div className="fixed bottom-14 right-4 z-50">
        <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105">
          <MessageCircle className="w-4 h-4" />
          <span>Chat with us</span>
        </button>
      </div>

      {/* 3. Bottom Cookie Banner */}
      {showCookie && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#111111] text-white text-xs py-2 px-4 flex items-center justify-between z-40">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 shrink-0"></span>
            <p className="text-[11px] text-gray-300">
              We use cookies to improve your experience and track campaign performance.{" "}
              <a href="#" className="underline text-gray-100 hover:text-white">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCookie(false)}
              className="bg-gray-800 hover:bg-gray-700 text-white text-[10px] px-3 py-1 rounded transition-colors"
            >
              Decline
            </button>
            <button
              onClick={() => setShowCookie(false)}
              className="text-gray-400 hover:text-white p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}