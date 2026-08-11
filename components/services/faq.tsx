
"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How can D.Education Zone help me?",
    answer:
      "We provide university admissions, visa assistance, scholarship guidance, accommodation support and complete counselling to help you throughout your study abroad journey.",
  },
  {
    question: "Which countries can I apply to?",
    answer:
      "You can explore study opportunities in the UK, Canada, Australia, Denmark, Sweden, Germany, Hungary, Ireland and many other destinations.",
  },
  {
    question: "Do you help with visa applications?",
    answer:
      "Yes. Our consultants help you prepare the required documents and guide you through the student visa application process.",
  },
  {
    question: "Can I get scholarship guidance?",
    answer:
      "Absolutely. We help identify suitable scholarship opportunities based on your academic profile, preferred destination and selected program.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-14 sm:py-18 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">

          {/* Small Label */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-7 sm:w-9 h-[2px] bg-[#EF4444]" />

            <span className="uppercase text-[#2563EB] font-bold text-xs sm:text-sm tracking-[0.2em]">
              FAQ
            </span>

            <span className="w-7 sm:w-9 h-[2px] bg-[#EF4444]" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight">
            Frequently Asked Questions
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-7">
            Find answers to some of the most common questions about
            studying abroad, admissions, scholarships and visa guidance.
          </p>
        </div>

        {/* =====================================================
            FAQ ACCORDION
        ====================================================== */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className={`
                  group
                  bg-white
                  rounded-2xl
                  border
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-[#2563EB]/40 shadow-md"
                      : "border-slate-200 shadow-sm hover:border-[#2563EB]/30 hover:shadow-md"
                  }
                `}
              >

                {/* =================================================
                    QUESTION BUTTON
                ================================================== */}
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="
                    relative
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-4
                    px-4
                    sm:px-6
                    lg:px-7
                    py-5
                    sm:py-6
                    text-left
                    focus:outline-none
                  "
                >

                  {/* Blue Active Line */}
                  <span
                    className={`
                      absolute
                      left-0
                      top-0
                      bottom-0
                      w-1
                      bg-[#2563EB]
                      transition-opacity
                      duration-300
                      ${
                        isOpen
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-50"
                      }
                    `}
                  />

                  {/* Question */}
                  <span
                    className={`
                      text-sm
                      sm:text-base
                      lg:text-lg
                      font-bold
                      pr-4
                      transition-colors
                      duration-200
                      ${
                        isOpen
                          ? "text-[#2563EB]"
                          : "text-slate-800 group-hover:text-[#2563EB]"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* Arrow */}
                  <span
                    className={`
                      shrink-0
                      flex
                      items-center
                      justify-center
                      w-8
                      h-8
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "bg-[#2563EB] text-white rotate-180"
                          : "bg-slate-100 text-slate-500 group-hover:bg-[#2563EB]/10 group-hover:text-[#2563EB]"
                      }
                    `}
                  >
                    <FaChevronDown className="text-xs" />
                  </span>

                </button>

                {/* =================================================
                    ANSWER
                ================================================== */}
                {isOpen && (
                  <div className="px-4 sm:px-6 lg:px-7 pb-5 sm:pb-6">

                    <div className="border-t border-slate-100 pt-4">

                      <div className="flex items-start gap-3">

                        {/* Red Accent */}
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0" />

                        <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-7">
                          {faq.answer}
                        </p>

                      </div>

                    </div>
                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM NOTE
        ====================================================== */}
        <div className="mt-10 text-center">

          <p className="text-xs sm:text-sm text-slate-500">
            Still have questions?{" "}
            <span className="font-semibold text-[#2563EB]">
              Our study abroad advisors are here to help.
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}

