"use client";

import React, { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export default function EndPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesList = [
    "Review your offer/CAS/CoE/LOA and check it's visa-ready",
    "Calculate funds as per current country rules (not last year's figures) especially for Canada 2025 applicants",
    "We build a shortlist of/help you draft a strong study plan / SOP / GTE that actually explains your course choice and ties to Pakistan universities and programs you can actually secure an offer from.",
    "Tell you which documents should be in student's name vs sponsor's name",
    "Guide you on biometrics, medicals, and VAC appointments",
    "Follow up if the embassy asks for additional documents",
  ];

  const faqs = [
    {
      question: "When should I apply for my student visa?",
      answer:
        "You should apply as soon as you receive your unconditional offer letter (CAS for UK, CoE for Australia, LOA for Canada) and your financial documents meet the required holding period.",
    },
    {
      question: "Do I need to pay tuition before applying for a student visa?",
      answer:
        "It depends on the country and university. Many UK and Australian institutions require a tuition deposit before issuing official visa support documents like CAS or CoE.",
    },
    {
      question: "How much money do I need to show for a study visa?",
      answer:
        "Financial requirements vary significantly by country and living location. Canada, the UK, and Australia all updated their minimum living expense figures for 2025/2026. Ensure your bank statements strictly match the latest figures.",
    },
    {
      question: "Can I apply for a study visa with a conditional offer?",
      answer:
        "No, embassies require an unconditional offer/acceptance proof before accepting a study permit application.",
    },
    {
      question: "What if my study visa is refused?",
      answer:
        "If refused, you must request your refusal letter/GCMS notes (for Canada) to understand the exact reason, rectify the gaps in your file, and either reapply or appeal.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full  font-sans text-slate-800 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section 1: How D.Education Zone Helps */}
        <section className="text-center max-w-5xl mx-auto  rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#0b5cff]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
              Professional Assistance
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 mb-3 tracking-tight">
            How D. Education Zone helps at this stage
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium mb-8 max-w-xl mx-auto">
            This is where D. Education Zone is most valuable, because visa refusals hurt reputation and waste intakes.
          </p>

          <p className="text-xs sm:text-sm font-extrabold text-slate-800 text-left max-w-5xl mx-auto mb-4 tracking-wide uppercase">
            D. Education Zone can:
          </p>

          {/* 2-Column Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left max-w-5xl mx-auto mb-8">
            {servicesList.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-900 border border-slate-800/80 p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-[#0b5cff] shrink-0 mt-0.5 stroke-[3]" />
                <span className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Primary Action Button 1 */}
          <div className="mb-8">
            <button className="bg-[#0b5cff] hover:bg-blue-600 border border-blue-400/20 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg transition duration-200 active:scale-95 cursor-pointer">
              Get My Visa File Reviewed
            </button>
          </div>

          {/* Paragraph Copy Box */}
          <div className="max-w-3xl mx-auto space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-inner">
            <p>
              Share your offer letter, funds, target country and we'll tell you exactly what is missing before you apply.
            </p>
            <p className="font-extrabold text-white text-sm">
              You've reached the most sensitive step. One small mistake here can undo months of admission work.
            </p>
            <p className="text-slate-400">
              Let D. Education Zone check your visa file before you submit documents, funds, SOP, and everything so you can file with confidence.
            </p>
          </div>

          {/* Primary Action Button 2 */}
          <div className="mb-6">
            <button className="bg-[#0b5cff] hover:bg-blue-600 border border-blue-400/20 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg transition duration-200 active:scale-95 cursor-pointer">
              Submit My Visa with Expert Help
            </button>
          </div>

          {/* Disclaimer Footer */}
          <p className="text-[11px] sm:text-xs text-slate-500 max-w-4xl mx-auto pt-2 border-t border-slate-800/80">
            D. Education Zone helps Pakistani and many international students apply for UK, Canada, Australia, Germany and other major destinations with updated 2025-26 visa rules and financial requirements.
          </p>
        </section>

        {/* Section 2: FAQ Accordion */}
        <section className="pt-8 border-t border-slate-900">
          <div className="text-center mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
                Got Questions?
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Can’t talk? Don’t worry, we have got all the answers right here.
            </h2>
          </div>

          <div className="space-y-3 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-800 bg-slate-950 rounded-2xl transition-all duration-200 overflow-hidden shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left text-xs sm:text-sm font-bold text-white hover:text-[#0b5cff] transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                      openFaq === index ? "rotate-180 text-[#0b5cff]" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-4 text-xs sm:text-sm text-slate-00 leading-relaxed border-t border-slate-900 pt-3 bg-slate-900/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}