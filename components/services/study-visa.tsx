"use client";

import Image from "next/image";
import Link from "next/link";

export default function StudyVisa() {
  const study = [
    {
      image: "/images/services/istudy.jpg",
      title: "Study Abroad",
      button: "Read More",
      link:"/services/study-abroad"
    },
    {
      image: "/images/services/iaccommodation.jpg",
      title: "Accommodation",
      button: "Read More",
       link:"/services/Accommodation"
    },
    {
      image: "/images/services/ilanguage.jpg",
      title: "Languages",
      button: "Read More",
       link:"/services/languages"
    },
  ];

  return (
    <section className=" text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center py-6 sm:py-8">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0b5cff] bg-slate-900 px-4 py-1.5 rounded-full inline-block mb-3 border border-slate-800">
            Our Offerings <span className="text-red-500">•</span>
          </span>
          <h2 className="font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight uppercase">
            Our Study Visa Services
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pb-6">
          {study.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900  hover:bg-slate-100 border border-slate-800  rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-center gap-5 shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Round Icon Wrapper */}
              <div className="relative w-20 h-20 rounded-full border-2 border-[#0b5cff] p-1 overflow-hidden flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              </div>

              <h3 className="font-bold text-base sm:text-lg text-center text-white uppercase tracking-wider group-hover:text-[#0b5cff] transition-colors">
                {item.title}
              </h3>

              <Link
              href={item.link}
              className="bg-[#0b5cff] hover:bg-white hover:border-slate-950   hover:text-slate-950 text-white font-bold rounded-xl px-6 py-2.5 text-xs sm:text-sm transition-all duration-500 cursor-pointer border border-blue-400/20 shadow-md active:scale-95 uppercase tracking-wider mt-auto">
                Read More
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}