"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import {  FaGlobeEurope, FaGraduationCap, FaShieldAlt, FaWallet } from "react-icons/fa";

export default function Japan1() {
     const tableOfContents = [
    { title: "Admission requirements in Japan", id: "admission-requirements" },
    { title: "Cost of studying in Japan", id: "cost-of-studying" },
    { title: "Scholarships for students in Japan", id: "scholarships" },
    { title: "Visa requirements in Japan", id: "visa-requirements" },
    { title: "Popular courses to Study in Japan", id: "popular-courses" },
    { title: "Post-Study work opportunities", id: "post-study-work" },
    { title: "Cost of living in Japan", id: "cost-of-living" },
    { title: "Book a meeting with an expert", id: "book-meeting" },
  ];
  const reasons = [
              {
                title: "Lower tuition than Western countries",
                description:
                  "Annual tuition at Japanese national universities averages around ¥535,800 (approximately £2,800 / USD 3,600). This is significantly less than UK or Australian university fees for international students.",
                icon: FaGraduationCap,
                accentBorder: "border-l-red-500",
                iconBg: "bg-red-50 text-red-600 border-red-100",
              },
              {
                title: "Strong scholarship funding",
                description:
                  "Japan consistently ranks among the safest countries in the world. Public transport is reliable, cities are clean, and the cost of daily living is manageable outside of Tokyo.  For international students, this reliability makes the adjustment process smoother.",
                icon: FaWallet,
                accentBorder: "border-l-[#0b5cff]",
                iconBg: "bg-blue-50 text-[#0b5cff] border-blue-100",
              },
              {
                title: "Safe, well-organised environment",
                description:
                  "MHundreds of undergraduate and postgraduate programs are now available entirely in English. You do not need Japanese to start your degree, though learning it improves employment prospects.",
                icon: FaGlobeEurope,
                accentBorder: "border-l-slate-700",
                iconBg: "bg-slate-100 text-slate-700 border-slate-200",
              },
              {
                title: "Path to work after graduation",
                description:
                  "Japan faces long-term labour shortages in technology, engineering, healthcare, and international business. The government has simplified post-study visa pathways to retain skilled international graduates.",
                icon: FaShieldAlt,
                accentBorder: "border-l-red-500",
                iconBg: "bg-red-50 text-red-600 border-red-100",
              },
            ];
  return (
    <div>
        {/* hero section */}
      <section className="relative w-full overflow-hidden">
      {/* 1. Responsive Image Container */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[550px]">
        <Image
          src="/images/study-dest/japan.jpg"
          alt="learn"
          fill
          priority
          className="object-cover object-center "
        />
      </div>

      {/* 2. Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-950/80 via-blue-750/80 to-blue-750/80"></div>
      

      {/* 3. Responsive Content/Text Position */}
      {/* Updated: items-center ko items-end se badla hai aur bottom padding add ki hai */}
      <div className=" inset-0 flex items-end pb-2 sm:pb-6 md:pb-8 px-3 sm:px-88 md:px-10 z-20">
        <div className="absolute max-w-7xl mx-auto w-full">
          <ul className="relative list-disc text-xs b-0.5 l-6 pl-12 sm:ml-6 underline  sm:space-y-3 text-white sm:text-base md:text-xs lg:text-xl drop-shadow-md">
            <li>15+ University and Colleges</li>
            <li>DKK 80,000 Annual Tuition Fee</li>
            <li>3 Year Post Study Visa</li>
          </ul>
        </div>
      </div>
         </section>
     <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#1a233d] font-bold border-b-2  pb-2">
          Japan
        </h1>

        {/* Paragraph 1 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600  font-semibold ">
Experience world-class education in one of the happiest and safest nations on earth. Consistently ranked at the top of the UN’s World Happiness Report since 2012, Japan offers an innovative, secure, and welcoming environment for international students.        </p>

        {/* Paragraph 2 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600  font-semibold">
Studying in Japan isn't just about gaining a globally recognized degree—it's about building a strong foundation for your international career while enjoying top-tier healthcare, high living standards, and unparalleled quality of life.        </p>

      </div>
    </section>
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
           <section className="bg-slate-50/80 text-slate-900 py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0b5cff] px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse" />
            Destination Guide
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Study in <span className="text-[#0b5cff]">Japan?</span>
          </h2>
          <p>Japan is the third-largest economy in the world. Its universities produce globally recognised research, particularly in engineering, robotics, artificial intelligence, medicine, and materials science. Graduates from Japanese universities are hired by companies across Asia, Europe, and North America.
Beyond rankings, Japan offers something most Western destinations do not: a completely different academic and cultural environment. Students who study in Japan develop cross-cultural adaptability that employers in international business, technology, and research sectors actively look for.</p>
        </div>
<h1 className="font-bold text-[#0b5cff] mb-5">Practical reasons students choose Japan:</h1>
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