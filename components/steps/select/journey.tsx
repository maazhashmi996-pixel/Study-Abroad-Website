"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Journey() {
 const stepsCards = [
  {
    link: "/select-program",
    title: "Select Your Program",
    desc: "This is where you match your academics + budget + country preference + intake. A good choice here increases acceptance and visa success.",
  },
  {
    link: "/submit-application",
    title: "Submit Application",
    desc: "You fill the university / portal form, upload documents, and pay the application fee (if required). Clean, complete files get faster decisions.",
  },
  {
    link: "@app/receive-offer-letter",
    title: "Receive Offer Letter",
    desc: "The university reviews your file and sends a conditional offer (usually). You must read it carefully as it contains deadlines and conditions.",
  },
  {
    link: "/fulfill-conditions",
    title: "Fulfill Conditions",
    desc: "You send whatever the university is still asking for; final transcript, IELTS/PTE, passport copy, deposit in some cases. This is what unlocks your unconditional offer.",
  },
  {
    link: "/pay-tution-deposit",
    title: "Pay Tuition Deposit",
    desc: "To secure your seat, you pay the tuition deposit mentioned in your offer letter, using the official university channel. Delays here = delays in CAS/CoE.",
  },
  {
    link: "/get-unconditional-offer",
    title: "Get Unconditional Offer",
    desc: "Now the university confirms all good, nothing pending, you're fully accepted. This is the admission proof most embassies want to see.",
  },
  {
    link: "/apply-for-visa",
    title: "Apply for Visa",
    desc: "You submit your student visa / study permit file with admission proof, funds, medical/biometrics, and a proper study plan (where needed).",
  },
  {
    link: "/start-your-program",
    title: "Start Your Program",
    desc: "You travel, clear immigration, enroll at the university, attend orientation, and start classes on time without breaking visa rules.",
  },
];
  const valueProps = [
    "We check your profile before telling you where to apply",
    "We prepare and submit applications on time",
    "We review offer letters so you don't miss conditions",
    "We guide on deposits and official payment channels",
    "We push universities to issue unconditional offers when intakes are close",
    "We build visa files according to updated rules",
    "We give pre-departure help so you arrive and enroll on time",
  ];

  return (
    <div className="w-full font-sans">
      
      {/* 1. YELLOW SECTION: The 8 Study Abroad Steps */}
      <section className="bg-[#ECA82C] text-[#3B1E54] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              The 8 Study Abroad Steps
            </h2>
            <p className="text-xs sm:text-sm font-medium opacity-90 max-w-xl mx-auto">
              Follow this step-by-step roadmap from initial program selection to stepping onto your new campus.
            </p>
          </div>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {stepsCards.map((step, idx) => (
               <Link key={idx} href={step.link}>
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between border border-amber-200/50 space-y-3"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-amber-100 text-[#3B1E54] text-xs font-black">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-[#3B1E54] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
                </Link>
            ))}
          </div>

          {/* Middle Call to Action Pill Button */}
          <div className="text-center pt-2">
            <button className="bg-white hover:bg-slate-50 text-[#3B1E54] font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow transition-all duration-200 inline-flex items-center space-x-2 active:scale-95">
              <span>Talk to a Study Abroad Advisor</span>
              <ArrowRight className="w-4 h-4 text-[#ECA82C] shrink-0" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. PURPLE SECTION: How Times Consultant fits into this journey */}
      <section className="bg-[#3B1E54] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10 text-center">
          
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              How Times Consultant Fits Into This Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Times Consultant has been guiding students since 2004 across the UK, Canada, Australia, Germany, Europe, and more. The way we work is simple:
            </p>
          </div>

          {/* 7 Outlined Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {valueProps.map((item, idx) => (
              <div
                key={idx}
                className={`border border-amber-400/30 rounded-xl p-4 bg-white/5 backdrop-blur-sm flex items-center justify-center text-center shadow-sm ${
                  idx === valueProps.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Subtext & Action Button */}
          <div className="space-y-4 pt-2 max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Tell us which country, which intake, and your last qualification, we'll tell you exactly which step you're on right now.
            </p>

            <div>
              <button className="bg-[#ECA82C] hover:bg-[#d99723] text-[#3B1E54] font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-lg transition-all duration-200 uppercase tracking-wider active:scale-95">
                Review My Study Visa Case
              </button>
            </div>

            <p className="text-[11px] sm:text-xs text-amber-300/80 italic leading-relaxed">
              Send your offer letter / application status to Times Consultant and we'll tell you what is done, what is pending, and what to do next to catch your intake.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}