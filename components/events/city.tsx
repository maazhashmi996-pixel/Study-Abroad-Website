"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface EventItem {
  city: string;
  image: string;
  date: string;
  time: string;
  location: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const eventData: EventItem[] = [
  {
    city: "Abbottabad",
    image: "/images/events/expo-abbottabad.webp",
    date: "Monday, 10 August 2026",
    time: "12:00 PM TO 07:00 PM",
    location: "Location: Hotel One Abbottabad",
  },
  {
    city: "Bahawalpur",
    image: "/images/events/bahawalpur.webp",
    date: "Thursday, 06 August 2026",
    time: "12:00 PM TO 07:00 PM",
    location: "Location: Times Office - Bahawalpur",
  },
  {
    city: "Faisalabad",
    image: "/images/events/faisalaabad.webp",
    date: "Tuesday, 11 August 2026",
    time: "12:00 PM TO 07:00 PM",
    location: "Location: Serena Hotel - Faisalabad",
  },
  {
    city: "Gujranwala",
    image: "/images/events/gujranwala.webp",
    date: "Saturday, 15 August 2026",
    time: "12:00 PM TO 07:00 PM",
    location: "Location: Times Office Near Gift University - Gujranwala",
  },
  {
    city: "Gujrat",
    image: "/images/events/gujrat.webp",
    date: "Wednesday, 12 August 2026",
    time: "12:00 PM TO 07:00 PM",
    location: "Location: Times Office - Gujrat",
  },
  {
    city: "Hyderabad",
    image: "/images/events/hyderabad.webp",
    date: "Friday, 07 August 2026",
    time: "12:00 PM TO 07:00 PM",
    location: "Location: Indus Hotel - Hyderabad",
  },
];

const faqs: FAQItem[] = [
  {
    question: "What is the D.Education Zone Study Abroad Education Expo?",
    answer:
      "It is an educational event bringing together university representatives, counselors, and prospective international students under one roof.",
  },
  {
    question: "In which cities of Pakistan are the D.Education Zone Study Abroad Expos held?",
    answer:
      "The expos are hosted across major cities in Pakistan including Abbottabad, Bahawalpur, Faisalabad, Gujranwala, Gujrat, and Hyderabad.",
  },
  {
    question: "What kind of advice can I get at the D.Education Zone Study Abroad Expo?",
    answer:
      "You can get guidance regarding university choices, course selection, visa processing, document verification, and career pathways.",
  },
  {
    question: "Are there any benefits to registering early for the D.Education Zone Expo?",
    answer:
      "Yes, early registrants get priority entry, one-on-one sessions with senior counselors, and exclusive access to scholarship guides.",
  },
  {
    question: "Can I learn about scholarships at the D.Education Zone Study Abroad Expo?",
    answer:
      "Absolutely. Representatives will provide details on merit-based, fully funded, and partial scholarships available for non-EU and international students.",
  },
  {
    question: "What should I bring to the D.Education Zone Study Abroad Expo?",
    answer:
      "Bring updated copies of your academic transcripts, CV, IELTS/TOEFL scores (if available), and valid ID.",
  },
  {
    question: "How can I make the most out of the D.Education Zone Study Abroad Expo?",
    answer:
      "Prepare your questions in advance, carry physical copies of your academic credentials, and visit all university booths that align with your field of study.",
  },
];

export default function City() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredEvents = selectedCity
    ? eventData.filter((event) => event.city === selectedCity)
    : eventData;

  return (
    <div className="w-full font-sans bg-[#2a1747] text-white">
      {/* 1. City Events Header & Grid */}
      <section className="py-10 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          Find Study Abroad Events in Your City
        </h2>

        {/* City Filter Dropdown */}
        <div className="inline-block mb-10">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="bg-[#38205c] border border-purple-700 text-slate-200 text-xs rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
          >
            <option value="">Select City...</option>
            {eventData.map((e) => (
              <option key={e.city} value={e.city}>
                {e.city}
              </option>
            ))}
          </select>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {filteredEvents.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#331c56] p-5 flex flex-col items-center transition-all rounded-lg shadow"
            >
              {/* Image Container */}
              <div className="relative w-60 h-60 mb-4">
                <Image
                  src={item.image}
                  alt={`${item.city} Expo`}
                  fill
                  className="object-cover rounded"
                />
              </div>

              {/* Card Details */}
              <h3 className="text-sm font-bold text-white mb-1">
                {item.city} Study Abroad Expo 2026
              </h3>
              <p className="text-[10px] text-slate-300 font-semibold mb-1">
                {item.time} &nbsp;|&nbsp; Date: {item.date}
              </p>
              <p className="text-[10px] text-slate-400 mb-4 line-clamp-1">
                {item.location}
              </p>

              {/* Action Button */}
              <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] px-4 py-1.5 rounded transition-colors mt-auto shadow">
                More Details
              </button>
            </div>
          ))}
        </div>

        {/* Pagination & View All */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="text-amber-500 font-bold cursor-pointer">1</span>
            <span className="hover:text-white cursor-pointer">2</span>
            <span className="hover:text-white cursor-pointer">3</span>
            <span className="hover:text-white cursor-pointer">4</span>
            <span className="hover:text-white cursor-pointer ml-1">Next</span>
          </div>

          <Link
            href="/view"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-6 py-2.5 rounded-md transition-colors shadow"
          >
            View All Events
          </Link>
        </div>
      </section>

      {/* 2. Education Consultant Banner */}
      <section className="px-4 py-6 max-w-7xl mx-auto">
        <div className="bg-[#38205c] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md border border-purple-800/40">
          <h3 className="text-lg font-bold text-white text-center sm:text-left">
            Looking for a First-Class Education Consultant?
          </h3>
          <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-md transition-colors shrink-0 shadow">
            Contact Us
          </button>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="bg-white text-slate-900 py-12 px-4 mt-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8 text-slate-800">
            Can’t talk? Don’t worry, we have got all the answers right here.
          </h3>

          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50 shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 pr-2">
                      {item.question}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-90 text-amber-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-200 bg-white leading-relaxed">
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