"use client";

import Image from "next/image";

import {
  FaBriefcase,
  FaSearchLocation,
  FaPlaneDeparture,
  FaClipboardCheck,
  FaUniversity,
  FaPassport,
} from "react-icons/fa";

import JourneyCard from "JourneyCard";

export default function Journey() {
  const cards = [
    {
      id: 1,
      title: "Explore",
      icon: <FaBriefcase />,
    },
    {
      id: 2,
      title: "Apply",
      icon: <FaSearchLocation />,
    },
    {
      id: 3,
      title: "Compare",
      icon: <FaPlaneDeparture />,
    },
    {
      id: 4,
      title: "Track",
      icon: <FaClipboardCheck />,
    },
    {
      id: 5,
      title: "Choose",
      icon: <FaUniversity />,
    },
    {
      id: 6,
      title: "Visa",
      icon: <FaPassport />,
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-center text-5xl md:text-6xl font-bold text-[#4B2E83] mb-14">
          Simplifying the Study Abroad Journey
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left */}

          <div className="lg:col-span-2">

            <div className="grid md:grid-cols-2 gap-6">

              {cards.map((item) => (
                <JourneyCard
                  key={item.id}
                  title={item.title}
                  icon={item.icon}
                />
              ))}

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center items-center">

            <Image
              src="/images/about/simplifying.jpg"
              alt="Journey"
              width={450}
              height={620}
              className="rounded-xl object-contain"
            />

          </div>
</div>
</div>

    </section>
  );
}