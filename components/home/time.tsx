"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const events = [
  {
    id: 1,
    city: "BAHAWALPUR",
    title: "Islamabad Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Thursday, 13 August 2026",
    location: "Movenpick Hotel - Islamabad",
    image: "/images/events/bahawalpur.webp",
  },
  {
    id: 2,
    city: "ABBOTTABAD",
    title: "Jhelum Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Wednesday, 05 August 2026",
    location: "Times Office - Jhelum",
    image: "/images/home/abbottabad.webp",
  },
  {
    id: 3,
    city: "HYDERABAD",
    title: "Karachi Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Saturday, 08 August 2026 || Sunday, 09 August 2026",
    location: "PC Hotel - Karachi",
    image: "/images/home/hyderabad.webp",
  },
  {
    id: 4,
    city: "PESHAWAR",
    title: "Peshawar Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Sunday, 16 August 2026",
    location: "Pearl Continental - Lahore",
    image: "/images/home/peshawar.png",
  },
  {
    id: 5,
    city: "GUJRAT",
    title: "Gujrat Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Tuesday, 18 August 2026",
    location: "Ramada Hotel - Multan",
    image: "/images/events/gujrat.webp",
  },
  {
    id: 6,
    city: "FAISALABAD",
    title: "Faisalabad Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Friday, 21 August 2026",
    location: "Serena Hotel - Faisalabad",
    image: "/images/events/faisalaabad.webp",
  },
];

export default function Time() {
  return (
    <section className="bg-[#3b1d5c] py-12 sm:py-16 px-4 sm:px-8 md:px-12 w-full text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-8 sm:mb-12 space-y-3">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Time Consultant Events
          </h2>
          <div>
            <button className="bg-[#f1b317] hover:bg-[#e0a30f] text-[#3b1d5c] font-extrabold text-xs px-6 py-2.5 rounded-full shadow-md transition-transform active:scale-95 cursor-pointer">
              View all events
            </button>
          </div>
        </div>

        {/* SWIPER CAROUSEL CONTAINER */}
        <div className="relative px-4 sm:px-8 md:px-10">
          
          {/* PREVIOUS BUTTON */}
          <button 
            aria-label="Previous event"
            className="event-prev absolute -left-1 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f1b317] text-[#3b1d5c] flex items-center justify-center shadow-lg hover:bg-[#e0a30f] transition-all cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 stroke-[3]" />
          </button>

          {/* NEXT BUTTON */}
          <button 
            aria-label="Next event"
            className="event-next absolute -right-1 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f1b317] text-[#3b1d5c] flex items-center justify-center shadow-lg hover:bg-[#e0a30f] transition-all cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5 stroke-[3]" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".event-prev",
              nextEl: ".event-next",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              540: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="w-full py-2"
          >
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="flex flex-col items-center h-full px-2 py-4">

                  {/* RESPONSIVE IMAGE CONTAINER */}
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square mb-4 shrink-0 overflow-hidden rounded-xl bg-purple-900/30">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </div>

                  {/* EVENT CONTENT */}
                  <div className="flex flex-col items-start w-full text-left">
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-2 leading-snug">
                      {event.title}
                    </h3>

                    <p className="text-gray-200 text-xs sm:text-sm font-medium mb-1 leading-relaxed">
                      <span className="font-bold text-[#f1b317]">{event.time}</span>
                      <span className="mx-2 text-gray-400">|</span>
                      <span>Date: {event.date}</span>
                    </p>

                    <p className="text-gray-300 text-xs sm:text-sm font-medium mt-0.5">
                      Location: {event.location}
                    </p>

                    <button className="mt-5 px-5 py-2.5 bg-[#f1b317] hover:bg-white text-[#3b1d5c] text-xs font-extrabold rounded shadow-md transition-colors duration-200 cursor-pointer active:scale-95">
                      More Details
                    </button>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </section>
  );
}