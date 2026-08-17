"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
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
    desc: "Austria is one of the most affordable options for students seeking a respected European degree...",
    image: "/images/blog/austria-visa.webp",
    tags: ["Austria", "Visa", "Europe"],
    link: "/Blog/austria",
  },
  {
    id: 2,
    title: "How to Apply for Europe Study Visa in 2026 from Pakistan",
    desc: "Explore top opportunities across Schengen countries with comprehensive visa documentation guidelines...",
    image: "/images/blog/MBA.png",
    tags: ["Europe", "Visa"],
    link: "/Blog/europe",
  },
  {
    id: 3,
    title: "How to Apply for Netherlands Study Visa in 2026 from Pakistan",
    desc: "A step-by-step roadmap for Pakistani students applying to Dutch universities and MVV permits...",
    image: "/images/blog/neatherlands.webp",
    tags: ["Netherlands", "Visa"],
    link: "/Blog/netherland",
  },
  {
    id: 4,
    title: "Study in Canada Guide for International Students",
    desc: "Understand SDS visa processing times, DLIs, and financial proof required for study permits...",
    image: "/images/blog/canada.webp",
    tags: ["Canada", "Scholarships"],
    link: "/Blog/canada",
  },
  {
    id: 5,
    title: "Top Scholarships to Study in China",
    desc: "Learn how to secure Chinese Government Scholarships (CSC) and provincial university grants...",
    image: "/images/blog/china.webp",
    tags: ["China", "Scholarships"],
    link: "/Blog/china",
  },
  {
    id: 6,
    title: "Student Visa Interview Tips for Beginners in Turkey",
    desc: "Key questions and document preparation tips for passing your Turkish visa interview...",
    image: "/images/blog/turkey.webp",
    tags: ["Turkey", "Visa"],
    link: "/Blog/turkey",
  },
  {
    id: 7,
    title: "Study Opportunities in United Kingdom for 2026",
    desc: "Navigating CAS issuance, Graduate Route visas, and university intake deadlines in the UK...",
    image: "/images/blog/10-Tips.png",
    tags: ["United Kingdom", "Visa"],
    link: "/Blog/united-kindom",
  },
  {
    id: 8,
    title: "Understanding Denmark Higher Education Requirements",
    desc: "Admission criteria, residence permits, and tuition details for international applicants...",
    image: "/images/blog/bunking-myths.png",
    tags: ["Denmark", "Europe"],
    link: "/Blog/bunking-myths",
  },
  {
    id: 9,
    title: "United States University Admission Checklist",
    desc: "Complete guide to F-1 visa preparation, DS-160 forms, SEVIS fees, and university admissions...",
    image: "/images/blog/Exchange-programs.png",
    tags: ["United States", "Scholarships"],
    link: "/Blog/usuni",
  },
  {
    id: 10,
    title: "Sweden University Admission & Scholarship Guide",
    desc: "Essential guide to applying via universityadmissions.se and Migrationsverket residence permits...",
    image: "/images/blog/sweden.webp",
    tags: ["Sweden", "Scholarships"],
    link: "/Blog/sweden",
  },
  {
    id: 11,
    title: "France University Admission & Scholarship Guide",
    desc: "Step-by-step process for Campus France registration, EEF procedure, and VLS-TS student visas...",
    image: "/images/blog/france-study.webp",
    tags: ["France", "Scholarships"],
    link: "/Blog/france",
  },
  {
    id: 12,
    title: "Ireland University Admission & Scholarship Guide",
    desc: "Explore Irish higher education, post-study work rights, and Stamp 2 visa requirements...",
    image: "/images/blog/Ireland-study.png",
    tags: ["Ireland", "Scholarships"],
    link: "/Blog/ireland",
  },
  {
    id: 13,
    title: "Malaysia University Admission & Scholarship Guide",
    desc: "An affordable pathway to quality education, EMGS approval, and student pass applications...",
    image: "/images/blog/maly.webp",
    tags: ["Malaysia", "Scholarships"],
    link: "/Blog/malaysia",
  },
  {
    id: 14,
    title: "South Korea University Admission & Scholarship Guide",
    desc: "Discover GKS scholarship programs, D-2 visa requirements, and top universities in Korea...",
    image: "/images/blog/south-korea.webp",
    tags: ["South Korea", "Scholarships"],
    link: "/Blog/south-korea",
  },
];

export default function TBlogSection() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative group">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 shadow-sm">
            Latest Updates
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Study Abroad Blogs <span className="text-blue-600">— Guidance, Tips &amp; Guides</span>
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
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
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden h-full">
                
                {/* Image Container */}
                <div className="relative w-full h-52 bg-slate-900 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                  />

                  {/* Primary Category Tag */}
                  {blog.tags.length > 0 && (
                    <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                      {blog.tags[0]}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {blog.desc}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6">
                  <Link
  href={blog.link}
  onClick={() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-colors duration-200 text-sm shadow-sm"
>
  Read Guide <ArrowRight size={16} />
</Link>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Carousel Navigation */}
        <button 
          aria-label="Previous Slide"
          className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 bg-slate-900 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200 border border-slate-700"
        >
          <ChevronLeft size={20} />
        </button>

        <button 
          aria-label="Next Slide"
          className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 bg-slate-900 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200 border border-slate-700"
        >
          <ChevronRight size={20} />
        </button>

      </div>
    </section>
  );
}