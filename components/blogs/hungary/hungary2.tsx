"use client";

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// Swiper Styles Import
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
    desc: "Austria is one of the most affordable options for students seeking a respected European degree within the Schengen zone.",
    image: "/images/blog/austria-visa.webp",
    tags: ["Austria", "Visa"],
    link: "/Blog/austria",
  },
  {
    id: 2,
    title: "How to Apply for Europe Study Visa in 2026 from Pakistan",
    desc: "A complete overview of European study permit requirements, Schengen rules, financial requirements, and admission steps.",
    image: "/images/blog/MBA.png",
    tags: ["Europe", "Schengen"],
    link: "/Blog/europe",
  },
  {
    id: 3,
    title: "How to Apply for Netherlands Study Visa in 2026 from Pakistan",
    desc: "Everything Pakistani students need to know about Dutch MVV entry permits, university admission, and residence cards.",
    image: "/images/blog/neatherlands.webp",
    tags: ["Netherlands", "Visa"],
    link: "/Blog/netherland",
  },
  {
    id: 4,
    title: "Study in Canada Guide for International Students",
    desc: "Learn about Canadian study permits, GIC account creation, Provincial Attestation Letters (PAL), and post-study work permits.",
    image: "/images/blog/canada.webp",
    tags: ["Canada", "Study Permit"],
    link: "/Blog/canada",
  },
  {
    id: 5,
    title: "Top Scholarships to Study in China",
    desc: "Discover Chinese Government Scholarships (CSC), University Grants, and Belt & Road funding for Pakistani applicants.",
    image: "/images/blog/china.webp",
    tags: ["China", "Scholarships"],
    link: "/Blog/china",
  },
  {
    id: 6,
    title: "Student Visa Interview Tips for Beginners in Turkey",
    desc: "Key questions, common mistakes, and document preparation tips for passing your Turkish study visa interview smoothly.",
    image: "/images/blog/turkey.webp",
    tags: ["Turkey", "Interview Tips"],
    link: "/Blog/turkey",
  },
  {
    id: 7,
    title: "Study Opportunities in United Kingdom for 2026",
    desc: "Essential information on CAS issuance, 28-day financial evidence, Graduate Route post-study visas, and intake deadlines.",
    image: "/images/blog/10-Tips.png",
    tags: ["United Kingdom", "Visa"],
    link: "/Blog/uk",
  },
  {
    id: 8,
    title: "Understanding Hungary Higher Education Requirements",
    desc: "Higher education standards, tuition fees, residence permit applications, and post-graduation stay options in Hungary.",
    image: "/images/blog/bunking-myths.png",
    tags: ["Hungary", "Europe"],
    link: "/Blog/Hungary",
  },
  {
    id: 9,
    title: "United States University Admission Checklist",
    desc: "A complete guide to F-1 student visas, SEVIS payment, DS-160 processing, and university admission deadlines.",
    image: "/images/blog/Exchange-programs.png",
    tags: ["United States", "F-1 Visa"],
    link: "/Blog/usa",
  },
  {
    id: 10,
    title: "Sweden University Admission & Scholarship Guide",
    desc: "Detailed instructions on using universityadmissions.se, applying for Swedish Institute scholarships, and residence permits.",
    image: "/images/blog/sweden.webp",
    tags: ["Sweden", "Scholarships"],
    link: "/Blog/sweden",
  },
  {
    id: 11,
    title: "Hungary University Admission & Scholarship Guide",
    desc: "Step-by-step guidance on Campus Hungary registration, EEF procedures, and VLS-TS student visa applications.",
    image: "/images/blog/Hungary-study.webp",
    tags: ["Hungary", "Visa"],
    link: "/Blog/Hungary",
  },
  {
    id: 12,
    title: "Ireland University Admission & Scholarship Guide",
    desc: "Explore top Irish universities, Stamp 2 student visa rules, and the Third Level Graduate Scheme work pathway.",
    image: "/images/blog/Ireland-study.png",
    tags: ["Ireland", "Scholarships"],
    link: "/Blog/ireland",
  },
  {
    id: 13,
    title: "Malaysia University Admission & Scholarship Guide",
    desc: "An affordable education destination: EMGS approval letters, visa processing, and top accredited Malaysian universities.",
    image: "/images/blog/maly.webp",
    tags: ["Malaysia", "Study Abroad"],
    link: "/Blog/malaysia",
  },
  {
    id: 14,
    title: "South Korea University Admission & Scholarship Guide",
    desc: "Learn about Global Korea Scholarship (GKS) opportunities, D-2 student visas, and top Korean university programs.",
    image: "/images/blog/south-korea.webp",
    tags: ["South Korea", "Scholarships"],
    link: "/Blog/south-korea",
  },
];

export default function Hungary2() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 relative group">
      {/* Title Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10">
        Study Abroad Blogs — Guidance, Tips &amp; More
      </h1>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
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
        className="pb-14"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id} className="h-auto">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-gray-100 h-full group/card">
              
              {/* Card Top / Image Container */}
              <div className="relative w-full h-56 bg-gray-100 overflow-hidden rounded-t-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                />

                {/* Decorative Curve */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <svg
                    viewBox="0 0 300 200"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0,0 L 120,0 C 90,80 0,90 0,160 Z"
                      fill="#462066"
                      opacity="0.85"
                    />
                    <path
                      d="M 300,200 L 180,200 C 210,120 300,110 300,40 Z"
                      fill="#462066"
                      opacity="0.85"
                    />
                  </svg>
                </div>

                {/* Tag Badge Overlay */}
                {blog.tags.length > 0 && (
                  <div className="absolute top-6 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-sm shadow-sm uppercase tracking-wider">
                    {blog.tags[0]}
                  </div>
                )}
              </div>

              {/* Title & Description Container */}
              <div className="relative px-6 pt-4 flex-1 flex flex-col justify-between">
                <div>
                  {/* Decorative Shapes */}
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-slate-700 inline-block"></span>
                    <span className="w-7 h-2.5 bg-red-600 rounded-full inline-block transform -rotate-45"></span>
                    <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-red-600 inline-block transform rotate-45"></span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-800 leading-snug hover:text-slate-600 transition-colors line-clamp-2 mb-2">
                    <Link href={blog.link}>
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {blog.desc}
                  </p>
                </div>
              </div>

              {/* Read More Button */}
              <div className="p-6 pt-4 mt-auto">
                <Link
                  href={blog.link}
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200 text-sm shadow-sm"
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
        className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-red-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-300 focus:outline-none"
      >
        <ChevronLeft size={24} />
      </button><button 
        aria-label="Next Slide"
        className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-red-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-300 focus:outline-none"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}