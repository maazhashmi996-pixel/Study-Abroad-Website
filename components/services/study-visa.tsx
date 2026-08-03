"use client";

import Image from "next/image";

export default function StudyVisa() {
  const study = [
    {
      image: "/images/services/study-Abroad.png",
      title: "Study Abroad",
      button: "Read More",
    },
    {
      image: "/images/services/ACCOMMODATION-scaled.png",
      title: "ACCOMMODATION",
      button: "Read More",
    },
    {
      image: "/images/services/lang-scaled.jpg",
      title: "LANGUAGES",
      button: "Read More",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10 font-sans">
      {/* Heading: Mobile par text chhota aur padding kam ki hai */}
      <h1 className="text-center py-6 sm:py-10 font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#3b2768]">
        OUR STUDY VISA SERVICES
      </h1>

      {/* Grid Container: Mobile par 1 column, Tablet par 2, Desktop par 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pb-10">
        {study.map((item, index) => (
          <div
            key={index}
            className="border border-transparent hover:border-yellow-500 rounded-xl p-6 sm:p-8 flex flex-col justify-center items-center gap-4 bg-white shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Round Icon Wrapper */}
            <div className="relative w-20 h-20 rounded-full border-4 border-amber-400 overflow-hidden flex items-center justify-center shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>

            <h4 className="font-bold text-base sm:text-lg text-center text-gray-800 uppercase tracking-wide">
              {item.title}
            </h4>

            <button className="bg-[#3b2768] hover:bg-amber-500 text-white font-semibold rounded-md px-5 py-2.5 text-xs sm:text-sm transition-colors cursor-pointer active:scale-95">
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}