"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaArrowRight, FaGraduationCap } from "react-icons/fa";

interface Country {
  id: number;
  name: string;
  flagCode: string;
  imagePlaceholder: string; // Image path or placeholder
  bulletPoints: string[];
  link: string;
}

const destinations: Country[] = [
  {
    id: 1,
    name: "Australia",
    flagCode: "au",
    imagePlaceholder: "/images/study-dest/australia.webp", // Replace with your image
    bulletPoints: [
      "Top 100 Universities",
      "Post-Study Work Visa (2-4 Yrs)",
      "High Quality of Life",
      "Part-Time Work Allowed",
    ],
    link: "/study-Destination/australia",
  },
  {
    id: 2,
    name: "Austria",
    flagCode: "at",
    imagePlaceholder: "/images/study-dest/austria.webp",
    bulletPoints: [
      "Low/Zero Tuition Fees",
      "Schengen Area Access",
      "Rich Cultural History",
      "High Safety Index",
    ],
    link: "/study-Destination/austria",
  },
  {
    id: 3,
    name: "Belgium",
    flagCode: "be",
    imagePlaceholder: "/images/study-dest/belgium.webp",
    bulletPoints: [
      "Heart of Europe",
      "Affordable Education",
      "Multilingual Environment",
      "Great Job Opportunities",
    ],
    link: "/study-Destination/belgium",
  },
  {
    id: 4,
    name: "Canada",
    flagCode: "ca",
    imagePlaceholder: "/images/study-dest/canada.webp",
    bulletPoints: [
      "PGWP Work Permit Rights",
      "PR Pathways Available",
      "World-Class Education",
      "Welcoming Communities",
    ],
    link: "/study-Destination/canada",
  },
  {
    id: 5,
    name: "Cyprus",
    flagCode: "cy",
    imagePlaceholder: "/images/study-dest/cyprus.webp",
    bulletPoints: [
      "Easy Admission Process",
      "Affordable Living Cost",
      "No IELTS Required*",
      "Warm Climate",
    ],
    link: "/study-Destination/cyprus",
  },
  {
    id: 6,
    name: "Denmark",
    flagCode: "dk",
    imagePlaceholder: "/images/study-dest/denmark.webp",
    bulletPoints: [
      "Innovative Teaching Style",
      "High English Proficiency",
      "Excellent Green Tech Focus",
      "Work Options Available",
    ],
    link: "/study-Destination/denmark",
  },
  {
    id: 7,
    name: "Finland",
    flagCode: "fi",
    imagePlaceholder: "/images/study-dest/finland.webp",
    bulletPoints: [
      "Happiest Country in World",
      "Generous Scholarships",
      "PR Pathway Options",
      "Tech & Research Leader",
    ],
    link: "/study-Destination/finland",
  },
  {
    id: 8,
    name: "France",
    flagCode: "fr",
    imagePlaceholder: "/images/study-dest/france.webp",
    bulletPoints: [
      "Subsidized Public Unis",
      "2-Year Post Study Visa",
      "Top Business Schools",
      "Cultural Capital",
    ],
    link: "/study-Destination/france",
  },
  {
    id: 9,
    name: "Germany",
    flagCode: "de",
    imagePlaceholder: "/images/study-dest/germany.webp",
    bulletPoints: [
      "Free Tuition in Public Unis",
      "18-Month Post Study Visa",
      "Strong Engineering Hub",
      "High Job Demand",
    ],
    link: "/study-Destination/germany",
  },
  {
    id: 10,
    name: "Hungary",
    flagCode: "hu",
    imagePlaceholder: "/images/study-dest/hungary.webp",
    bulletPoints: [
      "Stipendicum Hungaricum",
      "Low Living Costs",
      "Schengen Gateway",
      "Medical & Dental Focus",
    ],
    link: "/study-Destination/hungary",
  },
  {
    id: 11,
    name: "Ireland",
    flagCode: "ie",
    imagePlaceholder: "/images/study-dest/ireland.webp",
    bulletPoints: [
      "European Tech Capital",
      "2-Year Stay Back Option",
      "English Speaking Country",
      "Top Global Companies",
    ],
    link: "/study-Destination/ireland",
  },
  {
    id: 12,
    name: "Italy",
    flagCode: "it",
    imagePlaceholder: "/images/study-dest/italy.webp",
    bulletPoints: [
      "Need-Based Scholarships",
      "Historic Universities",
      "Fashion & Design Hub",
      "Low Tuition Fees",
    ],
    link: "/study-Destination/italy",
  },
  {
    id: 13,
    name: "Japan",
    flagCode: "jp",
    imagePlaceholder: "/images/study-dest/japan.webp",
    bulletPoints: [
      "High Tech Innovation",
      "MEXT Scholarships",
      "Safe & Modern Life",
      "Post-Study Work Options",
    ],
    link: "/study-Destination/japan",
  },
  {
    id: 14,
    name: "Netherlands",
    flagCode: "nl",
    imagePlaceholder: "/images/study-dest/netherlands.webp",
    bulletPoints: [
      "95% English Speakers",
      "1-Year Orientation Visa",
      "Top Tier Universities",
      "Central European Location",
    ],
    link: "/study-Destination/netherlands",
  },
  {
    id: 15,
    name: "United Kingdom",
    flagCode: "gb",
    imagePlaceholder: "/images/study-dest/uk.webp",
    bulletPoints: [
      "1-Year Master Programs",
      "2-Year Graduate Visa",
      "Prestigious Degrees",
      "Diverse Student Life",
    ],
    link: "/study-Destination/uk",
  },
  {
    id: 16,
    name: "USA",
    flagCode: "us",
    imagePlaceholder: "/images/study-dest/usa.webp",
    bulletPoints: [
      "Ivy League & Top STEM",
      "3-Year OPT for STEM",
      "Massive Scholarships",
      "Global Career Growth",
    ],
    link: "/study-Destination/usa",
  },
  {
    id: 17,
    name: "Latvia",
    flagCode: "us",
    imagePlaceholder: "/images/study-dest/latvia.webp",
    bulletPoints: [
      "Ivy League & Top STEM",
      "3-Year OPT for STEM",
      "Massive Scholarships",
      "Global Career Growth",
    ],
    link: "/study-Destination/latvia",
  },
  {
    id: 18,
    name: "Lithuania",
    flagCode: "us",
    imagePlaceholder: "/images/study-dest/lithuania.webp",
    bulletPoints: [
      "Ivy League & Top STEM",
      "3-Year OPT for STEM",
      "Massive Scholarships",
      "Global Career Growth",
    ],
    link: "/study-Destination/lithuania",
  },
  {
    id: 19,
    name: "Luxemboura",
    flagCode: "us",
    imagePlaceholder: "/images/study-dest/luxemboura.webp",
    bulletPoints: [
      "Ivy League & Top STEM",
      "3-Year OPT for STEM",
      "Massive Scholarships",
      "Global Career Growth",
    ],
    link: "/study-Destination/luxemboura",
  },
  {
    id: 20,
    name: "New Zealand",
    flagCode: "us",
    imagePlaceholder: "/images/study-dest/new-zealand.webp",
    bulletPoints: [
      "Ivy League & Top STEM",
      "3-Year OPT for STEM",
      "Massive Scholarships",
      "Global Career Growth",
    ],
    link: "/study-Destination/new-zealand",
  },
  {
    id: 21,
    name: "Poland",
    flagCode: "us",
    imagePlaceholder: "/images/study-dest/poland.webp",
    bulletPoints: [
      "Ivy League & Top STEM",
      "3-Year OPT for STEM",
      "Massive Scholarships",
      "Global Career Growth",
    ],
    link: "/study-Destination/poland",
  },
  {
    id: 22,
    name: "Portuqal",
    flagCode: "us",
    imagePlaceholder: "/images/study-dest/portuqal.webp",
    bulletPoints: [
      "Ivy League & Top STEM",
      "3-Year OPT for STEM",
      "Massive Scholarships",
      "Global Career Growth",
    ],
    link: "/study-Destination/portuqal",
  },
  {
    id: 23,
    name: "Spain",
    flagCode: "us",
    imagePlaceholder: "/images/study-dest/spain.webp",
    bulletPoints: [
      "Ivy League & Top STEM",
      "3-Year OPT for STEM",
      "Massive Scholarships",
      "Global Career Growth",
    ],
    link: "/study-Destination/spain",
  },
  {
    id: 24,
    name: "Sweden",
    flagCode: "us",
    imagePlaceholder: "/images/study-dest/sweden.webp",
    bulletPoints: [
      "Ivy League & Top STEM",
      "3-Year OPT for STEM",
      "Massive Scholarships",
      "Global Career Growth",
    ],
    link: "/study-Destination/sweden",
  },
  {
    id: 25,
    name: "Turkey",
    flagCode: "us",
    imagePlaceholder: "/images/study-dest/turkey.webp",
    bulletPoints: [
      "Ivy League & Top STEM",
      "3-Year OPT for STEM",
      "Massive Scholarships",
      "Global Career Growth",
    ],
    link: "/study-Destination/turkey",
  },
  {
    id: 26,
    name: "UAE",
    flagCode: "us",
    imagePlaceholder: "/images/study-dest/united.webp",
    bulletPoints: [
      "Ivy League & Top STEM",
      "3-Year OPT for STEM",
      "Massive Scholarships",
      "Global Career Growth",
    ],
    link: "/study-Destination/uae",
  },
  {
    id: 27,
    name: "USA",
    flagCode: "us",
    imagePlaceholder: "/images/study-dest/usa.webp",
    bulletPoints: [
      "Ivy League & Top STEM",
      "3-Year OPT for STEM",
      "Massive Scholarships",
      "Global Career Growth",
    ],
    link: "/study-Destination/usa",
  },
];

