
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ChevronUp,
  Play,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// =====================================================
// TESTIMONIAL DATA
// =====================================================

const studentTestimonials = [
  {
    id: 1,
    name: "Abdul Mueed",
    image: "/images/testimonials/abdul.webp",
  },
  {
    id: 2,
    name: "Kapil Dev",
    image: "/images/testimonials/kapil.webp",
  },
  {
    id: 3,
    name: "Ahsan Bin Waheed",
    image: "/images/testimonials/ahsan.webp",
  },
  {
    id: 4,
    name: "Mavia",
    image: "/images/testimonials/mavia.webp",
  },
  {
    id: 5,
    name: "Abdullah",
    image: "/images/testimonials/abdullah.webp",
  },
];

const universityTestimonials = [
  {
    id: 1,
    name: "University Rep 1",
    image: "/images/testimonials/univ1.webp",
  },
  {
    id: 2,
    name: "University Rep 2",
    image: "/images/testimonials/univ2.webp",
  },
];

// =====================================================
// STUDY ABROAD JOURNEY DATA
// =====================================================

const journeySteps = [
  {
    title: "Select Your Program",
    image: "/images/home/study1.webp",
    link: "/study-abroad-steps/select-your-program",
    description:
      "Explore thousands of courses and find the right match for your career goals.",
  },
  {
    title: "Submit Application",
    image: "/images/home/study2.webp",
    link: "/study-abroad-steps/submit-application",
    description:
      "Fill in your details and upload required documents effortlessly through our portal.",
  },
  {
    title: "Get Unconditional Offer",
    image: "/images/home/study3.webp",
    link: "/study-abroad-steps/receive-offer-letter",
    description:
      "Get conditional or unconditional offers from top-ranked global institutions.",
  },
  {
    title: "Fulfill Conditions",
    image: "/images/home/study4.webp",
    link: "/study-abroad-steps/fulfill-conditions",
    description:
      "Meet language requirements and upload final academic credentials.",
  },
  {
    title: "Pay Tuition Deposit",
    image: "/images/home/study5.webp",
    link: "/study-abroad-steps/pay-tution-deposit",
    description:
      "Secure your seat by submitting tuition deposits via secure payment gateways.",
  },
  {
    title: "Receive Offer Letter",
    image: "/images/home/study6.webp",
    link: "/study-abroad-steps/apply-for-visa",
    description:
      "Receive final acceptance and start your visa application process smoothly.",
  },
];

// =====================================================
// COMPONENT
// =====================================================

