"use client";

import { Mail, Phone, Clock } from 'lucide-react';

export default function Consultation() {
  return (
    <div className="w-full font-sans">
      {/* Top Contact Bar */}
      <div className="bg-[#38236B] text-white py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          
          {/* Email Item */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <Mail className="w-6 h-6 text-amber-400" />
            <span className="font-semibold text-sm">Email</span>
            <a 
              href="mailto:study@timesconsultant.com" 
              className="text-xs text-gray-300 hover:text-white transition-colors"
            >
              study@timesconsultant.com
            </a>
          </div>

          {/* Phone Item */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <Phone className="w-6 h-6 text-amber-400" />
            <span className="font-semibold text-sm">Phone</span>
            <a 
              href="tel:+923452066100" 
              className="text-xs text-gray-300 hover:text-white transition-colors"
            >
              +92 345 2066 100
            </a>
          </div>

          {/* Opening Hours Item */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <Clock className="w-6 h-6 text-amber-400" />
            <span className="font-semibold text-sm">Opening hours</span>
            <span className="text-xs text-gray-300">
              Mon–Sat: 11 AM - 07 PM
            </span>
          </div>

        </div>
      </div>

      {/* Main Yellow Form Section */}
      <div className="bg-[#FFB800] py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Headline */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              We are happy to <br />
              Connect and Help
            </h2>
          </div>

          {/* Right Form */}
          <div className="space-y-6 max-w-xl w-full">
            
            {/* Identity Selector Button */}
            <div>
              <p className="text-white text-sm font-semibold mb-2">I’m a</p>
              <button 
                type="button" 
                className="bg-[#38236B] text-white text-sm font-medium px-8 py-2.5 rounded-md shadow-inner"
              >
                Student
              </button>
            </div>

            {/* Form Fields */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <p className="text-white text-sm font-semibold">Basic Information</p>

              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 text-sm rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38236B]"
              />

              {/* Email & Mobile Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 text-sm rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38236B]"
                />
                <input
                  type="tel"
                  placeholder="Mobile"
                  className="w-full px-4 py-3 text-sm rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38236B]"
                />
              </div>

              {/* Field of Interest & Preferred Study Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 text-sm rounded-md bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38236B]">
                  <option value="">Field of Interest</option>
                  <option value="engineering">Engineering</option>
                  <option value="business">Business</option>
                  <option value="it">Computer Science / IT</option>
                </select>

                <select className="w-full px-4 py-3 text-sm rounded-md bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38236B]">
                  <option value="">Preferred Study Level</option>
                  <option value="undergraduate">Bachelors</option>
                  <option value="postgraduate">Masters</option>
                  <option value="phd">PhD</option>
                </select>
              </div>

              {/* Preferred Country & Mode of Counseling */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 text-sm rounded-md bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38236B]">
                  <option value="">Preferred Country</option>
                  <option value="uk">United Kingdom</option>
                  <option value="usa">United States</option>
                  <option value="australia">Australia</option>
                  <option value="denmark">Denmark</option>
                </select>

                <select className="w-full px-4 py-3 text-sm rounded-md bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38236B]">
                  <option value="">Preferred Mode of Counseling</option>
                  <option value="online">Online Video Call</option>
                  <option value="in-person">In-Office Visit</option>
                </select>
              </div>

              {/* Date & Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  placeholder="Date"
                  className="w-full px-4 py-3 text-sm rounded-md bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38236B]"
                />
                <select className="w-full px-4 py-3 text-sm rounded-md bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38236B]">
                  <option value="">Select your slot</option>
                  <option value="morning">Morning (11:00 AM - 02:00 PM)</option>
                  <option value="afternoon">Afternoon (02:00 PM - 05:00 PM)</option>
                  <option value="evening">Evening (05:00 PM - 07:00 PM)</option>
                </select>
              </div>

              {/* Select City & Nearest Office */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 text-sm rounded-md bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38236B]">
                  <option value="">Select City</option>
                  <option value="karachi">Karachi</option>
                  <option value="lahore">Lahore</option>
                  <option value="islamabad">Islamabad</option>
                </select>

                <select className="w-full px-4 py-3 text-sm rounded-md bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38236B]">
                  <option value="">Nearest Office*</option>
                  <option value="head-office">Main Branch</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-black hover:bg-gray-900 text-white font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full transition-all shadow-md"
                >
                  GET FREE CONSULTATION
                </button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  );
}