"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function Belgium1() {
     const tableOfContents = [
    { title: "Admission requirements in ", id: "admission-requirements" },
    { title: "Cost of studying in ", id: "cost-of-studying" },
    { title: "Scholarships for students in ", id: "scholarships" },
    { title: "Visa requirements in ", id: "visa-requirements" },
    { title: "Popular courses to Study in ", id: "popular-courses" },
    { title: "Post-Study work opportunities", id: "post-study-work" },
    { title: "Cost of living in ", id: "cost-of-living" },
    { title: "Book a meeting with an expert", id: "book-meeting" },
  ];
  return (
    <div>
        {/* hero section */}
      <section className="relative w-full overflow-hidden">
      {/* 1. Responsive Image Container */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[550px]">
        <Image
          src="/images/study-dest/belgium.jpg"
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
          
        </h1>

        {/* Paragraph 1 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600  font-semibold ">
Experience world-class education in one of the happiest and safest nations on earth. Consistently ranked at the top of the UN’s World Happiness Report since 2012,  offers an innovative, secure, and welcoming environment for international students.        </p>

        {/* Paragraph 2 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600  font-semibold">
Studying in  isn't just about gaining a globally recognized degree—it's about building a strong foundation for your international career while enjoying top-tier healthcare, high living standards, and unparalleled quality of life.        </p>

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
         <section className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-14 ">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6 md:gap-7">
        
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-[#1a233d] border-b-2  pb-3">
          Why Study <span className="text-[#0b5cff]">In </span>
        </h1>

        {/* Paragraph 1 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 font-semibold">
          Since  lacks significant natural resources, its main export is knowledge. Its focus on education indicates that Danish education is excellent and emphasizes creativity, innovation, analysis, and critical thinking. Additionally, their universities specialize in sustainability, innovation, entrepreneurship, and global perspectives, and their teaching is grounded in the most recent research. Their daring methodology permeates the educational system as well. By fusing conventional lectures with industry internships, Danish universities encourage self-motivation and problem-based learning, enabling students to apply their knowledge practically and equipping them for the demands of the global labor market.
        </p>
        
        {/* Paragraph 2 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 font-semibold">
           has several very prestigious universities, such as the University of Copenhagen and the University of Southern , which are important reasons to study there. Additionally, universities like Roskilde University and Aarhus University are options for students.
        </p>

      </div>
    </section>
    </div>
  );
}