"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronDown, HelpCircle } from "lucide-react";

// Types
interface FAQItem {
  question: string;
  answer: string;
}

// Data
const helpPoints: string[] = [
  "We review your offer letter and confirm the correct deposit amount and deadline.",
  "We verify official university payment channels so you avoid wrong accounts or fake invoices.",
  "We guide you on submitting proof of payment to ensure prompt status updates.",
  "We coordinate directly with university finance teams to confirm receipt of your funds.",
  "We align payment timelines with visa application windows to protect your intake.",
];

const faqs: FAQItem[] = [
  {
    question: "Why do universities ask international students to pay a tuition deposit?",
    answer:
      "Universities require a deposit to confirm your seat commitment before issuing key official documents (like the CAS or CoE) needed for your visa application.",
  },
  {
    question: "How much tuition deposit do I have to pay?",
    answer:
      "Deposit amounts vary by university and country. It can range from a fixed amount (e.g., £2,000 to £5,000) to a percentage of your first year's total tuition fee.",
  },
  {
    question: "Can I pay the tuition deposit in installments?",
    answer:
      "Most universities require the initial deposit in a single payment to issue visa documents, but subsequent tuition balances can usually be paid in installment plans once enrolled.",
  },
  {
    question: "What if the university doesn't receive my payment?",
    answer:
      "If you uploaded official bank payment slips or Flywire/Convera tracking proofs with your student ID, our counselors can directly contact the university finance team to trace and clear your payment.",
  },
  {
    question: "Can I get a refund if my visa is refused?",
    answer:
      "Yes, almost all public universities offer a deposit refund in the event of an official visa refusal (minus minor administrative charges), provided you submit the official refusal letter.",
  },
];

export default function EndPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen font-sans bg-white text-slate-800 pb-16">
      
      {/* SECTION 1: HOW D.Education Zone HELPS */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          
          {/* Section Header */}
          <div className="space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3a1b5c] tracking-tight">
              How D.Education Zone Helps at This Stage
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Here is how D.Education Zone makes this step safer, faster, and stress-free for you:
            </p>
          </div>

          {/* Bullet Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left max-w-3xl mx-auto">
            {helpPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 bg-slate-50/80 border border-slate-100 p-4 rounded-xl shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Call-to-Action Card */}
          <div className="pt-4 space-y-4 max-w-xl mx-auto bg-amber-50/60 border border-amber-200/60 rounded-2xl p-6 shadow-xs">
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
              Don&apos;t risk your intake over a missed deadline or unclear bank transfer. Let our experts verify your offer and confirm deposit status.
            </p>

            <div className="pt-2">
              <button
                type="button"
                className="w-full sm:w-auto bg-[#e5a00d] hover:bg-[#d99723] active:scale-98 text-slate-900 font-extrabold text-xs sm:text-sm py-3.5 px-8 rounded-full shadow-sm transition-all cursor-pointer"
              >
                Confirm My Deposit with D.Education Zone
              </button>
            </div>

            <p className="text-[11px] sm:text-xs text-slate-500 italic pt-1">
              D.Education Zone has guided thousands of students from offer letter acceptance to visa-ready status.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 2: FAQ ACCORDION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <div className="w-10 h-10 bg-purple-50 text-[#3a1b5c] rounded-xl mx-auto flex items-center justify-center mb-2">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Find quick answers to common questions regarding tuition deposits and payment confirmation.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-xs transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full flex justify-between items-center p-4 sm:p-5 text-left font-bold text-slate-800 text-xs sm:text-sm hover:bg-slate-50 transition-colors focus:outline-hidden"
                  >
                    <span className="pr-4 leading-snug">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-amber-500" : ""
                      }`}
                    />
                  </button>
                  
                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/30"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}