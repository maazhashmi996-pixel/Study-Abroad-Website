"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function Turkey1() {
     const tableOfContents = [
    { title: "Admission requirements in Turkey", id: "admission-requirements" },
    { title: "Cost of studying in Turkey", id: "cost-of-studying" },
    { title: "Scholarships for students in Turkey", id: "scholarships" },
    { title: "Visa requirements in Turkey", id: "visa-requirements" },
    { title: "Popular courses to Study in Turkey", id: "popular-courses" },
    { title: "Post-Study work opportunities", id: "post-study-work" },
    { title: "Cost of living in Turkey", id: "cost-of-living" },
    { title: "Book a meeting with an expert", id: "book-meeting" },
  ];
  return (
    <div>
        {/* hero section */}
      <section className="relative w-full overflow-hidden">
      {/* 1. Responsive Image Container */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[550px]">
        <Image
          src="/images/study-dest/turkey.png"
          alt="learn"
          fill
          priority
          sizes="100vw"
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
            <li>74 Universities</li>
            <li>US $1500+ Annual Tuition Fee</li>
            <li>1 to 2 Years Post Study Work Visa</li>
          </ul>
        </div>
      </div>
         </section>
     <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#1a233d] font-bold border-b-2  pb-2">
          Turkey
        </h1>

        {/* Paragraph 1 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600  font-semibold ">
Turkey’s excellent programs, affordable costs, and rich cultural and historical background make it an increasingly popular choice for international students. Its transportation and city-specific physical attributes make it a global hub for student travel. Moreover, there has been a notable increase in international students opting to pursue their studies in Turkey since the academic year 2015-16. The country’s almost 650,000 foreign student population reflects Turkey’s growing popularity as a location for higher education. Besides, you may work in Turkey to further your profession and continue your education in Turkish, English, or another language at colleges that offer top-notch instruction on a worldwide scale.
        {/* Paragraph 2 */}
       </p>
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
          Why Study <span className="text-[#0b5cff]">In Turkey</span>
        </h1>

        {/* Paragraph 1 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 font-semibold">
Turkey’s public and private colleges follow the Bologna Agreement, which harmonizes degree programs throughout Europe. Additionally, several Turkish institutions participate in the Erasmus+ program, facilitating exchanges of students from other countries. According to the most current QS Higher Education System Strength Rankings, Turkey’s higher education system is ranked 43rd in the world. Furthermore, it is home to over 200 universities, several state-owned.        </p>
        
        {/* Paragraph 2 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 font-semibold">
In the 2019 QS University Rankings Index: EECA, a ranking of the top institutions in Emerging Europe and Central Asia, there are 45 Turkish universities listed, in addition to 10 Turkish higher educational institutes in the QS University Rankings 2019.        </p>
        {/* Paragraph 3 */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 font-semibold">
In Turkey, there are more than 200 universities. Also, it is a student-friendly nation, with universities in nearly every city! Social clubs, athletic teams, and extracurricular activities allow students to socialize and help them overcome geographic barriers at every school.
</p>
      </div>
    </section>
    </div>
  );
}