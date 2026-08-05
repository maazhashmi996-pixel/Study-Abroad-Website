import React from "react";
import Link from "next/link";

export default function Common() {
  const commonMistakes = [
    {
      title: "Showing outdated or too-low funds",
      description: "(big one for Canada in 2025, they raised the amount).",
    },
    {
      title: "Not matching university data",
      description:
        "(visa application dates don't match CoE/CAS; course name spelled wrong).",
    },
    {
      title: "Weak intention / no proper study plan",
      description: "(visa officer not convinced you're going to study).",
    },
    {
      title: "Bank statements without ownership/explanation",
      description: "(who is paying? what is their relation?).",
    },
    {
      title: "Submitting before final offer",
      description: "(trying to file visa with conditional offer).",
    },
    {
      title: "Applying too late",
      description:
        "(embassies are slow near intake, so even a good file can miss the start date).",
    },
  ];

  return (
    <div className=" font-sans  px-4 sm:px-6 md:px-8 lg:px-12  text-white">
      {/* Section 1: Common Mistakes */}
      <section className="py-12 mx-auto bg-[#2a1a4a]  max-w-7xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">
          Common mistakes
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mb-8 font-medium">
          This is a high-refusal step. The usual reasons
        </p>
        {/* Grid of Mistakes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-6">
          {commonMistakes.map((mistake, index) => (
            <div
              key={index}
              className="bg-[#38245f] border border-[#4a327a] rounded-xl p-5 text-center flex flex-col justify-center min-h-[100px]"
            >
              <h3 className="text-amber-400 font-bold text-sm sm:text-base mb-1">
                {mistake.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {mistake.description}
              </p>
            </div>
          ))}
        </div>

        {/* Small Notice Bar */}
        <div className="bg-[#342058] border border-[#482e75] rounded-lg max-w-xl mx-auto py-2 px-4 text-xs text-slate-300">
          Most of these are fixable <strong className="text-white">before</strong> submission that's where D.Education Zone should be involved.
        </div>
      </section>

      <hr className="border-purple-900/40 my-2" />

      {/* Section 2: Timeline */}
      <section className="py-2 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl text-[#3b2563] sm:text-3xl font-extrabold mb-8">
          Timeline (when this happens in the journey)
        </h2>

        <div className="space-y-4 max-w-2xl mx-auto mb-8 text-xs sm:text-sm">
          {/* UK Pill */}
          <div className="bg-[#3b2563] text-purple-100 py-3 px-6 rounded-xl border border-purple-800/40 font-medium">
            <strong className="text-white">UK:</strong> often 6 months before course start when applying from outside the UK.
          </div>

          {/* Canada Pill */}
          <div className="bg-[#3b2563] text-purple-100 py-3.5 px-6 rounded-xl border border-purple-800/40 font-medium">
            <strong className="text-white">Canada:</strong> as soon as you have LOA and funds, because 2025 has caps + higher funds → slower / stricter processing.
          </div>

          {/* Australia Pill */}
          <div className="bg-[#3b2563] text-purple-100 py-3 px-6 rounded-xl border border-purple-800/40 font-medium">
            <strong className="text-white">Australia:</strong> apply early, CoE + OSHC must be ready and visa fee is higher from July 2025.
          </div>

          {/* Special Note Box */}
          <div className="bg-white text-slate-900 py-2.5 px-6 rounded-full font-semibold border border-slate-200 text-xs sm:text-sm mt-6 shadow-sm">
            Rule for students in Pakistan: <span className="font-extrabold">don't wait for "1 month before intake"</span> that's how people miss flights.
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="#"
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs px-5 py-2.5 rounded-lg transition duration-150"
          >
            Previous Step: Get Unconditional Offer &larr;
          </Link>
          <Link
            href="#"
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs px-5 py-2.5 rounded-lg transition duration-150"
          >
            Next Step: Start Your Program &rarr;
          </Link>
        </div>
      </section>

     
    </div>
  );
}