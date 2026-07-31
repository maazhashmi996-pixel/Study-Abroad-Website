"use client";

import Image from "next/image";
// Swiper React Components & Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

const expoCards = [
  {
    id: 1,
    title: "Study Abroad EXPO",
    subtitle: "EXPO 2026",
    bgColor: "bg-[#f1b317]",
    textColor: "text-[#3b1d5c]",
    imageSrc: "/images/events/1pic.jpg",
  },
  {
    id: 2,
    title: "Scholarships & Funding",
    subtitle: "Financial Aid Guidance",
    bgColor: "bg-[#f1b317]",
    textColor: "text-[#3b1d5c]",
    imageSrc: "/images/events/2pic.jpg",
  },
  {
    id: 3,
    title: "Visas Simplified",
    subtitle: "Hassle-free Support",
    bgColor: "bg-[#3b1d5c]",
    textColor: "text-[#f1b317]",
    imageSrc: "/images/events/3pic.jpg",
  },
  {
    id: 4,
    title: "Talk To Alumni",
    subtitle: "Direct Guidance",
    bgColor: "bg-[#f1b317]",
    textColor: "text-[#3b1d5c]",
    imageSrc: "/images/events/4pic.jpg",
  },
  {
    id: 5,
    title: "Career Outcomes",
    subtitle: "Job & Placement Help",
    bgColor: "bg-[#3b1d5c]",
    textColor: "text-[#f1b317]",
    imageSrc: "/images/events/5pic.jpg",
  },
  {
    id: 6,
    title: "Top Universities",
    subtitle: "Global Campus Admissions",
    bgColor: "bg-[#f1b317]",
    textColor: "text-[#3b1d5c]",
    imageSrc: "/images/events/6pic.jpg",
  },
];

export default function EventHero() {
  return (
    <section className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-6 sm:mb-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#3b1d5c] tracking-tight leading-tight">
          The Largest Study Abroad Expo 2026
        </h1>
      </div>

      {/* Swiper Slider Container */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 5, spaceBetween: 20 },
          }}
          className="pb-12 sm:pb-14 !px-1"
        >
          {expoCards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="h-[360px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 flex flex-col justify-between relative bg-gradient-to-b from-[#3b1d5c] via-[#3b1d5c] to-[#f1b317] group hover:scale-[1.02] transition-transform duration-300 p-3">
                
                {/* Header Badge/Text inside Card */}
                <div className="z-10 p-2">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-[#f1b317] text-[#3b1d5c] rounded-full inline-block mb-1">
                    {card.subtitle}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug line-clamp-1">
                    {card.title}
                  </h3>
                </div>

                {/* Image Container */}
                <div className="flex-1 relative w-full rounded-xl overflow-hidden mt-2">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Register Banner Bottom Section */}
      <div className="bg-[#3b1d5c] py-5 sm:py-6 px-4 rounded-2xl max-w-7xl mx-auto flex items-center justify-center shadow-md">
        <button className="bg-[#f1b317] hover:bg-[#d99f12] text-[#3b1d5c] font-black text-xs sm:text-sm md:text-base px-8 sm:px-12 py-3 sm:py-3.5 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95">
          Register Now
        </button>
      </div>

      {/* Custom Styling for Swiper Pagination Dots */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #3b1d5c !important;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          background: #f1b317 !important;
          opacity: 1;
          width: 24px !important;
          border-radius: 6px !important;
        }
      `}</style>
    </section>
  );
}