"use client";

import {  BookOpen, Star } from "lucide-react";
import { Wallet, Award, CheckCircle2 ,GraduationCap,FileText} from "lucide-react";

import { FaChevronDown } from "react-icons/fa";
export default function Finland2() {
    
  
     

  const requirements = [
    {
      title: "Undergraduates",
      description: "Your degree needs to be equivalent to the Danish upper secondary school graduation certificate.",
      icon: <GraduationCap className="w-5 h-5" />,
      // Red accent on icon box only
      iconColor: "text-red-600",
      iconBg: "bg-red-50 border-red-100",
    },
    {
      title: "Graduate",
      description: "Usually, a valid Bachelor’s degree or its equivalent is necessary to qualify for a Master's program.",
      icon: <BookOpen className="w-5 h-5" />,
      // Red accent on icon box only
      iconColor: "text-red-600",
      iconBg: "bg-red-50 border-red-100",
    },
    {
      title: "Academic Performance",
      description: "Exhibit a strong level of academic performance. This might entail reaching minimum GPA criteria.",
      icon: <Star className="w-5 h-5" />,
      iconColor: "text-red-600",
      iconBg: "bg-red-50 border-red-100",
    },
    {
      title: "Certain Requirements",
      description: "Specific programs may have field-related requirements or course prerequisites for admission.",
      icon: <Award className="w-5 h-5" />,
      iconColor: "text-red-600",
      iconBg: "bg-red-50 border-red-100",
    },
  ];
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
      "Australia", "Canada", "Finland", "Finland", "France", "Germany",
      "Finland", "Ireland", "Italy", "Malaysia", "Malta", "Netherlands",
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



  const documents = [
    "Online application form",
    "Official transcripts",
    "Standardized test scores",
    "Motivation letter",
    "Letter of recommendation",
    "Portfolio (if required)",
    "Proof of financial resources",
  ];


  return (
    <div>
    <section className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 md:mb-14 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
             <span className="w-8 h-[2px] bg-red-500"></span>
             <span className="text-red-600 text-xs uppercase tracking-widest font-bold">Eligibility Criteria</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a233d] tracking-tight mb-4">
            Admission Requirements <span className="text-[#0b5cff]">In Finland</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed">
            Finland maintains high academic standards. To ensure a successful application, students must meet specific educational backgrounds and performance metrics.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {/* Sub-heading */}
          <div className="flex items-center gap-3 border-l-4 border-red-500 pl-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a233d]">
              Background in Education
            </h3>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {requirements.map((item, index) => (
              <div 
                key={index} 
                className="group p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="relative z-10 flex flex-col items-start">
                  
                  {/* ICON ONLY RED ACCENT */}
                  <div className={`w-12 h-12 border ${item.iconBg} ${item.iconColor} rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  
                  {/* Title text stays original dark color */}
                  <h4 className="font-bold text-lg sm:text-xl text-[#0b5cff] mb-3">
                    {item.title}:
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA / Note */}
        <div className="mt-12 p-6 bg-[#1a233d] rounded-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white text-sm md:text-base font-medium">
              <span className="text-red-500 mr-2">●</span> 
              Confused about GPA conversion? Our experts can help you calculate your score.
            </p>
            <button className="px-6 py-3 bg-[#0b5cff] hover:bg-red-600 text-white rounded-full text-sm font-bold transition-colors">
               Check My Eligibility
            </button>
        </div>

      </div>
    </section>
       <section className="w-full bg-[#f8f9fa] py-8 sm:py-12 px-3 sm:px-6 md:px-8 flex justify-center items-center">
          <div className="w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg border border-gray-100">
            
            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold  text-center mb-6 sm:mb-8 leading-tight">
              Get a call-back within 24 hours
            </h2>
    
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5 sm:space-y-4">
              
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full bg-[#f2f4f7] text-gray-800 placeholder-gray-400 px-4 py-3 sm:py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#3b1d5c]/30 text-sm sm:text-base border border-transparent transition"
                />
              </div>
    
              {/* Email Address & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-[#f2f4f7] text-gray-800 placeholder-gray-400 px-4 py-3 sm:py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#3b1d5c]/30 text-sm sm:text-base border border-transparent transition"
                />
                <input
                  type="tel"
                  placeholder="Mobile"
                  required
                  className="w-full bg-[#f2f4f7] text-gray-800 placeholder-gray-400 px-4 py-3 sm:py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#3b1d5c]/30 text-sm sm:text-base border border-transparent transition"
                />
              </div>
    
              {/* Field of Interest & Preferred Study Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="relative flex items-center bg-[#f2f4f7] rounded-xl focus-within:ring-2 focus-within:ring-[#3b1d5c]/30">
                  <select defaultValue="" className="w-full bg-transparent text-gray-800 px-4 py-3 sm:py-3.5 rounded-xl outline-none appearance-none cursor-pointer pr-10 text-sm sm:text-base">
                    <option value="" disabled hidden>Field of Interest</option>
                    {dropdownOptions.fieldsOfInterest.map((field) => (
                      <option key={field} value={field}>
                        {field}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className="absolute right-4 text-gray-500 text-xs pointer-events-none" />
                </div>
    
                <div className="relative flex items-center bg-[#f2f4f7] rounded-xl focus-within:ring-2 focus-within:ring-[#3b1d5c]/30">
                  <select defaultValue="" className="w-full bg-transparent text-gray-800 px-4 py-3 sm:py-3.5 rounded-xl outline-none appearance-none cursor-pointer pr-10 text-sm sm:text-base">
                    <option value="" disabled hidden>Preferred Study Level</option>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="relative flex items-center bg-[#f2f4f7] rounded-xl focus-within:ring-2 focus-within:ring-[#3b1d5c]/30">
                  <select defaultValue="" className="w-full bg-transparent text-gray-800 px-4 py-3 sm:py-3.5 rounded-xl outline-none appearance-none cursor-pointer pr-10 text-sm sm:text-base">
                    <option value="" disabled hidden>Preferred Country</option>
                    {dropdownOptions.countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className="absolute right-4 text-gray-500 text-xs pointer-events-none" />
                </div>
    
                <div className="relative flex items-center bg-[#f2f4f7] rounded-xl focus-within:ring-2 focus-within:ring-[#3b1d5c]/30">
                  <select defaultValue="" className="w-full bg-transparent text-gray-800 px-4 py-3 sm:py-3.5 rounded-xl outline-none appearance-none cursor-pointer pr-10 text-sm sm:text-base">
                    <option value="" disabled hidden>Preferred Mode of Counseling</option>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <input
                  type="text"
                  placeholder="Date"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  className="w-full bg-[#f2f4f7] text-gray-800 placeholder-gray-400 px-4 py-3 sm:py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-[#3b1d5c]/30 text-sm sm:text-base border border-transparent transition"
                />
    
                <div className="relative flex items-center bg-[#f2f4f7] rounded-xl focus-within:ring-2 focus-within:ring-[#3b1d5c]/30">
                  <select defaultValue="" className="w-full bg-transparent text-gray-800 px-4 py-3 sm:py-3.5 rounded-xl outline-none appearance-none cursor-pointer pr-10 text-sm sm:text-base">
                    <option value="" disabled hidden>Select your slot</option>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="relative flex items-center bg-[#f2f4f7] rounded-xl focus-within:ring-2 focus-within:ring-[#3b1d5c]/30">
                  <select defaultValue="" className="w-full bg-transparent text-gray-800 px-4 py-3 sm:py-3.5 rounded-xl outline-none appearance-none cursor-pointer pr-10 text-sm sm:text-base">
                    <option value="" disabled hidden>Select City</option>
                    {dropdownOptions.cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className="absolute right-4 text-gray-500 text-xs pointer-events-none" />
                </div>
    
                <div className="relative flex items-center bg-[#f2f4f7] rounded-xl focus-within:ring-2 focus-within:ring-[#3b1d5c]/30">
                  <select defaultValue="" className="w-full bg-transparent text-gray-800 px-4 py-3 sm:py-3.5 rounded-xl outline-none appearance-none cursor-pointer pr-10 text-sm sm:text-base">
                    <option value="" disabled hidden>Nearest Office*</option>
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
              <div className="pt-3 sm:pt-4 flex justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#0b5cff] hover:bg-red-600 text-white font-black text-xs sm:text-sm tracking-wider uppercase px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-md transition-all active:scale-95"
                >
                  GET FREE CONSULTATION
                </button>
              </div>
            </form>
    
          </div>
        </section>
           <section className="bg-slate-50/70 border-y border-slate-100 px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <span className="w-8 h-[2px] bg-red-500" />
            <span className="text-red-600 text-xs uppercase tracking-widest font-bold">
              Checklist
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a233d] tracking-tight mb-3">
            Required <span className="text-[#0b5cff]">Application Documents</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed">
            Ensure you have all the necessary documentation ready before starting your admission process for Finland.
          </p>
        </div>

        {/* Responsive Document Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 bg-white border border-slate-200/80 p-4 sm:p-5 rounded-2xl shadow-sm hover:border-[#0b5cff] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Red Accent Icon Box */}
              <div className="shrink-0 w-10 h-10 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <FileText className="w-5 h-5" />
              </div>

              {/* Document Name */}
              <div className="flex items-center justify-between w-full">
                <span className="text-[#1a233d] font-semibold text-sm sm:text-base leading-snug">
                  {doc}
                </span>
                <CheckCircle2 className="w-4 h-4 text-slate-300 group-hover:text-[#0b5cff] transition-colors shrink-0 ml-2" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
      <section className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-14 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <span className="w-8 h-[2px] bg-red-500" />
            <span className="text-red-600 text-xs uppercase tracking-widest font-bold">
              Financial Information
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a233d] tracking-tight">
            Cost & <span className="text-[#0b5cff]">Scholarships</span>
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Card: Cost of Studying */}
          <div className="bg-slate-50 border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            
            {/* Header with Red Accent Icon */}
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200/80">
              <div className="w-12 h-12 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a233d]">
                Cost of Studying In Finland
              </h3>
            </div>

            <div className="flex flex-col gap-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <h2 className="text-xl text-blue-500 font-bold">Tuition Fee</h2>
              <p>
Tuition costs for overseas students in undergraduate programs typically range from €5,000 to €18,000 per year. For master’s programs, the usual range is €11,000 to €20,000. There are several notable outliers, with some prestigious programs costing significantly more.              </p>
            
              <h2 className="text-xl text-blue-500 font-bold">Living Cost</h2>
              <p>
Living expenditures are depending on your lifestyle preferences and the city in which you reside, living expenses might vary from €8,000 to €12,000 annually.            
</p>
              <h2 className="text-xl text-blue-500 font-bold">Accommodation</h2>
              <p>
Usually, the largest portion of your living costs goes towards this. While, compared to private rents, student living and shared flats may be more economical.            
</p>
            </div>
          </div>

          {/* Right Card: Scholarships */}
          <div className="bg-slate-50 border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            
            {/* Header with Red Accent Icon */}
            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-200/80">
              <div className="w-12 h-12 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a233d]">
                Scholarships For International Students
              </h3>
            </div>
            {/* List of Scholarships */}
            <ul className="list-disc pl-5 space-y-2 text-slate-800 text-base sm:text-lg font-medium">
             <li>Finnish Government Scholarship Pool: Covers travel, accommodation, and monthly allowance for postgraduate students</li>
             <li>University of Helsinki Scholarship: Covers 50%-100% tuition for outstanding Master’s students (non-EU/EEA)</li>
             <li>Aalto University Scholarship: Merit-based, covers partial to full tuition for international Master’s students</li>
             <li>Tampere University Scholarship: 50%-100% tuition waiver for high-achieving non-EU/EEA students</li>
             <li>EDUFI Fellowship: Finnish National Agency scholarship for doctoral and postdoctoral researchers</li>
             <li>HEC Finland Scholarship (For Pakistanis): Higher Education Commission Pakistan offers funded programs for Finnish universities</li>
             <li>CIMO Fellowships: Covers monthly stipend for postgraduate students studying or researching in Finland</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
    </div>
  );
}