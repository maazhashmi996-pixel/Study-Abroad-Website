"use client";

import { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { CalendarCheck, ArrowRight } from "lucide-react";

export default function Expert() {
  // Set to false so the popup stays hidden on page load
  const [isOpen, setIsOpen] = useState(false);

  const dropdownOptions = {
    cities: [
      "Abbottabad",
      "Bahawalpur",
      "Dubai",
      "Faisalabad",
      "Gujranwala",
      "Gujrat",
      "Hyderabad",
      "Islamabad",
      "Karachi",
      "Lahore",
      "Multan",
      "Peshawar",
      "Quetta",
      "Rawalpindi",
      "Sialkot",
    ],

    offices: [
      "Lahore",
      "Islamabad",
      "Karachi",
      "Faisalabad",
      "Multan",
      "Peshawar",
      "Sialkot",
      "Rawalpindi",
      "Hyderabad",
      "Gujranwala",
    ],

    slots: [
      "12:00 PM",
      "12:30 PM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],

    countries: [
      "Australia",
      "Canada",
      "Denmark",
      "Finland",
      "France",
      "Germany",
      "Hungary",
      "Ireland",
      "Italy",
      "Malaysia",
      "Malta",
      "Netherlands",
      "New Zealand",
      "Norway",
      "Poland",
      "Portugal",
      "Spain",
      "Sweden",
      "Switzerland",
      "Turkey",
      "United Arab Emirates (UAE)",
      "United Kingdom (UK)",
      "United States (USA)",
    ],

    modeOfCounseling: [
      "Online",
      "Phone",
      "In Person",
    ],

    fieldsOfInterest: [
      "Accounting & Finance",
      "Architecture",
      "Artificial Intelligence",
      "Arts & Design",
      "Aviation",
      "Business Administration",
      "Computer Science",
      "Cyber Security",
      "Data Science",
      "Dentistry",
      "Economics",
      "Education",
      "Engineering",
      "Environmental Science",
      "Fashion Design",
      "Graphic Design",
      "Hospitality & Tourism",
      "Human Resource Management",
      "Information Technology (IT)",
      "Law",
      "Marketing",
      "Mass Communication",
      "Mechanical Engineering",
      "Medicine",
      "Nursing",
      "Pharmacy",
      "Psychology",
      "Public Health",
      "Software Engineering",
      "Veterinary Science",
    ],

    preferredStudy: [
      "Advanced Diploma",
      "Associates Degree",
      "Bachelors Degree",
      "Certificate",
      "College Qualification",
      "Diploma",
      "Doctoral Degree",
      "Foundation",
      "Graduate Certificate",
      "Graduate Diploma",
      "Higher National Diploma",
      "Masters By Research",
    ],
  };

  return (
    <>
      {/* ==================================================
          NORMAL EXPERT SECTION / PAGE
      ================================================== */}

      <section className="relative overflow-hidden bg-[#020617] py-16 sm:py-20">

        {/* Decorative Background */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#0b5cff]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto px-4 gap-4 sm:gap-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <CalendarCheck className="w-4 h-4" />

            <span>Get Guidance Today</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center">
            Book A Meeting
            <span className="text-[#0b5cff]">
              {" "}With An Expert
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl text-center">
            Danish universities are research-focused and highly ranked,
            but application deadlines are strict. Connect with our expert
            advisors to secure your seat.
          </p>

          {/* ==================================================
              APPLY NOW BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="mt-4 group inline-flex items-center gap-3 bg-[#0b5cff] hover:bg-red-600 text-white font-bold text-sm sm:text-base py-4 px-8 rounded-full shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>APPLY NOW</span>

            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

        </div>
      </section>


      {/* ==================================================
          POPUP
      ================================================== */}

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-5 sm:py-8">

          {/* ==================================================
              POPUP BOX
          ================================================== */}

          <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-5 sm:p-7 md:p-8">

            {/* ==================================================
                CLOSE BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
              aria-label="Close"
            >
              <FaTimes />
            </button>


            {/* ==================================================
                FORM TITLE
            ================================================== */}

            <h2 className="pr-10 text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-6 sm:mb-8 text-[#43246f]">
              Get a call-back within 24 hours
            </h2>


            {/* ==================================================
                FORM
            ================================================== */}

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-3.5 sm:space-y-4"
            >

              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-[#f2f4f7] text-gray-800 placeholder-gray-400 px-4 py-3 sm:py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#43246f]/30 text-sm sm:text-base border border-transparent transition"
              />


              {/* Email + Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-[#f2f4f7] text-gray-800 placeholder-gray-400 px-4 py-3 sm:py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#43246f]/30 text-sm sm:text-base border border-transparent transition"
                />

                <input
                  type="tel"
                  placeholder="Mobile"
                  required
                  className="w-full bg-[#f2f4f7] text-gray-800 placeholder-gray-400 px-4 py-3 sm:py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#43246f]/30 text-sm sm:text-base border border-transparent transition"
                />

              </div>


              {/* Field of Interest + Preferred Study */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">

                <SelectBox
                  placeholder="Field of Interest"
                  options={dropdownOptions.fieldsOfInterest}
                />

                <SelectBox
                  placeholder="Preferred Study Level"
                  options={dropdownOptions.preferredStudy}
                />

              </div>


              {/* Country + Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">

                <SelectBox
                  placeholder="Preferred Country"
                  options={dropdownOptions.countries}
                />

                <SelectBox
                  placeholder="Preferred Mode of Counseling"
                  options={dropdownOptions.modeOfCounseling}
                />

              </div>


              {/* Date + Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">

                <input
                  type="date"
                  className="w-full bg-[#f2f4f7] text-gray-800 px-4 py-3 sm:py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#43246f]/30 text-sm sm:text-base border border-transparent transition"
                />

                <SelectBox
                  placeholder="Select your slot"
                  options={dropdownOptions.slots}
                />

              </div>


              {/* City + Office */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">

                <SelectBox
                  placeholder="Select City"
                  options={dropdownOptions.cities}
                />

                <SelectBox
                  placeholder="Nearest Office*"
                  options={dropdownOptions.offices}
                />

              </div>


              {/* Submit Button */}
              <div className="pt-3 sm:pt-4 flex justify-center">

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#F5A623] hover:bg-[#E69512] text-white font-black text-xs sm:text-sm tracking-wider uppercase px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  GET FREE CONSULTATION
                </button>

              </div>

            </form>

          </div>
        </div>
      )}
    </>
  );
}


/* ==================================================
    REUSABLE SELECT BOX
================================================== */

function SelectBox({
  placeholder,
  options,
}: {
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="relative">

      <select
        defaultValue=""
        className="w-full bg-[#f2f4f7] text-gray-800 px-4 py-3 sm:py-3.5 rounded-xl outline-none appearance-none cursor-pointer pr-10 text-sm sm:text-base border border-transparent"
      >

        <option value="" disabled hidden>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}

      </select>

      <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none" />

    </div>
  );
}