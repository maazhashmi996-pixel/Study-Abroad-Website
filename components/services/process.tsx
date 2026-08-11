"use client";

import Image from "next/image";
import Link from "next/link";

export default function Secure() {
  return (
    <section className="  px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16 md:py-20 border-t border-slate-900">
      <div className="max-w-7xl  mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-14">
        
        {/* Image Block */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[650px] aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
            <Image
              src="/images/about/Secure.jpg"
              alt="Secure Your Future"
              fill
              sizes="(max-width: 1024px) 100vw, 650px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content Block */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-6 w-full lg:w-1/2">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0b5cff] bg-slate-900 px-4 py-1.5 rounded-full inline-block border border-slate-800">
            Get Started <span className="text-red-500">•</span>
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800 leading-tight">
            Secure Your Future With{" "}
            <span className="text-[#0b5cff]">D. Education Zone</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-2xl">
            Unlock your future with guaranteed guidance and secure admission in 3,000+ world-class universities through our expert counseling.
          </p>

          <Link
            href="/free-consultation"
            className="px-8 py-3.5 bg-[#0b5cff] hover:bg-white text-white  hover:text-slate-800 hover:border-[#0b5cff] font-bold text-sm sm:text-base rounded-xl transition-all duration-500 shadow-lg border border-blue-400/20 active:scale-95 uppercase tracking-wider"
          >
            Book a Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}