"use client";

import React from "react";
import Link from "next/link";
import { 
  FaPlaneArrival, 
  FaHome, 
  FaUniversity, 
  FaAddressCard, 
  FaBriefcase, 
  FaHeadset 
} from "react-icons/fa";

const openWhatsApp = (
  phoneNumber: string = "923452066100",
  message: string = "Hello! I have landed abroad and need post-arrival assistance."
) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function ArrivalPage() {
  const postArrivalServices = [
    {
      icon: <FaPlaneArrival className="text-3xl text-[#0b5cff]" />,
      title: "Airport Pickup & Transfer",
      desc: "Arranging hassle-free transport from destination airport straight to your accommodation or university campus.",
    },
    {
      icon: <FaHome className="text-3xl text-[#0b5cff]" />,
      title: "Accommodation Check-in",
      desc: "Helping you settle into your dorm, student apartment, or host family setup with tenancy agreement verification.",
    },
    {
      icon: <FaAddressCard className="text-3xl text-[#0b5cff]" />,
      title: "City Registration & Resident Permit",
      desc: "Assistance with local city hall registration (Anmeldung/City Registration), BRP collection, and resident permits.",
    },
    {
      icon: <FaUniversity className="text-3xl text-[#0b5cff]" />,
      title: "Bank Account & SIM Card Setup",
      desc: "Step-by-step guidance to activate local student SIM cards and open local bank accounts within your first week.",
    },
    {
      icon: <FaBriefcase className="text-3xl text-[#0b5cff]" />,
      title: "Part-Time Job Guidance",
      desc: "CV tailoring according to local country formats, tax number registration (NINO/Tax ID), and job search assistance.",
    },
    {
      icon: <FaHeadset className="text-3xl text-[#0b5cff]" />,
      title: "24/7 On-Ground Emergency Support",
      desc: "Continuous support helpline for medical emergencies, university registration issues, or legal inquiries.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="bg-[#1a233d] text-white py-16 px-4 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#0b5cff]/20 text-[#0b5cff] px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6">
            <FaPlaneArrival /> Post-Arrival Care
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 uppercase tracking-tight">
            Stay Supported <span className="text-[#0b5cff]">After Arrival</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Our relationship doesn't end when you board the plane. We ensure you feel right at home from the moment you land.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase">
            On-Ground <span className="text-[#0b5cff]">Assistance</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2">Essential services to help you settle smoothly in your new country</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postArrivalServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#0b5cff] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="bg-slate-50 p-4 rounded-xl w-fit border border-slate-100 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-8 uppercase text-center">
            Your First 30 Days Roadmap
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="inline-block bg-[#0b5cff] text-white px-3 py-1 rounded-full text-xs font-black mb-3">WEEK 1</span>
              <h4 className="font-bold text-slate-900 text-base mb-1">Landing & Settling</h4>
              <p className="text-slate-600 text-xs">Airport pickup, housing check-in, buying local SIM, and immediate family updates.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="inline-block bg-[#0b5cff] text-white px-3 py-1 rounded-full text-xs font-black mb-3">WEEK 2</span>
              <h4 className="font-bold text-slate-900 text-base mb-1">Official Formalities</h4>
              <p className="text-slate-600 text-xs">Bank account opening, city registration (Anmeldung), and university enrollment.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="inline-block bg-[#0b5cff] text-white px-3 py-1 rounded-full text-xs font-black mb-3">WEEK 3 & 4</span>
              <h4 className="font-bold text-slate-900 text-base mb-1">Integration & Work</h4>
              <p className="text-slate-600 text-xs">Exploring the city, part-time job application setup, and student community network.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black uppercase mb-3">Landed Abroad and Need Help?</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 font-medium">
            Contact our student support helpline anytime on WhatsApp for immediate on-ground guidance.
          </p>
          <button
            onClick={() => openWhatsApp("923452066100", "Hi Education Zone, I am abroad and need assistance.")}
            className="bg-[#0b5cff] text-white font-black px-8 py-4 rounded-full uppercase text-xs hover:bg-white hover:text-slate-900 transition-all shadow-md"
          >
            Connect With Support Helpline
          </button>
        </div>
      </section>
    </div>
  );
}