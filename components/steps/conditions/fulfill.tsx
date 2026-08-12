"use client";

import Image from "next/image";

export default function FulfillConditionsPage() {
  return (
    <div className="w-full font-sans text-slate-800">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6">

            <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
                Critical Step
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 tracking-tight">
              Fulfill Conditions
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0b5cff] tracking-tight">
              Why This Step Matters
            </h2>

            <div className="space-y-4 sm:space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 font-medium">

              <p className="bg-slate-950 border border-slate-900 p-4 sm:p-5 rounded-2xl shadow-inner">
                After you receive a conditional offer, the university is basically saying:{" "}
                <span className="font-bold text-white">
                  "We want you, but prove you meet our requirements."
                </span>
              </p>

              <p className="text-slate-800">
                In this step, you submit whatever the university is still asking
                for such as final transcripts, updated IELTS/PTE score,
                financial evidence, passport copy, etc.
              </p>

              <p className="text-slate-800">
                Once all conditions are met and approved, the university can move
                you to an{" "}
                <span className="font-bold text-[#0b5cff]">
                  unconditional offer,
                </span>{" "}
                which is usually required before you pay tuition fees or apply
                for your student visa.
              </p>

              <p className="text-slate-500 text-xs sm:text-sm border-l-2 border-red-500 pl-4 py-1">
                If you do not clear these conditions on time, you risk losing
                your place in the intake even after receiving an offer.
              </p>

              <p className="font-extrabold text-white pt-2 text-base sm:text-lg">
                This is the point where students either stay on track or fall
                behind and miss the intake.
              </p>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center w-full">
            <div className="relative w-full max-w-md lg:max-w-xl aspect-square sm:aspect-[4/3] lg:aspect-square bg-slate-950 border border-slate-900 rounded-3xl p-4 shadow-2xl overflow-hidden">
              {/* Glow Behind Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#0b5cff]/10 rounded-full blur-3xl pointer-events-none" />
              
              <Image
                src="/images/steps/3-1.png"
                alt="Fulfill Conditions Illustration"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-contain p-4 opacity-90 relative z-10"
              />
            </div>
          </div>

        </div>

      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-slate-900 my-4 text-center relative">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-3 text-[#0b5cff] text-xs font-bold">★</span>
      </div>

    </div>
  );
}