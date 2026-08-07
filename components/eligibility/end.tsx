'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const officesData = {
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
    <section className="bg-white py-8  px-4 sm:px-6 lg:px-8 w-full mx-auto font-sans text-gray-800">
      {/* Header Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mb-8 items-start">
        <div>
          <span className="text-xs sm:text-sm tracking-widest font-semibold uppercase text-gray-500 mb-1.5 block">
            Business Consulting
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3d2b56]">
            Our offices
          </h2>
        </div>
        <div>
          <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
            Visit any of our D.Education Zone offices for expert guidance on study abroad, admissions, and visa support. Our teams across multiple locations are ready to assist you in person and help you take the next step toward your international education journey.
          </p>
        </div>
      </div>

      {/* Tabs - Scrollable on mobile */}
      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar scroll-smooth">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`pb-3 px-4 sm:px-6 text-xs sm:text-sm font-semibold transition-colors duration-200 whitespace-nowrap border-b-2 ${
              activeTab === tab
                ? 'text-[#3d2b56] border-amber-500'
                : 'text-gray-500 border-transparent hover:text-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
        {officesData[activeTab]?.map((office) => {
          const encodedAddress = encodeURIComponent(office.mapQuery || office.address);
          const mapsUrl = `https://maps.google.com/maps?q=${encodedAddress}`;
          const mapEmbedSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

          return (
            <div key={office.id} className="flex flex-col gap-4 bg-white">
              {/* City Name */}
              <h3 className="text-base sm:text-lg font-bold text-[#3d2b56]">
                {office.city}
              </h3>

              {/* Main Card Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                {/* Office Image */}
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
                  <img
                    src={office.image}
                    alt={`${office.city} Office`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contact Info */}
                <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                  {/* Phone */}
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="p-2 rounded-full bg-[#3d2b56] text-white shrink-0">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="font-medium">{office.phone}</span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="p-2 rounded-full bg-[#3d2b56] text-white shrink-0">
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <a
                      href={`mailto:${office.email}`}
                      className="text-gray-700 hover:underline break-all"
                    >
                      {office.email}
                    </a>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="p-2 rounded-full bg-[#3d2b56] text-white shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="leading-snug text-gray-600">
                      {office.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="relative border border-gray-200 rounded-xl overflow-hidden h-40 sm:h-48 bg-gray-50 shadow-sm">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2.5 left-2.5 z-10 bg-white/95 backdrop-blur-sm text-[11px] font-semibold text-blue-600 px-2.5 py-1.5 rounded-md shadow-sm hover:bg-white flex items-center gap-1 transition-colors"
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
                  className="filter grayscale opacity-85 contrast-125"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}