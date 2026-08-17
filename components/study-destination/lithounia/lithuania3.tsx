"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import {
  Briefcase,
  Cpu,
  Leaf,
  Stethoscope,
  Palette,
  CheckCircle2,
  Building2,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { FaChevronDown, FaTimes } from "react-icons/fa";

import { ChevronDown, HelpCircle } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Helper Component for Custom Select Box
function SelectBox({
  placeholder,
  options,
}: {
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="relative w-full">
      <select
        defaultValue=""
        required
        className="w-full bg-[#f2f4f7] text-gray-800 px-4 py-3 sm:py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#0b5cff]/30 text-sm sm:text-base border border-transparent transition appearance-none cursor-pointer"
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs" />
    </div>
  );
}

export default function Lithuania3() {
     const [open, setOpen] = useState<number | null>(0);
       const [isOpen, setIsOpen] = useState(false);


  const faqData = [
    {
      question: "How much does it cost to study in Lithuania?",
      answer:
        "For most international students, the total cost to study in Lithuania is usually around €8,000–€15,000 per year, including tuition and living expenses. Bachelor’s and master’s programmes typically cost about €2,000–€5,000 per year in tuition, while average living costs are roughly €500–€800 per month for accommodation, food, transport, and basic expenses, depending on the city and lifestyle.",
    },
    {
      question: "Is IELTS needed for Lithuania?",
      answer:
        "IELTS is not legally mandatory for Lithuania, but most English-taught programmes ask for B2-level English, which often means IELTS around 5.5–6.5 or an equivalent test. Many universities accept alternatives such as TOEFL, PTE, or internal English tests, or may accept proof that your previous education was in English, so you must always check the exact requirement on each university’s official page.",
    },
    {
      question: "How many Pakistani students are in Lithuania?",
      answer:
        "Recent migration data show that there are around 700+ Pakistani students currently studying in Lithuania, with 709 Pakistani citizens holding study-related residence permits in 2024 according to Lithuania’s Migration Department. These numbers can change every year as new students arrive and others graduate or move on.",
    },
    {
      question: "Is Lithuania easy to get PR?",
      answer:
        "Lithuania is not “easy” for PR, but it is clear and rules-based: most non-EU nationals must complete about five years of continuous legal residence and meet language and integration requirements to qualify for long-term or permanent residence. Time spent on a student residence permit usually only counts partly towards these five years, so you normally need additional years on work or other qualifying permits before applying.",
    },
    {
      question: "Does Lithuania give PR to international students?",
      answer:
        "Yes, Lithuania can grant permanent residence (PR) to international students later, but not directly from a student visa or student residence permit. Your study years can contribute towards the five-year legal residence requirement, but usually at a reduced rate, and you must later hold eligible work or other residence permits and meet conditions such as Lithuanian language and integration before PR is approved.",
    },
    {
      question: "Which course is best in Lithuania?",
      answer:
        "There is no single “best” course in Lithuania, but international students often choose IT and Computer Science, Engineering, Business and Management, Health Sciences, and Social Sciences. These fields align with Lithuania’s growing sectors such as IT, fintech, shared services, and startups, especially in cities like Vilnius and Kaunas.",
    },
    {
      question: "Can I work while studying in Lithuania?",
      answer:
        "Yes, international students in Lithuania can work part-time while studying, usually up to 20 hours per week during the academic year and full-time during holidays or specific periods, provided they hold a valid temporary residence permit for studies. Rules are updated regularly, so you should always check the latest work-hour conditions on official Lithuanian or university websites before relying on job income.",
    },
    {
      question: "Can I stay in Lithuania after graduation?",
      answer:
        "Yes, after graduation you can normally stay in Lithuania by applying for a temporary residence permit for job search and employment, which is often valid for up to 12 months. During this period you can look for work or start self-employment, and once you secure a suitable job you can switch to a work-based residence permit to continue living and working in Lithuania.",
    },
    {
      question: "Who is the best Lithuania Study Visa Consultant in Pakistan?",
      answer:
        "There is no official government ranking of the “best” Lithuania study visa consultant in Pakistan, but Times Consultant is widely recognised as a leading study-abroad consultancy for European destinations, including Lithuania. Times Consultant helps students from Pakistan choose suitable Lithuanian universities, estimate real study and living costs, prepare financial and academic documents, and compile a complete Lithuania study-visa file with guidance on accommodation and post-study options.",
    },
    {
      question: "Can I bring my family to Lithuania on a student visa?",
      answer:
        "Family members (spouse and children) can join you in Lithuania under a **family reunification residence permit**. Your spouse gets the right to work without a separate work permit. You must prove sufficient income typically equal to the Lithuanian minimum monthly wage (currently €1,153/month in 2026) per family member, plus valid health insurance and accommodation proof.",
    },
  ];

  const dropdownOptions = {
    cities: [
      "Abbottabad", "Bahawalpur", "Dubai", "Faisalabad", "Gujranwala",
      "Gujrat", "Hyderabad", "Islamabad", "Karachi", "Lahore",
      "Multan", "Peshawar", "Quetta", "Rawalpindi", "Sialkot",
    ],
    offices: [
      "Lahore", "Islamabad", "Karachi", "Faisalabad", "Multan",
      "Peshawar", "Sialkot", "Rawalpindi", "Hyderabad", "Gujranwala",
    ],
    slots: [
      "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM",
      "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
      "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM",
    ],
    countries: [
      "Australia", "Canada", "Lithounia", "Finland", "France",
      "Germany", "Hungary", "Ireland", "Italy", "Malaysia",
      "Malta", "Netherlands", "New Zealand", "Norway", "Poland",
      "Portugal", "Spain", "Sweden", "Switzerland", "Turkey",
      "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States (USA)",
    ],
    modeOfCounseling: ["Online", "Phone", "In Person"],
    fieldsOfInterest: [
      "Accounting & Finance", "Architecture", "Artificial Intelligence",
      "Arts & Design", "Aviation", "Business Administration",
      "Computer Science", "Cyber Security", "Data Science",
      "Dentistry", "Economics", "Education", "Engineering",
      "Environmental Science", "Fashion Design", "Graphic Design",
      "Hospitality & Tourism", "Human Resource Management",
      "Information Technology (IT)", "Law", "Marketing",
      "Mass Communication", "Mechanical Engineering", "Medicine",
      "Nursing", "Pharmacy", "Psychology", "Public Health",
      "Software Engineering", "Veterinary Science",
    ],
    preferredStudy: [
      "Advanced Diploma", "Associates Degree", "Bachelors Degree",
      "Certificate", "College Qualification", "Diploma",
      "Doctoral Degree", "Foundation", "Graduate Certificate",
      "Graduate Diploma", "Higher National Diploma", "Masters By Research",
    ],
  };

  const coursesList = [
    {
      title: "Business & Economics",
      description:
        "Well-known universities with business programs include Aalborg University, Aarhus University, and Copenhagen Business School.",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      title: "Engineering",
      description:
        "Aarhus University, Aalborg University, and Technical University of Lithounia (DTU) are all excellent in different engineering fields.",
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      title: "Renewable Energy & Sustainability",
      description:
        "Pioneers in sustainability teaching and research are DTU, University of Copenhagen, and Aarhus University.",
      icon: <Leaf className="w-5 h-5" />,
    },
    {
      title: "Medical & Life Sciences",
      description:
        "Prestigious medical and life science programs are available at University of Copenhagen, Aarhus University, and Southern Lithounia University.",
      icon: <Stethoscope className="w-5 h-5" />,
    },
    {
      title: "Design & Creative Industries",
      description:
        "Well-known organizations include Royal Danish Academy of Fine Arts, KEA (Copenhagen School of Design & Technology), and Kolding School of Design.",
      icon: <Palette className="w-5 h-5" />,
    },
  ];

  return (
    <div className={`${poppins.className} text-slate-800`}>
      {/* Popular Courses Section */}
      <section className="bg-slate-50/70 border-y border-slate-100 px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="w-8 h-[2px] bg-red-500" />
              <span className="text-red-600 text-xs uppercase tracking-widest font-bold">
                Academic Fields
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a233d] tracking-tight">
              Popular Courses <span className="text-[#0b5cff]">In Lithounia</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {coursesList.map((course, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#0b5cff] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                  index === coursesList.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-11 h-11 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-4">
                    {course.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1a233d] mb-2">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Study Work Opportunities Section */}
      <section className="bg-slate-50/70 border-y border-slate-100 px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-red-500" />
              <span className="text-red-600 text-xs uppercase tracking-widest font-bold">
                Career Pathways
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a233d] tracking-tight">
              Post-Study <span className="text-[#0b5cff]">Work Opportunities</span>
            </h2>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0 w-12 h-12 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                After completing a Bachelor’s, Master’s, or PhD in Lithounia, non-EU/EEA students can apply for a{" "}
                <strong className="text-[#1a233d] font-semibold">3-year job search permit</strong> through the Danish Agency for International Recruitment and Integration (SIRI).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0b5cff] shrink-0" />
                  <span>3-Year Extension Available</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <Building2 className="w-4 h-4 text-[#0b5cff] shrink-0" />
                  <span>Path to Permanent Residency</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 italic bg-blue-50/50 p-3 rounded-xl border border-blue-100/50">
                <strong className="text-[#0b5cff] font-semibold not-italic">High Demand Sectors:</strong> Technology, Engineering, and Life Sciences offer the highest job availability for international graduates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Meeting Banner & Modal */}
      <section className="relative overflow-hidden bg-[#020617] py-16 sm:py-20">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#0b5cff]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto px-4 gap-4 sm:gap-6 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <CalendarCheck className="w-4 h-4" />
            <span>Get Guidance Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Book A Meeting <span className="text-[#0b5cff]">With An Expert</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl">
            Danish universities are research-focused and highly ranked, but application deadlines are strict. Connect with our expert advisors to secure your seat.
          </p>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="mt-4 group inline-flex items-center gap-3 bg-[#0b5cff] hover:bg-red-600 text-white font-bold text-sm sm:text-base py-4 px-8 rounded-full shadow-lg hover:shadow-red-500/20 transition-all duration-300 cursor-pointer"
          >
            <span>APPLY NOW</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>

      {/* POPUP MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-5 sm:py-8">
          <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-5 sm:p-7 md:p-8">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <h2 className="pr-10 text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-6 sm:mb-8 text-[#1a233d]">
              Get a call-back within 24 hours
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5 sm:space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-[#f2f4f7] text-gray-800 placeholder-gray-400 px-4 py-3 sm:py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#0b5cff]/30 text-sm sm:text-base border border-transparent transition"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-[#f2f4f7] text-gray-800 placeholder-gray-400 px-4 py-3 sm:py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#0b5cff]/30 text-sm sm:text-base border border-transparent transition"
                />
                <input
                  type="tel"
                  placeholder="Mobile"
                  required
                  className="w-full bg-[#f2f4f7] text-gray-800 placeholder-gray-400 px-4 py-3 sm:py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#0b5cff]/30 text-sm sm:text-base border border-transparent transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <SelectBox placeholder="Field of Interest" options={dropdownOptions.fieldsOfInterest} />
                <SelectBox placeholder="Preferred Study Level" options={dropdownOptions.preferredStudy} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <SelectBox placeholder="Preferred Country" options={dropdownOptions.countries} />
                <SelectBox placeholder="Preferred Mode of Counseling" options={dropdownOptions.modeOfCounseling} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <input
                  type="date"
                  required
                  className="w-full bg-[#f2f4f7] text-gray-800 px-4 py-3 sm:py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#0b5cff]/30 text-sm sm:text-base border border-transparent transition"
                />
                <SelectBox placeholder="Select your slot" options={dropdownOptions.slots} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <SelectBox placeholder="Select City" options={dropdownOptions.cities} />
                <SelectBox placeholder="Nearest Office*" options={dropdownOptions.offices} />
              </div>

              <div className="pt-3 sm:pt-4 flex justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#0b5cff] hover:bg-[#1a233d] text-white font-black text-xs sm:text-sm tracking-wider uppercase px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-md transition-all cursor-pointer"
                >
                  GET FREE CONSULTATION
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
         <section className="bg-slate-50/70 border-y border-slate-100 px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20">
            {/* Container aligned with all other sections (max-w-7xl) */}
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              
              {/* Header Section */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <span className="w-8 h-[2px] bg-red-500" />
                  <span className="text-red-600 text-xs uppercase tracking-widest font-bold">
                    Frequently Asked Questions
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a233d] tracking-tight">
                  Can’t talk? Don’t worry, <span className="text-[#0b5cff]">we have got all answers right here.</span>
                </h2>
              </div>
      
              {/* Accordion FAQ Grid */}
              <div className="space-y-4 max-w-5xl">
                {faqData.map((item, index) => {
                  const isOpen = open === index;
                  return (
                    <div
                      key={index}
                      className={`border rounded-2xl bg-white shadow-2xs overflow-hidden transition-all duration-200 ${
                        isOpen ? "border-[#0b5cff] shadow-md" : "border-slate-200/80 hover:border-slate-300"
                      }`}
                    >
                      {/* Accordion Toggle Button */}
                      <button
                        onClick={() => setOpen(isOpen ? null : index)}
                        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          {/* Red Accent Icon Container */}
                          <div className="shrink-0 w-8 h-8 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center justify-center">
                            <HelpCircle className="w-4 h-4" />
                          </div>
                          <span className="text-base sm:text-lg font-bold text-[#1a233d] leading-snug">
                            {item.question}
                          </span>
                        </div>
      
                        {/* Toggle Arrow */}
                        <div
                          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                            isOpen ? "bg-[#0b5cff] text-white rotate-180" : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>
      
                      {/* Accordion Content */}
                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
      
            </div>
          </section>
    </div>

  );
}