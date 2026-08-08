"use client";

import { GraduationCap, Award, BookOpen, Star } from "lucide-react";

export default function Admission() {
  const requirements = [
    {
      title: "Undergraduates",
      description: "Your degree needs to be equivalent to the Danish upper secondary school graduation certificate.",
      icon: <GraduationCap className="w-5 h-5" />,
      // Red accent on icon box only
      iconColor: "text-red-600",
      iconBg: "bg-red-50 border-red-100",
    },
    {
      title: "Graduate",
      description: "Usually, a valid Bachelor’s degree or its equivalent is necessary to qualify for a Master's program.",
      icon: <BookOpen className="w-5 h-5" />,
      // Red accent on icon box only
      iconColor: "text-red-600",
      iconBg: "bg-red-50 border-red-100",
    },
    {
      title: "Academic Performance",
      description: "Exhibit a strong level of academic performance. This might entail reaching minimum GPA criteria.",
      icon: <Star className="w-5 h-5" />,
      iconColor: "text-red-600",
      iconBg: "bg-red-50 border-red-100",
    },
    {
      title: "Certain Requirements",
      description: "Specific programs may have field-related requirements or course prerequisites for admission.",
      icon: <Award className="w-5 h-5" />,
      iconColor: "text-red-600",
      iconBg: "bg-red-50 border-red-100",
    },
  ];

  return (
    <section className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 md:mb-14 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
             <span className="w-8 h-[2px] bg-red-500"></span>
             <span className="text-red-600 text-xs uppercase tracking-widest font-bold">Eligibility Criteria</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a233d] tracking-tight mb-4">
            Admission Requirements <span className="text-[#0b5cff]">In Denmark</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed">
            Denmark maintains high academic standards. To ensure a successful application, students must meet specific educational backgrounds and performance metrics.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {/* Sub-heading */}
          <div className="flex items-center gap-3 border-l-4 border-red-500 pl-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a233d]">
              Background in Education
            </h3>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {requirements.map((item, index) => (
              <div 
                key={index} 
                className="group p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="relative z-10 flex flex-col items-start">
                  
                  {/* ICON ONLY RED ACCENT */}
                  <div className={`w-12 h-12 border ${item.iconBg} ${item.iconColor} rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  
                  {/* Title text stays original dark color */}
                  <h4 className="font-bold text-lg sm:text-xl text-[#1a233d] mb-3">
                    {item.title}:
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA / Note */}
        <div className="mt-12 p-6 bg-[#1a233d] rounded-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white text-sm md:text-base font-medium">
              <span className="text-red-500 mr-2">●</span> 
              Confused about GPA conversion? Our experts can help you calculate your score.
            </p>
            <button className="px-6 py-3 bg-[#0b5cff] hover:bg-red-600 text-white rounded-full text-sm font-bold transition-colors">
               Check My Eligibility
            </button>
        </div>

      </div>
    </section>
  );
}