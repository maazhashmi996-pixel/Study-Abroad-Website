
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  CheckCircle2,
  GraduationCap,
  CalendarDays,
  Award,
  BookOpen,
} from "lucide-react";

export default function Advantages() {
  const [activeAdvantage, setActiveAdvantage] = useState(1);

  const [techSearch, setTechSearch] = useState({
    university: "",
    location: "",
  });

  const techAdvantages = [
    {
      id: 1,
      text: "Search 3000+ Universities and 3.4M+ programs by location",
      icon: Search,
    },
    {
      id: 2,
      text: "Explore English-taught degree in 60+ countries",
      icon: GlobeIcon,
    },
    {
      id: 3,
      text: "View intakes, modules, and deadlines in one place",
      icon: CalendarDays,
    },
    {
      id: 4,
      text: "Fully Funded Scholarships In Top Study Destinations",
      icon: Award,
    },
    {
      id: 5,
      text: "Access programs at every level – from diploma to PhDs",
      icon: BookOpen,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#0b5cff]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#1a233d]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-[#0b5cff]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0b5cff]">
            D.Education Zone
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#1a233d] sm:text-4xl lg:text-5xl">
            D.Education Zone
            <span className="block text-[#0b5cff]">
              Advantages
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Discover tools and guidance designed to make your international
            education search easier, faster and more informed.
          </p>

        </div>

        {/* =====================================================
            CONTENT GRID
        ===================================================== */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">

          {/* ===================================================
              LEFT SIDE
          =================================================== */}
          <div className="lg:col-span-6">

            <div className="space-y-3">

              {techAdvantages.map((item) => {
                const isActive = activeAdvantage === item.id;
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveAdvantage(item.id)}
                    className={`group flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                      isActive
                        ? "border-[#0b5cff]/30 bg-[#0b5cff]/5 shadow-md"
                        : "border-slate-200 bg-white hover:border-[#0b5cff]/20 hover:bg-slate-50 hover:shadow-sm"
                    }`}
                  >

                    {/* Number / Icon */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-[#0b5cff] text-white shadow-md shadow-[#0b5cff]/20"
                          : "bg-[#0b5cff]/10 text-[#0b5cff] group-hover:bg-[#0b5cff] group-hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Text */}
                    <div className="flex-1">

                      <div className="flex items-center justify-between gap-3">

                        <span
                          className={`text-sm leading-6 sm:text-base ${
                            isActive
                              ? "font-bold text-[#1a233d]"
                              : "font-medium text-slate-600"
                          }`}
                        >
                          {item.text}
                        </span>

                        {isActive && (
                          <CheckCircle2 className="hidden h-5 w-5 shrink-0 text-[#0b5cff] sm:block" />
                        )}

                      </div>

                    </div>

                  </button>
                );
              })}

            </div>

            {/* Bottom Note */}
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#0b5cff]/10 bg-[#0b5cff]/5 p-4">

              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0b5cff]" />

              <p className="text-xs leading-5 text-slate-600 sm:text-sm">
                Everything you need to make informed decisions about your
                international education journey.
              </p>

            </div>

          </div>

          {/* ===================================================
              RIGHT SIDE IMAGE + SEARCH
          =================================================== */}
          <div className="lg:col-span-6">

            <div className="relative min-h-[400px] overflow-hidden rounded-[2rem] border border-slate-200 bg-[#1a233d] p-4 shadow-xl sm:min-h-[470px] sm:p-8">

              {/* Background Image */}
              <Image
                src="/images/home/times.jpg"
                alt="D.Education Zone online platform"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-[#1a233d]/70" />

              {/* Blue Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b5cff]/20 via-transparent to-[#1a233d]/80" />

              {/* =================================================
                  SEARCH CARD
              ================================================= */}
              <div className="relative z-10 flex min-h-[365px] items-center justify-center">

                <div className="relative w-full max-w-md rounded-[1.5rem] border border-white/20 bg-white/95 p-5 shadow-2xl backdrop-blur-md sm:rounded-[2rem] sm:p-7">

                  {/* Card Header */}
                  <div className="mb-5 flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b5cff]/10 text-[#0b5cff]">
                      <GraduationCap className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-[#1a233d]">
                        Find Your Programme
                      </h3>

                      <p className="text-xs text-slate-500">
                        Search universities and study options
                      </p>
                    </div>

                  </div>

                  {/* University Search */}
                  <div className="relative">

                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <input
                      type="text"
                      placeholder="Search Universities"
                      value={techSearch.university}
                      onChange={(e) =>
                        setTechSearch({
                          ...techSearch,
                          university: e.target.value,
                        })
                      }
                      className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-xs text-[#1a233d] outline-none transition-all placeholder:text-slate-400 focus:border-[#0b5cff] focus:bg-white focus:ring-4 focus:ring-[#0b5cff]/10 sm:text-sm"
                    />

                  </div>

                  {/* Location */}
                  <div className="relative mt-3">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
                      />

                      <circle cx="12" cy="11" r="2.5" />
                    </svg>

                    <input
                      type="text"
                      placeholder="Location"
                      value={techSearch.location}
                      onChange={(e) =>
                        setTechSearch({
                          ...techSearch,
                          location: e.target.value,
                        })
                      }
                      className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-xs text-[#1a233d] outline-none transition-all placeholder:text-slate-400 focus:border-[#0b5cff] focus:bg-white focus:ring-4 focus:ring-[#0b5cff]/10 sm:text-sm"
                    />

                  </div>

                  {/* Search Button */}
                  <button
                    type="button"
                    className="group mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#0b5cff] px-6 py-3 text-xs font-bold text-white shadow-lg shadow-[#0b5cff]/20 transition-all duration-300 hover:bg-[#1a233d] active:scale-[0.98] sm:text-sm"
                  >
                    <Search className="h-4 w-4" />

                    Search Universities

                  </button>

                  {/* =================================================
                      INFO BOXES
                  ================================================= */}
                  <div className="mt-5 grid grid-cols-2 gap-2">

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                      <p className="text-sm font-black text-[#0b5cff]">
                        3000+
                      </p>
                      <p className="mt-1 text-[10px] text-slate-500">
                        Universities
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                      <p className="text-sm font-black text-[#0b5cff]">
                        60+
                      </p>
                      <p className="mt-1 text-[10px] text-slate-500">
                        Countries
                      </p>
                    </div>

                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -left-4 hidden rounded-full border border-white/20 bg-[#1a233d] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white shadow-xl sm:block">
                    <span className="mr-1 text-[#0b5cff]">●</span>
                    Deadlines
                  </div>

                  <div className="absolute -right-4 -top-4 hidden rounded-full border border-white/20 bg-[#1a233d] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white shadow-xl sm:block">
                    <span className="mr-1 text-[#0b5cff]">●</span>
                    Scholarships
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/* =========================================================
   SIMPLE GLOBE ICON
========================================================= */

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3z"
      />
    </svg>
  );
}

