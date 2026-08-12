
"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

// Types
interface FAQItem {
  question: string;
  answer: string;
}

// Timeline
const timelineSteps = [
  "Visa approved → book flight right away",
  "Arrive 7-14 days before classes",
  "Enroll in first academic week",
  "Start classes and maintain attendance",
];

// Required Documents
const requiredDocuments = [
  "Passport with student visa / study permit",
  "University offer letter / CAS / CoE / LOA",
  "Tuition fee payment receipt (at least deposit)",
  "Accommodation confirmation / address",
  "Airport pickup / contact of friend/relative (if any)",
  "Financial proof (some immigration officers ask to see funds on arrival)",
  "Medical / TB certificate (if your country requires)",
  "Copies of all previous education documents (not always asked, but good to have)",
];

// Delay Consequences
const delayConsequences = [
  {
    title: "University can report you as 'did not start'",
    description: "This can directly affect your valid visa status.",
  },
  {
    title: "You may be asked to defer to next intake",
    description:
      "If you miss too many initial orientation days or classes.",
  },
  {
    title: "Your student benefits get delayed",
    description:
      "Accommodation, part-time work permit, and student IDs rely on enrollment.",
  },
  {
    title: "You waste valuable time & money",
    description:
      "Delaying your career after completing all application steps.",
  },
];

// Help
const helpBulletPointsLeft = [
  "What to carry in your pre-departure document file",
  "When to travel for your specific university intake",
  "What to tell immigration officers during border entry questions",
];

const helpBulletPointsRight = [
  "How to report to the university if your flight gets delayed",
  "Work hour rules for UK, Canada, Australia & Europe",
  "How to maintain full compliance so your visa stays valid",
];

// FAQ
const faqs: FAQItem[] = [
  {
    question: "When should I travel to my study country?",
    answer:
      "Ideally arrive 7 to 14 days before your course start date to settle down, find accommodation, and complete mandatory university orientation.",
  },
  {
    question: "What documents should I carry in hand-carry when traveling?",
    answer:
      "Always keep your original passport, visa grant letter, university CAS/offer letter, financial proofs, and accommodation details in your hand luggage.",
  },
  {
    question: "What happens if my flight gets delayed past orientation?",
    answer:
      "Inform your university international office immediately so they can update your registration status and prevent visa cancellation reporting.",
  },
];

