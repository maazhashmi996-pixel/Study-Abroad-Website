"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    desc: "Austria is one of the most affordable options for students seeking a respected European degree...",
    image: "/images/blog/austria-visa.webp",
    tags: ["Austria", "Visa", "Europe"],
    link: "/Blog/austria",
  },
  {
    id: 2,
    title: "How to Apply for Europe Study Visa in 2026 from Pakistan",
    desc: "Comprehensive guide on navigating Schengen visa requirements and European university admissions...",
    image: "/images/blog/MBA.png",
    tags: ["Hungary", "Visa", "Europe"],
    link: "/Blog/europe",
  },
  {
    id: 3,
    title: "How to Apply for Netherlands Study Visa in 2026 from Pakistan",
    desc: "Explore Dutch higher education opportunities, MVV visa requirements, and tuition fee structures...",
    image: "/images/blog/neatherlands.webp",
    tags: ["Netherlands", "Visa", "Europe"],
    link: "/Blog/netherland",
  },
  {
    id: 4,
    title: "Study in Canada Guide for International Students",
    desc: "Everything you need to know about Canadian study permits, SDS processing, and top universities...",
    image: "/images/blog/canada.webp",
    tags: ["Canada", "Scholarships"],
    link: "/Blog/Blog/canada",
  },
  {
    id: 5,
    title: "Top Scholarships to Study in China",
    desc: "Discover CSC scholarships, university grants, and application procedures for studying in China...",
    image: "/images/blog/china.webp",
    tags: ["China", "Scholarships"],
    link: "/Blog/china",
  },
  {
    id: 6,
    title: "Student Visa Interview Tips for Beginners in Turkey",
    desc: "Key preparation tips and common interview questions for securing your Turkish student residence permit...",
    image: "/images/blog/turkey.webp",
    tags: ["Turkey", "Visa"],
    link: "/Blog/turkey",
  },
  {
    id: 7,
    title: "Study Opportunities in United Kingdom for 2026",
    desc: "Learn about UK CAS letters, post-study work visas (PSW), and top university application deadlines...",
    image: "/images/blog/10-Tips.png",
    tags: ["United Kingdom", "Visa"],
    link: "/Blog/ukingdom",
  },
  {
    id: 8,
    title: "Understanding Denmark Higher Education Requirements",
    desc: "Detailed overview of Danish admission criteria, residence permits, and English proficiency standards...",
    image: "/images/blog/bunking-myths.png",
    tags: ["Denmark", "Europe"],
    link: "/Blog/denmark",
  },
  {
    id: 9,
    title: "United States University Admission Checklist",
    desc: "Step-by-step checklist covering F-1 visa preparation, SEVIS fees, standardized tests, and SOPs...",
    image: "/images/blog/Exchange-programs.png",
    tags: ["United States", "Scholarships"],
    link: "/usuni",
  },
  {
    id: 10,
    title: "Sweden University Admission & Scholarship Guide",
    desc: "Complete roadmap for Swedish university admissions portal, SI scholarships, and residence permits...",
    image: "/images/blog/sweden.webp",
    tags: ["Sweden", "Scholarships"],
    link: "/Blog/sweden",
  },
  {
    id: 11,
    title: "France University Admission & Scholarship Guide",
    desc: "Step-by-step instructions for Campus France registration, EEF procedure, and France-Visas application...",
    image: "/images/blog/france-study.webp",
    tags: ["France", "Scholarships"],
    link: "/Blog/france",
  },
  {
    id: 12,
    title: "Ireland University Admission & Scholarship Guide",
    desc: "Explore Ireland's top third-level institutions, Stamp 2 visa guidelines, and scholarship options...",
    image: "/images/blog/Ireland-study.png",
    tags: ["Ireland", "Scholarships"],
    link: "/Blog/ireland",
  },
  {
    id: 13,
    title: "Malaysia University Admission & Scholarship Guide",
    desc: "Affordable higher education in Asia: EMGS application procedures, student pass requirements, and fees...",
    image: "/images/blog/maly.webp",
    tags: ["Malaysia", "Scholarships"],
    link: "/Blog/malaysia",
  },
  {
    id: 14,
    title: "South Korea University Admission & Scholarship Guide",
    desc: "Guide to GKS scholarships, D-2 student visa process, and studying at top Korean universities...",
    image: "/images/blog/south-korea.webp",
    tags: ["South Korea", "Scholarships"],
    link: "/Blog/south-korea",
  },
];

export default function StudyAbroadBlogSlider() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 relative group">
      {/* Section Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#462066] mb-10">
        Study Abroad Blogs - Guidance, Tips & More
      </h1>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: ".blog-slider-prev",
          nextEl: ".blog-slider-next",
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
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between overflow-hidden border border-gray-100 h-full">
              {/* Card Image Container */}
              <div className="relative w-full h-56 bg-gray-100 overflow-hidden rounded-t-2xl">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />

                {/* Decorative Curve SVG */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
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

                {/* Tag Badge */}
                {blog.tags.length > 0 && (
                  <div className="absolute top-6 left-4 z-20 bg-[#E29D12] text-white text-xs font-semibold px-3 py-1 rounded-sm shadow-sm">
                    {blog.tags[0]}
                  </div>
                )}
              </div>

              {/* Content & Title */}
              <div className="relative px-6 pt-4 flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="w-4 h-4 rounded-full bg-[#462066] inline-block"></span>
                  <span className="w-8 h-3 bg-[#E29D12] rounded-full inline-block transform -rotate-45"></span>
                  <span className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#E29D12] inline-block transform rotate-45"></span>
                </div>

                <h2 className="text-lg font-bold text-gray-800 leading-snug min-h-[56px] hover:text-[#462066] transition-colors">
                  {blog.title}
                </h2>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed min-h-[48px]">
                  {blog.desc}
                </p>
              </div>

              {/* Read More Button */}
              <div className="p-6 pt-4">
                <Link
                  href={blog.link}
                  className="w-full block text-center bg-[#E29D12] hover:bg-[#c8880e] text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200"
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
        className="blog-slider-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#462066] text-white p-3 rounded-full shadow-lg hover:bg-[#E29D12] transition-colors duration-300 focus:outline-none"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        aria-label="Next Slide"
        className="blog-slider-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#462066] text-white p-3 rounded-full shadow-lg hover:bg-[#E29D12] transition-colors duration-300 focus:outline-none"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}