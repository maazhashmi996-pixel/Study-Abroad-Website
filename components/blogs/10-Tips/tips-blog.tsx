
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    desc: "Austria is one of the most affordable options for students who want a respected European degree...",
    image: "/images/blog/austria-visa.webp",
    tags: ["Austria", "Visa", "Europe"],
    link: "/Blog/austria",
  },
  {
    id: 2,
    title: "How to Apply for Europe Study Visa in 2026 from Pakistan",
    desc: "Explore top study opportunities across European countries with streamlined visa procedures...",
    image: "/images/blog/MBA.png",
    tags: ["Hungary", "Visa", "Europe"],
    link: "/Blog/europe",
  },
  {
    id: 3,
    title: "How to Apply for Netherlands Study Visa in 2026 from Pakistan",
    desc: "A complete step-by-step guide for international students aiming to study in Netherlands...",
    image: "/images/blog/neatherlands.webp",
    tags: ["Netherlands", "Visa", "Europe"],
    link: "/Blog/netherlands",
  },
  {
    id: 4,
    title: "Study in Canada Guide for International Students",
    desc: "Discover top Canadian universities, study permits, and scholarship opportunities for international students...",
    image: "/images/blog/canada.webp",
    tags: ["Canada", "Scholarships"],
    link: "/Blog/canada",
  },
  {
    id: 5,
    title: "Top Scholarships to Study in China",
    desc: "Learn how to secure Chinese government scholarships and fully funded university programs...",
    image: "/images/blog/china.webp",
    tags: ["China", "Scholarships"],
    link: "/Blog/china",
  },
  {
    id: 6,
    title: "Student Visa Interview Tips for Beginners in Turkey",
    desc: "Prepare for your Turkish student visa interview with these practical tips and common questions...",
    image: "/images/blog/turkey.webp",
    tags: ["Turkey", "Visa"],
    link: "/Blog/turkey",
  },
  {
    id: 7,
    title: "Study Opportunities in United Kingdom for 2026",
    desc: "Comprehensive insights on British university admissions, scholarships, and post-study work routes...",
    image: "/images/blog/10-Tips.png",
    tags: ["United Kingdom", "Visa"],
    link: "/Blog/ukingdom",
  },
  {
    id: 8,
    title: "Understanding Denmark Higher Education Requirements",
    desc: "Everything you need to know about Danish university entries, language criteria, and living costs...",
    image: "/images/blog/bunking-myths.png",
    tags: ["Denmark", "Europe"],
    link: "/Blog/bunking-myths",
  },
  {
    id: 9,
    title: "United States University Admission Checklist",
    desc: "Step-by-step checklist for US college applications, standardized tests, and funding opportunities...",
    image: "/images/blog/Exchange-programs.png",
    tags: ["United States", "Scholarships"],
    link: "/Blog/usuni",
  },
  {
    id: 10,
    title: "Sweden University Admission & Scholarship Guide",
    desc: "Explore top Swedish institutions, tuition waiver programs, and English-taught degree options...",
    image: "/images/blog/sweden.webp",
    tags: ["Sweden", "Scholarships"],
    link: "/Blog/sweden",
  },
  {
    id: 11,
    title: "France University Admission & Scholarship Guide",
    desc: "Learn about Campus France procedures, public university fees, and top state-funded grants...",
    image: "/images/blog/france-study.webp",
    tags: ["France", "Scholarships"],
    link: "/Blog/france",
  },
  {
    id: 12,
    title: "Ireland University Admission & Scholarship Guide",
    desc: "Key requirements for studying at top Irish universities and navigating student visa approvals...",
    image: "/images/blog/Ireland-study.png",
    tags: ["Ireland", "Scholarships"],
    link: "/Blog/ireland",
  },
  {
    id: 13,
    title: "Malaysia University Admission & Scholarship Guide",
    desc: "Affordable global degree pathways and visa steps for international students in Malaysia...",
    image: "/images/blog/maly.webp",
    tags: ["Malaysia", "Scholarships"],
    link: "/Blog/malaysia",
  },
  {
    id: 14,
    title: "South Korea University Admission & Scholarship Guide",
    desc: "Discover GKS scholarships, top Korean universities, and application criteria for international applicants...",
    image: "/images/blog/south-korea.webp",
    tags: ["South Korea", "Scholarships"],
    link: "/Blog/south-korea",
  },
];

export default function TipsBlogSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 font-sans">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-10">

        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-blue-500" />

          <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
            D. Education Zone
          </span>

          {/* Very Small Red Accent */}
          <span className="w-2 h-2 rounded-full bg-red-500" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mt-2">
          Study Abroad Blogs
        </h2>

        <p className="mt-3 text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
          Guidance, tips and useful information to help you make
          confident decisions about studying abroad.
        </p>

        {/* Electric Blue Line */}
        <div className="flex justify-center mt-5">
          <div className="w-14 h-1 bg-blue-500 rounded-full" />
        </div>
      </div>


      {/* ================= SWIPER ================= */}
      <div className="relative">

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
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >

          {blogs.map((blog) => (
            <SwiperSlide key={blog.id} className="h-auto">

              {/* ================= BLOG CARD ================= */}
              <article className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full">

                {/* ================= IMAGE ================= */}
                <div className="relative w-full h-56 bg-slate-900 overflow-hidden">

                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Slate Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none" />

                  {/* Electric Blue Top Accent */}
                  <div className="absolute top-0 left-0 w-20 h-1 bg-blue-500" />

                  {/* Small Red Accent */}
                  <div className="absolute top-0 right-0 w-8 h-1 bg-red-500" />


                  {/* ================= TAG ================= */}
                  {blog.tags.length > 0 && (
                    <div className="absolute bottom-4 left-4">

                      <span className="inline-flex items-center bg-slate-900/90 backdrop-blur-sm text-blue-400 border border-blue-400/30 text-xs font-bold px-3 py-1.5 rounded-lg">
                        {blog.tags[0]}
                      </span>

                    </div>
                  )}

                </div>


                {/* ================= CONTENT ================= */}
                <div className="px-6 pt-5 flex-1 flex flex-col bg-white">

                  {/* Decorative Accent */}
                  <div className="flex items-center gap-2 mb-4">

                    <span className="w-7 h-1 rounded-full bg-blue-500" />

                    <span className="w-2 h-2 rounded-full bg-slate-300" />

                    <span className="w-2 h-2 rounded-full bg-slate-900" />

                  </div>


                  <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {blog.desc}
                  </p>

                </div>


                {/* ================= BUTTON ================= */}
                <div className="p-6 pt-5 mt-auto">

                  <a
                    href={blog.link}
                    className="group/btn w-full flex items-center justify-center gap-2 text-center bg-slate-900 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    Read More
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </a>

                </div>

              </article>

            </SwiperSlide>
          ))}

        </Swiper>


        {/* ================= PREVIOUS BUTTON ================= */}
        <button
          className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20
          w-11 h-11 flex items-center justify-center
          bg-slate-900 text-white rounded-full
          border border-slate-700 shadow-lg
          hover:bg-blue-500 hover:border-blue-500
          transition-all duration-300"
          aria-label="Previous blog"
        >
          <ChevronLeft size={21} />
        </button>


        {/* ================= NEXT BUTTON ================= */}
        <button
          className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20
          w-11 h-11 flex items-center justify-center
          bg-slate-900 text-white rounded-full
          border border-slate-700 shadow-lg
          hover:bg-blue-500 hover:border-blue-500
          transition-all duration-300"
          aria-label="Next blog"
        >
          <ChevronRight size={21} />
        </button>

      </div>

    </section>
  );
}

