"use client";

import { AlertTriangle } from "lucide-react";

interface CommonMistake {
  title: string;
  desc: string;
}

const mistakes: CommonMistake[] = [
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

export default function MistakesSection() {
  return (
    <section className="bg-white text-slate-800 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Header Title & Subtitle */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-blue-600">
            Common Mistakes
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Most application delays and rejections happen because of these easily avoidable issues.
          </p>
        </div>

        {/* Responsive Mistakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {mistakes.map((item, idx) => (
            <div
              key={idx}
              className={`bg-slate-50/50 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between space-y-3 hover:border-red-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group ${
                idx === mistakes.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Container */}
        <div className="max-w-2xl mx-auto pt-2">
          <div className="bg-white border border-slate-200 border-l-4 border-l-blue-600 rounded-r-xl rounded-l-md p-4 text-center shadow-sm">
            <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
              A clean file saves time. A rushed file causes unnecessary stress all the way to the <span className="text-blue-600 font-semibold">visa stage</span>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}