export default function Speak() {
  const [activeTab, setActiveTab] = useState<"student" | "university">(
    "student"
  );

  const [openStep, setOpenStep] = useState<number | null>(0);

  // ===================================================
  // AUTO JOURNEY SLIDER
  // ===================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setOpenStep((prev) =>
        prev === null || prev >= journeySteps.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const activeIndex = openStep ?? 0;

  const testimonials =
    activeTab === "student"
      ? studentTestimonials
      : universityTestimonials;

  return (
    <>
      {/* =====================================================
          1. EXPERIENCES THAT SPEAK FOR US
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-24">
        {/* Background Decorations */}

        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#0b5cff]/5 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#1a233d]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ================= HEADER ================= */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center rounded-full bg-[#0b5cff]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0b5cff]">
              Student Success
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#1a233d] sm:text-4xl md:text-5xl">
              Experiences That
              <span className="block text-[#0b5cff]">
                Speak for Us
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Hear from students and university representatives who have
              experienced our education guidance and services.
            </p>

          </div>

          {/* ================= TABS ================= */}

          <div className="mt-8 flex justify-center sm:mt-10">

            <div className="inline-flex max-w-full overflow-x-auto rounded-full border border-slate-200 bg-slate-100 p-1 shadow-inner">

              <button
                type="button"
                onClick={() => setActiveTab("student")}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 sm:px-7 sm:text-sm ${
                  activeTab === "student"
                    ? "bg-[#0b5cff] text-white shadow-md shadow-[#0b5cff]/20"
                    : "text-slate-600 hover:text-[#1a233d]"
                }`}
              >
                Student Testimonials
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("university")}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 sm:px-7 sm:text-sm ${
                  activeTab === "university"
                    ? "bg-[#0b5cff] text-white shadow-md shadow-[#0b5cff]/20"
                    : "text-slate-600 hover:text-[#1a233d]"
                }`}
              >
                University Testimonials
              </button>

            </div>

          </div>

          {/* ================= TESTIMONIAL CARDS ================= */}

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">

            {testimonials.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#1a233d] p-1.5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#0b5cff]/50 hover:shadow-2xl"
              >

                {/* Student Name */}

                <div className="px-1 py-2 text-center">

                  <span className="block truncate text-[10px] font-extrabold uppercase tracking-wider text-white sm:text-[11px]">
                    {item.name}
                  </span>

                </div>

                {/* Video Frame */}

                <div className="relative h-48 overflow-hidden rounded-xl bg-slate-900 sm:h-56 md:h-64">

                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Image Overlay */}

                  <div className="absolute inset-0 bg-[#1a233d]/10 transition-all duration-300 group-hover:bg-[#0b5cff]/10" />

                  {/* Play Button */}

                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b5cff]/95 text-white shadow-xl transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12">

                      <Play
                        className="ml-0.5 h-5 w-5 fill-white sm:h-6 sm:w-6"
                      />

                    </div>

                  </div>

                  {/* Side Label */}

                  <div className="absolute bottom-10 left-1 -rotate-90 origin-left text-[8px] font-bold tracking-widest text-white/80 sm:text-[9px]">
                    SUCCESS STORY
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          2. STUDY ABROAD JOURNEY
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#1a233d] py-14 text-white sm:py-18 lg:py-24">

        {/* Background Decorations */}

        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#0b5cff]/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#0b5cff]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl space-y-10 px-4 sm:px-6 sm:space-y-12 md:px-8 lg:px-12">

          {/* ================= HEADER ================= */}

          <div className="text-center">

            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-300">
              Your Journey
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Study Abroad Journey
              <span className="block text-[#0b5cff]">
                Step by Step
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Follow a simple and guided process from choosing your program
              to receiving your final offer.
            </p>

          </div>

          {/* ================= MAIN GRID ================= */}

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* =================================================
                LEFT — ACCORDION
            ================================================= */}

            <div className="space-y-3">

              {journeySteps.map((step, index) => {

                const isOpen = openStep === index;

                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-[#0b5cff]/40 bg-white shadow-xl shadow-black/10"
                        : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                    }`}
                  >

                    {/* Accordion Header */}

                    <button
                      type="button"
                      onClick={() => setOpenStep(index)}
                      className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-5 ${
                        isOpen
                          ? "text-[#1a233d]"
                          : "text-white"
                      }`}
                    >

                      <span className="flex min-w-0 items-center gap-3">

                        {/* Number */}

                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                            isOpen
                              ? "bg-[#0b5cff] text-white"
                              : "bg-white/10 text-[#0b5cff]"
                          }`}
                        >
                          {index + 1}
                        </span>

                        <span className="text-xs font-bold sm:text-sm">
                          {step.title}
                        </span>

                      </span>

                      {isOpen ? (
                        <ChevronUp
                          className="h-5 w-5 shrink-0 text-[#0b5cff]"
                        />
                      ) : (
                        <ChevronRight
                          className="h-5 w-5 shrink-0 text-slate-400"
                        />
                      )}

                    </button>

                    {/* Accordion Body */}

                    {isOpen && (
                      <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-4 text-xs leading-6 text-slate-600 sm:px-6">

                        <p>
                          {step.description}
                        </p>

                        <Link
                          href={step.link}
                          className="group mt-4 inline-flex items-center gap-2 rounded-full bg-[#0b5cff] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:bg-[#1a233d]"
                        >
                          Learn More

                          <ArrowRight
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          />

                        </Link>

                      </div>
                    )}

                  </div>
                );
              })}

            </div>

            {/* =================================================
                RIGHT — IMAGE SLIDER
            ================================================= */}

            <div className="flex flex-col items-center">

              {/* Image Outer Frame */}

              <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl sm:max-w-[420px] sm:rounded-[2.5rem] sm:p-4">

                {/* Blue Outer Glow */}

                <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[#0b5cff]/10 blur-xl sm:rounded-[2.5rem]" />

                {/* Image Wrapper */}

                <div className="relative z-10 h-full w-full overflow-hidden rounded-[1.5rem] bg-slate-900 sm:rounded-[2rem]">

                  {journeySteps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === activeIndex
                          ? "z-10 opacity-100"
                          : "z-0 opacity-0"
                      }`}
                    >

                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="object-cover"
                        priority={idx === 0}
                      />

                      {/* Image Overlay */}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a233d]/60 via-transparent to-transparent" />

                      {/* Current Step */}

                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#1a233d]/80 p-3 backdrop-blur-md">

                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#0b5cff]">
                          Step {idx + 1}
                        </p>

                        <p className="mt-1 text-sm font-bold text-white">
                          {step.title}
                        </p>

                      </div>

                    </div>
                  ))}

                  {/* Decorative Border */}

                  <div className="pointer-events-none absolute inset-0 z-20 rounded-[1.5rem] border-4 border-white/5 sm:rounded-[2rem] sm:border-8" />

                </div>

              </div>

              {/* ================= PAGINATION ================= */}

              <div className="mt-6 flex items-center gap-2">

                {journeySteps.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setOpenStep(dotIdx)}
                    aria-label={`Go to step ${dotIdx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      dotIdx === activeIndex
                        ? "w-8 bg-[#0b5cff]"
                        : "w-2.5 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}

              </div>

              {/* Progress Text */}

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">

                <CheckCircle2 className="h-4 w-4 text-[#0b5cff]" />

                Step {activeIndex + 1} of {journeySteps.length}

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

