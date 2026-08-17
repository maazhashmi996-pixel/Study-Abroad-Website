"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Send,
  Building,
  FileCheck,
  Award,
  Globe,
  HelpCircle,
} from "lucide-react";

export default function Gujrat() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const expoHighlights = [
    { icon: FileCheck, title: "Admission Procedures", desc: "Direct guidance on application requirements" },
    { icon: Calendar, title: "Upcoming Deadlines", desc: "Timeline tracking for 2026/2027 intakes" },
    { icon: Award, title: "Scholarships", desc: "Up to 100% merit & need-based grants" },
    { icon: GraduationCap, title: "Program Options", desc: "Explore 500+ undergraduate & master courses" },
    { icon: Building, title: "Tuition Fee Structures", desc: "Transparent breakdown of costs and proof of funds" },
    { icon: Globe, title: "Visa Guidance", desc: "High success rate visa file preparation tips" },
  ];

  const whyAttend = [
    "Meet university representatives directly and get instant profile evaluation.",
    "Get exclusive on-spot admission offers and fee waivers.",
    "Comprehensive guidance on bank statement and visa file building.",
    "Personalized 1-on-1 counseling tailored to your budget and career goals.",
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 py-12 lg:py-16">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#0b5cff]/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-red-500/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {/* Tag Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-400">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                Featured Event
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0b5cff]/30 bg-[#0b5cff]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0b5cff]">
                <Sparkles className="h-3.5 w-3.5" />
                Free Entry
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Gujrat Study Abroad <span className="text-[#0b5cff]">Expo 2026</span>
            </h1>

            {/* Banner Media Card */}
            <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-800 shadow-2xl">
              <Image
                src="/images/events/gujrat.jpg" // Replace with your image path
                alt="Gujrat Study Abroad Expo 2026"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-3 backdrop-blur-md">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Organized By</p>
                  <p className="text-sm font-bold text-white">Education Zone Consultants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Event Details */}
          <div className="space-y-10 lg:col-span-7 xl:col-span-8">
            
            {/* Meta Cards (Date, Venue, Time) */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="group rounded-2xl border border-slate-800 bg-slate-800/50 p-4 transition-colors hover:border-[#0b5cff]/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b5cff]/10 text-[#0b5cff]">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Date</p>
                    <p className="text-xs font-black text-white sm:text-sm">Monday, 18 Aug 2026</p>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-slate-800 bg-slate-800/50 p-4 transition-colors hover:border-red-500/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Venue</p>
                    <p className="text-xs font-black text-white sm:text-sm">Hotel One, Gujrat</p>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-slate-800 bg-slate-800/50 p-4 transition-colors hover:border-[#0b5cff]/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b5cff]/10 text-[#0b5cff]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Time</p>
                    <p className="text-xs font-black text-white sm:text-sm">12:00 PM - 07:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Event */}
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white sm:text-3xl">
                Join the Grand Study Abroad Expo <span className="text-red-500">2026</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Get a chance to join the most in-demand educational expo in all of Gujrat. Unlock unprecedented opportunities to study in top global destinations including the UK, USA, Australia, Canada, Europe, and Asia.
              </p>
              <p className="text-sm leading-relaxed text-slate-400">
                Education Zone Study Abroad Expo has helped thousands of students achieve their study abroad dreams. Connect directly with official university representatives and certified counselors to get personalized 1-on-1 consultations for free.
              </p>
            </div>

            {/* Expo Highlights Grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Parameters Covered in Expo</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {expoHighlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-800/40 p-4 transition-all duration-300 hover:bg-slate-800/80"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b5cff]/10 text-[#0b5cff]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                        <p className="mt-1 text-xs text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Why Attend Section */}
            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-800/60 to-slate-900 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white">
                Why Should You Attend This Expo?
              </h3>
              <div className="mt-6 space-y-4">
                {whyAttend.map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                    <p className="text-sm text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Call-Back Form */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-24 rounded-3xl border border-slate-800 bg-slate-800/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="mb-6">
                <span className="inline-block rounded-full bg-red-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-red-400">
                  Quick Registration
                </span>
                <h3 className="mt-2 text-xl font-black text-white">
                  Get a Call-Back Within 24 Hours
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Reserve your free spot at the expo and lock in a priority slot with university delegates.
                </p>
              </div>

              {formSubmitted ? (
                <div className="rounded-2xl border border-[#0b5cff]/30 bg-[#0b5cff]/10 p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0b5cff] text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-white">Spot Reserved!</h4>
                  <p className="mt-2 text-xs text-slate-300">
                    Our team will contact you shortly with your digital entry pass and event schedule.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali"
                      className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-xs text-white placeholder-slate-500 transition focus:border-[#0b5cff] focus:outline-none focus:ring-1 focus:ring-[#0b5cff]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-xs text-white placeholder-slate-500 transition focus:border-[#0b5cff] focus:outline-none focus:ring-1 focus:ring-[#0b5cff]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-xs text-white placeholder-slate-500 transition focus:border-[#0b5cff] focus:outline-none focus:ring-1 focus:ring-[#0b5cff]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300">Preferred Destination</label>
                    <select className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-xs text-slate-300 transition focus:border-[#0b5cff] focus:outline-none focus:ring-1 focus:ring-[#0b5cff]">
                      <option value="uk">United Kingdom</option>
                      <option value="usa">United States</option>
                      <option value="australia">Australia</option>
                      <option value="canada">Canada</option>
                      <option value="europe">Europe</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b5cff] py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/25"
                  >
                    Register For Free
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <p className="text-center text-[10px] text-slate-500">
                    By submitting, you agree to receive event updates via WhatsApp/SMS.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}