"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
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

export default function Talk() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-14 text-[#43246f]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight">
          Can’t talk? Don’t worry, we have got all the answers right here.
        </h1>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all"
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 pr-2">
                    {item.question}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-90 text-[#3b1d5c]" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-100 bg-gray-50/50 leading-relaxed">
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