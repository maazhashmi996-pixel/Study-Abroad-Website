"use client";

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    desc: "Austria is one of the most affordable options for students who want a respected European degree...",
    image: "/images/blog/austria-visa.webp",
    tags: ["Austria", "Visa", "Europe"],
    link: "/austria",
  },
  {
    id: 2,
    title: "How to Apply for Europe Study Visa in 2026 from Pakistan",
    desc: "Comprehensive roadmap for Pakistani students aiming to pursue higher studies across Europe...",
    image: "/images/blog/MBA.png",
    tags: ["Hungary", "Visa", "Europe"],
    link: "/europe",
  },
  {
    id: 3,
    title: "How to Apply for Netherlands Study Visa in 2026 from Pakistan",
    desc: "Key steps, requirements, and visa procedures for international students moving to the Netherlands...",
    image: "/images/blog/neatherlands.webp",
    tags: ["Netherlands", "Visa", "Europe"],
    link: "/netherlands",
  },
  {
    id: 4,
    title: "Study in Canada Guide for International Students",
    desc: "A complete step-by-step guide covering university applications, SDS visas, and living costs in Canada...",
    image: "/images/blog/canada.webp",
    tags: ["Canada", "Scholarships"],
    link: "/canada",
  },
  {
    id: 5,
    title: "Top Scholarships to Study in China",
    desc: "Explore Chinese Government Scholarships (CSC) and university grants available for international students...",
    image: "/images/blog/china.webp",
    tags: ["China", "Scholarships"],
    link: "/china",
  },
  {
    id: 6,
    title: "Student Visa Interview Tips for Beginners in Turkey",
    desc: "Essential interview preparation tips, common questions, and document checklists for Turkish student visas...",
    image: "/images/blog/turkey.webp",
    tags: ["Turkey", "Visa"],
    link: "/turkey",
  },
  {
    id: 7,
    title: "Study Opportunities in United Kingdom for 2026",
    desc: "Discover admission timelines, CAS requirements, and post-study work visa updates for the UK...",
    image: "/images/blog/10-Tips.png",
    tags: ["United Kingdom", "Visa"],
    link: "/uk",
  },
  {
    id: 8,
    title: "Understanding Denmark Higher Education Requirements",
    desc: "Learn about admission criteria, tuition fee structures, and residence permit steps for Denmark...",
    image: "/images/blog/bunking-myths.png",
    tags: ["Denmark", "Europe"],
    link: "/denmark",
  },
  {
    id: 9,
    title: "United States University Admission Checklist",
    desc: "Essential checklist for US university applications, F-1 student visas, and standardized testing...",
    image: "/images/blog/Exchange-programs.png",
    tags: ["United States", "Scholarships"],
    link: "/usuni",
  },
  {
    id: 10,
    title: "Sweden University Admission & Scholarship Guide",
    desc: "Step-by-step application walkthrough for Swedish universities and Swedish Institute scholarships...",
    image: "/images/blog/sweden.webp",
    tags: ["Sweden", "Scholarships"],
    link: "/sweden",
  },
  {
    id: 11,
    title: "France University Admission & Scholarship Guide",
    desc: "Guide to Campus France procedures, tuition fees, and Eiffel Excellence Scholarship applications...",
    image: "/images/blog/france-study.webp",
    tags: ["France", "Scholarships"],
    link: "/france",
  },
  {
    id: 12,
    title: "Ireland University Admission & Scholarship Guide",
    desc: "Everything you need to know about Irish higher education institutions and entry requirements...",
    image: "/images/blog/Ireland-study.png",
    tags: ["Ireland", "Scholarships"],
    link: "/ireland",
  },
  {
    id: 13,
    title: "Malaysia University Admission & Scholarship Guide",
    desc: "Affordable global degree pathways and university registration steps in Malaysia...",
    image: "/images/blog/maly.webp",
    tags: ["Malaysia", "Scholarships"],
    link: "/malaysia",
  },
  {
    id: 14,
    title: "South Korea University Admission & Scholarship Guide",
    desc: "Comprehensive guide on GKS scholarships and university entry standards in South Korea...",
    image: "/images/blog/south-korea.webp",
    tags: ["South Korea", "Scholarships"],
    link: "/south-korea",
  },
];

export default function DeBlogSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 relative group bg-slate-50 rounded-3xl">
      {/* Title Header */}
      <div className="text-center mb-10">
        <span className="text-xs font-extrabold tracking-widest text-red-600 uppercase bg-red-50 px-3 py-1 rounded-full border border-red-200">
          D. Education Zone
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mt-2">
          Study Abroad Blogs &amp; Guidance
        </h1>
        <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
          Explore expert tips, country guides, and visa procedures curated by our global education consultants.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-14"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id} className="h-auto">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-slate-200 h-full">
              
              {/* Card Top / Image Container */}
              <div className="relative w-full h-52 bg-slate-900 overflow-hidden rounded-t-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />

                {/* Electric Blue & Red Curve Overlay */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <svg
                    viewBox="0 0 300 200"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0,0 L 120,0 C 90,80 0,90 0,160 Z"
                      fill="#0055FF"
                    />
                    <path
                      d="M 300,200 L 180,200 C 210,120 300,110 300,40 Z"
                      fill="#DC2626"
                    />
                  </svg>
                </div>

                {/* Tag Badge Overlay */}
                {blog.tags.length > 0 && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded shadow">
                    {blog.tags[0]}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="relative px-6 pt-5 flex-1 flex flex-col bg-white">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-600 inline-block"></span>
                  <span className="w-7 h-2.5 bg-red-600 rounded-full inline-block transform -rotate-45"></span>
                  <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-black inline-block transform rotate-45"></span>
                </div>

                <h2 className="text-lg font-bold text-black leading-snug mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {blog.desc}
                </p>
              </div>

              {/* Read More Button */}
              <div className="p-6 pt-4 mt-auto bg-white">
                <Link
                  href={blog.link}
                  className="w-full block text-center bg-blue-600 hover:bg-black text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button 
        aria-label="Previous Slide" 
        className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-black text-white p-3 rounded-full shadow-xl hover:bg-red-600 transition-colors duration-300 border border-slate-700"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        aria-label="Next Slide" 
        className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-black text-white p-3 rounded-full shadow-xl hover:bg-red-600 transition-colors duration-300 border border-slate-700"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}