"use client";

import React from "react";

export default function Blue() {
  const mistakes = [
    {
      title: "Submitting inconsistent information",
      desc: "Dates, grades, or job titles in your form do not match your transcripts or CV. This creates doubt and triggers manual review.",
    },
    {
      title: "Forgetting required documents",
      desc: "Leaving out English test proof, final semester transcript, or passport scan means the university will not process your file until you fix it. That can cost you weeks.",
    },
    {
      title: "Weak or copy-paste Statement of Purpose",
      desc: 'Generic or AI-sounding SOPs are a red flag. The university wants to see a real reason why you chose this program, not just "I am passionate about business."',
    },
    {
      title: "Applying too late in the intake",
      desc: "Students wait, then panic-submit near deadline. By then some courses are already full or paused, so even a qualified student may not get a seat just because of timing.",
    },
    {
      title: "Applying for programs you are not eligible for",
      desc: "This wastes your intake window. If the university rejects you because you don't meet minimum entry criteria, you may not have time left to apply anywhere else.",
    },
  ];

  return (
    <section className="bg-[#3B1E54] text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header Title & Subtitle */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Common mistakes
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 opacity-90">
            Most delays and rejections at this stage happen because of avoidable issues
          </p>
        </div>

        {/* 5 Mistakes Cards Layout */}
        <div className="space-y-5">
          {/* Top 2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {mistakes.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className="bg-[#2E1643] border border-purple-900/60 rounded-2xl p-6 sm:p-7 shadow-lg space-y-2.5"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#ECA82C]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Middle 2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {mistakes.slice(2, 4).map((item, idx) => (
              <div
                key={idx + 2}
                className="bg-[#2E1643] border border-purple-900/60 rounded-2xl p-6 sm:p-7 shadow-lg space-y-2.5"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#ECA82C]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Centered Single Card (5th Item) */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#2E1643] border border-purple-900/60 rounded-2xl p-6 sm:p-7 shadow-lg space-y-2.5 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-[#ECA82C]">
                {mistakes[4].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {mistakes[4].desc}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner Container */}
        <div className="max-w-2xl mx-auto pt-2">
          <div className="bg-[#2E1643]/60 border border-purple-800/40 rounded-xl p-4 text-center">
            <p className="text-xs sm:text-sm font-medium text-slate-200">
              A clean file saves time. A rushed file causes stress all the way to visa stage.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}