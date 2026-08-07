"use client";

import { Wallet, Award, CheckCircle2 } from "lucide-react";

export default function Cost() {
  const scholarships = [
    {
      name: "Danish Government Scholarship",
      desc: "Covers full tuition and monthly stipend for non-EU/EEA students with outstanding academic records.",
    },
    {
      name: "DTU Scholarship",
      desc: "Partial tuition waiver for high-achieving non-EU/EEA Master’s students.",
    },
    {
      name: "Aarhus University Scholarship",
      desc: "Covers 50%-100% tuition for exceptional international students.",
    },
    {
      name: "Erasmus+ Scholarship",
      desc: "EU-funded, covers tuition, travel, and living allowance for exchange students.",
    },
    {
      name: "Novo Nordisk Foundation Scholarship",
      desc: "Covers full tuition and stipend for students in life sciences and health programs.",
    },
    {
      name: "HEC Denmark Scholarship (For Pakistanis)",
      desc: "Higher Education Commission Pakistan offers funded programs for Danish universities.",
    },
  ];

  return (
    <section className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-14 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <span className="w-8 h-[2px] bg-red-500" />
            <span className="text-red-600 text-xs uppercase tracking-widest font-bold">
              Financial Information
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a233d] tracking-tight">
            Cost & <span className="text-[#0b5cff]">Scholarships</span>
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Card: Cost of Studying */}
          <div className="bg-slate-50 border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            
            {/* Header with Red Accent Icon */}
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200/80">
              <div className="w-12 h-12 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a233d]">
                Cost of Studying In Denmark
              </h3>
            </div>

            <div className="flex flex-col gap-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                In general, living expenses in Denmark can be high. While the suggested monthly budget for smaller towns like Aalborg is about <span className="font-semibold text-[#1a233d]">EUR 1,000</span>, living in Copenhagen typically ranges from <span className="font-semibold text-[#1a233d]">EUR 1,280 to 1,800</span> per month.
              </p>
              <p>
                However, students from Switzerland and the EU/EEA benefit from tuition-free education at Danish institutions, saving a significant amount.
              </p>
              <p>
                Many international students opt for off-campus residence halls as public transport makes commuting simple. Dorms offer an affordable way to settle in—expect to pay between <span className="font-semibold text-[#0b5cff]">EUR 240 and EUR 460</span> monthly for residence hall accommodation.
              </p>
            </div>
          </div>

          {/* Right Card: Scholarships */}
          <div className="bg-slate-50 border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            
            {/* Header with Red Accent Icon */}
            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-200/80">
              <div className="w-12 h-12 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a233d]">
                Scholarships For International Students
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 font-medium mb-6 italic">
              Merit-based financial aid covering partial to full tuition for international Master’s students:
            </p>

            {/* List of Scholarships */}
            <ul className="flex flex-col gap-4">
              {scholarships.map((item, index) => (
                <li key={index} className="flex items-start gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/60 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="text-sm sm:text-base leading-snug">
                    <strong className="text-[#1a233d] font-bold block mb-0.5">
                      {item.name}:
                    </strong>
                    <span className="text-slate-600 text-xs sm:text-sm">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}