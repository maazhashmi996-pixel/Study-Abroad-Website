"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <section className="bg-[#3b1d5c] py-16 px-4 md:px-12 w-full text-white font-sans font-family:  sans-serif ">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Time Consultant Events
          </h2>
          <button className="bg-[#f1b317] hover:bg-[#e0a30f] text-[#3b1d5c] font-extrabold text-xs px-6 py-2.5 rounded-full shadow-md transition-transform active:scale-95">
            View all events
          </button>
        </div>

        {/* SWIPER CAROUSEL CONTAINER */}
        <div className="relative px-6 md:px-10">
          
          {/* PREVIOUS BUTTON */}
          <button className="event-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#f1b317] text-[#3b1d5c] flex items-center justify-center shadow-lg hover:bg-[#e0a30f] transition">
            <ChevronLeft className="w-5 h-5 stroke-[3]" />
          </button>

          {/* NEXT BUTTON */}
          <button className="event-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#f1b317] text-[#3b1d5c] flex items-center justify-center shadow-lg hover:bg-[#e0a30f] transition">
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
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full py-4"
          >
            {events.map((event) => (
              <SwiperSlide key={event.id}>
              <div className="flex flex-col items-center h-full px-2">

  {/* FIXED CONTAINER WITH TAILWIND SIZES */}
  <div className="relative w-64 h-64 sm:w-80 sm:h-80 mb-4 shrink-0">
    <Image
      src={event.image}
      alt={event.title}
      fill
      className="object-contain"
    />
  </div>

  {/* EVENT CONTENT */}
  <div className="flex flex-col items-start w-full">
    <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 leading-snug">
      {event.title}
    </h3>

    <p className="text-gray-200 text-xs sm:text-sm font-medium mb-1">
      <span className="font-bold">{event.time}</span>
      <span className="mx-2">||</span>
      <span>Date: {event.date}</span>
    </p>

    <p className="text-gray-300 text-xs sm:text-sm font-medium mt-1">
      Location: {event.location}
    </p>

    <button className="mt-6 px-4 py-2 bg-[#f1b317] hover:bg-white text-[#3b1d5c] text-xs font-bold rounded-sm shadow-md transition-transform active:scale-95 cursor-pointer">
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