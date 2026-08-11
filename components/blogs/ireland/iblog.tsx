"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import type { Swiper as SwiperClass } from 'swiper';

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
    desc: "A complete overview of applying for European study visas, requirements, and admission pathways...",
    image: "/images/blog/MBA.png",
    tags: ["Europe", "Visa", "Scholarships"],
    link: "/europe",
  },
  {
    id: 3,
    title: "How to Apply for Netherlands Study Visa in 2026 from Pakistan",
    desc: "Discover step-by-step guidance on Dutch university admissions, IND visa procedures, and fees...",
    image: "/images/blog/neatherlands.webp",
    tags: ["Netherlands", "Visa", "Europe"],
    link: "/netherlands",
  },
  {
    id: 4,
    title: "Study in Canada Guide for International Students",
    desc: "Learn about Canadian study permits, top universities, tuition costs, and post-graduation work opportunities...",
    image: "/images/blog/canada.webp",
    tags: ["Canada", "Scholarships", "Visa"],
    link: "/canada",
  },
  {
    id: 5,
    title: "Top Scholarships to Study in China",
    desc: "Explore Chinese Government Scholarships (CSC) and university grants available for international scholars...",
    image: "/images/blog/china.webp",
    tags: ["China", "Scholarships"],
    link: "/china",
  },
  {
    id: 6,
    title: "Student Visa Interview Tips for Beginners in Turkey",
    desc: "Essential tips and common questions to help you succeed in your Turkish student visa interview...",
    image: "/images/blog/turkey.webp",
    tags: ["Turkey", "Visa"],
    link: "/turkey",
  },
  {
    id: 7,
    title: "Study Opportunities in United Kingdom for 2026",
    desc: "Comprehensive guide to UK university applications, CAS processing, and student visa requirements...",
    image: "/images/blog/10-Tips.png",
    tags: ["United Kingdom", "Visa"],
    link: "/ukingdom",
  },
  {
    id: 8,
    title: "Understanding Denmark Higher Education Requirements",
    desc: "Key entry requirements, tuition fees, and admission guidelines for Danish universities...",
    image: "/images/blog/bunking-myths.png",
    tags: ["Denmark", "Europe"],
    link: "/denmark",
  },
  {
    id: 9,
    title: "United States University Admission Checklist",
    desc: "A step-by-step checklist covering standardized tests, SOPs, financial documents, and F-1 visa preparation...",
    image: "/images/blog/Exchange-programs.png",
    tags: ["United States", "Scholarships"],
    link: "/usuni",
  },
  {
    id: 10,
    title: "Sweden University Admission & Scholarship Guide",
    desc: "Navigate UniversityAdmissions.se, Swedish Institute scholarships, and residence permit procedures...",
    image: "/images/blog/sweden.webp",
    tags: ["Sweden", "Scholarships"],
    link: "/sweden",
  },
  {
    id: 11,
    title: "France University Admission & Scholarship Guide",
    desc: "Learn about Campus France procedures, French public university tuition, and Eiffel Excellence scholarships...",
    image: "/images/blog/france-study.webp",
    tags: ["France", "Scholarships"],
    link: "/france",
  },
  {
    id: 12,
    title: "Ireland University Admission & Scholarship Guide",
    desc: "Detailed roadmap for studying in Ireland, English language requirements, and post-study work visas...",
    image: "/images/blog/Ireland-study.png",
    tags: ["Ireland", "Scholarships"],
    link: "/ireland",
  },
  {
    id: 13,
    title: "Malaysia University Admission & Scholarship Guide",
    desc: "Explore affordable Malaysian degrees, EMGS visa approval letter (eVAL) process, and campus life...",
    image: "/images/blog/maly.webp",
    tags: ["Malaysia", "Scholarships"],
    link: "/malaysia",
  },
  {
    id: 14,
    title: "South Korea University Admission & Scholarship Guide",
    desc: "Everything you need to know about Global Korea Scholarships (GKS) and applying to Korean universities...",
    image: "/images/blog/south-korea.webp",
    tags: ["South Korea", "Scholarships"],
    link: "/south-korea",
  },
];

export default function IBlogSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 relative group">
      {/* Title Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#462066] mb-10">
        Study Abroad Blogs - Guidance, Tips &amp; More
      </h1>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          onBeforeInit={(swiper: SwiperClass) => {
            if (typeof swiper.params.navigation !== "boolean" && swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
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
            <SwiperSlide key={blog.id} className="h-auto flex">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between overflow-hidden border border-gray-100 w-full h-full">
                
                {/* Card Header & Image */}
                <div className="relative w-full h-56 bg-gray-100 overflow-hidden rounded-t-2xl">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Decorative Curve Overlay */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-80">
                    <svg
                      viewBox="0 0 300 200"
                      className="w-full h-full"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,0 L 120,0 C 90,80 0,90 0,160 Z"
                        fill="#462066"
                      />
                      <path
                        d="M 300,200 L 180,200 C 210,120 300,110 300,40 Z"
                        fill="#462066"
                      />
                    </svg>
                  </div>

                  {/* Category Tag */}
                  {blog.tags.length > 0 && (
                    <div className="absolute top-4 left-4 bg-[#E29D12] text-white text-xs font-semibold px-3 py-1 rounded-md shadow-sm z-10">
                      {blog.tags[0]}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="relative px-6 pt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="w-3 h-3 rounded-full bg-[#462066] inline-block"></span>
                      <span className="w-6 h-2 bg-[#E29D12] rounded-full inline-block transform -rotate-45"></span>
                      <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-[#E29D12] inline-block transform rotate-45"></span>
                    </div>

                    <h2 className="text-lg font-bold text-gray-800 leading-snug hover:text-[#462066] transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-xs text-gray-600 leading-relaxed mt-2 line-clamp-3">
                      {blog.desc}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="py-6">
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          aria-label="Previous Slide"
          className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#462066] text-white p-3 rounded-full shadow-lg hover:bg-[#E29D12] transition-colors duration-300 focus:outline-none"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          ref={nextRef}
          aria-label="Next Slide"
          className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#462066] text-white p-3 rounded-full shadow-lg hover:bg-[#E29D12] transition-colors duration-300 focus:outline-none"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}