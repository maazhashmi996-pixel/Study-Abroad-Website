'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    fieldOfInterest: '',
    studyLevel: '',
    preferredCountry: '',
    counselingMode: '',
    date: '',
    time: '',
    city: '',
    nearestOffice: '',
    institutionName: '',
    designation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', { userType, ...formData });
  };

  return (
    <section id="contact-form" className="bg-black text-white py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Heading Container */}
        <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
          {/* Accent Indicator Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
              Get In Touch
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-white tracking-tight">
            We are happy to <br className="hidden sm:inline" /> Connect and Help
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Fill out the form below and our counseling experts will reach out to schedule your session.
          </p>
        </div>

        {/* Right Form Container */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
          
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0b5cff]/10 rounded-full blur-3xl pointer-events-none" />

          {/* User Type Switcher Buttons */}
          <div className="flex gap-2 mb-6 bg-slate-950 p-1.5 rounded-xl border border-slate-800 relative z-10">
            <button
              type="button"
              onClick={() => setUserType('student')}
              className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-extrabold rounded-lg transition-all duration-200 cursor-pointer ${
                userType === 'student'
                  ? 'bg-[#0b5cff] text-white shadow-lg border border-blue-400/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setUserType('institute')}
              className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-extrabold rounded-lg transition-all duration-200 cursor-pointer ${
                userType === 'institute'
                  ? 'bg-[#0b5cff] text-white shadow-lg border border-blue-400/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Institute
            </button>
          </div>

          <p className="text-xs font-bold mb-4 tracking-wider text-slate-400 uppercase relative z-10">
            Basic Information ({userType === 'student' ? 'Student' : 'Institute Representative'})
          </p>

          <form onSubmit={handleSubmit} className="space-y-3.5 relative z-10">
            
            {/* Full Name / Institute Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={userType === 'student' ? "Full Name*" : "Contact Person Name*"}
                required
                className="w-full px-4 py-3 text-xs text-white rounded-xl outline-none bg-slate-950 border border-slate-800 placeholder-slate-500 focus:border-[#0b5cff] focus:ring-1 focus:ring-[#0b5cff] transition-all"
              />
              {userType === 'institute' && (
                <input
                  type="text"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                  placeholder="Institution/University Name*"
                  required
                  className="w-full px-4 py-3 text-xs text-white rounded-xl outline-none bg-slate-950 border border-slate-800 placeholder-slate-500 focus:border-[#0b5cff] focus:ring-1 focus:ring-[#0b5cff] transition-all"
                />
              )}
            </div>

            {/* Email & Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                required
                className="w-full px-4 py-3 text-xs text-white rounded-xl outline-none bg-slate-950 border border-slate-800 placeholder-slate-500 focus:border-[#0b5cff] focus:ring-1 focus:ring-[#0b5cff] transition-all"
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number*"
                required
                className="w-full px-4 py-3 text-xs text-white rounded-xl outline-none bg-slate-950 border border-slate-800 placeholder-slate-500 focus:border-[#0b5cff] focus:ring-1 focus:ring-[#0b5cff] transition-all"
              />
            </div>

            {/* Conditional Student Fields */}
            {userType === 'student' ? (
              <>
                {/* Field of Interest & Preferred Study Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <select
                    name="fieldOfInterest"
                    value={formData.fieldOfInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-xs text-slate-300 rounded-xl outline-none bg-slate-950 border border-slate-800 focus:border-[#0b5cff] focus:ring-1 focus:ring-[#0b5cff] transition-all cursor-pointer"
                  >
                    <option value="" className="bg-slate-900 text-slate-400">Field of Interest</option>
                    <option value="engineering" className="bg-slate-900 text-white">Engineering</option>
                    <option value="business" className="bg-slate-900 text-white">Business</option>
                    <option value="it" className="bg-slate-900 text-white">IT & Computer Science</option>
                  </select>

                  <select
                    name="studyLevel"
                    value={formData.studyLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-xs text-slate-300 rounded-xl outline-none bg-slate-950 border border-slate-800 focus:border-[#0b5cff] focus:ring-1 focus:ring-[#0b5cff] transition-all cursor-pointer"
                  >
                    <option value="" className="bg-slate-900 text-slate-400">Preferred Study Level</option>
                    <option value="bachelors" className="bg-slate-900 text-white">Bachelors</option>
                    <option value="masters" className="bg-slate-900 text-white">Masters</option>
                    <option value="phd" className="bg-slate-900 text-white">PhD</option>
                  </select>
                </div>

                {/* Preferred Country & Counseling Mode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <select
                    name="preferredCountry"
                    value={formData.preferredCountry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-xs text-slate-300 rounded-xl outline-none bg-slate-950 border border-slate-800 focus:border-[#0b5cff] focus:ring-1 focus:ring-[#0b5cff] transition-all cursor-pointer"
                  >
                    <option value="" className="bg-slate-900 text-slate-400">Preferred Country</option>
                    <option value="uk" className="bg-slate-900 text-white">United Kingdom</option>
                    <option value="usa" className="bg-slate-900 text-white">USA</option>
                    <option value="australia" className="bg-slate-900 text-white">Australia</option>
                    <option value="germany" className="bg-slate-900 text-white">Germany</option>
                  </select>

                  <select
                    name="counselingMode"
                    value={formData.counselingMode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-xs text-slate-300 rounded-xl outline-none bg-slate-950 border border-slate-800 focus:border-[#0b5cff] focus:ring-1 focus:ring-[#0b5cff] transition-all cursor-pointer"
                  >
                    <option value="" className="bg-slate-900 text-slate-400">Preferred Mode of Counseling</option>
                    <option value="online" className="bg-slate-900 text-white">Online</option>
                    <option value="in-person" className="bg-slate-900 text-white">In-Person</option>
                  </select>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-1 gap-3.5">
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Your Designation (e.g., Admission Officer)"
                  className="w-full px-4 py-3 text-xs text-white rounded-xl outline-none bg-slate-950 border border-slate-800 placeholder-slate-500 focus:border-[#0b5cff] focus:ring-1 focus:ring-[#0b5cff] transition-all"
                />
              </div>
            )}

            {/* Date & Time Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 text-xs text-slate-300 rounded-xl outline-none bg-slate-950 border border-slate-800 focus:border-[#0b5cff] focus:ring-1 focus:ring-[#0b5cff] transition-all [color-scheme:dark]"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 text-xs text-slate-300 rounded-xl outline-none bg-slate-950 border border-slate-800 focus:border-[#0b5cff] focus:ring-1 focus:ring-[#0b5cff] transition-all [color-scheme:dark]"
              />
            </div>

            {/* Select City & Nearest Office */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 text-xs text-slate-300 rounded-xl outline-none bg-slate-950 border border-slate-800 focus:border-[#0b5cff] focus:ring-1 focus:ring-[#0b5cff] transition-all cursor-pointer"
              >
                <option value="" className="bg-slate-900 text-slate-400">Select City</option>
                <option value="lahore" className="bg-slate-900 text-white">Lahore</option>
                <option value="karachi" className="bg-slate-900 text-white">Karachi</option>
                <option value="islamabad" className="bg-slate-900 text-white">Islamabad</option>
                <option value="sheikhupura" className="bg-slate-900 text-white">Sheikhupura</option>
                <option value="sargodha" className="bg-slate-900 text-white">Sargodha</option>
              </select>

              <select
                name="nearestOffice"
                value={formData.nearestOffice}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-xs text-slate-300 rounded-xl outline-none bg-slate-950 border border-slate-800 focus:border-[#0b5cff] focus:ring-1 focus:ring-[#0b5cff] transition-all cursor-pointer"
              >
                <option value="" className="bg-slate-900 text-slate-400">Nearest Office*</option>
                <option value="main-branch" className="bg-slate-900 text-white">Main Branch</option>
                <option value="regional-branch" className="bg-slate-900 text-white">Regional Office</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#0b5cff] hover:bg-blue-600 text-white text-xs font-black py-3.5 px-8 rounded-xl transition duration-200 uppercase tracking-wider shadow-lg border border-blue-400/20 active:scale-95 cursor-pointer"
              >
                Get Free Consultation
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}