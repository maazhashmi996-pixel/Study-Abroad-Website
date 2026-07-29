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
    },
    {
      id: 2,
      title: "Top Universities For International Students",
      image: "/images/home/blog2.webp",
    },
    {
      id: 3,
      title: "Student Visa Requirements Guide",
      image: "/images/home/blog3.jpg",
    },
    {
      id: 4,
      title: "Scholarships for Pakistani Students",
      image: "/images/home/blog4.webp",
    },
    {
      id: 5,
      title: "Best Countries to Study Abroad",
      image: "/images/home/blog5.webp",
    },
    {
      id: 6,
      title: "How to Apply for Student Visa",
      image: "/images/home/blog6.webp",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#43246f]">
          How Do We Support Students?
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {blog.title}
                  </h3>

                  <button className="text-[#43246f] font-semibold hover:text-[#f8b21a] duration-300">
                    Read More →
                  </button>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}