'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

interface Office {
  id: string;
  city: string;
  image: string;
  phone: string;
  email: string;
  address: string;
  mapQuery: string;
}

const officesData: Record<string, Office[]> = {
  Pakistan: [
    {
      id: 'sheikhupura',
      city: 'Sheikhupura',
      image: '/images/home/Sheikhupura.jpg',
      phone: '+92 317 111 0570',
      email: 'sheikhupura@timesconsultant.com',
      address: '1st Floor, Above UBL, Near Heart Square, Civil Lines, Sheikhupura, Punjab, Pakistan',
      mapQuery: '1st Floor, Above UBL, Near Heart Square, Civil Lines, Sheikhupura',
    },
    {
      id: 'sargodha',
      city: 'Sargodha',
      image: '/images/home/Sargodha.jpg',
      phone: '+92 317 1110180',
      email: 'sargodha@timesconsultant.com',
      address: 'Plot # 1/2, Ishtiaq Plaza, Near Mall of Sargodha, University Road',
      mapQuery: 'Plot 1 2 Ishtiaq Plaza Near Mall of Sargodha University Road Sargodha',
    },
  ],
  Germany: [],
  Australia: [],
  Dubai: [],
};

const tabs = ['Pakistan', 'Germany', 'Australia', 'Dubai'];

export default function OurOffices() {
  const [activeTab, setActiveTab] = useState('Pakistan');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="bg-black py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 w-full font-sans text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mb-10 items-start">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
                Global Presence
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Our Offices
            </h2>
          </div>
          <div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
              Visit any of our D. Education Zone offices for expert guidance on study abroad, admissions, and visa support. Our teams across multiple locations are ready to assist you in person and help you take the next step toward your international education journey.
            </p>
          </div>
        </div>

        {/* Tabs - Scrollable on mobile */}
        <div className="flex border-b border-slate-800 mb-8 overflow-x-auto no-scrollbar scroll-smooth">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`pb-3.5 px-4 sm:px-6 text-xs sm:text-sm font-extrabold transition-all duration-200 whitespace-nowrap border-b-2 cursor-pointer ${
                activeTab === tab
                  ? 'text-[#0b5cff] border-[#0b5cff]'
                  : 'text-slate-500 border-transparent hover:text-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
          {officesData[activeTab]?.length > 0 ? (
            officesData[activeTab].map((office) => {
              const encodedAddress = encodeURIComponent(office.mapQuery || office.address);
              const mapsUrl = `https://maps.google.com/maps?q=${encodedAddress}`;
              const mapEmbedSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

              return (
                <div key={office.id} className="flex flex-col gap-5 bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-2xl shadow-2xl relative overflow-hidden">
                  
                  {/* Subtle Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#0b5cff]/5 rounded-full blur-2xl pointer-events-none" />

                  {/* City Name */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-wide border-b border-slate-800/80 pb-3">
                    {office.city}
                  </h3>

                  {/* Main Card Content */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                    {/* Office Image */}
                    <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                      <img
                        src={office.image}
                        alt={`${office.city} Office`}
                        className="w-full h-full object-cover opacity-90 transition-scale duration-300 hover:scale-105"
                      />
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                      {/* Phone */}
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[#0b5cff]/10 border border-[#0b5cff]/20 text-[#0b5cff] shrink-0">
                          <Phone className="w-4 h-4" />
                        </div>
                        <span className="font-semibold">{office.phone}</span>
                      </div>

                      {/* Email */}
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[#0b5cff]/10 border border-[#0b5cff]/20 text-[#0b5cff] shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <a
                          href={`mailto:${office.email}`}
                          className="text-slate-300 hover:text-[#0b5cff] transition-colors break-all font-semibold"
                        >
                          {office.email}
                        </a>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-[#0b5cff]/10 border border-[#0b5cff]/20 text-[#0b5cff] shrink-0 mt-0.5">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <span className="leading-relaxed text-slate-400 text-xs">
                          {office.address}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Map Container */}
                  <div className="relative border border-slate-800 rounded-xl overflow-hidden h-40 sm:h-48 bg-slate-950 shadow-inner">
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2.5 left-2.5 z-10 bg-slate-900/90 border border-slate-700 backdrop-blur-md text-[11px] font-bold text-[#0b5cff] px-3 py-1.5 rounded-lg shadow-md hover:bg-slate-800 flex items-center gap-1.5 transition-colors"
                    >
                      Open in Maps <ExternalLink className="w-3 h-3" />
                    </a>

                    <iframe
                      title={`${office.city} Map`}
                      src={mapEmbedSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="filter invert contrast-125 opacity-80"
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="lg:col-span-2 text-center py-12 bg-slate-900/50 rounded-2xl border border-slate-800 text-slate-400">
              <p className="text-sm font-semibold">No office locations currently listed for {activeTab}.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}