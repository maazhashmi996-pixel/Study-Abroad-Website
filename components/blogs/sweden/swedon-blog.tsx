"use client";

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// Import Swiper styles
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
    desc: "Austria is one of the most affordable options for Pakistani students seeking a recognized European degree...",
    image: "/images/blog/austria-visa.webp",
    tags: ["Austria", "Visa", "Europe"],
    link: "/Blog/austria",
  },
  {
    id: 2,
    title: "How to Apply for Europe Study Visa in 2026 from Pakistan",
    desc: "Explore top study destinations across Europe with detailed visa guidance and application steps...",
    image: "/images/blog/MBA.png",
    tags: ["Europe", "Schengen", "Visa"],
    link: "/Blog/europe",
  },
  {
    id: 3,
    title: "How to Apply for Netherlands Study Visa in 2026 from Pakistan",
    desc: "Comprehensive guide to studying in the Netherlands, admission procedures, and MVV residence permit filing...",
    image: "/images/blog/neatherlands.webp",
    tags: ["Netherlands", "Visa", "Europe"],
    link: "/Blog/netherland",
  },
  {
    id: 4,
    title: "Study in Canada Guide for International Students",
    desc: "Essential insights into Canadian university admissions, study permits, SDS processing, and scholarships...",
    image: "/images/blog/canada.webp",
    tags: ["Canada", "Study Permit"],
    link: "/Blog/canada",
  },
  {
    id: 5,
    title: "Top Scholarships to Study in China for 2026",
    desc: "A complete overview of CSC, Provincial, and University scholarships available for Pakistani students...",
    image: "/images/blog/china.webp",
    tags: ["China", "Scholarships"],
    link: "/Blog/china",
  },
  {
    id: 6,
    title: "Student Visa Interview Tips for Beginners in Turkey",
    desc: "Key advice and frequently asked questions for passing your Turkish student visa interview through Anatolia...",
    image: "/images/blog/turkey.webp",
    tags: ["Turkey", "Visa"],
    link: "/Blog/turkey",
  },
  {
    id: 7,
    title: "Study Opportunities in United Kingdom for 2026",
    desc: "Everything you need to know about CAS, UK Student Visa requirements, post-study work rights, and intake deadlines...",
    image: "/images/blog/10-Tips.png",
    tags: ["UK", "Visa"],
    link: "/Blog/united-kingdom",
  },
  {
    id: 8,
    title: "Understanding Denmark Higher Education Requirements",
    desc: "Learn about Danish higher education structure, tuition fees, residence permits, and language prerequisites...",
    image: "/images/blog/bunking-myths.png",
    tags: ["Denmark", "Europe"],
    link: "/Blog/bunking-myths",
  },
  {
    id: 9,
    title: "United States University Admission Checklist",
    desc: "Step-by-step preparation for US university applications, F-1 visa interviews, I-20 documentation, and SAT/GRE tests...",
    image: "/images/blog/Exchange-programs.png",
    tags: ["USA", "Scholarships"],
    link: "/Blog/usuni",
  },
  {
    id: 10,
    title: "Sweden University Admission & Scholarship Guide",
    desc: "Detailed guide to universityadmissions.se, Swedish Institute scholarships, and study residence permits...",
    image: "/images/blog/sweden.webp",
    tags: ["Sweden", "Scholarships"],
    link: "/Blog/sweden",
  },
  {
    id: 11,
    title: "France University Admission & Scholarship Guide",
    desc: "Explore Campus France application steps, France Excellence scholarships, and student visa processes...",
    image: "/images/blog/france-study.webp",
    tags: ["France", "Scholarships"],
    link: "/Blog/france",
  },
  {
    id: 12,
    title: "Ireland University Admission & Scholarship Guide",
    desc: "Discover study options, entry requirements, and Stamp 2 student visa guidance for studying in Ireland...",
    image: "/images/blog/Ireland-study.png",
    tags: ["Ireland", "Scholarships"],
    link: "/Blog/ireland",
  },
  {
    id: 13,
    title: "Malaysia University Admission & Scholarship Guide",
    desc: "Affordable higher education in Asia: learn about EMGS approval, university fees, and living costs...",
    image: "/images/blog/maly.webp",
    tags: ["Malaysia", "Scholarships"],
    link: "/Blog/malaysia",
  },
  {
    id: 14,
    title: "South Korea University Admission & Scholarship Guide",
    desc: "Guide to GKS scholarships, D-2 student visas, top universities, and living in South Korea...",
    image: "/images/blog/south-korea.webp",
    tags: ["South Korea", "Scholarships"],
    link: "/Blog/south-korea",
  },
];

export default function SwedenBlogSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 relative group">
      {/* Title Header */}
      <div className="text-center mb-10">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          Latest Updates
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Study Abroad Blogs – Guidance, Tips &amp; Guides
        </h2>
        <p className="mt-2 text-slate-600 text-sm md:text-base max-w-xl mx-auto">
          Explore expert guides on student visas, admissions, and scholarships for Pakistani students.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
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
        className="pb-14 !px-1"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id} className="h-auto">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-slate-200 h-full group/card">
              {/* Card Top / Image Container */}
              <div className="relative w-full h-52 bg-slate-100 overflow-hidden rounded-t-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                />

                {/* Decorative Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />

                {/* Tag Badge Overlay */}
                {blog.tags.length > 0 && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {blog.tags[0]}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug line-clamp-2 mb-2 group-hover/card:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {blog.desc}
                  </p>
                </div>

                {/* Read More Link */}
                <Link
                  href={blog.link}
                  className="inline-flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200 text-sm shadow-sm"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button 
        aria-label="Previous Slide"
        className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-10 bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
      >
        <ChevronLeft size={20} />
      </button>

      <button 
        aria-label="Next Slide"
        className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 z-10 bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
      >
        <ChevronRight size={20} />
      </button>
    </section>
  );
}