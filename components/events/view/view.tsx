"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Calendar, Clock, MapPin, ArrowRight, Sparkles } from "lucide-react";

// Perfectly Matched Event Data
const eventsData = [
  {
    id: 1,
    title: "Abbottabad Study Abroad Expo 2026",
    image: "/images/events/expo-abbottabad.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Monday, 10 August 2026",
    location: "Hotel One - Abbottabad",
    category: "Khyber Pakhtunkhwa",
  },
  {
    id: 2,
    title: "Bahawalpur Study Abroad Expo 2026",
    image: "/images/events/bahawalpur.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Thursday, 06 August 2026",
    location: "Times Office - Bahawalpur",
    category: "Punjab",
  },
  {
    id: 3,
    title: "Faisalabad Study Abroad Expo 2026",
    image: "/images/events/faisalabad.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Tuesday, 11 August 2026",
    location: "Serena Hotel - Faisalabad",
    category: "Punjab",
  },
  {
    id: 4,
    title: "Gujranwala Study Abroad Expo 2026",
    image: "/images/events/gujranwala.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Saturday, 15 August 2026",
    location: "Times Office Near GIFT University - Gujranwala",
    category: "Punjab",
  },
  {
    id: 5,
    title: "Gujrat Study Abroad Expo 2026",
    image: "/images/events/gujrat.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Wednesday, 12 August 2026",
    location: "Times Office - Gujrat",
    category: "Punjab",
  },
  {
    id: 6,
    title: "Hyderabad Study Abroad Expo 2026",
    image: "/images/events/hyderabad.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Friday, 07 August 2026",
    location: "Indus Hotel - Hyderabad",
    category: "Sindh",
  },
  {
    id: 7,
    title: "Mirpur Study Abroad Expo 2026",
    image: "/images/events/mirpur.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Sunday, 09 August 2026",
    location: "Times Office - Mirpur",
    category: "Azad Kashmir",
  },
  {
    id: 8,
    title: "Multan Study Abroad Expo 2026",
    image: "/images/events/multan.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Wednesday, 05 August 2026",
    location: "Ramada Hotel - Multan",
    category: "Punjab",
  },
  {
    id: 9,
    title: "Peshawar Study Abroad Expo 2026",
    image: "/images/events/peshawar.png",
    time: "12:00 PM TO 07:00 PM",
    date: "Sunday, 09 August 2026",
    location: "Pearl Continental - Peshawar",
    category: "Khyber Pakhtunkhwa",
  },
  {
    id: 10,
    title: "Rawalpindi Study Abroad Expo 2026",
    image: "/images/events/rawalpindi.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Saturday, 08 August 2026",
    location: "Times Office - Rawalpindi",
    category: "Islamabad and Rawalpindi",
  },
  {
    id: 11,
    title: "Sahiwal Study Abroad Expo 2026",
    image: "/images/events/sahiwal.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Thursday, 13 August 2026",
    location: "Times Office - Sahiwal",
    category: "Punjab",
  },
  {
    id: 12,
    title: "Sargodha Study Abroad Expo 2026",
    image: "/images/events/sargodha.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Friday, 14 August 2026",
    location: "Times Office - Sargodha",
    category: "Punjab",
  },
  {
    id: 13,
    title: "Sheikhupura Study Abroad Expo 2026",
    image: "/images/events/sheikhupura.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Sunday, 16 August 2026",
    location: "Times Office - Sheikhupura",
    category: "Punjab",
  },
  {
    id: 14,
    title: "Sialkot Study Abroad Expo 2026",
    image: "/images/events/sialkot.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Monday, 17 August 2026",
    location: "Times Office - Sialkot",
    category: "Punjab",
  },
  {
    id: 15,
    title: "Lahore Study Abroad Expo 2026",
    image: "/images/events/lahore.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Monday, 17 August 2026",
    location: "Times Office - Lahore",
    category: "Punjab",
  },
  {
    id: 16,
    title: "Mardan Study Abroad Expo 2026",
    image: "/images/events/mardan.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Monday, 17 August 2026",
    location: "Times Office - Mardan",
    category: "Khyber Pakhtunkhwa",
  },
  {
    id: 17,
    title: "Kharian Study Abroad Expo 2026",
    image: "/images/events/kharian.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Monday, 17 August 2026",
    location: "Times Office - Kharian",
    category: "Punjab",
  },
  {
    id: 18,
    title: "Mirpur Study Abroad Expo 2026",
    image: "/images/events/mirpur.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Monday, 17 August 2026",
    location: "Times Office - Mirpur",
    category: "Azad Kashmir",
  },
  {
    id: 19,
    title: "Multan Study Abroad Expo 2026",
    image: "/images/events/multan.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Monday, 17 August 2026",
    location: "Times Office - Multan",
    category: "Punjab",
  },
  {
    id: 20,
    title: "Rawalpindi Study Abroad Expo 2026",
    image: "/images/events/rawalpindi.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Monday, 17 August 2026",
    location: "Times Office - Rawalpindi",
    category: "Islamabad and Rawalpindi",
  },
];

const categories = [
  "All expo's",
  "Islamabad and Rawalpindi",
  "Sindh",
  "Azad Kashmir",
  "Khyber Pakhtunkhwa",
  "Punjab",
];

export default function View() {
  const [selectedCategory, setSelectedCategory] = useState("All expo's");

  const filteredEvents =
    selectedCategory === "All expo's"
      ? eventsData
      : eventsData.filter((event) => event.category === selectedCategory);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1a233d] py-16 sm:py-20 lg:py-24 font-sans text-white">
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#0b5cff]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#0b5cff]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER SECTION */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-200 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#0b5cff]" />
            D.Education Zone Events
          </div>
          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Upcoming Study Abroad <span className="text-[#0b5cff]">Expos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            Meet international university representatives directly in your region. Select your location below to filter upcoming events.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* SIDEBAR FILTERS */}
          <aside className="w-full shrink-0 lg:w-64">
            <div className="sticky top-24 space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <p className="mb-3 px-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                Filter by Region
              </p>
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-[#0b5cff] text-white shadow-lg shadow-[#0b5cff]/30 ring-1 ring-white/20"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* EVENT CARDS GRID */}
          <main className="flex-1 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0b5cff]/50 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-[#0b5cff]/10"
              >
                {/* Image Container */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-[#1a233d]/80 px-3 py-1 text-[10px] font-semibold text-slate-200 backdrop-blur-md">
                    {event.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-4 text-base font-bold text-white transition-colors group-hover:text-[#0b5cff]">
                    {event.title}
                  </h3>

                  <div className="mt-auto space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 shrink-0 text-[#0b5cff]" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 shrink-0 text-[#0b5cff]" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-[#0b5cff] mt-0.5" />
                      <span className="line-clamp-2">{event.location}</span>
                    </div>
                  </div>

                  <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b5cff] py-2.5 text-xs font-bold text-white shadow-md shadow-[#0b5cff]/20 transition-all duration-300 hover:bg-[#1a233d] hover:ring-1 hover:ring-[#0b5cff]">
                    <span>More Details</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </section>
  );
}