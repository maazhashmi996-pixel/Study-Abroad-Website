"use client";

import {  CheckCircle2, IdCard } from "lucide-react";

export default function Visa() {
  const visaRequirements = [
    "Letter of admission from an educational institution",
    "Details of the academic program",
    "Valid passport",
    "Passport-style photos",
    "Complete ST1 form",
    "Proof of English or Danish language proficiency",
    "Proof of financial resources to live in Denmark",
    "Evidence of application fee payment",
    "Travel Insurance",
  ];

  return (
    <section className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Header Section */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <span className="w-8 h-[2px] bg-red-500" />
            <span className="text-red-600 text-xs uppercase tracking-widest font-bold">
              Immigration Checklist
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a233d] tracking-tight">
            Student Visa Requirements <span className="text-[#0b5cff]">In Denmark</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed mt-2">
            Make sure to prepare all necessary legal documents required by the Danish Agency for International Recruitment and Integration (SIRI).
          </p>
        </div>

        {/* Responsive Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {visaRequirements.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 bg-slate-50 border border-slate-200/80 p-4 sm:p-5 rounded-2xl shadow-2xs hover:bg-white hover:border-[#0b5cff] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Red Accent Icon Box */}
              <div className="shrink-0 w-10 h-10 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <IdCard className="w-5 h-5" />
              </div>

              {/* Requirement Text */}
              <div className="flex items-center justify-between w-full gap-2">
                <span className="text-[#1a233d] font-semibold text-sm sm:text-base leading-snug">
                  {item}
                </span>
                <CheckCircle2 className="w-4 h-4 text-slate-300 group-hover:text-[#0b5cff] transition-colors shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}