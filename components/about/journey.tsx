"use client";

import Image from "next/image";
import {
  FaBriefcase,
  FaSearchLocation,
  FaBalanceScale,
  FaClipboardCheck,
  FaUniversity,
  FaPassport,
} from "react-icons/fa";

interface CardProps {
  title: string;
  icon: React.ReactNode;
}

function JourneyCard({ title, icon }: CardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 flex items-center gap-4 sm:gap-5 hover:shadow-xl hover:border-[#44246f]/30 transition-all duration-300 cursor-pointer">
      <div className="text-[#44246f] text-2xl sm:text-3xl shrink-0 p-3 bg-[#44246f]/5 rounded-lg">
        {icon}
      </div>

      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#44246f]">
        {title}
      </h3>
    </div>
  );
}

export default function Journey() {
  const cards = [
    {
      title: "Explore",
      icon: <FaBriefcase />,
    },
    {
      title: "Apply",
      icon: <FaSearchLocation />,
    },
    {
      title: "Compare",
      icon: <FaBalanceScale />,
    },
    {
      title: "Track",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Decide",
      icon: <FaUniversity />,
    },
    {
      title: "Prepare",
      icon: <FaPassport />,
    },
  ];

  return (
    <section className="bg-[#f8f8fb] py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Main Heading */}
        <h2 className="text-center text-2xl sm:text-4xl md:text-5xl font-bold text-[#44246f] mb-8 sm:mb-12 md:mb-14 leading-tight">
          Simplifying the Study Abroad Journey
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          
          {/* Cards Grid Container */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {cards.map((item, index) => (
              <JourneyCard
                key={index}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </div>

          {/* Right Image Container */}
          <div className="flex justify-center w-full">
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-sm w-full max-w-[420px] flex justify-center">
              <Image
                src="/images/about/aboutImg.png"
                alt="D.Education Zone"
                width={420}
                height={420}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}