export default function StudyFirst() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = destinations.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=" text-slate-800 min-h-screen py-12 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0b5cff]/20 text-[#0b5cff] border border-[#0b5cff]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <FaGlobe className="animate-spin-slow" /> Global Education Destinations
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-800 mb-4">
            Top Study <span className="text-[#0b5cff]">Destinations</span> In 2026
          </h1>
          <p className="text-slate-700 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Explore comprehensive information on top study destinations around the globe. Click on any country to get detailed guide.
          </p>

          {/* SEARCH INPUT */}
          <div className="mt-8 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search destination country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border-2 border-slate-800 focus:border-[#0b5cff] rounded-xl px-5 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all shadow-inner"
            />
          </div>
        </div>

        {/* DESTINATIONS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((country) => (
            <div
              key={country.id}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-[#ef4444] transition-all duration-300 shadow-lg hover:shadow-[#ef4444]/10 flex flex-col justify-between"
            >
              {/* IMAGE / PLACEHOLDER CONTAINER */}
              <div className="relative h-60 w-full bg-slate-800 overflow-hidden">
                
                {/* 1. Placeholder Background (Displays if image path is empty/loading) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-slate-700 p-4 text-center">
                  <FaGraduationCap className="text-4xl mb-2 text-slate-800" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {country.name} Image Place
                  </span>
                </div>

                {/* 2. Real Image (Will render if available) */}
                {country.imagePlaceholder && (
                  <Image
                    src={country.imagePlaceholder}
                    alt={country.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Hides broken image icon if image file doesn't exist yet
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                )}

                {/* FLAG ICON BADGE */}
                <div className="absolute top-3 left-3 z-10 bg-slate-950/80 border border-slate-800 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                  <img
                    src={`https://flagcdn.com/w40/${country.flagCode}.png`}
                    alt={`${country.name} flag`}
                    className="w-5 h-3.5 object-cover rounded-sm"
                  />
                  <span className="text-[11px] font-bold text-white uppercase">
                    {country.name}
                  </span>
                </div>

                {/* HOVER OVERLAY (Appears on Hover with Red Accent and Electric Blue Highlights) */}
                <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between border-b-4 border-[#ef4444] z-20">
                  <div>
                    <h3 className="text-sm font-black uppercase text-[#ef4444] tracking-wider mb-3 border-b border-slate-800 pb-2">
                      Why Study In {country.name}?
                    </h3>
                    <ul className="space-y-2">
                      {country.bulletPoints.map((point, index) => (
                        <li
                          key={index}
                          className="text-xs text-slate-300 flex items-start gap-2 font-medium"
                        >
                          <span className="text-[#0b5cff] font-bold">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={country.link}
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-[#0b5cff] hover:bg-[#ef4444] text-white text-xs font-black py-2.5 px-4 rounded-xl transition-colors uppercase tracking-wider"
                  >
                    Explore {country.name} <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>

              {/* FOOTER TITLE (Visible when not hovering) */}
              <div className="p-4 bg-slate-900 border-t border-slate-800/80 flex justify-between items-center group-hover:bg-slate-850 transition-colors">
                <span className="text-sm font-black text-white uppercase tracking-wide group-hover:text-[#0b5cff] transition-colors">
                  {country.name}
                </span>
                <span className="text-xs font-bold text-slate-500 group-hover:text-[#ef4444] transition-colors flex items-center gap-1">
                  View <FaArrowRight className="text-[10px]" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* NO RESULTS FOUND */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16 bg-slate-900 rounded-3xl border border-slate-800 mt-8">
            <p className="text-slate-400 font-bold text-lg mb-4">No destination found matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery("")}
              className="bg-[#ef4444] text-white text-xs font-black px-6 py-3 rounded-full uppercase hover:bg-[#0b5cff] transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}

      </div>
    </div>
  );
}