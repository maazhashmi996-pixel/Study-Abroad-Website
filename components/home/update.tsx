"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
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
      link: "#",
    },
    {
      id: 2,
      image: "/images/home/neatherland.webp",
      date: "July 2, 2026",
      title: "How to Apply for Netherlands Study Visa in 2026 from Pakistan",
      description:
        "The Netherlands is becoming a preferred study destination with top ranked universities.",
      link: "#",
    },
    {
      id: 3,
      image: "/images/home/turkey.webp",
      date: "June 29, 2026",
      title: "How to Apply for Turkey Study Visa in 2026 from Pakistan",
      description:
        "Turkey offers affordable tuition fees and rich culture for Pakistani students.",
      link: "#",
    },
    {
      id: 4,
      image: "/images/home/Untitled.png",
      date: "June 25, 2026",
      title: "Study in UK: Complete Visa Guide 2026",
      description:
        "Everything you need to know about CAS letter, bank statement, and visa interview process.",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-[#fcfaff] py-12 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* SECTION HEADING */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#38236B] text-center tracking-tight">
          Latest Update and Announcement
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ---------------- LEFT MAIN CARD (WE'RE HIRING) ---------------- */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative w-full h-auto overflow-hidden rounded-2xl">
              <Image
                src="/images/home/ann1.png"
                alt="Latest Announcement"
                width={600}
                height={400}
                priority
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>

            <div className="mt-6 space-y-4">
              <span className="text-xs text-slate-400 font-medium">
                8th - 12th July 2026
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#38236B]">
                Join Our Team!
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Join our team and help students make life-changing decisions
                about their education and future. If you have strong
                communication skills, a passion for guiding others, and want to
                make a positive impact through public speaking and one-on-one
                sessions, apply now!
              </p>

              <button className="bg-[#38236B] hover:bg-[#faa61a] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-all duration-300 cursor-pointer">
                Read More
              </button>
            </div>
          </div>

          {/* ---------------- RIGHT VERTICAL SWIPER SLIDER ---------------- */}
          <div className="lg:col-span-6 h-[540px] relative overflow-hidden rounded-3xl">
            {/* Top & Bottom Fade Overlay */}
            <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#fcfaff] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#fcfaff] to-transparent z-10 pointer-events-none" />

            <Swiper
              direction={"vertical"}
              slidesPerView={3}
              spaceBetween={16}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
              className="h-full w-full"
            >
              {announcements.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-4 items-center">
                    {/* Thumbnail Image Container */}
                    <div className="relative w-full sm:w-36 h-28 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 144px"
                        className="object-cover"
                      />
                    </div>

                    {/* Card Info */}
                    <div className="space-y-1.5 w-full">
                      <span className="text-[11px] font-semibold text-slate-400">
                        📅 {item.date}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-[#38236B] hover:text-[#faa61a] line-clamp-2 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <a
                        href={item.link}
                        className="inline-block text-xs font-semibold text-[#38236B] hover:underline pt-1"
                      >
                        Read More &rarr;
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}