export default function Timeline() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans pb-16 sm:pb-20">

      {/* =====================================================
          SECTION 1: ARRIVAL & PROGRAM START TIMELINE
      ====================================================== */}
      <section className="bg-slate-50 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200">

        <div className="max-w-5xl mx-auto space-y-7 sm:space-y-9">

          {/* Heading */}
          <div className="text-center space-y-2">

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Your Next Steps
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Arrival & Program Start Timeline
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Follow these important steps to make your arrival and university
              start smooth and stress-free.
            </p>

          </div>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="
                  group
                  bg-white
                  border border-slate-200
                  hover:border-[#2563EB]/30
                  rounded-2xl
                  p-5
                  shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                  hover:shadow-[0_8px_25px_rgba(37,99,235,0.08)]
                  transition-all duration-300
                  flex flex-col
                  justify-center
                  items-center
                  text-center
                  space-y-3
                "
              >

                {/* Number */}
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center group-hover:bg-[#2563EB] transition-colors duration-300">

                  <span className="text-sm font-extrabold text-[#2563EB] group-hover:text-white transition-colors">
                    {idx + 1}
                  </span>

                </div>

                <span className="text-[10px] uppercase font-bold tracking-wider text-[#2563EB]">
                  Step 0{idx + 1}
                </span>

                <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                  {step}
                </span>

              </div>
            ))}

          </div>

          {/* Previous Step */}
          <div className="flex justify-center pt-1">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-semibold shadow-sm">

              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />

              Previous Step:
              <span className="text-[#2563EB]">
                Apply For Visa
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 2: DOCUMENTS REQUIRED
      ====================================================== */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">

        <div className="max-w-5xl mx-auto space-y-7 sm:space-y-9">

          {/* Heading */}
          <div className="text-center space-y-2">

            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Immigration Checklist
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Documents & Proof Required at Immigration
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Keep these documents safely in a{" "}
              <strong className="text-slate-800">
                document folder inside your hand-carry bag.
              </strong>
            </p>

          </div>

          {/* Documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

            {requiredDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="
                  group
                  flex items-center gap-3
                  p-4
                  rounded-2xl
                  border border-slate-200
                  bg-slate-50
                  hover:bg-white
                  hover:border-[#2563EB]/30
                  hover:shadow-[0_6px_20px_rgba(37,99,235,0.06)]
                  transition-all duration-300
                "
              >

                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] transition-colors">

                  <CheckCircle className="w-4 h-4 text-[#2563EB] group-hover:text-white transition-colors" />

                </div>

                <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                  {doc}
                </span>

              </div>
            ))}

          </div>

          {/* Important Note */}
          <div className="flex items-start gap-3 max-w-2xl mx-auto p-4 rounded-2xl bg-[#EF4444]/5 border border-[#EF4444]/15">

            <AlertCircle className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Keep your original documents and important copies accessible
              during your journey. Do not place essential documents inside
              checked luggage.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 3: WHAT HAPPENS IF YOU DELAY
      ====================================================== */}
      <section className="bg-slate-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200">

        <div className="max-w-4xl mx-auto space-y-7 sm:space-y-9">

          <div className="text-center space-y-2">

            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#EF4444]">
              Important
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Happens If You Delay?
            </h2>

            <p className="text-xs sm:text-sm text-slate-500">
              If you arrive late or fail to complete mandatory enrollment on
              time:
            </p>

          </div>

          {/* Consequence Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {delayConsequences.map((item, idx) => (
              <div
                key={idx}
                className="
                  group
                  bg-white
                  border border-slate-200
                  hover:border-[#EF4444]/25
                  p-5
                  rounded-2xl
                  space-y-2
                  shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                  hover:shadow-[0_8px_25px_rgba(239,68,68,0.06)]
                  transition-all duration-300
                "
              >

                <div className="flex items-start gap-3">

                  <div className="w-8 h-8 rounded-lg bg-[#EF4444]/10 flex items-center justify-center shrink-0">

                    <AlertCircle className="w-4 h-4 text-[#EF4444]" />

                  </div>

                  <div>

                    <h3 className="font-extrabold text-sm sm:text-base text-slate-800 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

          <p className="text-xs text-slate-500 italic text-center max-w-md mx-auto">
            Although this seems like a final administrative step, it is
            extremely time-sensitive.
          </p>

        </div>

      </section>


      {/* =====================================================
          SECTION 4: HOW D.EDUCATION ZONE HELPS
      ====================================================== */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">

        <div className="max-w-4xl mx-auto space-y-7 sm:space-y-9">

          {/* Heading */}
          <div className="text-center space-y-2">

            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              D.Education Zone Support
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              How D.Education Zone Helps at This Stage
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Our support continues well past visa approval. Here is how we
              assist prior to your departure:
            </p>

          </div>

          {/* Help Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <ul className="space-y-3 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">

              {helpBulletPointsLeft.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                >

                  <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />

                  <span className="leading-relaxed">
                    {point}
                  </span>

                </li>
              ))}

            </ul>


            <ul className="space-y-3 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">

              {helpBulletPointsRight.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                >

                  <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />

                  <span className="leading-relaxed">
                    {point}
                  </span>

                </li>
              ))}

            </ul>

          </div>


          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-1">

            <button
              type="button"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                bg-[#2563EB]
                hover:bg-[#1D4ED8]
                text-white
                text-xs sm:text-sm
                font-bold
                py-3
                px-6
                rounded-xl
                transition-all
                shadow-sm
                hover:shadow-md
                active:scale-95
              "
            >
              Get Pre-Departure Guidance
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                bg-white
                hover:bg-slate-50
                border border-[#2563EB]
                text-[#2563EB]
                text-xs sm:text-sm
                font-bold
                py-3
                px-6
                rounded-xl
                transition-all
                active:scale-95
              "
            >
              Stay Supported After Arrival
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 5: FAQ
      ====================================================== */}
      <section className="bg-slate-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">

        <div className="max-w-3xl mx-auto space-y-7">

          {/* Heading */}
          <div className="text-center space-y-2">

            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Need To Know
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-xs sm:text-sm text-slate-500">
              Clear answers to common arrival and orientation inquiries.
            </p>

          </div>


          {/* FAQ Accordion */}
          <div className="space-y-3 pt-1">

            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className={`
                    overflow-hidden
                    rounded-2xl
                    border
                    transition-all duration-300
                    ${
                      isOpen
                        ? "border-[#2563EB]/30 shadow-[0_6px_20px_rgba(37,99,235,0.06)]"
                        : "border-slate-200 shadow-sm"
                    }
                  `}
                >

                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className={`
                      w-full
                      flex
                      justify-between
                      items-center
                      gap-4
                      p-4 sm:p-5
                      text-left
                      font-bold
                      text-xs sm:text-sm
                      transition-colors
                      ${
                        isOpen
                          ? "bg-[#2563EB]/5 text-[#2563EB]"
                          : "bg-white text-slate-800 hover:bg-slate-50"
                      }
                    `}
                  >

                    <span className="pr-2">
                      {faq.question}
                    </span>

                    <div
                      className={`
                        w-7 h-7
                        rounded-lg
                        flex items-center justify-center
                        shrink-0
                        ${
                          isOpen
                            ? "bg-[#2563EB] text-white"
                            : "bg-slate-100 text-slate-500"
                        }
                      `}
                    >

                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}

                    </div>

                  </button>


                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100 pt-4">

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

