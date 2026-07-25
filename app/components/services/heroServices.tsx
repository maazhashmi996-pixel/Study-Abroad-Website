"use client";

import Image from "next/image";

export default function VisaHero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-14">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-[#43246f]">
              Tailored Services for Your
              <br />
              Study Abroad Success
            </h1>
            <p className="mt-10 text-xl leading-10 text-gray-700">
              At Times Consultant, we offer Study Visa Services that make
              the visa process easier for students and professionals.
              From your first assessment and one-to-one consultation to
              shortlisting universities or programs, we guide you at
              every step, help you prepare documents, refine your
              statement of purpose, get ready for interviews, and submit
              a complete, accurate visa file.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/visa-hero.webp"
              alt="Visa Services"
              width={650}
              height={650}
              priority
              className="w-full max-w-155 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}