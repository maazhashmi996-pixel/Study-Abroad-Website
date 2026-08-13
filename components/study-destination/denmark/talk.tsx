"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function Talk() {
  const [open, setOpen] = useState<number | null>(0);

  const faqData = [
    {
      question: "How much IELTS band required to study in Denmark?",
      answer:
        "To study in Denmark, non-native English speakers generally need a minimum IELTS score of 6.5. However, requirements can vary by institution and program, so it’s important to check specific requirements with the university.",
    },
    {
      question: "Is it possible to study in Denmark without IELTS?",
      answer:
        "Yes, some universities in Denmark may accept alternative English proficiency proofs, such as TOEFL, PTE, or Cambridge tests. Additionally, if you have completed previous education in English, some institutions might waive the IELTS requirement.",
    },
    {
      question: "How to get PR in Denmark after study?",
      answer:
        "To qualify for permanent residency in Denmark after studying, you must have lived in Denmark for at least 8 years, or 4 years if you meet certain criteria like language skills and employment. Graduates can extend their stay with a post-study work visa, which can be a pathway to PR if employment and integration conditions are met.",
    },
    {
      question: "How to study in Denmark for free?",
      answer:
        "Students from the EU/EEA and Switzerland can study for free at public universities in Denmark. Non-EU/EEA students can look for scholarships from the Danish government or individual institutions, which can cover tuition fees and living costs.",
    },
    {
      question: "Can Pakistani students work while studying in Denmark?",
      answer:
        "Yes. Denmark allows international students to work 20 hours per week during term time and full-time during June, July, and August. No separate work permit is needed as your student residence permit covers it. Copenhagen has strong part-time opportunities in hospitality, retail, and university campuses, with hourly rates among the highest in Europe.",
    },
    {
      question: "Why do Denmark student visas get rejected from Pakistan?",
      answer:
        "Main rejection reasons: insufficient bank balance, weak or generic motivation letter, no clear connection between previous qualifications and chosen programme, missing health insurance, and unconvincing ties to Pakistan.",
    },
    {
      question: "Which are the top universities in Denmark for international students?",
      answer:
        "Top choices: Technical University of Denmark (DTU) for engineering and technology, University of Copenhagen for sciences and medicine, Aarhus University for business and social sciences, and Copenhagen Business School for finance and management. DTU consistently ranks among Europe’s top technical universities.",
    },
    {
      question: "What is a CPR number and how do students get it in Denmark?",
      answer:
        "CPR (Det Centrale Personregister) is Denmark’s national identity number, essential for opening a bank account, accessing healthcare, and starting work. You receive it automatically after registering your address at your local Citizen Service Centre within 5 days of arriving in Denmark. Without a CPR number, daily student life in Denmark is extremely difficult.",
    },
    {
      question: "Denmark vs Germany, which is better for Pakistani students?",
      answer:
        "Germany offers near-free tuition but requires German language for most bachelor’s programmes and mandatory APS certification from Pakistan. Denmark teaches almost entirely in English at master’s level, has no APS requirement, and offers higher part-time wages. Germany suits engineering students comfortable with German. Denmark suits those prioritising English-medium study and a high quality of life.",
    },
  ];

  return (
    <section className="bg-slate-50/70 border-y border-slate-100 px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20">
      {/* Container aligned with all other sections (max-w-7xl) */}
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Header Section */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <span className="w-8 h-[2px] bg-red-500" />
            <span className="text-red-600 text-xs uppercase tracking-widest font-bold">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a233d] tracking-tight">
            Can’t talk? Don’t worry, <span className="text-[#0b5cff]">we have got all answers right here.</span>
          </h2>
        </div>

        {/* Accordion FAQ Grid */}
        <div className="space-y-4 max-w-5xl">
          {faqData.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl bg-white shadow-2xs overflow-hidden transition-all duration-200 ${
                  isOpen ? "border-[#0b5cff] shadow-md" : "border-slate-200/80 hover:border-slate-300"
                }`}
              >
                {/* Accordion Toggle Button */}
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {/* Red Accent Icon Container */}
                    <div className="shrink-0 w-8 h-8 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center justify-center">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-[#1a233d] leading-snug">
                      {item.question}
                    </span>
                  </div>

                  {/* Toggle Arrow */}
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "bg-[#0b5cff] text-white rotate-180" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                    {item.answer}
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