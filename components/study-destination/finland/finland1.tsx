"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { FaGlobeEurope, FaGraduationCap, FaShieldAlt, FaWallet } from "react-icons/fa";

export default function Finland1() {
  const tableOfContents = [
    { title: "Admission requirements in Finland", id: "admission-requirements" },
    { title: "Cost of studying in Finland", id: "cost-of-studying" },
    { title: "Scholarships for students in Finland", id: "scholarships" },
    { title: "Visa requirements in Finland", id: "visa-requirements" },
    { title: "Popular courses to Study in Finland", id: "popular-courses" },
    { title: "Post-Study work opportunities", id: "post-study-work" },
    { title: "Cost of living in Finland", id: "cost-of-living" },
    { title: "Book a meeting with an expert", id: "book-meeting" },
  ];

  const reasons = [
    {
      title: "World-Class Education System",
      description:
        "Finland consistently ranks among the top education systems globally. Finnish universities emphasize student-centered learning, research, critical thinking, and practical problem-solving over rote memorization.",
      icon: FaGraduationCap,
      accentBorder: "border-l-blue-600",
      iconBg: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: "High Standard & Quality of Life",
      description:
        "Ranked as the happiest nation in the world for consecutive years, Finland offers exceptionally clean environments, high safety standards, well-organized public transportation, and social equality.",
      icon: FaShieldAlt,
      accentBorder: "border-l-indigo-600",
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
    {
      title: "Wide Range of English Taught Programs",
      description:
        "Finnish universities and universities of applied sciences (UAS) offer hundreds of bachelor's and master's degree programs fully taught in English across technology, business, design, and health sciences.",
      icon: FaGlobeEurope,
      accentBorder: "border-l-sky-600",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
    },
    {
      title: "Post-Study Work & Career Opportunities",
      description:
        "International graduates can apply for an extended post-study work permit (up to 2 years) to seek employment or start a company in Finland's thriving tech and startup ecosystem.",
      icon: FaWallet,
      accentBorder: "border-l-cyan-600",
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[550px]">
          <Image
            src="/images/study-dest/finland.jpg"
            alt="Study in Finland"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/60 to-transparent" />

        {/* Content Position */}
        <div className="absolute inset-0 flex items-end pb-6 sm:pb-8 px-4 sm:px-8 md:px-12 lg:px-20 z-20">
          <div className="max-w-7xl mx-auto w-full">
            <ul className="list-disc pl-5 space-y-2 text-white text-base sm:text-lg md:text-xl font-medium drop-shadow-md">
              <li>24 Universities</li>
              <li>€11,000 to €20,000 Annual Tuition Fee</li>
              <li>Up to 2-3 Years Post Study Work Visa</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#1a233d] font-bold border-b-2 border-slate-200 pb-2">
            Finland
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-800 font-medium">
            Finland is among the first nations that spring to mind when discussing top-notch education. As a Nordic nation with 5.54 million people, it has done a remarkable job of both keeping up with and establishing worldwide standards in education.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-800 font-medium">
            Moreover, Finland has 35 higher education institutions and is a member of the EU, making it a popular destination for international students. Also, Finland provides an excellent social environment for learning and personal development since it is an egalitarian culture that places a high priority on knowledge and lifelong learning.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-800 font-medium">
            The ease of living in one of the safest nations in the world, the security of residing in Finland, and the advanced infrastructure and technology all contribute to the quality of life for international students.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-slate-50/70 border-y border-slate-100 px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-10 text-center md:text-left">
            <span className="text-[#0b5cff] text-xs uppercase tracking-widest font-semibold bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100 inline-block mb-3">
              Quick Overview
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a233d] tracking-tight">
              Table Of <span className="text-[#0b5cff]">Content</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-center gap-4 bg-white border border-slate-200/80 p-4 sm:p-5 rounded-2xl shadow-sm hover:border-[#0b5cff] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <div className="shrink-0 w-9 h-9 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-[#0b5cff] font-bold group-hover:bg-[#0b5cff] group-hover:text-white transition-colors duration-200">
                  <FaCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-slate-800 text-sm sm:text-base font-semibold leading-snug group-hover:text-[#0b5cff] transition-colors duration-200">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study in Finland Section */}
      <section className="bg-slate-50/80 text-slate-900 py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0b5cff] px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block animate-pulse" />
              Destination Guide
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Why Study in <span className="text-[#0b5cff]">Finland?</span>
            </h2>
          </div>

          {/* Structured Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {reasons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`bg-white border border-slate-200/80 border-l-4 ${item.accentBorder} rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl border ${item.iconBg} shrink-0`}>
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}