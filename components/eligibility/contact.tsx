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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', { userType, ...formData });
  };

  return (
    <section id="contact-form" className="bg-[#3B2063] text-white py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Heading Container */}
        <div className="lg:col-span-5 space-y-3 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            We are happy to <br className="hidden sm:inline" /> Connect and Help
          </h2>
          <p className="text-xs sm:text-sm text-purple-200 max-w-lg mx-auto lg:mx-0">
            Fill out the form below and our counseling experts will reach out to schedule your session.
          </p>
        </div>

        {/* Right Form Container */}
        <div className="lg:col-span-7 bg-[#3B2063] rounded-lg">
          
          {/* User Type Switcher Buttons */}
          <div className="flex gap-2 mb-6">
            <button
              type="button"
              onClick={() => setUserType('student')}
              className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-bold rounded-md transition-all duration-200 ${
                userType === 'student'
                  ? 'bg-amber-400 text-[#3B2063] shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setUserType('institute')}
              className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-bold rounded-md transition-all duration-200 ${
                userType === 'institute'
                  ? 'bg-amber-400 text-[#3B2063] shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Institute
            </button>
          </div>

          <p className="text-xs font-semibold mb-3 tracking-wide text-purple-200">
            Basic Information ({userType === 'student' ? 'Student' : 'Institute Representative'})
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            
            {/* Full Name / Institute Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={userType === 'student' ? "Full Name*" : "Contact Person Name*"}
                required
                className="w-full px-3.5 py-2.5 text-xs text-gray-900 rounded outline-none bg-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400"
              />
              {userType === 'institute' && (
                <input
                  type="text"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                  placeholder="Institution/University Name*"
                  required
                  className="w-full px-3.5 py-2.5 text-xs text-gray-900 rounded outline-none bg-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400"
                />
              )}
            </div>

            {/* Email & Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                required
                className="w-full px-3.5 py-2.5 text-xs text-gray-900 rounded outline-none bg-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number*"
                required
                className="w-full px-3.5 py-2.5 text-xs text-gray-900 rounded outline-none bg-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Conditional Student Fields */}
            {userType === 'student' ? (
              <>
                {/* Field of Interest & Preferred Study Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <select
                    name="fieldOfInterest"
                    value={formData.fieldOfInterest}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs text-gray-700 rounded outline-none bg-white focus:ring-2 focus:ring-amber-400 cursor-pointer"
                  >
                    <option value="">Field of Interest</option>
                    <option value="engineering">Engineering</option>
                    <option value="business">Business</option>
                    <option value="it">IT & Computer Science</option>
                  </select>

                  <select
                    name="studyLevel"
                    value={formData.studyLevel}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs text-gray-700 rounded outline-none bg-white focus:ring-2 focus:ring-amber-400 cursor-pointer"
                  >
                    <option value="">Preferred Study Level</option>
                    <option value="bachelors">Bachelors</option>
                    <option value="masters">Masters</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>

                {/* Preferred Country & Counseling Mode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <select
                    name="preferredCountry"
                    value={formData.preferredCountry}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs text-gray-700 rounded outline-none bg-white focus:ring-2 focus:ring-amber-400 cursor-pointer"
                  >
                    <option value="">Preferred Country</option>
                    <option value="uk">United Kingdom</option>
                    <option value="usa">USA</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                  </select>

                  <select
                    name="counselingMode"
                    value={formData.counselingMode}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs text-gray-700 rounded outline-none bg-white focus:ring-2 focus:ring-amber-400 cursor-pointer"
                  >
                    <option value="">Preferred Mode of Counseling</option>
                    <option value="online">Online</option>
                    <option value="in-person">In-Person</option>
                  </select>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-1 gap-3">
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Your Designation (e.g., Admission Officer)"
                  className="w-full px-3.5 py-2.5 text-xs text-gray-900 rounded outline-none bg-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400"
                />
              </div>
            )}

            {/* Date & Time Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs text-gray-700 rounded outline-none bg-white focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs text-gray-700 rounded outline-none bg-white focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Select City & Nearest Office */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs text-gray-700 rounded outline-none bg-white focus:ring-2 focus:ring-amber-400 cursor-pointer"
              >
                <option value="">Select City</option>
                <option value="lahore">Lahore</option>
                <option value="karachi">Karachi</option>
                <option value="islamabad">Islamabad</option>
                <option value="sheikhupura">Sheikhupura</option>
                <option value="sargodha">Sargodha</option>
              </select>

              <select
                name="nearestOffice"
                value={formData.nearestOffice}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2.5 text-xs text-gray-700 rounded outline-none bg-white focus:ring-2 focus:ring-amber-400 cursor-pointer"
              >
                <option value="">Nearest Office*</option>
                <option value="main-branch">Main Branch</option>
                <option value="regional-branch">Regional Office</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white text-xs font-bold py-3 px-8 rounded-full transition duration-200 uppercase tracking-wider shadow-md active:scale-95"
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