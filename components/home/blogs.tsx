"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";

import "swiper/css";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Counseling",
      image: "/images/home/counciling.jpg",
      description:
        "Get personalized guidance to choose the right country, university, and program for your future.",
    },
    {
      id: 2,
      title: "Visa Assistance",
      image: "/images/home/visa.jpg",
      description:
        "Get expert support throughout your student visa application and documentation process.",
    },
    {
      id: 3,
      title: "Test Preparation",
      image: "/images/home/blog3.jpg",
      description:
        "Prepare confidently for English language and other admission tests with proper guidance.",
    },
    {
      id: 4,
      title: "Application & Admission Process",
      image: "/images/home/admission.jpg",
      description:
        "We guide you through applications, documents, admission requirements, and university deadlines.",
    },
    {
      id: 5,
      title: "Scholarships Abroad",
      image: "/images/home/celebration.jpg",
      description:
        "Discover scholarship opportunities and learn how to prepare a stronger scholarship application.",
    },
    {
      id: 6,
      title: "Country & University Selection",
      image: "/images/home/country.jpg",
      description:
        "Compare study destinations and universities according to your academic and career goals.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#faf9fc] py-14 sm:py-16 lg:py-20">
      
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#43246f]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#f7a600]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">

          <span className="inline-flex items-center rounded-full border border-[#43246f]/15 bg-[#43246f]/5 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0b5cff] sm:text-xs">
            Our Student Support
          </span>

          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#0b5cff] sm:text-4xl md:text-5xl">
            How Do We Support
            <span className="block text-red-500">
           
              Students?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            From choosing the right university to getting your visa, our
            experts are here to guide you at every important step of your
            study abroad journey.
          </p>
        </div>

        {/* ================= SLIDER ================= */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={18}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="!overflow-visible"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id} className="h-auto">

              {/* ================= CARD ================= */}
              <div className="group flex h-full min-h-[410px] flex-col overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#43246f]/30 hover:shadow-2xl">

                {/* IMAGE */}
                <div className="relative h-52 w-full overflow-hidden bg-[#8999b9] sm:h-56">

                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b5cff]/80 via-transparent to-transparent opacity-80" />

                  {/* Number */}
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-sm font-black text-[#0b5cff] shadow-lg">
                    0{blog.id}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0b5cff]/70 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">

                    <Link
                      href={`/services/${blog.id}`}
                      className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#0b5cff] shadow-xl transition-all duration-300 hover:bg-red-500 hover:text-white"
                    >
                      Explore Service
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">

                  {/* Small Label */}
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-800 hover:text-[#0b5cff]">
                    Student Support
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 min-h-[3.5rem] text-lg font-black leading-6 text-slate-800 hover:text-[#0b5cff] transition-colors duration-300  sm:text-xl">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                    {blog.description}
                  </p>

                  {/* Bottom CTA */}
                  <div className="mt-auto pt-5">

                    <Link
                      href={`/services/${blog.id}`}
                      className="group/link inline-flex items-center gap-2 text-xs font-extrabold text-[#0b5cff] transition-colors hover:text-red-500"
                    >
                      Learn More

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#43246f]/10 transition-all duration-300 group-hover/link:bg-red-500 group-hover/link:text-white">
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                      </span>
                    </Link>

                  </div>
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-10 flex justify-center sm:mt-12">

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0b5cff] px-7 py-3.5 text-xs font-bold text-white shadow-lg shadow-[#43246f]/20 transition-all duration-300 hover:bg-red-500 hover:shadow-[#f7a600]/20"
          >
            Explore All Services

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>

      </div>
    </section>
  );
}