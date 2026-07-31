"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "How to Study Abroad Successfully",
      image: "/images/home/blog1.webp",
      image2: "/images/home/suitcase.webp",
    },
    {
      id: 2,
      title: "Top Universities For International Students",
      image: "/images/home/blog2.webp",
      image2: "/images/home/suitcase.webp",
    },
    {
      id: 3,
      title: "Student Visa Requirements Guide",
      image: "/images/home/blog3.jpg",
      image2: "/images/home/suitcase.webp",
    },
    {
      id: 4,
      title: "Scholarships for Pakistani Students",
      image: "/images/home/blog4.webp",
      image2: "/images/home/suitcase.webp",
    },
    {
      id: 5,
      title: "Best Countries to Study Abroad",
      image: "/images/home/blog5.webp",
      image2: "/images/home/suitcase.webp",
    },
    {
      id: 6,
      title: "How to Apply for Student Visa",
      image: "/images/home/blog6.webp",
      image2: "/images/home/suitcase.webp",
    },
  ];

  return (
    <section className="py-10 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#43246f] leading-tight">
            How Do We Support Students?
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="!pb-4"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                
                {/* Main Card Image */}
                <div className="relative group overflow-hidden h-48 sm:h-52 w-full bg-gray-100">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* White Blur Hover Overlay */}
                  <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
                    <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-yellow-500 hover:bg-yellow-600 text-white text-xs sm:text-sm rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-md">
                      Read More
                    </button>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-4 sm:p-6 flex justify-between gap-3 items-center flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 leading-snug line-clamp-2">
                    {blog.title}
                  </h3>

                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0">
                    <Image
                      src={blog.image2}
                      alt="Suitcase Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}