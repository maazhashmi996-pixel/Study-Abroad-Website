"use client";

import React, { useState } from "react";
import { CheckCircle2, Globe, Home, Languages, Calendar } from "lucide-react";

export default function ServicesOffer() {
  const [activeTab, setActiveTab] = useState("Accommodations");

  const sidebarItems = [
    { name: "Study Abroad", icon: Globe, href: "/studyAbroad" },
    { name: "Accommodations", icon: Home, href: "/accommodations" },
    { name: "Languages", icon: Languages, href: "/languages" },
  ];

  const accommodationBulletPoints = [
    "Student Accommodation",
    "University Accommodation",
    "Customized Accommodation Services",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT SIDEBAR NAVIGATION */}
          <div className="lg:col-span-1">
            <div className="bg-[#3B1E54] p-4 rounded-2xl shadow-md space-y-3 sticky top-6">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 text-left ${
                      isActive
                        ? "bg-[#ECA82C] text-[#3B1E54] shadow"
                        : "bg-white text-[#3B1E54] hover:bg-slate-100"
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Header Titles */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#3B1E54] tracking-tight mb-1">
                Accommodations
              </h1>
              <p className="text-sm font-semibold text-[#3B1E54]">
                Helping You Secure the Best Place to Stay
              </p>
            </div>

            {/* Introductory Text */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Finding the ideal accommodation service is integral to having a comfortable and successful study or work stay abroad. At Times Consultant, we are committed to assisting you in finding the finest area to live based on your requirements and preferences.
            </p>

            {/* Accommodation Services Offered Subheader & Bullet Points */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-[#3B1E54]">
                Accommodation Services We Offer
              </h2>

              <ul className="space-y-2">
                {accommodationBulletPoints.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3B1E54] flex-shrink-0" />
                    <span className="font-semibold text-xs sm:text-sm text-[#3B1E54]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detail Content Sections */}
            <div className="space-y-6 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
              
              {/* Student Accommodation */}
              <div className="space-y-1">
                <h3 className="font-bold text-[#3B1E54] text-sm sm:text-base">
                  Student Accommodation
                </h3>
                <p>
                  We recognize that students have specific accommodation demands. Our comprehensive services ensure that you discover the ideal student accommodation. We help students choose college accommodation that is both convenient and provides a sense of belonging. In addition, we can help you identify private rental options that fit your budget and lifestyle. We can help you find shared housing choices if you want to save money while also enjoying a social setting.
                </p>
              </div>

              {/* University Accommodation */}
              <div className="space-y-1">
                <h3 className="font-bold text-[#3B1E54] text-sm sm:text-base">
                  University Accommodation
                </h3>
                <p>
                  Living on campus can significantly improve your education experience. We offer special accommodation services for all major and high-ranking universities including accommodation for Queens College and Oxford University, ensuring that you find comfortable and convenient housing. We also help you secure housing at various universities, providing a safe and supportive atmosphere for your study.
                </p>
              </div>

              {/* Customized Accommodation */}
              <div className="space-y-1">
                <h3 className="font-bold text-[#3B1E54] text-sm sm:text-base">
                  Customized Accommodation
                </h3>
                <p>
                  Recognizing that each student has unique needs, we provide specialized accommodation alternatives. This includes personalized counseling sessions to better understand your preferences and needs. We undertake thorough searches to identify home alternatives that fit your specifications, and we assist you in completing and submitting applications for accommodation to ensure a smooth experience.
                </p>
              </div>

              {/* Trust Times Consultant */}
              <div className="space-y-1">
                <h3 className="font-bold text-[#3B1E54] text-sm sm:text-base">
                  Trust Times Consultant for Safety and Security
                </h3>
                <p>
                  Your safety is our top priority. We ensure that the accommodation options we recommend to book are in safe neighborhoods and have necessary security measures in place. We guide local safety practices and emergency contacts to give you peace of mind while you are away from home.
                </p>
              </div>

              {/* Secure Your Perfect Accommodation Today */}
              <div className="space-y-1">
                <h3 className="font-bold text-[#3B1E54] text-sm sm:text-base">
                  Secure Your Perfect Accommodation Today
                </h3>
                <p>
                  Don't leave your accommodation to chance. Times Consultant helps you find safe, comfortable, and convenient housing options so you can focus on your studies.
                </p>
              </div>

              {/* Book Accommodation Action Button */}
              <div className="pt-4">
                <button className="bg-[#3B1E54] hover:bg-[#2B153E] text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all duration-200 text-sm flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-[#ECA82C]" />
                  <span>Book Accommodation</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}