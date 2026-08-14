"use client";

import React from "react";

export default function Steps() {
   const openWhatsApp = (
    phoneNumber: string = "923452066100",
    message: string = "Hello! I need some information."
  ) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
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
    <div className="w-full font-sans text-white ">
      
      {/* ================= SECTION 1: DARK SLATE SECTION (THE 8 STEPS) ================= */}
      <section className=" text-slate-800 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
                Step-By-Step Process
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-">
              The 8 Study Abroad Steps
            </h2>
          </div>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-slate-900 rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-800 hover:border-[#0b5cff]/50 transition-all duration-200 flex items-start space-x-4 relative overflow-hidden group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#0b5cff] text-slate-800 flex items-center justify-center font-black text-sm sm:text-base shrink-0 shadow-lg border border-blue-400/20">
                  {index + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-base sm:text-lg text-white group-hover:text-[#0b5cff] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
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
        onClick={() => openWhatsApp("923452066100", "Hi, I clicked Contact Us!")}
              className="bg-[#0b5cff] hover:bg-blue-600 text-slate-800 font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl border border-blue-400/20 shadow-lg active:scale-95 cursor-pointer focus:outline-none transition-all duration-200"
            >
              Talk to a Study Abroad Advisor
            </button>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: BLACK SECTION (HOW WE FIT IN) ================= */}
      <section className=" text-slate-800 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-10">
          
          <div className="space-y-3 max-w-2xl mx-auto px-2">
            <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
                Our Expertise
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-800">
              How D. Education Zone fits into this journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              D. Education Zone has been guiding students since 2004 across the UK, Canada, Australia, Germany, Europe, and more. The way we work is simple:
            </p>
          </div>

          {/* Consultant Role Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {consultantRole.map((roleText, index) => (
              <div 
                key={index}
                className="border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-center min-h-[80px] sm:min-h-[90px] bg-slate-900/80 hover:border-[#0b5cff]/50 transition-all duration-200 shadow-md group"
              >
                <p className="text-slate-300 group-hover:text-white font-semibold text-xs sm:text-sm leading-snug text-center transition-colors">
                  {roleText}
                </p>
              </div>
            ))}
          </div>

          {/* Action Box & Bottom CTA */}
          <div className="space-y-6 max-w-xl mx-auto px-2 bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Tell us which country, which intake, and your last qualification—we'll tell you exactly which step you're on right now.
            </p></div>

        </div>
      </section>

    </div>
  );
}