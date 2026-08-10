"use client";

import React, { useState } from "react";

  const openWhatsApp = (
    phoneNumber: string = "923452066100",
    message: string = "Hello! I need some information."
  ) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

import Image from "next/image";
import {
  Search,
  GraduationCap,
  Globe2,
  Clock,
  DollarSign,
  BookOpen,
  ArrowRight,
  Filter,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

// Sample Study Programs Data
const programsData = [
  {
    id: 1,
    title: "MSc International Business & Management",
    university: "University of Hertfordshire",
    country: "United Kingdom",
    level: "Master's Degree",
    field: "Business & Management",
    duration: "1 Year",
    tuition: "£15,500 / year",
    flag: "🇬🇧",
    featured: true,
  },
  {
    id: 2,
    title: "Bachelor of Computer Science & Software Engineering",
    university: "Deakin University",
    country: "Australia",
    level: "Bachelor's Degree",
    field: "Computer Science & IT",
    duration: "3 Years",
    tuition: "AUD $34,000 / year",
    flag: "🇦🇺",
    featured: false,
  },
  {
    id: 3,
    title: "Master of Data Analytics & AI",
    university: "IU International University",
    country: "Germany",
    level: "Master's Degree",
    field: "Computer Science & IT",
    duration: "1.5 Years",
    tuition: "€11,000 / year",
    flag: "🇩🇪",
    featured: true,
  },
  {
    id: 4,
    title: "Bachelor of Global Healthcare Administration",
    university: "York University",
    country: "Canada",
    level: "Bachelor's Degree",
    field: "Healthcare & Medicine",
    duration: "4 Years",
    tuition: "CAD $31,500 / year",
    flag: "🇨🇦",
    featured: false,
  },
  {
    id: 5,
    title: "MSc Mechanical Engineering & Robotics",
    university: "Politecnico di Milano",
    country: "Italy",
    level: "Master's Degree",
    field: "Engineering",
    duration: "2 Years",
    tuition: "€3,900 / year",
    flag: "🇮🇹",
    featured: true,
  },
  {
    id: 6,
    title: "Master of Business Administration (MBA)",
    university: "University of Malaya",
    country: "Malaysia",
    level: "Master's Degree",
    field: "Business & Management",
    duration: "1.5 Years",
    tuition: "USD $8,500 / year",
    flag: "🇲🇾",
    featured: false,
  },
];

const countries = [
  "All Countries",
  "United Kingdom",
  "Australia",
  "Canada",
  "Germany",
  "Italy",
  "Malaysia",
];

const degreeLevels = [
  "All Levels",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctorate / PhD",
];

const fieldsOfStudy = [
  "All Fields",
  "Business & Management",
  "Computer Science & IT",
  "Engineering",
  "Healthcare & Medicine",
];

export default function ExplorePrograme() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedField, setSelectedField] = useState("All Fields");

  // Filtering Logic
  const filteredPrograms = programsData.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.university.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry =
      selectedCountry === "All Countries" || program.country === selectedCountry;
    const matchesLevel =
      selectedLevel === "All Levels" || program.level === selectedLevel;
    const matchesField =
      selectedField === "All Fields" || program.field === selectedField;

    return matchesSearch && matchesCountry && matchesLevel && matchesField;
  });

  return (
    <div className="relative min-h-screen bg-[#1a233d] font-sans text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#0b5cff]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#0b5cff]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HERO / HEADER SECTION */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-200 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#0b5cff]" />
            D.Education Zone Program Finder
          </div>
          <h1 className="text-3xl font-black text-white sm:text-5xl lg:text-6xl">
            Explore <span className="text-[#0b5cff]">Global Academic</span> Programs
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            Discover top-ranked courses, degrees, and diplomas at prestigious international universities. Filter by degree, country, or study field to find your ideal match.
          </p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search course or university..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 py-3 pl-10 pr-4 text-xs font-medium text-white placeholder-slate-400 transition focus:border-[#0b5cff] focus:outline-none focus:ring-1 focus:ring-[#0b5cff]"
              />
            </div>

            {/* Country Filter */}
            <div>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 py-3 px-4 text-xs font-medium text-white transition focus:border-[#0b5cff] focus:outline-none focus:ring-1 focus:ring-[#0b5cff]"
              >
                {countries.map((c) => (
                  <option key={c} value={c} className="bg-[#1a233d] text-white">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 py-3 px-4 text-xs font-medium text-white transition focus:border-[#0b5cff] focus:outline-none focus:ring-1 focus:ring-[#0b5cff]"
              >
                {degreeLevels.map((level) => (
                  <option key={level} value={level} className="bg-[#1a233d] text-white">
                    {level}
                  </option>
                ))}
              </select>
            </div>

            {/* Field Filter */}
            <div>
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 py-3 px-4 text-xs font-medium text-white transition focus:border-[#0b5cff] focus:outline-none focus:ring-1 focus:ring-[#0b5cff]"
              >
                {fieldsOfStudy.map((field) => (
                  <option key={field} value={field} className="bg-[#1a233d] text-white">
                    {field}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* RESULTS COUNT & STATS */}
        <div className="mb-6 flex items-center justify-between px-2">
          <p className="text-xs font-semibold text-slate-300 sm:text-sm">
            Showing <span className="text-[#0b5cff] font-bold">{filteredPrograms.length}</span> study programs available
          </p>
          {(selectedCountry !== "All Countries" ||
            selectedLevel !== "All Levels" ||
            selectedField !== "All Fields" ||
            searchTerm) && (
            <button
              onClick={() => {
                setSelectedCountry("All Countries");
                setSelectedLevel("All Levels");
                setSelectedField("All Fields");
                setSearchTerm("");
              }}
              className="text-xs text-[#0b5cff] underline hover:text-white transition"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* PROGRAM CARDS GRID */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0b5cff]/50 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-[#0b5cff]/10"
              >
                <div>
                  {/* Top Header info */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-[11px] font-semibold text-slate-200">
                      <span>{program.flag}</span>
                      <span>{program.country}</span>
                    </span>
                    <span className="rounded-full bg-[#0b5cff]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0b5cff]">
                      {program.level}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-[#0b5cff]">
                    {program.title}
                  </h3>

                  {/* University Name */}
                  <p className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-300">
                    <GraduationCap className="h-4 w-4 text-[#0b5cff]" />
                    {program.university}
                  </p>

                  {/* Quick Specs */}
                  <div className="mb-6 space-y-2.5 rounded-xl border border-white/5 bg-slate-900/40 p-3 text-xs text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <BookOpen className="h-3.5 w-3.5 text-[#0b5cff]" />
                        Field:
                      </span>
                      <span className="font-semibold text-white">{program.field}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-[#0b5cff]" />
                        Duration:
                      </span>
                      <span className="font-semibold text-white">{program.duration}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <DollarSign className="h-3.5 w-3.5 text-[#0b5cff]" />
                        Tuition Fee:
                      </span>
                      <span className="font-semibold text-white">{program.tuition}</span>
                    </div>
                  </div>
                </div>

                {/* Apply / Inquire Button */}
                <button
                  onClick={() =>
                    openWhatsApp(
                      "923452066100",
                      `Hi D.Education Zone, I want to inquire about the program: ${program.title} at ${program.university}.`
                    )
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b5cff] py-3 text-xs font-bold text-white shadow-md shadow-[#0b5cff]/20 transition-all duration-300 hover:bg-white hover:text-[#1a233d]"
                >
                  <span>Apply / Inquire Now</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-white/10 bg-white/5 py-16 text-center backdrop-blur-sm">
            <GraduationCap className="mx-auto h-12 w-12 text-slate-500 mb-3" />
            <h3 className="text-lg font-bold text-white">No Programs Found</h3>
            <p className="mt-1 text-xs text-slate-400">
              Try adjusting your search criteria or selecting a different country filter.
            </p>
          </div>
        )}

        {/* BOTTOM CALLOUT SECTION */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-[#0b5cff]/20 via-white/5 to-[#0b5cff]/20 p-8 sm:p-10 text-center backdrop-blur-md">
          <h2 className="text-2xl font-black text-white sm:text-3xl">
            Can't Find Your Desired Course?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs text-slate-300 sm:text-sm">
            Our study abroad counselors can evaluate your profile and match you with 500+ universities worldwide based on your budget and academic goals.
          </p>
          <button
            onClick={() =>
              openWhatsApp(
                "923452066100",
                "Hi, I need assistance finding a program suited for my profile."
              )
            }
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-extrabold text-[#1a233d] shadow-lg transition-all hover:bg-[#0b5cff] hover:text-white"
          >
            <span>Talk to an Expert Counselor</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}