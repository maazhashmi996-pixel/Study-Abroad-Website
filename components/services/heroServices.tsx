"use client";

import Image from "next/image";

export default function VisaHero() {
  return (
    <section className=" text-slate-700 py-12 sm:py-16 lg:py-20 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-14">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0b5cff] bg-slate-900 px-4 py-1.5 rounded-full inline-block mb-4 border border-slate-800">
              Visa Assistance <span className="text-red-500">•</span>
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight sm:leading-tight lg:leading-tight text-slate-700 tracking-tight">
              Tailored Services for Your
              <span className="text-[#0b5cff] block sm:inline lg:block">
                Study Abroad Success
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 lg:mt-8 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-400 max-w-2xl mx-auto lg:mx-0">
              At D. Education Zone, we offer Study Visa Services that make
              the visa process easier for students and professionals.
              From your first assessment and one-to-one consultation to
              shortlisting universities or programs, we guide you at
              every step, help you prepare documents, refine your
              statement of purpose, get ready for interviews, and submit
              a complete, accurate visa file.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-md lg:max-w-xl aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/70 shadow-2xl p-4">
              <Image
                src="/images/services/couple.jpg"
                alt="couple"
                width={800}
                height={800}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}