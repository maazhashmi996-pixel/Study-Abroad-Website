"use client";

import Image from "next/image";
import {
  CheckCircle,
 
} from "lucide-react";

function hero() {
      // Prerequisites Data
  const prerequisites = [
    {
      title: "Your submitted university application",
      desc: "Step 2 completed and submitted to the university portal.",
    },
    {
      title: "Your application reference number",
      desc: "Keep your student portal login or reference code ready to track status.",
    },
    {
      title: "Active email monitoring",
      desc: "Check your inbox and spam folder daily for offer updates or requests.",
    },
    {
      title: "Understanding of entry requirements",
      desc: "Know what pending grades or language scores you still need to provide.",
    },
    {
      title: "Clear timeline awareness",
      desc: "Be prepared to act fast on offer deadlines to secure your seat.",
    },
    {
      title: "Financial planning in progress",
      desc: "Have a plan ready for how you will pay the tuition deposit when requested.",
    },
  ];
  return (
    <>
        {/* 1. HERO & WHY THIS STEP MATTERS */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-4 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3B1E54] tracking-tight">
              Receive Offer Letter
            </h1>

            <div className="space-y-3 pt-1">
              <h2 className="text-xl sm:text-2xl font-bold text-[#3B1E54]">
                Why this step matters
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your offer letter is the university saying, “We are willing to give you a place if you meet our conditions.”
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This is the first official confirmation from the university after you submit your application. Most students receive a conditional offer letter first, which means you’re not fully approved yet, but you’re on track.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You cannot move forward to deposit payment, visa, or travel without an offer letter. It’s the document that proves the university wants you.
              </p>

              <p className="text-xs sm:text-sm text-[#3B1E54] font-semibold pt-1">
                In short: Step 3 is the point where your application stops being “maybe” and becomes “yes, if...”
              </p>
            </div>
          </div>

          {/* Right Hero Image Container */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-full aspect-[4/3]">
              <Image 
                src="/images/steps/3-1.png"
                alt="Receive Offer Letter Illustration"  
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>

        {/* DIVIDER WITH STAR */}
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="flex-shrink mx-4 text-[#3B1E54] text-xs sm:text-sm">★</span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        {/* 2. WHAT YOU NEED BEFORE STARTING */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#3B1E54] tracking-tight">
              What you need before starting
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Before receiving and processing your offer letter, ensure you have:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Grid Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prerequisites.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-[#3B1E54] p-4 sm:p-5 rounded-2xl shadow-sm space-y-2 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="space-y-2">
                    <CheckCircle className="w-5 h-5 text-[#3B1E54] shrink-0" />
                    <h3 className="font-extrabold text-xs sm:text-sm text-[#3B1E54] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Prerequisites Image Container */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div className="relative w-full max-w-xs sm:max-w-sm aspect-square">
                <Image 
                  src="/images/steps/3.png"
                  alt="Prerequisites Illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      </>
  )
}

export default hero
