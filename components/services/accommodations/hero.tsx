"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden  border-b border-slate-900">
      
      {/* Background Image */}
      <Image
        src="/images/services/iaccommodation.jpg"
        alt="Student Accommodation"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-80"
      />

      {/* Dark Gradient Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Hero Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-end pb-8 sm:pb-12">
        <div>
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0b5cff] bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full inline-block mb-3 border border-slate-800">
            Accommodation Services <span className="text-red-500">•</span>
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-md">
            Student Accommodation Assistance
          </h1>
        </div>
      </div>

    </section>
  );
}