"use client";

import Image from "next/image";

export default function First() {
  return (
    <section className="w-full bg-black py-6 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-900">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-slate-800 bg-slate-900 p-2 sm:p-3 relative">
        
        {/* Accent Indicator Badge */}
        <div className="absolute top-5 left-5 z-10 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800">
          <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
            Language Training
          </span>
        </div>

        {/* Responsive Aspect-Ratio Container */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden">
          <Image
            src="/images/services/ilanguage.jpg"
            alt="Study Abroad Services"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

      </div>
    </section>
  );
}