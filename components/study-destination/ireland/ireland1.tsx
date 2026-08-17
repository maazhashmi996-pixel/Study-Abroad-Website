"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import {  FaGlobeEurope, FaGraduationCap, FaShieldAlt, FaWallet } from "react-icons/fa";

export default function Ireland1() {
     const tableOfContents = [
    { title: "Admission requirements in Ireland", id: "admission-requirements" },
    { title: "Cost of studying in Ireland", id: "cost-of-studying" },
    { title: "Scholarships for students in Ireland", id: "scholarships" },
    { title: "Visa requirements in Ireland", id: "visa-requirements" },
    { title: "Popular courses to Study in Ireland", id: "popular-courses" },
    { title: "Post-Study work opportunities", id: "post-study-work" },
    { title: "Cost of living in Ireland", id: "cost-of-living" },
    { title: "Book a meeting with an expert", id: "book-meeting" },
  ];
  const reasons = [
              {
              
                description:
                  "Ireland’s universities and schools are well-known worldwide. In addition, their popularity implies that Irish university graduates may advance in their jobs globally.",
                icon: FaGraduationCap,
                accentBorder: "border-l-red-500",
                iconBg: "bg-red-50 text-red-600 border-red-100",
              },
              {
          
                description:
                  "Moreover, Ireland has one of the most effective educational systems in the world. The country has some of the top 3% of universities globally, and its graduates are in high demand worldwide..",
                icon: FaWallet,
                accentBorder: "border-l-[#0b5cff]",
                iconBg: "bg-blue-50 text-[#0b5cff] border-blue-100",
              },
              {
             
                description:
                  "Besides, Ireland is also a young nation, with one-third of the population under 25. Ireland routinely ranks among the top 20 countries in the world for peace, human development, and quality of life, making it a safe and welcoming place to live.",
                icon: FaGlobeEurope,
                accentBorder: "border-l-slate-700",
                iconBg: "bg-slate-100 text-slate-700 border-slate-200",
              },
              {
               
                description:
                  "Furthermore, you will study in Ireland with over 35,000 international students.",
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
          src="/images/study-dest/ireland.jpg"
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
            <li> 23 Universities</li>
            <li>€6,000 to €20,000 Annual Tuition Fee</li>
            <li>Up to 2 Years Post Study Work Visa</li>
           


          </ul>
        </div>
      </div>
         </section>
     <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#1a233d] font-bold border-b-2  pb-2">
          Ireland
        </h1>

        {/* Paragraph 1 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-800  font-semibold ">
One of the most well-liked study-abroad locations in Europe is Ireland. Its institutions provide excellent instruction in an atmosphere that is both traditional and modern. Moreover, international students enroll in thousands of study programs at over two dozen schools in Ireland. Studying in Ireland will be especially enjoyable for those who appreciate the outdoors, writing, and historical history. </p>

        {/* Paragraph 2 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-800  font-semibold">
The Irish are known for being gregarious, and as many of the country’s outlying communities strive to maintain their rich cultural legacy, there are plenty of options for you to travel around Ireland. Additionally, Ireland’s large cities are smaller and more effortless to navigate, its people are kind and open-minded, and it boasts one of the top education systems in the world.    </p>

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
            Why Study in <span className="text-[#0b5cff]">Ireland?</span>
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