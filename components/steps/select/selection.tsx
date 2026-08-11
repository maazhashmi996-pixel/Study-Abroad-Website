
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  FileText,
  AlertCircle,
  FileCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Selection() {
  const stepsList = [
    {
      number: 1,
      title: "Select Your Program",
      href: "/select-your-program",
    },
    {
      number: 2,
      title: "Submit Application",
      href: "/submit-application",
    },
    {
      number: 3,
      title: "Receive Offer Letter",
      href: "/receive-offer-letter",
    },
    {
      number: 4,
      title: "Fulfill Conditions",
      href: "/fulfill-conditions",
    },
    {
      number: 5,
      title: "Pay Tuition Deposit",
      href: "/pay-tuition-deposit",
    },
    {
      number: 6,
      title: "Get Unconditional Offer",
      href: "/get-unconditional-offer",
    },
    {
      number: 7,
      title: "Apply for Visa",
      href: "/apply-for-visa",
    },
    {
      number: 8,
      title: "Start Your Program",
      href: "/start-your-program",
    },
  ];

  const reasonCards = [
    {
      icon: GraduationCap,
      title: "Start With the Right Program",
      text: "The university can't issue an offer letter if you don't submit an application.",
    },
    {
      icon: FileText,
      title: "Complete Requirements",
      text: "Universities will not convert a conditional offer until all requirements are met.",
    },
    {
      icon: AlertCircle,
      title: "Secure Your Seat",
      text: "Seat allocation and official documents such as CAS/CoE depend on tuition deposit verification.",
    },
    {
      icon: FileCheck,
      title: "Prepare for Your Visa",
      text: "Embassies require official acceptance documentation before processing a student visa.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800 px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
      <div className="max-w-6xl mx-auto space-y-14 sm:space-y-20">

        {/* ================= HERO SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="w-full">

            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#EF4444]" />

              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2563EB]">
                Study Abroad Journey
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#2563EB] leading-[1.15] tracking-tight">
              Study Abroad Steps:
              <span className="block mt-1 text-slate-800">
                From Course Selection to Your First Class
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-7 max-w-xl">
              Studying abroad is not one form or one email; it is a{" "}
              <strong className="text-slate-800">
                structured sequence
              </strong>
              . Every successful international student follows these 8 core
              stages.
            </p>

            {/* ================= STEPS ================= */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {stepsList.map((step) => (
                <Link
                  key={step.number}
                  href={step.href}
                  className="
                    group
                    flex items-center gap-3
                    rounded-lg
                    py-2
                    transition-all
                  "
                >
                  {/* Number */}
                  <span
                    className="
                      flex items-center justify-center
                      w-7 h-7
                      shrink-0
                      rounded-full
                      bg-[#2563EB]
                      text-white
                      text-xs
                      font-extrabold
                      group-hover:bg-[#EF4444]
                      transition-colors
                    "
                  >
                    {step.number}
                  </span>

                  {/* Title */}
                  <span
                    className="
                      text-sm
                      font-semibold
                      text-slate-700
                      group-hover:text-[#2563EB]
                      transition-colors
                    "
                  >
                    {step.title}
                  </span>

                  {/* Arrow */}
                  <ArrowRight
                    className="
                      w-3.5 h-3.5
                      text-slate-300
                      group-hover:text-[#EF4444]
                      group-hover:translate-x-1
                      transition-all
                    "
                  />
                </Link>
              ))}
            </div>

            {/* Note */}
            <div className="mt-6 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#EF4444] mt-0.5 shrink-0" />

              <p className="text-xs sm:text-sm text-slate-500 leading-5">
                Miss one step or delay your submission and you may risk
                missing your target intake.
              </p>
            </div>
          </div>

          {/* ================= HERO IMAGE ================= */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] aspect-[4/3]">
              <Image
                src="/images/steps/2-1.png"
                alt="Study abroad application steps"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* ================= DIVIDER ================= */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-slate-200" />

          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#EF4444]">
            <span className="text-[#EF4444] text-xs">
              ★
            </span>
          </div>

          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* ================= WHY SECTION ================= */}
        <section>

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">

            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#EF4444]" />

              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Why It Matters
              </span>

              <span className="w-6 h-[2px] bg-[#EF4444]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800">
              Why Follow the Steps in Order?
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Universities and immigration authorities follow strict
              procedural checkpoints.
            </p>
          </div>

          {/* ================= CONTENT GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* CARDS */}
            <div className="lg:col-span-8">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {reasonCards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={index}
                      className="
                        group
                        bg-white
                        border
                        border-slate-200
                        rounded-2xl
                        p-5 sm:p-6
                        shadow-sm
                        hover:shadow-lg
                        hover:border-[#2563EB]/40
                        transition-all
                        duration-300
                      "
                    >
                      {/* Icon */}
                      <div
                        className="
                          w-11 h-11
                          rounded-xl
                          bg-[#2563EB]/10
                          flex items-center justify-center
                          mb-4
                          group-hover:bg-[#2563EB]
                          transition-colors
                        "
                      >
                        <Icon
                          className="
                            w-5 h-5
                            text-[#2563EB]
                            group-hover:text-white
                            transition-colors
                          "
                        />
                      </div>

                      {/* Card Title */}
                      <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-2">
                        {card.title}
                      </h3>

                      {/* Card Text */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-6">
                        {card.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* ================= FORMULA BOX ================= */}
              <div
                className="
                  mt-5
                  rounded-2xl
                  bg-slate-50
                  border
                  border-slate-200
                  px-5
                  py-4
                  text-center
                "
              >
                <p className="text-xs sm:text-sm text-slate-600">
                  The most reliable pathway utilized by{" "}
                  <strong className="text-[#2563EB]">
                    D.Education Zone
                  </strong>{" "}
                  is
                </p>

                <div className="mt-3 flex flex-wrap justify-center items-center gap-1">
                  {stepsList.map((step, index) => (
                    <span
                      key={step.number}
                      className="flex items-center"
                    >
                      <span
                        className="
                          flex items-center justify-center
                          w-6 h-6
                          rounded-full
                          bg-[#2563EB]
                          text-white
                          text-[10px]
                          font-bold
                        "
                      >
                        {step.number}
                      </span>

                      {index < stepsList.length - 1 && (
                        <span className="mx-1 text-slate-400 text-xs">
                          →
                        </span>
                      )}
                    </span>
                  ))}
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  with zero skipped stages.
                </p>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[300px] aspect-[4/5]">
                <Image
                  src="/images/steps/1.png"
                  alt="Study abroad decision illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 300px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* ================= BOTTOM NOTE ================= */}
          <div className="mt-10 text-center">
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-6">
              If you aren't sure where to start, you are not late.
              This is precisely what{" "}
              <strong className="text-[#2563EB]">
                D.Education Zone
              </strong>{" "}
              structures during your first profile assessment session.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

