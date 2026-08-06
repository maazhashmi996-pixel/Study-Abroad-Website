"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronDown } from 'lucide-react';

const eventData = [
  {
    city: 'Abbottabad',
    image: '/images/events/expo-abbottabad.webp',
    date: 'Monday, 10 August 2026',
    time: '12:00 PM TO 07:00 PM',
    location: 'Location: Hotel One Abbottabad',
  },
  {
    city: 'Bahawalpur',
    image: '/images/events/bahawalpur.webp',
    date: 'Thursday, 06 August 2026',
    time: '12:00 PM TO 07:00 PM',
    location: 'Location: Times Office - Bahawalpur',
  },
  {
    city: 'Faisalabad',
    image: '/images/events/faisalaabad.webp',
    date: 'Tuesday, 11 August 2026',
    time: '12:00 PM TO 07:00 PM',
    location: 'Location: Serena Hotel - Faisalabad',
  },
  {
    city: 'Gujranwala',
    image: '/images/events/gujranwala.webp',
    date: 'Saturday, 15 August 2026',
    time: '12:00 PM TO 07:00 PM',
    location: 'Location: Times Office Near Gift University - Gujranwala',
  },
  {
    city: 'Gujrat',
    image: '/images/events/gujrat.webp',
    date: 'Wednesday, 12 August 2026',
    time: '12:00 PM TO 07:00 PM',
    location: 'Location: Times Office - Gujrat',
  },
  {
    city: 'Hyderabad',
    image: '/images/events/hyderabad.webp',
    date: 'Friday, 07 August 2026',
    time: '12:00 PM TO 07:00 PM',
    location: 'Location: Indus Hotel - Hyderabad',
  },
];

const faqs = [
  "What is the D.Education Zone Study Abroad Education Expo?",
  "In which cities of Pakistan are the D.Education Zone Study Abroad Expos held?",
  "What kind of advice can I get at the D.Education Zone Study Abroad Expo?",
  "Are there any benefits to registering early for the D.Education Zone Expo?",
  "Can I learn about scholarships at the D.Education Zone Study Abroad Expo?",
  "What should I bring to the D.Education Zone Study Abroad Expo?",
  "How can I make the most out of the D.Education Zone Study Abroad Expo?",
];

export default function City() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredEvents = selectedCity
    ? eventData.filter((event) => event.city === selectedCity)
    : eventData;

  return (
    <div className="w-full font-sans bg-[#2a1747] text-white">
      {/* 1. City Events Header & Grid */}
      <section className="py-10 px-4 max-w-6xl mx-auto text-center">
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
              className="bg-[#331c56] rounded-xl p-5 flex flex-col items-center border border-purple-900/50 shadow-lg hover:border-amber-500/40 transition-all"
            >
              {/* Circular Graphic Placeholder */}
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-amber-500/30">
                <Image
                  src={item.image}
                  alt={`${item.city} Expo`}
                  fill
                  sizes="96px"
                  className="object-cover"
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
      <section className="px-4 py-6 max-w-4xl mx-auto">
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
            Can't talk? Don't worry, we have got all the answers right here.
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-3.5 text-left text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span>{faq}</span>
                  {openFaq === index ? (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0 ml-2" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-500 shrink-0 ml-2" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-white text-xs text-slate-600 border-t border-slate-100 leading-relaxed">
                    Detailed answer content for this frequently asked question goes here. You can customize this text per FAQ question.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}