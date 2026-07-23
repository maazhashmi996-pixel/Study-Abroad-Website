"use client";
import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

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
      "Students from the EU/EEA and Switzerland can study for free at public universities in Denmark. Non-EU/EEA students can look for scholarships from the Danish government or individual institutions, which can cover tuition fees and living costs",
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
    question: "How to study in Denmark for free?",
    answer:
      "Top choices: Technical University of Denmark (DTU) for engineering and technology, University of Copenhagen for sciences and medicine, Aarhus University for business and social sciences, and Copenhagen Business School for finance and management. DTU consistently ranks among Europe’s top technical universities.",
  },
  {
    question: "What is a CPR number and how do students get it in Denmark?",
    answer:
      "CPR ( Det Centrale Personregister ) is Denmark’s national identity number, essential for opening a bank account, accessing healthcare, and starting work. You receive it automatically after registering your address at your local Citizen Service Centre within 5 days of arriving in Denmark. Without a CPR number, daily student life in Denmark is extremely difficult.",
  },
  {
    question: "Denmark vs Germany, which is better for Pakistani students?",
    answer:
      "Germany offers near-free tuition but requires German language for most bachelor’s programmes and mandatory APS certification from Pakistan. Denmark teaches almost entirely in English at master’s level, has no APS requirement, and offers higher part-time wages. Germany suits engineering students comfortable with German. Denmark suits those prioritising English-medium study and a high quality of life.",
  },
];
  return (
    <div className="flex flex-col mx-20 my-10 ">
      <h1 className="text-4xl flex flex-col  my-5 items-center ">Can’t talk? Don’t worry, we have got all the answers right here.</h1>
    
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl"
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full flex justify-between items-center px-4 py-2 text-left"
            >
              <span className="text-xl font-medium">
                {item.question}
              </span>

              {open === index ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </button>

            {open === index && (
              <div className="px-6 pb-5 text-gray-600 leading-7">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


