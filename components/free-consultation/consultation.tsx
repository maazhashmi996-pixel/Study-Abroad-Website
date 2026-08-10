"use client";

import { Mail, Phone, Clock } from "lucide-react";

export default function Consultation() {
  return (
    <div className="w-full font-sans text-black">
      {/* Top Contact Bar - Black Theme with Red Icons */}
      <div className="bg-black text-white py-8 px-4 border-b-2 border-[#ef4444]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          
          {/* Email Item */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <Mail className="w-6 h-6 text-[#ef4444]" />
            <span className="font-black text-sm tracking-wider uppercase">Email</span>
            <a
              href="mailto:study@timesconsultant.com"
              className="text-xs text-gray-300 hover:text-[#0b5cff] transition-colors font-medium"
            >
              study@timesconsultant.com
            </a>
          </div>

          {/* Phone Item */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <Phone className="w-6 h-6 text-[#ef4444]" />
            <span className="font-black text-sm tracking-wider uppercase">Phone</span>
            <a
              href="tel:+923452066100"
              className="text-xs text-gray-300 hover:text-[#0b5cff] transition-colors font-medium"
            >
              +92 345 2066 100
            </a>
          </div>

          {/* Opening Hours Item */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <Clock className="w-6 h-6 text-[#ef4444]" />
            <span className="font-black text-sm tracking-wider uppercase">Opening Hours</span>
            <span className="text-xs text-gray-300 font-medium">
              Mon–Sat: 11 AM - 07 PM
            </span>
          </div>

        </div>
      </div>

      {/* Main Consultation Section - Electric Blue Background */}
      <div className="bg-[#0b5cff] py-16 px-6 md:px-12 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Headline */}
          <div>
            <div className="inline-block bg-[#ef4444] text-white text-xs font-black px-4 py-1.5 uppercase tracking-widest mb-4">
              Free Assistance
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight">
              We are happy to <br />
              <span className="text-black">Connect and Help</span>
            </h2>
            <p className="mt-4 text-white/80 font-medium max-w-md text-sm md:text-base">
              Book your personalized study abroad counseling session with our expert advisors today.
            </p>
          </div>

          {/* Right Form */}
          <div className="space-y-6 max-w-xl w-full bg-black p-8 sm:p-10 border-t-8 border-[#ef4444] shadow-2xl">
            
            {/* Identity Selector Button */}
            <div>
              <p className="text-white text-xs font-black uppercase tracking-wider mb-2">I’m a</p>
              <button
                type="button"
                className="bg-[#0b5cff] text-white text-xs font-black uppercase tracking-widest px-8 py-3 hover:bg-[#ef4444] transition-colors"
              >
                Student
              </button>
            </div>

            {/* Form Fields */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <p className="text-white text-xs font-black uppercase tracking-wider">Basic Information</p>

              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 text-sm font-semibold bg-white text-black placeholder-gray-400 outline-none border-2 border-transparent focus:border-[#0b5cff] transition-all"
              />

              {/* Email & Mobile Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 text-sm font-semibold bg-white text-black placeholder-gray-400 outline-none border-2 border-transparent focus:border-[#0b5cff] transition-all"
                />
                <input
                  type="tel"
                  placeholder="Mobile"
                  className="w-full px-4 py-3 text-sm font-semibold bg-white text-black placeholder-gray-400 outline-none border-2 border-transparent focus:border-[#0b5cff] transition-all"
                />
              </div>

              {/* Field of Interest & Preferred Study Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 text-sm font-semibold bg-white text-black outline-none border-2 border-transparent focus:border-[#0b5cff] transition-all">
                  <option value="">Field of Interest</option>
                  <option value="engineering">Engineering</option>
                  <option value="business">Business</option>
                  <option value="it">Computer Science / IT</option>
                </select>

                <select className="w-full px-4 py-3 text-sm font-semibold bg-white text-black outline-none border-2 border-transparent focus:border-[#0b5cff] transition-all">
                  <option value="">Preferred Study Level</option>
                  <option value="undergraduate">Bachelors</option>
                  <option value="postgraduate">Masters</option>
                  <option value="phd">PhD</option>
                </select>
              </div>

              {/* Preferred Country & Mode of Counseling */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 text-sm font-semibold bg-white text-black outline-none border-2 border-transparent focus:border-[#0b5cff] transition-all">
                  <option value="">Preferred Country</option>
                  <option value="uk">United Kingdom</option>
                  <option value="usa">United States</option>
                  <option value="australia">Australia</option>
                  <option value="denmark">Denmark</option>
                </select>

                <select className="w-full px-4 py-3 text-sm font-semibold bg-white text-black outline-none border-2 border-transparent focus:border-[#0b5cff] transition-all">
                  <option value="">Preferred Mode of Counseling</option>
                  <option value="online">Online Video Call</option>
                  <option value="in-person">In-Office Visit</option>
                </select>
              </div>

              {/* Date & Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full px-4 py-3 text-sm font-semibold bg-white text-black outline-none border-2 border-transparent focus:border-[#0b5cff] transition-all"
                />
                <select className="w-full px-4 py-3 text-sm font-semibold bg-white text-black outline-none border-2 border-transparent focus:border-[#0b5cff] transition-all">
                  <option value="">Select your slot</option>
                  <option value="morning">Morning (11:00 AM - 02:00 PM)</option>
                  <option value="afternoon">Afternoon (02:00 PM - 05:00 PM)</option>
                  <option value="evening">Evening (05:00 PM - 07:00 PM)</option>
                </select>
              </div>

              {/* Select City & Nearest Office */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 text-sm font-semibold bg-white text-black outline-none border-2 border-transparent focus:border-[#0b5cff] transition-all">
                  <option value="">Select City</option>
                  <option value="karachi">Karachi</option>
                  <option value="lahore">Lahore</option>
                  <option value="islamabad">Islamabad</option>
                </select>

                <select className="w-full px-4 py-3 text-sm font-semibold bg-white text-black outline-none border-2 border-transparent focus:border-[#0b5cff] transition-all">
                  <option value="">Nearest Office*</option>
                  <option value="head-office">Main Branch</option>
                </select>
              </div>

              {/* Submit Button - Red Accent */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#ef4444] hover:bg-white hover:text-black text-white font-black text-xs tracking-widest uppercase py-4 transition-colors"
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