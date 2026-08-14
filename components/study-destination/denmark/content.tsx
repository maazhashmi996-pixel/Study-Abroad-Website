"use client";

import { FaCheck } from "react-icons/fa";

export default function TableOfContent() {
  const tableOfContents = [
    { title: "Admission requirements in Denmark", id: "admission-requirements" },
    { title: "Cost of studying in Denmark", id: "cost-of-studying" },
    { title: "Scholarships for students in Denmark", id: "scholarships" },
    { title: "Visa requirements in Denmark", id: "visa-requirements" },
    { title: "Popular courses to Study in Denmark", id: "popular-courses" },
    { title: "Post-Study work opportunities", id: "post-study-work" },
    { title: "Cost of living in Denmark", id: "cost-of-living" },
    { title: "Book a meeting with an expert", id: "book-meeting" },
  ];

  return (
    <section className="bg-slate-50/70 border-y border-slate-100 px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Badge & Title */}
        <div className="mb-8 md:mb-10 text-center md:text-left">
          <span className="text-[#0b5cff] text-xs uppercase tracking-widest font-semibold bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100 inline-block mb-3">
            Quick Overview
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a233d] tracking-tight">
            Table Of <span className="text-[#0b5cff]">Content</span>
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {tableOfContents.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className="group flex items-center gap-4 bg-white border border-slate-200/80 p-4 sm:p-5 rounded-2xl shadow-sm hover:border-[#0b5cff] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              {/* Blue Check Icon Wrapper */}
              <div className="shrink-0 w-9 h-9 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-[#0b5cff] font-bold group-hover:bg-[#0b5cff] group-hover:text-white transition-colors duration-200">
                <FaCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Card Title */}
              <span className="text-slate-800 text-sm sm:text-base font-semibold leading-snug group-hover:text-[#0b5cff] transition-colors duration-200">
                {item.title}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}