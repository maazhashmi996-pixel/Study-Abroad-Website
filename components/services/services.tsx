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
    <section className="py-24 bg-[#f8f7fc]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold uppercase">
            Our Services
          </span>

          <h2 className="text-5xl font-bold text-[#43246f] mt-4">
            Everything You Need
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            We provide complete support from choosing your destination to
            getting your visa approved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow hover:-translate-y-2 duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#43246f] text-white flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-[#43246f]">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}