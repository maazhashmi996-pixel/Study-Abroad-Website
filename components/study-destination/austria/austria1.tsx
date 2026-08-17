"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import {  FaGlobeEurope, FaGraduationCap, FaShieldAlt, FaWallet } from "react-icons/fa";

export default function AustriaHero() {
     const tableOfContents = [
    { title: "Admission requirements in Austria", id: "admission-requirements" },
    { title: "Cost of studying in Austria", id: "cost-of-studying" },
    { title: "Scholarships for students in Austria", id: "scholarships" },
    { title: "Visa requirements in Austria", id: "visa-requirements" },
    { title: "Popular courses to Study in Austria", id: "popular-courses" },
    { title: "Post-Study work opportunities", id: "post-study-work" },
    { title: "Cost of living in Austria", id: "cost-of-living" },
    { title: "Book a meeting with an expert", id: "book-meeting" },
  ];
  const reasons = [
              {
                title: "Academics That Follow a System",
                description:
                  "Polish universities are traditional in a good way. Courses follow structured syllabi, attendance matters, assessments are scheduled in advance, and grading criteria are clear. Students who prefer knowing exactly what’s expected of them usually do well here.",
                icon: FaGraduationCap,
                accentBorder: "border-l-red-500",
                iconBg: "bg-red-50 text-red-600 border-red-100",
              },
              {
                title: "Fields With Global Relevance",
                description:
                  "Poland is especially known for medicine, engineering, computer science, business, and technical programs. Medical universities, in particular, attract international students from across Europe, Asia, and the Middle East due to their training standards and EU recognition.",
                icon: FaWallet,
                accentBorder: "border-l-[#0b5cff]",
                iconBg: "bg-blue-50 text-[#0b5cff] border-blue-100",
              },
              {
                title: "English Education",
                description:
                  "Many programs are taught fully in English, but Poland also encourages students to pick up basic Polish. This becomes an advantage later, not only for part-time work but also for internships and post-study employment. Students say this dual exposure helps them feel more incorporated.",
                icon: FaGlobeEurope,
                accentBorder: "border-l-slate-700",
                iconBg: "bg-slate-100 text-slate-700 border-slate-200",
              },
              {
                title: "A Balanced Lifestyle",
                description:
                  "Life in Poland doesn’t feel rushed. Cities are active but not chaotic. Students can manage studies, part-time work, and daily expenses without feeling constantly stretched. That balance plays a big role in academic performance and mental well-being.",
                icon: FaShieldAlt,
                accentBorder: "border-l-red-500",
                iconBg: "bg-red-50 text-red-600 border-red-100",
              },
            ];

  const students =[
    {
      title:"Public Universities With Global Standards",
      description:"Austria’s education system is well established, with public universities known for depth and academic consistency. The University of Vienna, Austria’s highest ranked institution (140th worldwide in the QS World University Rankings 2026), and TU Wien (191th worldwide) are recognised globally for engineering, sciences, business, and the arts.",
    },
    {
      title:"Affordable Public Education",
      description:"One of Austria’s biggest draws is its public university system. Education here is treated as a public good, and non EU students pay a regulated, flat tuition rate of €726.72 per semester, far below the steep, variable fees international students face in the UK (roughly £10,000 to £38,000 per year), the US (roughly $25,000 to $50,000 per year at public universities), or Australia (roughly AUD 20,000 to 50,000 per year).",
    },
    {
      title:"Language Opportunities",
      description:"Austria offers a growing number of English taught master’s programmes, especially in engineering, business, and science. Most bachelor’s programmes, however, are taught in German, so students typically start with language preparation and gradually use German in the classroom and everyday life, a skill that becomes a real advantage for internships and work later.",
    },
    {
      title:"Student Friendly Living",
      description:"Cities like Vienna, Graz, and Linz are known for safety, well organised public transport, and a relaxed pace of life. Vienna ranked 2nd in the world in the Economist Intelligence Unit’s 2026 Global Liveability Index, behind only Copenhagen, something international students appreciate once they settle in.",
    },
  ]
  return (
    <div>
        {/* hero section */}
      <section className="relative w-full overflow-hidden">
      {/* 1. Responsive Image Container */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[550px]">
        <Image
          src="/images/study-dest/austria.jpg"
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
            <li>70+ Universities & Colleges</li>
            <li>€1,453 – €20,000+ Annual Tuition Fee</li>
            <li>2 Intakes Per Year – Winter (October) & Summer (March)</li>
            <li>Post Study Work Opportunities Available</li>
          </ul>
        </div>
      </div>
         </section>
     <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#1a233d] font-bold border-b-2  pb-2">
          Austria
        </h1>

        {/* Paragraph 1 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600  font-semibold ">
   Austria wasn’t always a top choice for international students, but over the years at Times Consultant, we’ve seen a quiet, steady rise in interest. At first, only a handful of students considered Austrian universities each year. Today, dozens come to us each month asking about study options in Austria, and the reasons are clear: quality education, affordable costs compared with Western Europe, and a safe, student oriented lifestyle with real academic structure       </p>

        {/* Paragraph 2 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600  font-semibold">
What changed? Austrian universities have a long academic tradition to draw on. The University of Vienna, founded in 1365, is the oldest university in the German-speaking world, and that institutional depth carries through the wider system: solid education structures, clear curricula, and practical learning that prepares students for careers rather than chasing quick fixes or aggressive international marketing</p>
        {/* Paragraph 3 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600  font-semibold">
What do many of our students mention after arriving? How organised and structured academic life feels. University schedules, administrative responses, and daily living logistics in Austria tend to work smoothly, and that stability matters when you’re starting a new chapter far from home.</p>

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
            Why Study in <span className="text-[#0b5cff]">Austria?</span>
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