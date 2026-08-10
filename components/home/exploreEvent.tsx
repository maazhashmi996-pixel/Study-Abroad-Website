"use client";

import React, { useState } from "react";


 const openWhatsApp = (
    phoneNumber: string = "923452066100",
    message: string = "Hello! I need some information."
  ) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };


import Image from "next/image";
import {
  Search,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  Building2,
  Users,
} from "lucide-react";

// Sample Pakistan Events Data
const eventsData = [
  {
    id: 1,
    title: "Lahore Major Study Abroad Expo 2026",
    city: "Lahore",
    venue: "Pearl Continental Hotel, Lahore",
    date: "Saturday, 22 August 2026",
    time: "11:00 AM - 06:00 PM",
    category: "Expo",
    image: "/images/events/lahore.webp",
    featured: true,
  },
  {
    id: 2,
    title: "Islamabad UK & Canada Education Fair",
    city: "Islamabad",
    venue: "Serena Hotel, Islamabad",
    date: "Sunday, 23 August 2026",
    time: "12:00 PM - 07:00 PM",
    category: "Education Fair",
    image: "/images/events/rawalpindi.webp",
    featured: true,
  },
  {
    id: 3,
    title: "Karachi Global University Admission Day",
    city: "Karachi",
    venue: "Mövenpick Hotel, Karachi",
    date: "Wednesday, 26 August 2026",
    time: "01:00 PM - 07:00 PM",
    category: "Admission Day",
    image: "/images/events/hyderabad.webp",
    featured: false,
  },
  {
    id: 4,
    title: "Faisalabad Scholarship & Visa Seminar",
    city: "Faisalabad",
    venue: "Serena Hotel, Faisalabad",
    date: "Friday, 28 August 2026",
    time: "02:00 PM - 07:00 PM",
    category: "Seminar",
    image: "/images/events/faisalabad.webp",
    featured: false,
  },
  {
    id: 5,
    title: "Peshawar Study in Europe & UK Expo",
    city: "Peshawar",
    venue: "Pearl Continental Hotel, Peshawar",
    date: "Sunday, 30 August 2026",
    time: "11:00 AM - 05:00 PM",
    category: "Expo",
    image: "/images/events/peshawar.png",
    featured: true,
  },
  {
    id: 6,
    title: "Multan Student Counseling Session",
    city: "Multan",
    venue: "Ramada Hotel, Multan",
    date: "Tuesday, 01 September 2026",
    time: "12:00 PM - 06:00 PM",
    category: "Counseling",
    image: "/images/events/multan.webp",
    featured: false,
  },
];

const cities = [
  "All Cities",
  "Lahore",
  "Islamabad",
  "Karachi",
  "Faisalabad",
  "Peshawar",
  "Multan",
];

const categories = [
  "All Categories",
  "Expo",
  "Education Fair",
  "Admission Day",
  "Seminar",
  "Counseling",
];

export default function ExploreEvents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Filtering Logic
  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity =
      selectedCity === "All Cities" || event.city === selectedCity;
    const matchesCategory =
      selectedCategory === "All Categories" || event.category === selectedCategory;

    return matchesSearch && matchesCity && matchesCategory;
  });

  return (
    <div className="relative min-h-screen bg-[#1a233d] font-sans text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#0b5cff]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#0b5cff]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HERO / HEADER SECTION */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-200 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#0b5cff]" />
            D.Education Zone Events in Pakistan
          </div>
          <h1 className="text-3xl font-black text-white sm:text-5xl lg:text-6xl">
            Explore <span className="text-[#0b5cff]">Education Expos</span> Across Pakistan
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            Attend free educational seminars, expos, and university desk physical meetings in major cities of Pakistan. Register now to reserve your spot!
          </p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search event title or venue..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 py-3 pl-10 pr-4 text-xs font-medium text-white placeholder-slate-400 transition focus:border-[#0b5cff] focus:outline-none focus:ring-1 focus:ring-[#0b5cff]"
              />
            </div>

            {/* City Filter */}
            <div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 py-3 px-4 text-xs font-medium text-white transition focus:border-[#0b5cff] focus:outline-none focus:ring-1 focus:ring-[#0b5cff]"
              >
                {cities.map((city) => (
                  <option key={city} value={city} className="bg-[#1a233d] text-white">
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 py-3 px-4 text-xs font-medium text-white transition focus:border-[#0b5cff] focus:outline-none focus:ring-1 focus:ring-[#0b5cff]"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#1a233d] text-white">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* RESULTS COUNT */}
        <div className="mb-6 flex items-center justify-between px-2">
          <p className="text-xs font-semibold text-slate-300 sm:text-sm">
            Showing <span className="text-[#0b5cff] font-bold">{filteredEvents.length}</span> events in Pakistan
          </p>
          {(selectedCity !== "All Cities" ||
            selectedCategory !== "All Categories" ||
            searchTerm) && (
            <button
              onClick={() => {
                setSelectedCity("All Cities");
                setSelectedCategory("All Categories");
                setSearchTerm("");
              }}
              className="text-xs text-[#0b5cff] underline hover:text-white transition"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* EVENTS CARDS GRID */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0b5cff]/50 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-[#0b5cff]/10"
              >
                <div>
                  {/* Event Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-[#1a233d]/80 px-3 py-1 text-[10px] font-semibold text-slate-200 backdrop-blur-md">
                      📍 {event.city}
                    </span>
                    <span className="absolute right-3 top-3 rounded-full bg-[#0b5cff]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      {event.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="mb-4 text-base font-bold text-white transition-colors group-hover:text-[#0b5cff]">
                      {event.title}
                    </h3>

                    <div className="space-y-2.5 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 shrink-0 text-[#0b5cff]" />
                        <span>{event.date}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 shrink-0 text-[#0b5cff]" />
                        <span>{event.time}</span>
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-[#0b5cff] mt-0.5" />
                        <span className="line-clamp-2">{event.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Registration Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() =>
                      openWhatsApp(
                        "923452066100",
                        `Hi D.Education Zone, I want to register for: ${event.title} in ${event.city}.`
                      )
                    }
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b5cff] py-2.5 text-xs font-bold text-white shadow-md shadow-[#0b5cff]/20 transition-all duration-300 hover:bg-white hover:text-[#1a233d]"
                  >
                    <span>Register Free via WhatsApp</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-white/10 bg-white/5 py-16 text-center backdrop-blur-sm">
            <Building2 className="mx-auto h-12 w-12 text-slate-500 mb-3" />
            <h3 className="text-lg font-bold text-white">No Events Found</h3>
            <p className="mt-1 text-xs text-slate-400">
              No upcoming events match your selected search or city filter.
            </p>
          </div>
        )}

        {/* CALL TO ACTION */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-[#0b5cff]/20 via-white/5 to-[#0b5cff]/20 p-8 sm:p-10 text-center backdrop-blur-md">
          <Users className="mx-auto h-10 w-10 text-[#0b5cff] mb-4" />
          <h2 className="text-2xl font-black text-white sm:text-3xl">
            Want to Organize a Custom Expo Session?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs text-slate-300 sm:text-sm">
            Contact our event coordinator team to organize physical study-abroad seminars in your institution or city.
          </p>
          <button
            onClick={() =>
              openWhatsApp(
                "923452066100",
                "Hi D.Education Zone, I want to inquire about organizing an education event."
              )
            }
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-extrabold text-[#1a233d] shadow-lg transition-all hover:bg-[#0b5cff] hover:text-white"
          >
            <span>Contact Event Team</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}