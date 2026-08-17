"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight, CalendarDays, Megaphone } from "lucide-react";

import "swiper/css";

export default function Update() {
  const announcements = [
    {
      id: 1,
      image: "/images/home/hungary.webp",
      date: "July 2, 2026",
      title: "How to Apply for a Hungary Study Visa in 2026 from Pakistan",
      description:
        "Hungary has become a popular study destination for international students offering high quality education.",
      link: "/Blog/hungary",
    },
    {
      id: 2,
      image: "/images/home/neatherland.webp",
      date: "July 2, 2026",
      title: "How to Apply for Netherlands Study Visa in 2026 from Pakistan",
      description:
        "The Netherlands is becoming a preferred study destination with top ranked universities.",
      link: "/Blog/netherland",
    },
    {
      id: 3,
      image: "/images/home/turkey.webp",
      date: "June 29, 2026",
      title: "How to Apply for Turkey Study Visa in 2026 from Pakistan",
      description:
        "Turkey offers affordable tuition fees and rich culture for Pakistani students.",
      link: "/Blog/turkey",
    },
    {
      id: 4,
      image: "/images/blog/france.webp",
      date: "June 25, 2026",
      title: "Study in France: Complete Visa Guide 2026",
      description:
        "Everything you need to know about CAS letter, bank statement, and visa interview process.",
      link: "/Blog/france",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#0b5cff]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#1a233d]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mb-10 text-center sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0b5cff]/10 bg-white px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b5cff]/10">
              <Megaphone className="h-3.5 w-3.5 text-[#0b5cff]" />
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#1a233d] sm:text-xs">
              News & Updates
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1a233d] sm:text-4xl md:text-5xl">
            Latest Updates &
            <span className="block text-[#0b5cff]">
              Announcements
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Stay updated with the latest study abroad news, visa guides,
            scholarships, opportunities and important announcements.
          </p>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* =================================================
              FEATURED ANNOUNCEMENT
          ================================================= */}
          <div className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(26,35,61,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,92,255,0.10)] lg:col-span-6">
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/home/Blue.png"
                alt="Blue"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a233d]/70 via-transparent to-transparent" />
              {/* Featured Badge */}
              <div className="absolute left-5 top-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0b5cff] px-4 py-2 text-[10px] font-black uppercase tracking-wider text-white shadow-lg">
                  Featured
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Date */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <CalendarDays className="h-4 w-4 text-[#0b5cff]" />
                8th - 12th July 2026
              </div>

              {/* Heading */}
              <h3 className="mt-3 text-2xl font-black leading-tight text-[#1a233d] sm:text-3xl">
                Join Our Team!
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
                Join our team and help students make life-changing
                decisions about their education and future. If you have
                strong communication skills, a passion for guiding others,
                and want to make a positive impact through public speaking
                and one-on-one sessions, apply now!
              </p>

              {/* Button */}
              <Link
                href="/current-jobs"
                className="group/button mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1a233d] px-6 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-[#0b5cff]"
              >
                Read More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE UPDATES
          ================================================= */}
          <div className="relative lg:col-span-6">
            {/* Heading */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0b5cff]">
                  Latest News
                </p>
                <h3 className="mt-1 text-xl font-black text-[#1a233d]">
                  Study Abroad Updates
                </h3>
              </div>

              <Link
                href="/Blog"
                className="hidden items-center gap-1 text-xs font-bold text-[#0b5cff] sm:flex"
              >
                View All
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Slider */}
            <div className="relative h-[540px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_10px_35px_rgba(26,35,61,0.07)]">
              {/* Top Fade */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-12 bg-gradient-to-b from-white to-transparent" />

              {/* Bottom Fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-12 bg-gradient-to-t from-white to-transparent" />

              <Swiper
                direction="vertical"
                slidesPerView={3}
                spaceBetween={12}
                loop={true}
                autoplay={{
                  delay: 2800,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay]}
                className="h-full w-full"
              >
                {announcements.map((item) => (
                  <SwiperSlide key={item.id} className="!h-auto">
                    <Link
                      href={item.link}
                      className="group flex h-full gap-4 rounded-2xl border border-slate-100 bg-[#f8fafc] p-3 transition-all duration-300 hover:border-[#0b5cff]/20 hover:bg-white hover:shadow-md"
                    >
                      {/* Thumbnail */}
                      <div className="relative h-[120px] w-[125px] shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-[135px] sm:w-[145px]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="145px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex min-w-0 flex-1 flex-col py-1">
                        {/* Date */}
                        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                          <CalendarDays className="h-3 w-3 text-[#0b5cff]" />
                          {item.date}
                        </div>

                        {/* Title */}
                        <h4 className="mt-2 line-clamp-2 text-sm font-black leading-5 text-[#1a233d] transition-colors group-hover:text-[#0b5cff]">
                          {item.title}
                        </h4>

                        {/* Description */}
                        <p className="mt-1.5 line-clamp-2 text-[11px] leading-4 text-slate-500">
                          {item.description}
                        </p>

                        {/* Read More (Changed from <Link> to <span> to prevent nested <a> tags) */}
                        <span className="mt-auto flex items-center gap-1 pt-2 text-[10px] font-black text-[#0b5cff]">
                          Read More
                          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Mobile View All */}
            <Link
              href="/blogs"
              className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-xs font-bold text-[#1a233d] shadow-sm sm:hidden"
            >
              View All Updates
              <ArrowRight className="h-4 w-4 text-[#0b5cff]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}