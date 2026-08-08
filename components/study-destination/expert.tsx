"use client";

import { useState } from "react";
import Get from "@/components/study-destination/get";
import { CalendarCheck, ArrowRight } from "lucide-react";

export default function Expert() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main CTA Container */}
          <div className="relative bg-[#1a233d] text-white p-8 sm:p-12 md:p-16 rounded-3xl shadow-xl overflow-hidden flex flex-col items-center text-center">
            
            {/* Subtle Decorative Background Effect */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#0b5cff]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center max-w-3xl gap-4 sm:gap-6">
              
              {/* Red Accent Badge */}
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                <CalendarCheck className="w-4 h-4 text-red-600" />
                <span>Get Guidance Today</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Book A Meeting <span className="text-[#0b5cff]">With An Expert</span>
              </h2>

              {/* Subtitle */}
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl">
                Danish universities are research-focused and highly ranked, but application deadlines are strict. Connect with our expert advisors to secure your seat.
              </p>

              {/* Action Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="mt-4 group inline-flex items-center gap-3 bg-[#0b5cff] hover:bg-red-600 text-white font-bold text-sm sm:text-base py-4 px-8 rounded-full shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>APPLY NOW</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {isOpen && <Get onClose={() => setIsOpen(false)} />}
    </>
  );
}