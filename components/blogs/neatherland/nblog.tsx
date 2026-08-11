"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Swiper Styles
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
    desc: "Austria is one of the most affordable options for students who want a respected European degree with excellent post-study opportunities.",
    image: "/images/blog/austria-visa.webp",
    tags: ["Austria", "Visa", "Europe"],
    link: "/blogs/austria-study-visa",
  },
  {
    id: 2,
    title: "How to Apply for Europe Study Visa in 2026 from Pakistan",
    desc: "A comprehensive guide to navigating European study visas, admission requirements, and scholarship paths for international students.",
    image: "/images/blog/MBA.png",
    tags: ["Hungary", "Visa", "Europe"],
    link: "/blogs/europe-study-visa",
  },
  {
    id: 3,
    title: "How to Apply for Netherlands Study Visa in 2026 from Pakistan",
    desc: "Explore top English-taught programs, post-study work options, and step-by-step visa guidelines for the Netherlands.",
    image: "/images/blog/neatherlands.webp",
    tags: ["Netherlands", "Visa", "Europe"],
    link: "/blogs/netherlands-study-visa",
  },
  {
    id: 4,
    title: "Study in Canada Guide for International Students",
    desc: "Everything you need to know about SDS visa streams, university admissions, and popular scholarships in Canada.",
    image: "/images/blog/canada.webp",
    tags: ["Canada", "Scholarships"],
    link: "/blogs/study-in-canada",
  },
  {
    id: 5,
    title: "Top Scholarships to Study in China",
    desc: "Discover fully funded CSC and provincial government scholarship opportunities available for international applicants.",
    image: "/images/blog/china.webp",
    tags: ["China", "Scholarships"],
    link: "/blogs/china-scholarships",
  },
  {
    id: 6,
    title: "Student Visa Interview Tips for Beginners in Turkey",
    desc: "Master your Turkish embassy interview with essential preparation tips, sample questions, and document checklists.",
    image: "/images/blog/turkey.webp",
    tags: ["Turkey", "Visa"],
    link: "/blogs/turkey-visa-tips",
  },
  {
    id: 7,
    title: "Study Opportunities in United Kingdom for 2026",
    desc: "Learn about intake deadlines, CAS issuance, English language waiver options, and Graduate Route policies in the UK.",
    image: "/images/blog/10-Tips.png",
    tags: ["United Kingdom", "Visa"],
    link: "/blogs/uk-study-opportunities",
  },
  {
    id: 8,
    title: "Understanding Denmark Higher Education Requirements",
    desc: "Find detailed information on Danish higher education institutions, tuition fee structure, and residence permits.",
    image: "/images/blog/bunking-myths.png",
    tags: ["Denmark", "Europe"],
    link: "/blogs/denmark-education-requirements",
  },
  {
    id: 9,
    title: "United States University Admission Checklist",
    desc: "A practical checklist for standardized tests, SOP writing, financial documentation, and F-1 visa preparation.",
    image: "/images/blog/Exchange-programs.png",
    tags: ["United States", "Scholarships"],
    link: "/blogs/us-admission-checklist",
  },
  {
    id: 10,
    title: "Sweden University Admission & Scholarship Guide",
    desc: "Complete step-by-step guidance on applying through Swedish central portals and obtaining Swedish Institute scholarships.",
    image: "/images/blog/sweden.webp",
    tags: ["Sweden", "Scholarships"],
    link: "/blogs/sweden-study-guide",
  },
  {
    id: 11,
    title: "France University Admission & Scholarship Guide",
    desc: "Understand Campus France procedures, public university fees, and top funding programs like the Eiffel Scholarship.",
    image: "/images/blog/france-study.webp",
    tags: ["France", "Scholarships"],
    link: "/blogs/france-study-guide",
  },
  {
    id: 12,
    title: "Ireland University Admission & Scholarship Guide",
    desc: "Discover world-class research universities, stay-back options, and entry criteria for international students in Ireland.",
    image: "/images/blog/Ireland-study.png",
    tags: ["Ireland", "Scholarships"],
    link: "/blogs/ireland-study-guide",
  },
  {
    id: 13,
    title: "Malaysia University Admission & Scholarship Guide",
    desc: "Explore affordable top-ranked branch campuses, lower cost of living, and streamlined student visa processing.",
    image: "/images/blog/maly.webp",
    tags: ["Malaysia", "Scholarships"],
    link: "/blogs/malaysia-study-guide",
  },
  {
    id: 14,
    title: "South Korea University Admission & Scholarship Guide",
    desc: "Learn about GKS (Global Korea Scholarship) opportunities, TOPIK requirements, and top universities in South Korea.",
    image: "/images/blog/south-korea.webp",
    tags: ["South Korea", "Scholarships"],
    link: "/blogs/south-korea-study-guide",
  },
];

export default function NBlogSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative group">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#462066] tracking-tight">
          Study Abroad Blogs - Guidance, Tips &amp; More
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Explore expert insights, step-by-step visa processes, and university admission guidelines to kickstart your global education journey.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".custom-prev-blog",
            nextEl: ".custom-next-blog",
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
            <SwiperSlide key={blog.id} className="h-auto">
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Carousel Navigation Buttons */}
        <button
          aria-label="Previous Slide"
          className="custom-prev-blog absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-20 bg-[#462066] text-white p-3 rounded-full shadow-lg hover:bg-[#E29D12] transition-colors duration-300 focus:outline-none"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          aria-label="Next Slide"
          className="custom-next-blog absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-20 bg-[#462066] text-white p-3 rounded-full shadow-lg hover:bg-[#E29D12] transition-colors duration-300 focus:outline-none"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}

// Sub-component for individual Blog Cards to cleanly handle state (image fallbacks)
function BlogCard({ blog }: { blog: Blog }) {
  const [imgSrc, setImgSrc] = useState(blog.image);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-gray-100 h-full">
      {/* Image Container */}
      <div className="relative w-full h-52 bg-gray-100 overflow-hidden rounded-t-2xl">
        <Image
          src={imgSrc}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          onError={() => {
            setImgSrc("https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80");
          }}
        />

        {/* SVG Overlay Pattern */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-85 z-10">
          <svg
            viewBox="0 0 300 200"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path d="M 0,0 L 120,0 C 90,80 0,90 0,160 Z" fill="#462066" />
            <path d="M 300,200 L 180,200 C 210,120 300,110 300,40 Z" fill="#462066" />
          </svg>
        </div>

        {/* Primary Tag Badge */}
        {blog.tags.length > 0 && (
          <div className="absolute top-4 left-4 bg-[#E29D12] text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md z-20">
            {blog.tags[0]}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Geometric Decorative Accent */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-[#462066] inline-block"></span>
            <span className="w-6 h-2 bg-[#E29D12] rounded-full inline-block transform -rotate-45"></span>
            <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-[#E29D12] inline-block transform rotate-45"></span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 leading-snug hover:text-[#462066] transition-colors line-clamp-2">
            {blog.title}
          </h3>

          <p className="text-xs text-gray-600 mt-2.5 leading-relaxed line-clamp-3">
            {blog.desc}
          </p>
        </div>

        {/* Read More Action Button */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <Link
            href={blog.link}
            className="w-full flex items-center justify-center space-x-2 bg-[#E29D12] hover:bg-[#c8880e] text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200 shadow-sm"
          >
            <span>Read More</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}