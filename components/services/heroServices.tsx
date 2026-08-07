"use client";

import Image from "next/image";

export default function VisaHero() {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-14">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight lg:leading-tight text-[#43246f] tracking-tight">
              Tailored Services for Your
              <span className="block sm:inline lg:block">
                Study Abroad Success
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-relaxed text-gray-700 max-w-2xl mx-auto lg:mx-0">
              At D.Education Zone, we offer Study Visa Services that make
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
            <div className="relative w-full max-w-md lg:max-w-xl aspect-square sm:aspect-[4/3] lg:aspect-square">
              <Image
                src="/images/services/services.png"
                alt="Tailored-Services"
               height={800}
               width={800}
             
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}