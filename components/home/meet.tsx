
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const events = [
  {
    id: 1,
    city: "BAHAWALPUR",
    title: "Islamabad Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Thursday, 13 August 2026",
    location: "Movenpick Hotel - Islamabad",
    image: "/images/events/bahawalpur.webp",
  },
  {
    id: 2,
    city: "ABBOTTABAD",
    title: "Jhelum Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Wednesday, 05 August 2026",
    location: "Times Office - Jhelum",
    image: "/images/home/abbottabad.webp",
  },
  {
    id: 3,
    city: "HYDERABAD",
    title: "Karachi Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Saturday, 08 August 2026 || Sunday, 09 August 2026",
    location: "PC Hotel - Karachi",
    image: "/images/home/hyderabad.webp",
  },
  {
    id: 4,
    city: "PESHAWAR",
    title: "Peshawar Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Sunday, 16 August 2026",
    location: "Pearl Continental - Lahore",
    image: "/images/home/peshawar.png",
  },
  {
    id: 5,
    city: "GUJRAT",
    title: "Gujrat Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Tuesday, 18 August 2026",
    location: "Ramada Hotel - Multan",
    image: "/images/events/gujrat.webp",
  },
  {
    id: 6,
    city: "FAISALABAD",
    title: "Faisalabad Study Abroad Expo 2026",
    time: "12:00 PM TO 07:00 PM",
    date: "Friday, 21 August 2026",
    location: "Serena Hotel - Faisalabad",
    image: "/images/events/faisalaabad.webp",
  },
];

export default function Meet() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-16 sm:py-20 lg:py-24">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute -left-48 top-0 h-[420px] w-[420px] rounded-full bg-[#0b5cff]/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-48 -right-40 h-[420px] w-[420px] rounded-full bg-[#1a233d]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">

          {/* Small Label */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#0b5cff]/10 bg-white px-4 py-2 shadow-sm">

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b5cff]/10">
              <CalendarDays className="h-3.5 w-3.5 text-[#0b5cff]" />
            </span>

            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#1a233d] sm:text-xs">
              Upcoming Events
            </span>

          </div>

          {/* Heading */}

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1a233d] sm:text-4xl md:text-5xl">

            Meet Us at Our

            <span className="block text-[#0b5cff]">
              Upcoming Events
            </span>

          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Meet our education experts, explore international study
            opportunities, and get personalized guidance for your
            study abroad journey.
          </p>

          {/* View All */}

          <Link
            href="/view"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a233d] px-6 py-3 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#0b5cff] hover:shadow-[#0b5cff]/20"
          >
            View All Events

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>
 
        {/* =====================================================
            SLIDER
        ===================================================== */}

        <div className="relative px-2 sm:px-8 md:px-10">

          {/* ===================================================
              PREVIOUS
          =================================================== */}

          <button
            type="button"
            aria-label="Previous event"
            className="event-prev absolute left-0 top-[42%] z-30 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1a233d] shadow-xl transition-all duration-300 hover:border-[#0b5cff] hover:bg-[#0b5cff] hover:text-white active:scale-90 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* ===================================================
              NEXT
          =================================================== */}

          <button
            type="button"
            aria-label="Next event"
            className="event-next absolute right-0 top-[42%] z-30 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1a233d] shadow-xl transition-all duration-300 hover:border-[#0b5cff] hover:bg-[#0b5cff] hover:text-white active:scale-90 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".event-prev",
              nextEl: ".event-next",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={700}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!overflow-visible !pb-3"
          >

            {events.map((event) => (
              <SwiperSlide key={event.id} className="h-auto">

                {/* =================================================
                    EVENT CARD
                ================================================= */}

                <article className="group h-full overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(26,35,61,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#0b5cff]/20 hover:shadow-[0_20px_45px_rgba(11,92,255,0.12)]">

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div className="relative aspect-[1.35/1] overflow-hidden bg-slate-100">

                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Image Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a233d]/70 via-[#1a233d]/5 to-transparent" />

                    {/* City */}

                    <div className="absolute left-4 top-4">

                      <span className="rounded-full bg-[#0b5cff] px-3.5 py-1.5 text-[9px] font-black tracking-[0.14em] text-white shadow-lg">
                        {event.city}
                      </span>

                    </div>

                    {/* Event Number */}

                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#1a233d]/70 text-xs font-black text-white backdrop-blur-md">
                      {String(event.id).padStart(2, "0")}
                    </div>

                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="flex flex-col p-5 sm:p-6">

                    {/* Title */}

                    <h3 className="min-h-[52px] text-lg font-black leading-6 text-[#1a233d] transition-colors duration-300 group-hover:text-[#0b5cff]">
                      {event.title}
                    </h3>

                    {/* Divider */}

                    <div className="my-5 h-px bg-slate-100" />

                    {/* INFO */}

                    <div className="space-y-4">

                      {/* DATE */}

                      <div className="flex items-start gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0b5cff]/10 text-[#0b5cff]">
                          <CalendarDays className="h-4 w-4" />
                        </div>

                        <div className="min-w-0">

                          <p className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-400">
                            Date
                          </p>

                          <p className="mt-1 text-xs font-semibold leading-5 text-[#1a233d]">
                            {event.date}
                          </p>

                        </div>

                      </div>

                      {/* TIME */}

                      <div className="flex items-start gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0b5cff]/10 text-[#0b5cff]">
                          <Clock3 className="h-4 w-4" />
                        </div>

                        <div>

                          <p className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-400">
                            Time
                          </p>

                          <p className="mt-1 text-xs font-bold text-[#1a233d]">
                            {event.time}
                          </p>

                        </div>

                      </div>

                      {/* LOCATION */}

                      <div className="flex items-start gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0b5cff]/10 text-[#0b5cff]">
                          <MapPin className="h-4 w-4" />
                        </div>

                        <div className="min-w-0">

                          <p className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-400">
                            Location
                          </p>

                          <p className="mt-1 text-xs font-semibold leading-5 text-slate-600">
                            {event.location}
                          </p>

                        </div>

                      </div>

                    </div>

                    {/* =================================================
                        BUTTON
                    ================================================= */}

                    <Link
                      href="/explore-event"
                      className="group/button mt-6 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-extrabold text-[#1a233d] transition-all duration-300 hover:border-[#0b5cff] hover:bg-[#0b5cff] hover:text-white"
                    > Explore Event
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0b5cff] transition-transform duration-300 group-hover/button:translate-x-1">

                        <ArrowUpRight className="h-3.5 w-3.5" />

                      </span>

                    </Link>

                  </div>

                </article>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div className="mt-10 flex justify-center sm:mt-12">

          <div className="flex items-center gap-3 rounded-full border border-[#0b5cff]/10 bg-white px-5 py-3 shadow-sm">

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0b5cff] opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#0b5cff]" />
            </span>

            <p className="text-xs font-medium text-slate-500 sm:text-sm">
              New events are added regularly.
            </p>

            <Link
              href="/events"
              className="text-xs font-bold text-[#0b5cff] hover:underline"
            >
              See all
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

