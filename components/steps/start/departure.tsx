 "use client";

import React from "react";
import Link from "next/link";
import { 
  FaPlaneDeparture, 
  FaPassport, 
  FaSuitcaseRolling, 
  FaHospitalUser, 
  FaMoneyBillWave, 
  FaPhoneAlt 
} from "react-icons/fa";

const openWhatsApp = (
  phoneNumber: string = "923452066100",
  message: string = "Hello! I need pre-departure orientation and support."
) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function DeparturePage() {
  const preDepartureServices = [
    {
      icon: <FaPassport className="text-3xl text-[#0b5cff]" />,
      title: "Visa & Document Final Check",
      desc: "Complete audit of your passport, visa stamped pages, offer letter, and essential travel approvals before flying.",
    },
    {
      icon: <FaSuitcaseRolling className="text-3xl text-[#0b5cff]" />,
      title: "Baggage & Packing Guidance",
      desc: "Country-specific baggage rules, essential document checklists, weather-appropriate clothing, and restricted items list.",
    },
    {
      icon: <FaHospitalUser className="text-3xl text-[#0b5cff]" />,
      title: "Health & Travel Insurance",
      desc: "Assistance in securing mandatory international student health insurance (OSHC, TK, AOK, etc.) and vaccination checks.",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-[#0b5cff]" />,
      title: "Currency & Forex Guidance",
      desc: "Help with opening blocked accounts, international debit/credit cards, and forex currency exchange options.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="bg-[#1a233d] text-white py-16 px-4 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#0b5cff]/20 text-[#0b5cff] px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6">
            <FaPlaneDeparture /> Smooth Take-Off
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 uppercase tracking-tight">
            Pre-Departure <span className="text-[#0b5cff]">Support</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Preparing you for a hassle-free journey. We make sure you have every document, bag, and booking ready before you board your flight.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase">
            What We Do Before <span className="text-[#0b5cff]">You Fly</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2">Essential pre-departure steps for every international student</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {preDepartureServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#0b5cff] transition-all flex gap-5"
            >
              <div className="flex-shrink-0 bg-slate-50 p-4 rounded-xl h-fit border border-slate-100">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Essential Checklist Box */}
        <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 uppercase border-b pb-4">
            Pre-Departure Essential Checklist
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-slate-700">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0b5cff]"></span> Passport valid for at least 6 months
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0b5cff]"></span> Stamped Student Visa & CAS / CoE / LOA
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0b5cff]"></span> Flight booking & Airport Transfer confirmation
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0b5cff]"></span> Attested academic transcripts & originals
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0b5cff]"></span> Accommodation booking letter
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0b5cff]"></span> Local currency cash & International card
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#0b5cff] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black uppercase mb-3">Book Your Pre-Departure Briefing</h3>
          <p className="text-slate-100 text-sm max-w-xl mx-auto mb-8 font-medium">
            Join our 1-on-1 orientation session with experts to clear all doubts before heading to the airport.
          </p>
          <button
            onClick={() => openWhatsApp("923452066100", "Hi Education Zone, I want to attend the Pre-Departure Session.")}
            className="bg-white text-[#0b5cff] font-black px-8 py-4 rounded-full uppercase text-xs hover:bg-slate-900 hover:text-white transition-all shadow-md"
          >
            Attend Orientation via WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}