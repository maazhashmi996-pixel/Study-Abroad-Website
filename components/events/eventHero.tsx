"use client";

import Image from "next/image";
import Link from "next/link";
// Swiper React Components & Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// D. Education Zone Expo Cards Data
const expoCards = [
  {
    id: 1,
    title: "Global Education Expo 2026",
    subtitle: "D. Education Zone Event",
    badge: "Featured Event",
    imageSrc: "/images/events/expo-event.jpg",
  },
  {
    id: 2,
    title: "Spot Admissions & Assessment",
    subtitle: "Direct University Interaction",
    badge: "Free Profile Review",
    imageSrc: "/images/events/spot-admissions.jpg",
  },
  {
    id: 3,
    title: "100% Scholarship Assistance",
    subtitle: "Financial Aid & Grants",
    badge: "Funding Support",
    imageSrc: "/images/events/scholarships.jpg",
  },
  {
    id: 4,
    title: "End-to-End Visa Guidance",
    subtitle: "Hassle-Free Processing",
    badge: "High Success Rate",
    imageSrc: "/images/events/visa-guidance.jpg",
  },
  {
    id: 5,
    title: "IELTS & PTE Coaching",
    subtitle: "Expert Test Preparation",
    badge: "Top Band Scores",
    imageSrc: "/images/events/test-prep.jpg",
  },
  {
    id: 6,
    title: "Top Destinations",
    subtitle: "UK, USA, Canada, Australia & Europe",
    badge: "Global Campuses",
    imageSrc: "/images/events/destinations.jpg",
  },
];

export default function EventHero() {
  return (
    <section className="w-full  py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Brand & Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-800 bg-[#0b5cff] px-4 py-1.5 rounded-full inline-block mb-3 shadow-md border border-red-500/30">
          D. Education Zone Presents
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight">
          The Premier Study Abroad <span className="text-red-500">EXPO 2026</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Connect directly with top international university representatives, explore scholarships, and get free expert visa counseling all under one roof.
        </p>
      </div>

      {/* Swiper Slider Container */}
      <div className="max-w-7xl mx-auto mb-10">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 1.3, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
            1280: { slidesPerView: 5, spaceBetween: 24 },
          }}
          className="pb-14 !px-1"
        >
          {expoCards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="h-[380px] rounded-2xl overflow-hidden shadow-xl border border-slate-800 flex flex-col justify-between relative bg-slate-900 group hover:-translate-y-1 transition-all duration-300 p-4 hover:border-[#0b5cff]/50">
                
                {/* Header Text & Badge */}
                <div className="z-10">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 bg-[#0b5cff] text-white rounded-md inline-block">
                      {card.badge}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug line-clamp-1 group-hover:text-[#0b5cff] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                    {card.subtitle}
                  </p>
                </div>

                {/* Image Container */}
                <div className="flex-1 relative w-full rounded-xl overflow-hidden mt-3 border border-slate-700/50">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Registration Banner Section */}
      <div className="bg-slate-900 py-6 px-6 rounded-2xl max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between shadow-2xl border border-slate-800 gap-4 text-center sm:text-left relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1.5 h-full bg-red-500" />
        <div>
          <h4 className="text-white text-lg sm:text-xl font-bold">
            Ready to Start Your Global Journey with D. Education Zone?
          </h4>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Free Entry • Free Profile Evaluation • One-on-One Counselling
          </p>
        </div>
        
        <Link
          href="#register"
          className="bg-[#0b5cff] hover:bg-blue-600 text-white font-black text-xs sm:text-sm px-8 py-3.5 rounded-xl uppercase tracking-wider shadow-lg transition-all active:scale-95 whitespace-nowrap border border-blue-400/20"
        >
          Register For Free Expo
        </Link>
      </div>

      {/* Custom Styles for Swiper Pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #64748b !important;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          background: #0b5cff !important;
          opacity: 1;
          width: 28px !important;
          border-radius: 6px !important;
        }
      `}</style>
    </section>
  );
}