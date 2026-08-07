"use client";

import { Briefcase, CheckCircle2, Building2 } from "lucide-react";

export default function Post() {
  return (
    <section className="bg-slate-50/70 border-y border-slate-100 px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Header Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-red-500" />
            <span className="text-red-600 text-xs uppercase tracking-widest font-bold">
              Career Pathways
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a233d] tracking-tight">
            Post-Study <span className="text-[#0b5cff]">Work Opportunities</span>
          </h2>
        </div>

        {/* Content Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
          
          {/* Red Accent Icon */}
          <div className="shrink-0 w-12 h-12 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center justify-center shadow-2xs">
            <Briefcase className="w-6 h-6" />
          </div>

          {/* Description & Key Points */}
          <div className="flex flex-col gap-4">
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
              After completing a Bachelor’s, Master’s, or PhD in Denmark, non-EU/EEA students can apply for a <strong className="text-[#1a233d] font-semibold">3-year job search permit</strong> through the Danish Agency for International Recruitment and Integration (SIRI). As long as your passport remains valid, the permit is automatically granted to allow you to seek employment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0b5cff] shrink-0" />
                <span>3-Year Extension Available</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <Building2 className="w-4 h-4 text-[#0b5cff] shrink-0" />
                <span>Path to Permanent Residency</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 italic bg-blue-50/50 p-3 rounded-xl border border-blue-100/50">
              <strong className="text-[#0b5cff] font-semibold not-italic">High Demand Sectors:</strong> Technology, Engineering, and Life Sciences offer the highest job availability for international graduates.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}