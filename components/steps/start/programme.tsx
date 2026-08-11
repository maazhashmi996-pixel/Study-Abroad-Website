
"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    subtitle:
      "(especially if you're landing late or first time traveler)",
  },
  {
    title: "Emergency & university contact numbers",
  },
  {
    title: "Travel Insurance / health cover",
    subtitle:
      "(OSHC for Australia, NHS access for UK, or what your university recommends)",
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

        {/* =========================
            SECTION 1: HERO
        ========================== */}
        <section className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">

          {/* Subtle Background Decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#2563EB]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#EF4444]/5 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center sm:text-left">

              {/* Small Label */}
              <div className="flex justify-center sm:justify-start">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-[11px] sm:text-xs font-bold uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  Your Study Journey
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2563EB] tracking-tight leading-tight">
                Start Your Program
              </h1>

              <div className="space-y-3">

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Why this step matters
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You&apos;ve done all the hard work: picked the right course,
                  got the offer, paid the deposit, cleared conditions, and
                  secured your visa.{" "}
                  <strong className="text-slate-900">
                    Now comes the real goal of the whole journey:
                  </strong>{" "}
                  actually reaching your study destination and starting
                  classes on time.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  This step is important because this is where many students
                  make small post-visa mistakes that cause big problems, like:
                </p>

              </div>

              {/* Warning List */}
              <div className="space-y-2.5 text-left max-w-lg mx-auto sm:mx-0">

                {[
                  "Arriving late and missing enrollment.",
                  "Not carrying original documents at the airport.",
                  "Not attending mandatory orientation.",
                  "Breaking visa/work rules in the first month.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                  >
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#EF4444] shrink-0 mt-0.5" />

                    <span>{item}</span>
                  </div>
                ))}

              </div>

              {/* Starting Right */}
              <div className="pt-2">

                <p className="text-xs sm:text-sm font-bold text-[#2563EB] mb-3">
                  Starting right means:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left">

                  {[
                    "You enter the country smoothly.",
                    "You enroll at the university on time.",
                    "You keep your visa status active.",
                    "You settle easily (accommodation, bank, SIM, transport).",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* Right Illustration */}
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

          </div>

        </section>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />
          <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* =========================
            SECTION 2
        ========================== */}
        <section className="space-y-6 sm:space-y-8">

          {/* Heading */}
          <div className="text-center sm:text-left">

            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Pre-Departure Checklist
            </span>

            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What you need before starting
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Before you fly, make sure you already have:
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Checklist */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

              {checklistItems.map((item, index) => (
                <div
                  key={index}
                  className="
                    group
                    p-4 sm:p-5
                    rounded-2xl
                    border border-slate-200
                    bg-white
                    shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                    hover:border-[#2563EB]/30
                    hover:shadow-[0_8px_25px_rgba(37,99,235,0.08)]
                    transition-all duration-300
                  "
                >

                  <div className="space-y-2.5">

                    <div className="flex items-center justify-between">

                      <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 flex items-center justify-center group-hover:bg-[#2563EB] transition-colors duration-300">

                        <CheckCircle2 className="w-5 h-5 text-[#2563EB] group-hover:text-white transition-colors duration-300" />

                      </div>

                      <span className="text-[10px] font-bold text-slate-300">
                        0{index + 1}
                      </span>

                    </div>

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

              {/* Consultation Box */}
              <div
                className="
                  relative overflow-hidden
                  p-5 sm:p-6
                  rounded-2xl
                  border border-[#2563EB]/15
                  bg-[#2563EB]/5
                  sm:col-span-2
                "
              >

                {/* Decorative Circle */}
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-[#2563EB]/10" />

                <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                  <div>

                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">

                      If any of this is missing, fix it before you travel.
                      Need help?

                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Our team can help you prepare for your departure.
                    </p>

                  </div>

                  <Link

                  href="/Home/free-consultation"
                    type="button"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      shrink-0
                      px-4
                      py-2.5
                      rounded-xl
                      bg-[#2563EB]
                      hover:bg-[#1D4ED8]
                      text-white
                      text-xs
                      sm:text-sm
                      font-bold
                      shadow-sm
                      hover:shadow-md
                      transition-all duration-200
                    "
                  >
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                </div>

              </div>

            </div>

            {/* Right Illustration */}
            <div className="lg:col-span-4 flex justify-center items-center lg:sticky lg:top-8">

              <div className="relative w-full max-w-xs sm:max-w-sm aspect-square">

                {/* Soft Background */}
                <div className="absolute inset-8 rounded-full bg-[#2563EB]/5" />

                <Image
                  src="/images/steps/8.png"
                  alt="Pre-departure checklist illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-contain relative z-10"
                />

              </div>

            </div>

          </div>

          {/* Bottom Note */}
          <div className="flex items-start gap-3 text-center sm:text-left text-xs text-slate-500 pt-2 max-w-2xl">

            <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />

            <p>
              If you don&apos;t have these answers yet, you&apos;re not late.
              This is exactly{" "}
              <span className="font-bold text-[#2563EB]">
                what D.Education Zone helps
              </span>{" "}
              you define during your first session.
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}

