"use client";
import { FaChevronDown } from "react-icons/fa";

export default function Get() {
  const dropdownOptions = {
    cities: [
      "Abbottabad", "Bahawalpur", "Dubai", "Faisalabad", "Gujranwala",
      "Gujrat", "Hyderabad", "Islamabad", "Karachi", "Lahore", "Multan",
      "Peshawar", "Quetta", "Rawalpindi", "Sialkot",
    ],
    offices: [
      "Lahore", "Islamabad", "Karachi", "Faisalabad", "Multan",
      "Peshawar", "Sialkot", "Rawalpindi", "Hyderabad", "Gujranwala",
    ],
    slots: [
      "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM",
      "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
      "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM",
    ],
    countries: [
      "Australia", "Canada", "Denmark", "Finland", "France", "Germany",
      "Hungary", "Ireland", "Italy", "Malaysia", "Malta", "Netherlands",
      "New Zealand", "Norway", "Poland", "Portugal", "Spain", "Sweden",
      "Switzerland", "Turkey", "United Arab Emirates (UAE)",
      "United Kingdom (UK)", "United States (USA)",
    ],
    modeOfCounseling: ["Online", "Phone", "In Person"],
    fieldsOfInterest: [
      "Accounting & Finance", "Architecture", "Artificial Intelligence",
      "Arts & Design", "Aviation", "Business Administration",
      "Computer Science", "Cyber Security", "Data Science", "Dentistry",
      "Economics", "Education", "Engineering", "Environmental Science",
      "Fashion Design", "Graphic Design", "Hospitality & Tourism",
      "Human Resource Management", "Information Technology (IT)", "Law",
      "Marketing", "Mass Communication", "Mechanical Engineering", "Medicine",
      "Nursing", "Pharmacy", "Psychology", "Public Health",
      "Software Engineering", "Veterinary Science",
    ],
    preferredStudy: [
      "Advanced Diploma", "Associates Degree", "Bachelors Degree",
      "Certificate", "College Qualification", "Diploma", "Doctoral Degree",
      "Foundation", "Graduate Certificate", "Graduate Diploma",
      "Higher National Diploma", "Masters By Research",
    ],
  };

  return (
    <div className="w-full bg-[#f8f9fa] py-12 px-4 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3b1d5c] text-center mb-8">
          Get a call-back within 24 hours
        </h2>

        <form className="space-y-4">
          {/* Full Name - Single Field */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-[#f2f4f7] text-gray-700 placeholder-gray-400 px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#3b1d5c]/20 border border-transparent transition"
            />
          </div>

          {/* Email Address & Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#f2f4f7] text-gray-700 placeholder-gray-400 px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#3b1d5c]/20 border border-transparent transition"
            />
            <input
              type="tel"
              placeholder="Mobile"
              className="w-full bg-[#f2f4f7] text-gray-700 placeholder-gray-400 px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#3b1d5c]/20 border border-transparent transition"
            />
          </div>

          {/* Field of Interest & Preferred Study Level */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative flex items-center bg-[#f2f4f7] rounded-xl">
              <select className="w-full bg-transparent text-gray-700 px-4 py-3.5 rounded-xl outline-none appearance-none cursor-pointer pr-10">
                <option value="">Field of Interest</option>
                {dropdownOptions.fieldsOfInterest.map((field) => (
                  <option key={field} value={field}>
                    {field}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 text-gray-500 text-xs pointer-events-none" />
            </div>

            <div className="relative flex items-center bg-[#f2f4f7] rounded-xl">
              <select className="w-full bg-transparent text-gray-700 px-4 py-3.5 rounded-xl outline-none appearance-none cursor-pointer pr-10">
                <option value="">Preferred Study Level</option>
                {dropdownOptions.preferredStudy.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 text-gray-500 text-xs pointer-events-none" />
            </div>
          </div>

          {/* Preferred Country & Preferred Mode of Counseling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative flex items-center bg-[#f2f4f7] rounded-xl">
              <select className="w-full bg-transparent text-gray-700 px-4 py-3.5 rounded-xl outline-none appearance-none cursor-pointer pr-10">
                <option value="">Preferred Country</option>
                {dropdownOptions.countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 text-gray-500 text-xs pointer-events-none" />
            </div>

            <div className="relative flex items-center bg-[#f2f4f7] rounded-xl">
              <select className="w-full bg-transparent text-gray-700 px-4 py-3.5 rounded-xl outline-none appearance-none cursor-pointer pr-10">
                <option value="">Preferred Mode of Counseling</option>
                {dropdownOptions.modeOfCounseling.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 text-gray-500 text-xs pointer-events-none" />
            </div>
          </div>

          {/* Date & Select your slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              className="w-full bg-[#f2f4f7] text-gray-700 placeholder-gray-400 px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#3b1d5c]/20 border border-transparent transition"
            />

            <div className="relative flex items-center bg-[#f2f4f7] rounded-xl">
              <select className="w-full bg-transparent text-gray-700 px-4 py-3.5 rounded-xl outline-none appearance-none cursor-pointer pr-10">
                <option value="">Select your slot</option>
                {dropdownOptions.slots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 text-gray-500 text-xs pointer-events-none" />
            </div>
          </div>

          {/* Select City & Nearest Office */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative flex items-center bg-[#f2f4f7] rounded-xl">
              <select className="w-full bg-transparent text-gray-700 px-4 py-3.5 rounded-xl outline-none appearance-none cursor-pointer pr-10">
                <option value="">Select City</option>
                {dropdownOptions.cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 text-gray-500 text-xs pointer-events-none" />
            </div>

            <div className="relative flex items-center bg-[#f2f4f7] rounded-xl">
              <select className="w-full bg-transparent text-gray-700 px-4 py-3.5 rounded-xl outline-none appearance-none cursor-pointer pr-10">
                <option value="">Nearest Office*</option>
                {dropdownOptions.offices.map((office) => (
                  <option key={office} value={office}>
                    {office}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 text-gray-500 text-xs pointer-events-none" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="bg-[#f1b317] hover:bg-[#e0a30f] text-[#3b1d5c] font-black text-xs sm:text-sm tracking-wider uppercase px-10 py-4 rounded-full shadow-md transition-all active:scale-95"
            >
              GET FREE CONSULTATION
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}