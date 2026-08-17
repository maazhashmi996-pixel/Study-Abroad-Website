"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import {  FaGlobeEurope, FaGraduationCap, FaShieldAlt, FaWallet } from "react-icons/fa";
export default function Spain1() {
     const tableOfContents = [
    { title: "Admission requirements in Spain", id: "admission-requirements" },
    { title: "Cost of studying in Spain", id: "cost-of-studying" },
    { title: "Scholarships for students in Spain", id: "scholarships" },
    { title: "Visa requirements in Spain", id: "visa-requirements" },
    { title: "Popular courses to Study in Spain", id: "popular-courses" },
    { title: "Post-Study work opportunities", id: "post-study-work" },
    { title: "Cost of living in Spain", id: "cost-of-living" },
    { title: "Book a meeting with an expert", id: "book-meeting" },
  ];
   const reasons = [
        {
          title: "Access to European Education at a Fraction of the Cost",
          description:
            "When families visit our offices, they usually bring printouts comparing tuition fees across countries. Spain consistently wins on affordability. Public universities charge €750 to €3,500 yearly for undergraduate programs. Compare that to UK universities starting at £15,000 annually, and you see why more Pakistani students are looking westward to the Iberian Peninsula instead of north to Britain.",
          icon: FaGraduationCap,
          accentBorder: "border-l-red-500",
          iconBg: "bg-red-50 text-red-600 border-red-100",
        },
        {
          title: "English-Taught Programs Are More Common Than You Think",
          description:
            "Ten years ago, learning Spanish was mandatory for most programs. That’s changed. Universities across Madrid, Barcelona, Valencia, and Seville now offer hundreds of programs fully taught in English, particularly at the master’s level. Engineering, business administration, data science, architecture fields that Pakistani students traditionally pursue, are increasingly available without Spanish language requirements for admission.",
          icon: FaWallet,
          accentBorder: "border-l-[#0b5cff]",
          iconBg: "bg-blue-50 text-[#0b5cff] border-blue-100",
        },
        {
          title: "Living in Spain: What Our Students Actually Report",
          description:
            "We stay in touch with students after they leave Pakistan, and their feedback shapes how we advise new applicants. The most common comment? Spain feels more relaxed than they expected. Class schedules often run from morning until early afternoon, with evenings free. The social culture revolves around meeting friends for coffee or tapas, not expensive pub crawls. Weekend train tickets within Spain are affordable enough that students regularly explore different cities.",
          icon: FaGlobeEurope,
          accentBorder: "border-l-slate-700",
          iconBg: "bg-slate-100 text-slate-700 border-slate-200",
        },
        {
          title: "Pathway to the European Job Market",
          description:
            "Spain’s post-study work visa allows 12 months to find employment after graduation. That’s less generous than Germany’s 18 months but more realistic than France’s six months. The practical advantage is that Spain’s growing tech sector in Barcelona and Valencia actively recruits English-speaking graduates, while the tourism and hospitality industries always need multilingual staff.",
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
          src="/images/study-dest/spain.jpg"
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
            <li>85+ Universities</li>
            <li>€3,000 – €12,000 Annual Tuition Fee</li>
            <li>Post Study Work Options Available</li>
          </ul>
        </div>
      </div>
         </section>
     <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#1a233d] font-bold border-b-2  pb-2">
          Spain
        </h1>

        {/* Paragraph 1 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600  font-semibold ">
For over two decades, Times Consultant has watched Spain transform from an overlooked study destination into one of Europe’s most practical choices for Pakistani students. What started in 2004 as occasional inquiries has grown into a steady stream of families asking us the same question: “Can my child really get quality European education without the UK price tag?”
</p>
        {/* Paragraph 2 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600  font-semibold">
The answer is yes, but it requires understanding Spain’s education system works differently than what most Pakistani families expect. Spanish universities operate on a decentralized model, there’s no central application portal like UCAS. Public universities set their own admission criteria, and tuition varies by region and credit hours, not just by program. This system confuses many first-time applicants, which is where proper guidance makes the difference between a smooth application and a rejected one.
</p>
        {/* Paragraph 2 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600  font-semibold">
Beyond the paperwork, Spain offers something harder to quantify: you’ll study in a country where international students can legally work part-time, where a master’s degree costs what some UK universities charge for just the application process, and where your student residence permit opens doors to travel across 27 EU countries. The weather doesn’t hurt either though we tell our students that’s just a bonus, not the reason to choose a university.</p>
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
            Why Study in <span className="text-[#0b5cff]">Spain?</span>
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