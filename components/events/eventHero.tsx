"use client";

import Image from "next/image";
// Swiper React Components & Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// 6 Cards Data Array (Leading '/' added for Next.js public folder)
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
    <section className="w-full bg-white py-12 px-4 md:px-8">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-black text-[#3b1d5c] tracking-tight">
          The Largest Study Abroad Expo 2026
        </h1>
      </div>

      {/* Swiper Slider Container */}
      <div className="max-w-7xl mx-auto mb-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="pb-14"
        >
          {expoCards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="h-[380px]  overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between relative bg-gradient-to-b from-[#3b1d5c] via-[#3b1d5c] to-[#f1b317] group hover:scale-[1.02] transition-transform duration-300">
           {/* Image Container */}
                <div
                  className="flex-1 relative mx-3 mb-3 rounded-xl overflow-hidden "
                 
                >
                  {card.imageSrc ? (
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      fill
                      className="object-cover rounded-xl"
                    />
                  ) : (
                    <div className="text-center p-4 text-white">
                      <svg
                        className="w-10 h-10 mx-auto text-white/70 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-xs font-semibold block">
                        Image {card.id} Place
                      </span>
                    </div>
                  )}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Register Banner Bottom Section */}
      <div className="bg-[#3b1d5c] py-6 px-4 rounded-xl max-w-7xl mx-auto flex items-center justify-center">
        <button className="bg-[#f1b317] hover:bg-[#d99f12] text-[#3b1d5c] font-black text-sm md:text-base  rounded-lg uppercase tracking-wider shadow-md hover:shadow-lg justify-center transition-all active:scale-95">
          Register Now
        </button>
      </div>
    </section>
  );
}