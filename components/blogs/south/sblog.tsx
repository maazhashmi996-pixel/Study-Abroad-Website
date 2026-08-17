"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import type { Swiper as SwiperClass } from "swiper";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Blog {
  id: number;
  title: string;
  desc: string;
  image: string;
  tags: string[];
  link: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "How to Apply for Austria Study Visa in 2026 from Pakistan",
    desc: "Austria is one of the most affordable options for students seeking a globally recognized European degree.",
    image: "/images/blog/austria-visa.webp",
    tags: ["Austria", "Visa", "Europe"],
    link: "/Blogs/austria",
  },
  {
    id: 2,
    title: "How to Apply for Europe Study Visa in 2026 from Pakistan",
    desc: "Comprehensive guide covering visa policies, financial requirements, and admission steps across Europe.",
    image: "/images/blog/MBA.png",
    tags: ["Europe", "Visa"],
    link: "/Blogs/europe",
  },
  {
    id: 3,
    title: "How to Apply for Netherlands Study Visa in 2026 from Pakistan",
    desc: "Explore top universities, English-taught programs, and post-study work visa opportunities in the Netherlands.",
    image: "/images/blog/neatherlands.webp",
    tags: ["Netherlands", "Visa", "Europe"],
    link: "/Blogs/netherland",
  },
  {
    id: 4,
    title: "Study in Canada Guide for International Students",
    desc: "Learn about admission criteria, SDS visa processing, and fully funded scholarships for Canadian universities.",
    image: "/images/blog/canada.webp",
    tags: ["Canada", "Scholarships"],
    link: "/Blogs/canada",
  },
  {
    id: 5,
    title: "Top Scholarships to Study in China",
    desc: "Discover CSC and provincial scholarships offering full tuition coverage and monthly stipends in China.",
    image: "/images/blog/china.webp",
    tags: ["China", "Scholarships"],
    link: "/Blogs/china",
  },
  {
    id: 6,
    title: "Student Visa Interview Tips for Beginners in Turkey",
    desc: "Key questions, document checklists, and interview preparation strategies for Turkish study visas.",
    image: "/images/blog/turkey.webp",
    tags: ["Turkey", "Visa"],
    link: "/Blogs/turkey",
  },
  {
    id: 7,
    title: "Study Opportunities in United Kingdom for 2026",
    desc: "Navigate UK University applications, CAS letters, intake deadlines, and the Graduate Route visa.",
    image: "/images/blog/10-Tips.png",
    tags: ["United Kingdom", "Visa"],
    link: "/Blogs/uninted-kingdom",
  },
  {
    id: 8,
    title: "Understanding Denmark Higher Education Requirements",
    desc: "Detailed overview of tuition fees, residence permits, and application portals for Danish universities.",
    image: "/images/blog/bunking-myths.png",
    tags: ["Denmark", "Europe"],
    link: "/Blogs/bunking-myths",
  },
  {
    id: 9,
    title: "United States University Admission Checklist",
    desc: "A complete step-by-step checklist covering standardized tests, SOPs, LORs, and financial proof for the US.",
    image: "/images/blog/Exchange-programs.png",
    tags: ["United States", "Admission"],
    link: "/Blogs/usuni",
  },
  {
    id: 10,
    title: "Sweden University Admission & Scholarship Guide",
    desc: "Find out how to apply through University Admissions Sweden and secure Swedish Institute scholarships.",
    image: "/images/blog/sweden.webp",
    tags: ["Sweden", "Scholarships"],
    link: "/Blogs/sweden",
  },
  {
    id: 11,
    title: "France University Admission & Scholarship Guide",
    desc: "Step-by-step guidance on Campus France procedures, Eiffel scholarships, and public university applications.",
    image: "/images/blog/france-study.webp",
    tags: ["France", "Scholarships"],
    link: "/Blogs/france",
  },
  {
    id: 12,
    title: "Ireland University Admission & Scholarship Guide",
    desc: "Explore top-ranked Irish universities, third-level graduate schemes, and scholarship funding options.",
    image: "/images/blog/Ireland-study.png",
    tags: ["Ireland", "Scholarships"],
    link: "/Blogs/ireland",
  },
  {
    id: 13,
    title: "Malaysia University Admission & Scholarship Guide",
    desc: "Affordable global branch campuses, low cost of living, and simple visa processing for Malaysia.",
    image: "/images/blog/maly.webp",
    tags: ["Malaysia", "Scholarships"],
    link: "/Blogs/malaysia",
  },
  {
    id: 14,
    title: "South Korea University Admission & Scholarship Guide",
    desc: "Everything you need to know about GKS scholarships, language requirements, and top Korean universities.",
    image: "/images/blog/south-korea.webp",
    tags: ["South Korea", "Scholarships"],
    link: "/Blogs/south-korea",
  },
];

export default function SBlogSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative group bg-slate-50/50">
      {/* Title Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
          Study Abroad Blogs - <span className="text-blue-600">Guidance, Tips &amp; More</span>
        </h2>
        <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
          Stay updated with the latest visa guides, scholarship opportunities, and step-by-step admission insights.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onBeforeInit={(swiper: SwiperClass) => {
            if (typeof swiper.params.navigation !== "boolean" && swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14 px-1"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id} className="h-auto flex">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-slate-200 w-full h-full">
                {/* Card Top / Image Container */}
                <div className="relative w-full h-52 bg-slate-100 overflow-hidden rounded-t-2xl">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80";
                    }}
                  />

                  {/* SVG Decorative Pattern (Black & Electric Blue) */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-75">
                    <svg
                      viewBox="0 0 300 200"
                      className="w-full h-full"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,0 L 120,0 C 90,80 0,90 0,160 Z"
                        fill="#0f172a"
                      />
                      <path
                        d="M 300,200 L 180,200 C 210,120 300,110 300,40 Z"
                        fill="#2563eb"
                      />
                    </svg>
                  </div>

                  {/* Tag Badge Overlay (Minor Red) */}
                  {blog.tags.length > 0 && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md z-10">
                      {blog.tags[0]}
                    </div>
                  )}
                </div>

                {/* Content & Typography */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Geometric Accents (Black, Electric Blue, Minor Red) */}
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="w-3 h-3 rounded-full bg-black inline-block"></span>
                      <span className="w-6 h-2 bg-blue-600 rounded-full inline-block transform -rotate-45"></span>
                      <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-red-600 inline-block transform rotate-45"></span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                      {blog.desc}
                    </p>
                  </div>

                  {/* Read More Link (Electric Blue button with Red accent on hover) */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href={blog.link}
                      className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-red-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200 shadow-sm hover:shadow"
                    >
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons (Slate & Electric Blue) */}
        <button
          ref={prevRef}
          aria-label="Previous Slide"
          className="custom-prev-blog absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-20 bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          ref={nextRef}
          aria-label="Next Slide"
          className="custom-next-blog absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-20 bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}