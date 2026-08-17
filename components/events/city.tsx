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
  link:string;
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
    link:"/Event/abbottabad",
  },
  {
    city: "Bahawalpur",
    image: "/images/events/bahawalpur.webp",
    date: "Thursday, 06 August 2026",
    time: "12:00 PM TO 07:00 PM",
    location: "Location: D. Education Zone Office - Bahawalpur",
        link:"/Event/bahawalpur",

  },
  {
    city: "Faisalabad",
    image: "/images/events/faisalaabad.webp",
    date: "Tuesday, 11 August 2026",
    time: "12:00 PM TO 07:00 PM",
    location: "Location: Serena Hotel - Faisalabad",
        link:"/Event/faisalabad",

  },
  {
    city: "Gujranwala",
    image: "/images/events/gujranwala.webp",
    date: "Saturday, 15 August 2026",
    time: "12:00 PM TO 07:00 PM",
    location: "Location: D. Education Zone Office - Gujranwala",
        link:"/Events/gujranwala",

  },
  {
    city: "Gujrat",
    image: "/images/events/gujrat.webp",
    date: "Wednesday, 12 August 2026",
    time: "12:00 PM TO 07:00 PM",
    location: "Location: D. Education Zone Office - Gujrat",
        link:"/Events/gujrat",

  },
  {
    city: "Hyderabad",
    image: "/images/events/hyderabad.webp",
    date: "Friday, 07 August 2026",
    time: "12:00 PM TO 07:00 PM",
    location: "Location: Indus Hotel - Hyderabad",
    link:"@/app/Events/hyderabad",

  },
];

const faqs: FAQItem[] = [
  {
    question: "What is the D. Education Zone Study Abroad Education Expo?",
    answer:
      "It is a premier educational event bringing together university representatives, study abroad counselors, and prospective international students under one roof.",
  },
  {
    question: "In which cities of Pakistan are the D. Education Zone Study Abroad Expos held?",
    answer:
      "The expos are hosted across major cities in Pakistan including Abbottabad, Bahawalpur, Faisalabad, Gujranwala, Gujrat, and Hyderabad.",
  },
  {
    question: "What kind of advice can I get at the D. Education Zone Study Abroad Expo?",
    answer:
      "You can get direct guidance regarding university options, program selection, visa processing, document evaluation, and global career pathways.",
  },
  {
    question: "Are there any benefits to registering early for the D. Education Zone Expo?",
    answer:
      "Yes, early registrants get priority entry, one-on-one sessions with senior counselors, and exclusive access to scholarship guides.",
  },
  {
    question: "Can I learn about scholarships at the D. Education Zone Study Abroad Expo?",
    answer:
      "Absolutely. Delegates and counselors will provide details on merit-based, fully funded, and partial scholarships available for international students.",
  },
  {
    question: "What should I bring to the D. Education Zone Study Abroad Expo?",
    answer:
      "Bring updated copies of your academic transcripts, CV, test scores (IELTS/PTE if available), and a valid ID.",
  },
  {
    question: "How can I make the most out of the D. Education Zone Study Abroad Expo?",
    answer:
      "Prepare your questions in advance, carry physical copies of your academic credentials, and consult directly with official representatives.",
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
    <div className="w-full font-sans bg-black">
      {/* 1. City Events Header & Grid (BLACK BACKGROUND) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center text-white">
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0b5cff] bg-slate-900 px-4 py-1.5 rounded-full inline-block mb-3 border border-slate-800">
          City Schedule <span className="text-red-500">•</span>
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">
          Find Study Abroad Events in Your City
        </h2>

        {/* City Filter Dropdown */}
        <div className="inline-block mb-10">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0b5cff] cursor-pointer shadow-md"
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
              className="bg-slate-900 border border-slate-800 p-5 flex flex-col items-center transition-all rounded-2xl shadow-xl hover:border-[#0b5cff]/50 group"
            >
              {/* Image Container */}
              <div className="relative w-full h-52 mb-4 rounded-xl overflow-hidden border border-slate-800">
                <Image
                  src={item.image}
                  alt={`${item.city} Expo`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Details */}
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#0b5cff] transition-colors">
                {item.city} Study Abroad Expo 2026
              </h3>
              <p className="text-[11px] text-slate-300 font-semibold mb-1">
                {item.time} &nbsp;|&nbsp; Date: {item.date}
              </p>
              <p className="text-[11px] text-slate-400 mb-4 line-clamp-1">
                {item.location}
              </p>

              {/* Action Button */}
              <Link 
              href={item.link}
              className="bg-[#0b5cff] hover:bg-blue-600 text-white font-bold text-xs px-5 py-2 rounded-xl transition-all mt-auto shadow border border-blue-400/20 active:scale-95">
                <span> More Details</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination & View All */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="text-[#0b5cff] font-bold cursor-pointer">1</span>
            <span className="hover:text-white cursor-pointer">2</span>
            <span className="hover:text-white cursor-pointer">3</span>
            <span className="hover:text-white cursor-pointer">4</span>
            <span className="hover:text-white cursor-pointer ml-1">Next</span>
          </div>

          <Link
            href="/view-all-events"
            className="bg-[#0b5cff] hover:bg-blue-600 text-white font-bold text-xs px-8 py-3 rounded-xl transition-all shadow-md uppercase tracking-wider border border-blue-400/20"
          >
            View All Events
          </Link>
        </div>
      </section>

      {/* 2. Education Consultant Banner (BLACK BACKGROUND) */}
      <section className="px-4 py-8 max-w-7xl mx-auto bg-black">
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute left-0 top-0 w-1.5 h-full bg-red-500" />
          <h3 className="text-lg sm:text-xl font-bold text-white text-center sm:text-left">
            Looking for a First-Class Education Consultant?
          </h3>
          <button className="bg-[#0b5cff] hover:bg-blue-600 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shrink-0 shadow uppercase tracking-wider border border-blue-400/20 active:scale-95">
            Contact Us
          </button>
        </div>
      </section>

      {/* 3. FAQ Section (WHITE BACKGROUND) */}
      <section className="bg-white text-slate-900 py-16 px-4 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff] bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-3 border border-blue-100 text-center mx-auto block w-fit">
            FAQs <span className="text-red-500">•</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-center mb-8 text-slate-900">
            Have Questions? We Have Got All the Answers Right Here.
          </h3>

          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-sm transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-100/80 transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900 pr-2">
                      {item.question}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-90 text-[#0b5cff]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-600 border-t border-slate-200 bg-white leading-relaxed">
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