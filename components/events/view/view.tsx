"use client";

import Image from 'next/image';
import React, { useState } from 'react';

// Sample event data with corrected categories and titles
const eventsData = [
  {
    id: 1,
    title: "Abbottabad Study Abroad Expo 2026",
    image: "/images/events/expo-abbottabad.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Monday, 10 August 2026",
    location: "Location: Hotel One Abbottabad",
    category: "Khyber Pakhtunkhwa"
  },
  {
    id: 2,
    title: "Bahawalpur Study Abroad Expo 2026",
    image: "/images/events/bahawalpur.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Thursday, 06 August 2026",
    location: "Location: Times Office - Bahawalpur",
    category: "Punjab"
  },
  {
    id: 3,
    title: "Faisalabad Study Abroad Expo 2026",
    image: "/images/events/faisalaabad.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Tuesday, 11 August 2026",
    location: "Location: Serena Hotel - Faisalabad",
    category: "Punjab"
  },
  {
    id: 4,
    title: "Gujranwala Study Abroad Expo 2026",
    image: "/images/events/gujranwala.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Saturday, 15 August 2026",
    location: "Location: Times Office Near GIFT University - Gujranwala",
    category: "Punjab"
  },
  {
    id: 5,
    title: "Gujrat Study Abroad Expo 2026",
    image: "/images/events/gujrat.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Wednesday, 12 August 2026",
    location: "Location: Times Office - Gujrat",
    category: "Punjab"
  },
  {
    id: 6,
    title: "Hyderabad Study Abroad Expo 2026",
    image: "/images/events/hyderabad.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Friday, 07 August 2026",
    location: "Location: Indus Hotel - Hyderabad",
    category: "Sindh"
  },
  {
    id: 7,
    title: "Mirpur Study Abroad Expo 2026",
    image: "/images/events/mirpur.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Sunday, 09 August 2026",
    location: "Location: Times Office - Mirpur",
    category: "Azad Kashmir"
  },
  {
    id: 8,
    title: "Multan Study Abroad Expo 2026",
    image: "/images/events/multan.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Wednesday, 05 August 2026",
    location: "Location: Ramada Hotel - Multan",
    category: "Punjab"
  },
  {
    id: 9,
    title: "Peshawar Study Abroad Expo 2026",
    image: "/images/events/peshawar.png",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Sunday, 09 August 2026",
    location: "Location: Pearl Continental - Peshawar",
    category: "Khyber Pakhtunkhwa"
  },
  {
    id: 10,
    title: "Rawalpindi Study Abroad Expo 2026",
    image: "/images/events/rawalpindi.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Saturday, 08 August 2026",
    location: "Location: Times Office - Rawalpindi",
    category: "Islamabad and Rawalpindi"
  },
  {
    id: 11,
    title: "Sahiwal Study Abroad Expo 2026",
    image: "/images/events/sahiwal.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Thursday, 13 August 2026",
    location: "Location: Times Office - Sahiwal",
    category: "Punjab"
  },
  {
    id: 12,
    title: "Sargodha Study Abroad Expo 2026",
    image: "/images/events/sargodha.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Friday, 14 August 2026",
    location: "Location: Times Office - Sargodha",
    category: "Punjab"
  },
  {
    id: 13,
    title: "Sheikhupura Study Abroad Expo 2026",
    image: "/images/events/shiekhupura.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Sunday, 16 August 2026",
    location: "Location: Times Office - Sheikhupura",
    category: "Punjab"
  },
  {
    id: 14,
    title: "Sialkot Study Abroad Expo 2026",
    image: "/images/events/sialkot.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Monday, 17 August 2026",
    location: "Location: Times Office - Sialkot",
    category: "Punjab"
  },
  {
    id: 15,
    title: "Lahore Study Abroad Expo 2026",
    image: "/images/events/lahore.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Monday, 17 August 2026",
    location: "Location: Times Office - lahore",
    category: "Punjab"
  },
  {
    id: 16,
    title: "Mardan Study Abroad Expo 2026",
    image: "/images/events/mardan.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Monday, 17 August 2026",
    location: "Location: Times Office - mardan",
    category: "Punjab"
  },
  {
    id: 17,
    title: "Kharian Study Abroad Expo 2026",
    image: "/images/events/kharian.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Monday, 17 August 2026",
    location: "Location: Times Office - kharian",
    category: "Punjab"
  },
  {
    id: 18,
    title: "Mirpur Study Abroad Expo 2026",
    image: "/images/events/mirpur.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Monday, 17 August 2026",
    location: "Location: Times Office - mirpur",
    category: "Punjab"
  },
  {
    id: 18,
    title: "Multan Study Abroad Expo 2026",
    image: "/images/events/multan.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Monday, 17 August 2026",
    location: "Location: Times Office - multan",
    category: "Punjab"
  },
  {
    id: 18,
    title: "Rawalpindi Study Abroad Expo 2026",
    image: "/images/events/rawalpindi.webp",
    time: "12:00 PM TO 07:00 PM",
    date: "Date: Monday, 17 August 2026",
    location: "Location: Times Office - rawalpindi",
    category: "Punjab"
  },
];

const categories = [
  "All expo's",
  "Islamabad and Rawalpindi",
  "Sindh",
  "Azad Kashmir",
  "Khyber Pakhtunkhwa",
  "Punjab"
];

export default function View() {
  const [selectedCategory, setSelectedCategory] = useState("All expo's");

  const filteredEvents = selectedCategory === "All expo's"
    ? eventsData
    : eventsData.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#381d60] text-white py-12 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar Filters */}
        <aside className="w-full md:w-64 flex flex-col gap-3 shrink-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full py-3 px-4 rounded-lg text-black  font-semibold text-sm transition-all duration-400 shadow-md ${
                selectedCategory === category
                  ? "bg-[#f5a623] ring-2 ring-white"
                  : "bg-[#e89d27] hover:bg-[#43246f] hover:border-2 hover:border-white hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </aside>

        {/* Right Event Cards Grid */}
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredEvents.map((event) => (
            <div key={event.id} className="flex flex-col items-center text-center">
              
              {/* Image Container with Fallback */}
              <div className="relative w-80 h-60   mb-4 ">
              
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    
                    className="object-cover"
                  />
               
               
              </div>

              {/* Event Details */}
              <h3 className="text-lg font-bold mb-2 leading-tight max-w-xs">
                {event.title}
              </h3>
              
              <div className="text-xs text-gray-300 space-y-1 mb-4">
                <p>{event.time}</p>
                <p>{event.date}</p>
                <p>{event.location}</p>
              </div>

              {/* Action Button */}
              <button className="bg-[#e89d27] hover:bg-white text-black font-bold text-xs py-2 px-6 rounded transition-colors shadow mt-auto">
                More Details
              </button>
            </div>
          ))}
        </main>

      </div>
    </div>
  );
}