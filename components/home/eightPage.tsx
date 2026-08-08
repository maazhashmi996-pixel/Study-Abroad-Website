
"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Building2,
  GraduationCap,
  Globe2,
  HelpCircle,
} from "lucide-react";

type FaqCategory = "company" | "services" | "destinations";

interface FaqItem {
  question: string;
  answer: string;
}

export default function EightPage() {
  const [faqTab, setFaqTab] = useState<FaqCategory>("company");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqsByCategory: Record<FaqCategory, FaqItem[]> = {
    company: [
      {
        question: "Who is D.Education Zone?",
        answer:
          "D.Education Zone is a leading education and study abroad consultancy in Pakistan helping students achieve their international academic goals.",
      },
      {
        question: "What is the mission of D.Education Zone?",
        answer:
          "Our mission is to empower students through personalized counseling, application guidance, and visa support to access world-class education.",
      },
      {
        question: "What is the vision of D.Education Zone?",
        answer:
          "To be the most trusted international education platform connecting students with global learning opportunities seamlessly.",
      },
      {
        question:
          "Why should I choose D.Education Zone as my study abroad consultant in Pakistan?",
        answer:
          "We offer end-to-end guidance from expert counselors, direct university partnerships, high visa success rates, and full transparency.",
      },
      {
        question: "How much experience does D.Education Zone have?",
        answer:
          "D.Education Zone has over 20 years of industry experience assisting thousands of students worldwide.",
      },
    ],

    services: [
      {
        question: "What services do you offer to students?",
        answer:
          "We provide university selection assistance, application processing, scholarship guidance, visa support, and pre-departure briefings.",
      },
      {
        question: "Are counselling sessions free of charge?",
        answer:
          "Yes! Initial counseling sessions with our expert advisors are completely free of charge.",
      },
      {
        question: "Do you help with scholarship applications?",
        answer:
          "Yes, we help eligible students identify merit-based and need-based scholarship options available at partner universities.",
      },
    ],

    destinations: [
      {
        question: "Which study destinations do you assist with?",
        answer:
          "We assist with popular study destinations including the UK, USA, Canada, Australia, Germany, Cyprus, and other European countries.",
      },
      {
        question: "Can I work part-time while studying abroad?",
        answer:
          "Yes, most study destinations allow international students to work part-time during their studies, subject to the rules of their specific student visa.",
      },
    ],
  };

  const currentFaqs = faqsByCategory[faqTab];

  const handleTabChange = (category: FaqCategory) => {
    setFaqTab(category);
    setOpenFaq(0);
  };

  const tabs = [
    {
      id: "company" as FaqCategory,
      label: "About Us",
      icon: Building2,
    },
    {
      id: "services" as FaqCategory,
      label: "Our Services",
      icon: GraduationCap,
    },
    {
      id: "destinations" as FaqCategory,
      label: "Destinations",
      icon: Globe2,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-16 sm:py-20 lg:py-24">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#0b5cff]/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#1a233d]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 text-center sm:mb-14">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#0b5cff]/10 bg-white px-4 py-2 shadow-sm">

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b5cff]/10">
              <HelpCircle className="h-3.5 w-3.5 text-[#0b5cff]" />
            </span>

            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#1a233d] sm:text-xs">
              Frequently Asked Questions
            </span>

          </div>

          {/* Heading */}

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#1a233d] sm:text-4xl md:text-5xl">

            Got Questions?

            <span className="block text-[#0b5cff]">
              We Have Answers.
            </span>

          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Find answers to common questions about D.Education Zone,
            our services, and studying abroad.
          </p>

        </div>

        {/* =====================================================
            CATEGORY TABS
        ===================================================== */}

        <div className="mb-8 flex justify-center">

          <div className="inline-flex max-w-full gap-1 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">

            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = faqTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-300 sm:px-6 sm:py-3 sm:text-sm ${
                    isActive
                      ? "bg-[#1a233d] text-white shadow-md"
                      : "text-slate-500 hover:bg-slate-50 hover:text-[#1a233d]"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 ${
                      isActive ? "text-[#0b5cff]" : "text-slate-400"
                    }`}
                  />

                  {tab.label}
                </button>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">

          {/* =================================================
              IMAGE SIDE
          ================================================= */}

          <div className="lg:col-span-5">

            <div className="relative mx-auto max-w-md">

              {/* Decorative background */}

              <div className="absolute -inset-4 rounded-[35px] bg-[#0b5cff]/5 blur-xl" />

              {/* Image Card */}

              <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-3 shadow-[0_20px_50px_rgba(26,35,61,0.10)]">

                <div className="relative overflow-hidden rounded-[24px] bg-[#eef3fb]">

                  <Image
                    src="/images/home/faq.jpg"
                    alt="faq"
                    width={600}
                    height={500}
                    priority
                    className="h-auto w-full object-contain transition-transform duration-700 hover:scale-105"
                  />

                  {/* Floating card */}

                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-[#1a233d]/90 p-4 text-white shadow-xl backdrop-blur-md">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b5cff]">
                        <GraduationCap className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-xs font-black">
                          Your Future Starts Here
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-300">
                          Get expert guidance for your study abroad journey.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              FAQ ACCORDION
          ================================================= */}

          <div className="lg:col-span-7">

            <div className="space-y-3">

              {currentFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;

                return (
                  <div
                    key={`${faqTab}-${idx}`}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-[#0b5cff]/20 bg-white shadow-lg shadow-[#0b5cff]/5"
                        : "border-slate-200 bg-white hover:border-[#0b5cff]/20 hover:shadow-md"
                    }`}
                  >

                    {/* Question */}

                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : idx)
                      }
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                    >

                      <div className="flex items-center gap-3">

                        {/* Number */}

                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-black transition-all duration-300 ${
                            isOpen
                              ? "bg-[#0b5cff] text-white"
                              : "bg-[#0b5cff]/10 text-[#0b5cff]"
                          }`}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`text-xs font-bold leading-5 sm:text-sm ${
                            isOpen
                              ? "text-[#0b5cff]"
                              : "text-[#1a233d]"
                          }`}
                        >
                          {faq.question}
                        </span>

                      </div>

                      {/* Arrow */}

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "bg-[#0b5cff] text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>

                    </button>

                    {/* Answer */}

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >

                      <div className="overflow-hidden">

                        <div className="border-t border-slate-100 bg-slate-50/70 px-4 pb-5 pt-4 pl-[60px] sm:px-6 sm:pb-6 sm:pl-[76px]">

                          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
                            {faq.answer}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* Bottom CTA */}

            <div className="mt-6 flex items-center justify-between rounded-2xl border border-[#0b5cff]/10 bg-[#0b5cff]/5 px-4 py-4 sm:px-5">

              <div>

                <p className="text-xs font-black text-[#1a233d] sm:text-sm">
                  Still have questions?
                </p>

                <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                  Our education experts are ready to help.
                </p>

              </div>

              <a
                href="/contact"
                className="shrink-0 rounded-xl bg-[#1a233d] px-4 py-2.5 text-[10px] font-bold text-white transition-colors hover:bg-[#0b5cff] sm:px-5 sm:text-xs"
              >
                Contact Us
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

