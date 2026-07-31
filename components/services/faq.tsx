"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How can Times Consultant help me?",
    answer:
      "We provide university admissions, visa assistance, scholarship guidance, accommodation support and complete counselling.",
  },
  {
    question: "Which countries can I apply to?",
    answer:
      "UK, Canada, Australia, Denmark, Sweden, Germany, Hungary, Ireland and many more.",
  },
  {
    question: "Do you help with visa applications?",
    answer:
      "Yes. Our consultants prepare your documents and guide you throughout the visa process.",
  },
  {
    question: "Can I get scholarship guidance?",
    answer:
      "Absolutely. We help identify scholarship opportunities based on your academic profile.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#f8f7fc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-14">
          <span className="uppercase text-orange-500 font-semibold text-xs sm:text-sm tracking-widest">
            FAQ
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#43246f] mt-2 sm:mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-4 sm:p-6 text-left cursor-pointer focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-base sm:text-lg text-[#43246f] pr-4">
                    {faq.question}
                  </span>

                  <span className="text-[#43246f] shrink-0">
                    {isOpen ? (
                      <FaChevronUp className="text-sm sm:text-base" />
                    ) : (
                      <FaChevronDown className="text-sm sm:text-base text-slate-400" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-slate-600 text-xs sm:text-base leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}