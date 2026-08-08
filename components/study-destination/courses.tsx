"use client";

import { Poppins } from "next/font/google";
import { Briefcase, Cpu, Leaf, Stethoscope, Palette } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Courses() {
  const coursesList = [
    {
      title: "Business & Economics",
      description: "Well-known universities with business programs include Aalborg University, Aarhus University, and Copenhagen Business School.",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      title: "Engineering",
      description: "Aarhus University, Aalborg University, and Technical University of Denmark (DTU) are all excellent in different engineering fields.",
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      title: "Renewable Energy & Sustainability",
      description: "Pioneers in sustainability teaching and research are DTU, University of Copenhagen, and Aarhus University.",
      icon: <Leaf className="w-5 h-5" />,
    },
    {
      title: "Medical & Life Sciences",
      description: "Prestigious medical and life science programs are available at University of Copenhagen, Aarhus University, and Southern Denmark University.",
      icon: <Stethoscope className="w-5 h-5" />,
    },
    {
      title: "Design & Creative Industries",
      description: "Well-known organizations include Royal Danish Academy of Fine Arts, KEA (Copenhagen School of Design & Technology), and Kolding School of Design.",
      icon: <Palette className="w-5 h-5" />,
    },
  ];

  return (
    <section className={`${poppins.className} bg-slate-50/70 border-y border-slate-100 px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20`}>
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Header Section */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <span className="w-8 h-[2px] bg-red-500" />
            <span className="text-red-600 text-xs uppercase tracking-widest font-bold">
              Academic Fields
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a233d] tracking-tight">
            Popular Courses <span className="text-[#0b5cff]">In Denmark</span>
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {coursesList.map((course, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#0b5cff] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                index === coursesList.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Red Accent Icon Box */}
                <div className="w-11 h-11 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-2xs">
                  {course.icon}
                </div>

                {/* Course Title */}
                <h3 className="text-lg font-bold text-[#1a233d] mb-2">
                  {course.title}
                </h3>

                {/* Course Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}