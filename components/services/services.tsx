"use client";

import {
  FaPassport,
  FaUniversity,
  FaHome,
  FaFileAlt,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaPassport />,
    title: "Visa Assistance",
    description:
      "Professional guidance throughout the student visa application process.",
  },
  {
    id: 2,
    icon: <FaUniversity />,
    title: "University Selection",
    description:
      "Find the perfect university according to your profile and goals.",
  },
  {
    id: 3,
    icon: <FaFileAlt />,
    title: "Application Support",
    description:
      "Complete document preparation and admission application assistance.",
  },
  {
    id: 4,
    icon: <FaHome />,
    title: "Accommodation",
    description:
      "Find safe and affordable accommodation before your arrival.",
  },
];

export default function Services() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#f8f7fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-orange-500 font-semibold uppercase text-xs sm:text-sm tracking-widest">
            Our Services
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#43246f] mt-2 sm:mt-4 tracking-tight">
            Everything You Need
          </h2>

          <p className="mt-3 sm:mt-6 text-sm sm:text-base text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            We provide complete support from choosing your destination to
            getting your visa approved.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left border border-slate-100"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#43246f] text-white flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-6 shrink-0 shadow-md">
                {item.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-[#43246f]">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 sm:mt-4 text-xs sm:text-sm lg:text-base leading-relaxed sm:leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}