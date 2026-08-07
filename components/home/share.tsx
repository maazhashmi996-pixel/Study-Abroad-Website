"use client";

import React, { useState } from "react";

export default function Share() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    destination: "",
    city: "",
    counsellingMode: "",
    studyLevel: "",
    question: "",
    agreeTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="w-full bg-[#3b2768] text-white flex flex-col font-sans">
      {/* --- MAIN HERO SECTION --- */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Information & Marketing */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="flex flex-wrap flex-col justify-center lg:justify-start gap-4 sm:gap-6 text-base sm:text-lg">
            <div>
              <span className="text-[#f7a600] font-bold text-xl sm:text-2xl">65+</span> Countries
            </div>
            <div>
              <span className="text-[#f7a600] font-bold text-xl sm:text-2xl">3000+</span> Universities
            </div>
            <div>
              <span className="text-[#f7a600] font-bold text-xl sm:text-2xl">3.4M+</span> Programs
            </div>
          </div>

          <div className="pt-2 space-y-1">
            <h2 className="text-[#f7a600] text-lg sm:text-2xl font-semibold">
              Not Sure Where to begin?
            </h2>
            <p className="text-gray-300 text-sm sm:text-lg font-light">
              Let our experts guide you towards the right choice.
            </p>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Share Your <span className="text-[#f7a600]">Details</span> - Our{" "}
            <span className="text-[#f7a600]">Experts</span> Will Contact You
          </h1>
        </div>

        {/* Right Column: Lead Form */}
        <div className="w-full bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div className="sm:col-span-2">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name*"
                required
                className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-purple-200 text-sm focus:outline-none focus:border-[#f7a600] focus:bg-white/30 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                required
                className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-purple-200 text-sm focus:outline-none focus:border-[#f7a600] focus:bg-white/30 transition-all"
              />
            </div>

            {/* Mobile */}
            <div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number*"
                required
                className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-purple-200 text-sm focus:outline-none focus:border-[#f7a600] focus:bg-white/30 transition-all"
              />
            </div>

            {/* Destination Dropdown */}
            <div>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                className="w-full bg-[#523d7f] border border-white/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f7a600] transition-all cursor-pointer"
              >
                <option value="" disabled className="bg-[#523d7f] text-gray-300">
                  Preferred Study Destination
                </option>
                <option value="uk" className="bg-[#523d7f] text-white">United Kingdom</option>
                <option value="usa" className="bg-[#523d7f] text-white">USA</option>
                <option value="canada" className="bg-[#523d7f] text-white">Canada</option>
                <option value="australia" className="bg-[#523d7f] text-white">Australia</option>
              </select>
            </div>

            {/* City Dropdown */}
            <div>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full bg-[#523d7f] border border-white/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f7a600] transition-all cursor-pointer"
              >
                <option value="" disabled className="bg-[#523d7f] text-gray-300">
                  Select City
                </option>
                <option value="lahore" className="bg-[#523d7f] text-white">Lahore</option>
                <option value="karachi" className="bg-[#523d7f] text-white">Karachi</option>
                <option value="islamabad" className="bg-[#523d7f] text-white">Islamabad</option>
              </select>
            </div>

            {/* Counselling Mode Dropdown */}
            <div>
              <select
                name="counsellingMode"
                value={formData.counsellingMode}
                onChange={handleChange}
                required
                className="w-full bg-[#523d7f] border border-white/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f7a600] transition-all cursor-pointer"
              >
                <option value="" disabled className="bg-[#523d7f] text-gray-300">
                  Preferred Mode of Counselling
                </option>
                <option value="online" className="bg-[#523d7f] text-white">Online</option>
                <option value="office" className="bg-[#523d7f] text-white">In-Office</option>
              </select>
            </div>

            {/* Study Level Dropdown */}
            <div>
              <select
                name="studyLevel"
                value={formData.studyLevel}
                onChange={handleChange}
                required
                className="w-full bg-[#523d7f] border border-white/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f7a600] transition-all cursor-pointer"
              >
                <option value="" disabled className="bg-[#523d7f] text-gray-300">
                  Preferred Study Level
                </option>
                <option value="undergraduate" className="bg-[#523d7f] text-white">Undergraduate</option>
                <option value="postgraduate" className="bg-[#523d7f] text-white">Postgraduate</option>
                <option value="doctorate" className="bg-[#523d7f] text-white">Doctorate</option>
              </select>
            </div>

            {/* Question Textarea */}
            <div className="sm:col-span-2">
              <textarea
                name="question"
                rows={3}
                value={formData.question}
                onChange={handleChange}
                placeholder="Ask Your Question"
                className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-purple-200 text-sm focus:outline-none focus:border-[#f7a600] focus:bg-white/30 transition-all resize-y"
              ></textarea>
            </div>

            {/* Terms Checkbox */}
            <div className="sm:col-span-2 flex items-start space-x-2 text-xs text-gray-200">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#f7a600] rounded cursor-pointer"
              />
              <label htmlFor="agreeTerms" className="leading-relaxed cursor-pointer select-none">
                By selecting this you agree to Times{" "}
                <a href="#" className="text-indigo-300 underline hover:text-white transition-colors">
                  privacy policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-indigo-300 underline hover:text-white transition-colors">
                  Terms & conditions
                </a>
                . You agree to be contacted by phone, email or messages.
              </label>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 pt-2 flex justify-start">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#f7a600] hover:bg-amber-500 text-[#3b2768] font-bold px-8 py-3.5 rounded-full text-sm flex items-center justify-center space-x-2 transition-transform active:scale-95 shadow-md cursor-pointer"
              >
                <span>Submit</span>
                <span>➔</span>
              </button>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}