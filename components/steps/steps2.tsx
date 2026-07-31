"use client";

import React from "react";

export default function Steps() {
  const steps = [
    {
      title: "Select Your Program",
      description:
        "This is where you match your academics + budget + country preference + intake. A good choice here increases acceptance and visa success.",
    },
    {
      title: "Submit Application",
      description:
        "You fill the university / portal form, upload documents, and pay the application fee (if required). Clean, complete files get faster decisions.",
    },
    {
      title: "Receive Offer Letter",
      description:
        "The university reviews your file and sends a conditional offer (usually). You must read it carefully as it contains deadlines and conditions.",
    },
    {
      title: "Fulfill Conditions",
      description:
        "You send whatever the university is still asking for; final transcript, IELTS/PTE, passport copy, deposit in some cases. This is what unlocks your unconditional offer.",
    },
    {
      title: "Pay Tuition Deposit",
      description:
        "To secure your seat, you pay the tuition deposit mentioned in your offer letter, using the official university channel. Delays here = delays in CAS/CoE.",
    },
    {
      title: "Get Unconditional Offer",
      description:
        "Now the university confirms: all good, nothing pending, you're fully accepted. This is the admission proof most embassies want to see.",
    },
    {
      title: "Apply for Visa",
      description:
        "You submit your student visa / study permit file with admission proof, funds, medical/biometrics, and a proper study plan (where needed).",
    },
    {
      title: "Start Your Program",
      description:
        "You travel, clear immigration, enroll at the university, attend orientation, and start classes on time without breaking visa rules.",
    },
  ];

  const consultantRole = [
    "We check your profile before telling you where to apply",
    "We prepare and submit applications on time",
    "We review offer letters so you don't miss conditions",
    "We guide on deposits and official payment channels",
    "We push universities to issue unconditional offers when intakes are close",
    "We build visa files according to updated rules",
    "We give pre-departure help so you arrive and enroll on time",
  ];

  return (
    <div className="w-full font-sans text-slate-800">
      
      {/* ================= SECTION 1: YELLOW SECTION (THE 8 STEPS) ================= */}
      <section className="bg-[#f5a623] text-[#2a1747] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-center tracking-tight">
            The 8 Study Abroad Steps
          </h2>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-amber-200 hover:shadow-lg transition-all duration-200 flex items-start space-x-4"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2a1747] text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0">
                  {index + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base sm:text-lg text-[#2a1747]">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center pt-2">
            <button 
              type="button"
              className="bg-white text-[#2a1747] hover:bg-slate-50 font-semibold text-xs sm:text-base px-6 sm:px-8 py-3.5 rounded-full border border-amber-200 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer focus:outline-none"
            >
              Talk to a Study Abroad Advisor
            </button>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: PURPLE SECTION (HOW WE FIT IN) ================= */}
      <section className="bg-[#2a1747] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-10">
          
          <div className="space-y-3 max-w-2xl mx-auto px-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              How Times Consultant fits into this journey
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Times Consultant has been guiding students since 2004 across the UK, Canada, Australia, Germany, Europe, and more. The way we work is simple:
            </p>
          </div>

          {/* Consultant Role Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {consultantRole.map((roleText, index) => (
              <div 
                key={index}
                className="border border-amber-400/80 rounded-xl p-4 sm:p-5 flex items-center justify-center min-h-[80px] sm:min-h-[90px] bg-[#22123b] hover:border-amber-400 transition-all duration-200 shadow-sm"
              >
                <p className="text-amber-400 font-medium text-xs sm:text-sm leading-snug text-center">
                  {roleText}
                </p>
              </div>
            ))}
          </div>

          {/* Action Box & Bottom CTA */}
          <div className="space-y-6 max-w-xl mx-auto px-2">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Tell us which country, which intake, and your last qualification—we'll tell you exactly which step you're on right now.
            </p>

            <div>
              <button 
                type="button"
                className="bg-[#f5a623] hover:bg-amber-400 text-[#2a1747] font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg active:scale-95 cursor-pointer focus:outline-none"
              >
                Review My Study Visa Case
              </button>
            </div>

            <p className="text-[11px] sm:text-xs text-amber-300/90 font-light leading-relaxed pt-2">
              Send your offer letter or application status to Times Consultant and we'll review what is done, what is pending, and what to do next to catch your intake.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}