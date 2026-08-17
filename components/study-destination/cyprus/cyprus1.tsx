"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import {  FaGlobeEurope, FaGraduationCap, FaShieldAlt, FaWallet } from "react-icons/fa";

export default function Cyprus1() {
  const tableOfContents = [
    { title: "Admission requirements in Cyprus", id: "admission-requirements" },
    { title: "Cost of studying in Cyprus", id: "cost-of-studying" },
    { title: "Scholarships for students in Cyprus", id: "scholarships" },
    { title: "Visa requirements in Cyprus", id: "visa-requirements" },
    { title: "Popular courses to Study in Cyprus", id: "popular-courses" },
    { title: "Post-Study work opportunities", id: "post-study-work" },
    { title: "Cost of living in Cyprus", id: "cost-of-living" },
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

  const study = [
    {
      title: "The EU’s Most Accessible Entry Point",
      description:
        "Cyprus joined the European Union in 2004, meaning degrees from recognized Cypriot universities carry EU recognition. This matters for several reasons: your bachelor’s from University of Nicosia qualifies you for master’s programs across EU universities, your qualifications are automatically recognized in all EU member states, and technically you’re studying “in Europe” even if Cyprus feels more Middle Eastern than European in culture. The universities aren’t renowned by global standards. University of Nicosia ranks around 800-1000 globally depending on the ranking system.",
    },
    {
      title: "English is Actually the Working Language",
      description:
        "Unlike most EU countries where “English-taught programs” means classes happen in English but daily life requires local language skills, Cyprus genuinely operates bilingually. The island was under British control until 1960, and that colonial history embedded English deeply into Cypriot society. For Pakistani students whose English comes from O/A-Levels or university studies, this eliminates the language barrier that makes countries like Netherlands or Belgium challenging despite their English-taught programs. You can actually function in daily life without learning Greek. That said, learning basic Greek helps, particularly for finding part-time work or integrating socially beyond the international student bubble. But unlike Germany or France, it’s optional rather than mandatory for survival.",
    },
    {
      title: "Mediterranean Climate and Lifestyle",
      description:
        "Cyprus weather is hot. Summers (June-September) regularly exceed 35-40°C. Winters are mild, rarely dropping below 10°C. The island lifestyle is relaxed by European standards. Things move slower like buses might be late, shops close for afternoon breaks, bureaucracy takes time. This frustrates students expecting German efficiency, but it’s less jarring than the formality and punctuality of northern Europe.",
    },
    {
      title: "Strategic Location Between Three Continents",
      description:
        "Cyprus sits where Europe, Asia, and Middle East meet. The island is 65km from Turkey, 100km from Syria, 380km from Egypt. This geographic positioning creates some interesting dynamics. Culturally, Cyprus feels more Middle Eastern than European. The food, social customs, and daily rhythms resemble Turkey or Lebanon more than Greece despite the Greek language. For Pakistani students, this cultural similarity makes adjustment easier than moving to Sweden or Germany.",
    },
    {
      title: "The International Student Reality",
      description:
        "Cypriot universities enroll heavily from Middle East, Africa, and Asia because EU students generally choose universities in larger EU countries. At University of Nicosia or Cyprus International University, 60-80% of students are international, creating diverse but sometimes disconnected campus communities. This diversity means you’ll meet students from Nigeria, Jordan, India, Kazakhstan, and dozens of other countries. Social integration with local Cypriots is limited. The international student community largely operates separately from local Cypriot society. This matters depending on what you want from studying abroad. If you want a diverse international network while obtaining an EU degree affordably, Cyprus delivers.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[550px]">
          <Image
            src="/images/study-dest/cyprus.jpg"
            alt="Study in Cyprus"
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
              <li>15+ Universities</li>
              <li>€4,000 – €9,000 Annual Tuition Fee</li>
              <li>Limited Post-Study Work Options</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#1a233d] font-bold border-b-2 border-slate-200 pb-2">
            Cyprus
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-800 font-medium">
            Cyprus doesn’t appear in most conversations about studying abroad. When Pakistani families visit Times Consultant, they ask about UK, Canada, Australia, maybe Germany or Netherlands. Cyprus comes up rarely, usually when someone mentions a friend’s cousin who studied there or when families are specifically looking for the most affordable option within the European Union.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-800 font-medium">
            Here’s what we’ve learned over two decades: Cyprus occupies a unique niche. It’s genuinely the EU’s budget option for international education. You get an EU degree at prices lower than many Pakistani private universities charge.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-800 font-medium">
            The trade-offs are real. Cypriot universities don’t rank in global top 100 lists. The island’s job market is small, total population is barely 1.2 million. Academic prestige isn’t comparable to Netherlands or Belgium. But for families where budget is the primary constraint and European residence is the goal, Cyprus delivers EU access at prices that actually work.
          </p>
        </div>
      </section>

      {/* Table of Contents Section */}
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

      {/* Why Study In Cyprus Section */}
         <section className="bg-slate-50/80 text-slate-900 py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#0b5cff] px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse" />
            Destination Guide
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Study in <span className="text-[#0b5cff]">Cyprus?</span>
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