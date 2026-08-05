"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface ChecklistCardProps {
  title: string;
  subtitle?: string;
}

const checklistItems: ChecklistCardProps[] = [
  {
    title: "Valid student visa / study permit approval letter",
  },
  {
    title: "University acceptance / CAS / CoE / LOA printout",
  },
  {
    title: "Tuition payment proof / receipt",
    subtitle: "(some universities ask at enrollment)",
  },
  {
    title: "Accommodation address",
    subtitle: "(even temporary)",
  },
  {
    title: "Airport pickup / arrival plan",
    subtitle: "(especially if you're landing late or first time traveler)",
  },
  {
    title: "Emergency & university contact numbers",
  },
  {
    title: "Travel Insurance / health cover",
    subtitle: "(OSHC for Australia, NHS access for UK, or what your university recommends)",
  },
  {
    title: "Enough funds for first month",
    subtitle: "(in cash + card)",
  },
  {
    title: "D.Education Zone pre-departure checklist",
    subtitle: "(so you don't forget anything)",
  },
];

export default function ProgrammePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        
        {/* SECTION 1: HERO & INTRODUCTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3B1E54] tracking-tight leading-tight">
              Start Your Program
            </h1>
            
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#3B1E54]">
                Why this step matters
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You&apos;ve done all the hard work: picked the right course, got the offer, paid
                the deposit, cleared conditions, and secured your visa.{" "}
                <strong className="text-[#3B1E54]">
                  Now comes the real goal of the whole journey:
                </strong>{" "}
                actually reaching your study destination and starting classes on time.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This step is important because this is where many students make small
                post-visa mistakes that cause big problems, like:
              </p>
            </div>

            {/* Bullet List */}
            <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-slate-700 font-medium text-left max-w-lg mx-auto sm:mx-0">
              <li>Arriving late and missing enrollment.</li>
              <li>Not carrying original documents at the airport.</li>
              <li>Not attending mandatory orientation.</li>
              <li>Breaking visa/work rules in the first month.</li>
            </ol>

            <div className="pt-2 space-y-2 text-left max-w-lg mx-auto sm:mx-0">
              <p className="text-xs sm:text-sm font-bold text-[#3B1E54]">
                Starting right means:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-slate-600">
                <li>You enter the country smoothly.</li>
                <li>You enroll at the university on time.</li>
                <li>You keep your visa status active.</li>
                <li>You settle easily (accommodation, bank, SIM, transport).</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Hero Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-xs sm:max-w-md aspect-square">
              <Image
                src="/images/steps/9-1.png"
                alt="Start your program illustration"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-contain"
              />
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* SECTION 2: WHAT YOU NEED BEFORE STARTING */}
        <section className="space-y-6 sm:space-y-8">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B1E54] tracking-tight">
              What you need before starting
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Before you fly, make sure you already have:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Checklist Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checklistItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <CheckCircle2 className="w-5 h-5 text-[#3B1E54] shrink-0" />
                    <h3 className="font-bold text-xs sm:text-sm text-slate-800 leading-snug">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Consultation / Help Box */}
              <div className="p-4 sm:p-5 border border-purple-200 rounded-2xl bg-purple-50/60 flex flex-col justify-center space-y-2 sm:col-span-2">
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  If any of this is missing, fix it before you travel. Need help?{" "}
                  <strong className="text-[#3B1E54] underline cursor-pointer">
                    Book a free consultation today!
                  </strong>
                </p>
              </div>
            </div>

            {/* Right Side Illustration */}
            <div className="lg:col-span-4 flex justify-center items-center lg:sticky lg:top-8">
              <div className="relative w-full max-w-xs sm:max-w-sm aspect-square">
                <Image
                  src="/images/steps/8.png"
                  alt="Pre-departure checklist illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <p className="text-center sm:text-left text-xs text-slate-500 pt-2 max-w-2xl">
            If you don&apos;t have these answers yet, you&apos;re not late. This is exactly{" "}
            <span className="font-bold text-[#3B1E54]">
              what D.Education Zone helps
            </span>{" "}
            you define during your first session.
          </p>
        </section>

      </div>
    </main>
  );
}