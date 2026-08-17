"use client";

import {  BookOpen, Star } from "lucide-react";
import { Wallet, Award, CheckCircle2 ,GraduationCap,FileText} from "lucide-react";
import { FaEuroSign, FaCalendarAlt, FaGraduationCap, FaHome } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
export default function Poland2() {
    
  

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
      "Australia", "Canada", "Poland", "Finland", "France", "Germany",
      "Poland", "Ireland", "Italy", "Malaysia", "Malta", "Netherlands",
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
            Admission Requirements <span className="text-[#0b5cff]">In Poland</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed">
            Poland maintains high academic standards. To ensure a successful application, students must meet specific educational backgrounds and performance metrics.
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
            Ensure you have all the necessary documentation ready before starting your admission process for Poland.
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
     <section className="bg-slate-50/80 text-slate-900 py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column: Cost of Studying */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm border-l-4 border-l-[#0b5cff] flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-blue-50 text-[#0b5cff] border border-blue-100">
                    <FaEuroSign className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Cost of Studying in <span className="text-[#0b5cff]">Poland</span>
                  </h2>
                </div>
    
                {/* Tuition Fees */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                    Tuition Fees
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Poland remains one of the most budget-friendly EU countries for international students.
                  </p>
                  <ul className="space-y-2 bg-slate-50 border border-slate-200/60 rounded-xl p-4 text-sm text-slate-700 font-medium">
                    <li className="flex justify-between items-center border-b border-slate-200/50 pb-2">
                      <span>Bachelor’s Programs</span>
                      <span className="font-bold text-slate-900">€2,000 – €6,000 / year</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-slate-200/50 py-2">
                      <span>Master’s Programs</span>
                      <span className="font-bold text-slate-900">€2,500 – €8,000 / year</span>
                    </li>
                    <li className="flex justify-between items-center pt-2">
                      <span>Medical & Dentistry Programs</span>
                      <span className="font-bold text-slate-900">€12,000 – €18,000 / year</span>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-500 mt-2 italic">
                    Tuition fees depend on the university and program, but overall costs are significantly lower than in Western Europe.
                  </p>
                </div>
    
                {/* Living Costs */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-700 inline-block" />
                    Living Costs
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Living in Poland is affordable by European standards, especially outside Budapest.
                  </p>
                  
                  <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 text-sm text-slate-700 space-y-2">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Estimated Monthly Expenses
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                      <div className="flex justify-between bg-white p-2.5 rounded-lg border border-slate-200/50">
                        <span className="text-slate-600">Accommodation</span>
                        <span className="font-semibold text-slate-900">€300 – €500</span>
                      </div>
                      <div className="flex justify-between bg-white p-2.5 rounded-lg border border-slate-200/50">
                        <span className="text-slate-600">Food & Groceries</span>
                        <span className="font-semibold text-slate-900">€180 – €250</span>
                      </div>
                      <div className="flex justify-between bg-white p-2.5 rounded-lg border border-slate-200/50">
                        <span className="text-slate-600">Transportation</span>
                        <span className="font-semibold text-slate-900">€30 – €50</span>
                      </div>
                      <div className="flex justify-between bg-white p-2.5 rounded-lg border border-slate-200/50">
                        <span className="text-slate-600">Utilities & Internet</span>
                        <span className="font-semibold text-slate-900">€80 – €120</span>
                      </div>
                      <div className="flex justify-between bg-white p-2.5 rounded-lg border border-slate-200/50 sm:col-span-2">
                        <span className="text-slate-600">Personal Expenses</span>
                        <span className="font-semibold text-slate-900">€80 – €150</span>
                      </div>
                    </div>
                  </div>
    
                  <div className="mt-4 p-3.5 bg-blue-50/60 border border-blue-100 rounded-xl flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">
                      Approximate Monthly Total
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-[#0b5cff]">
                      €700 – €1,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Right Column: Intakes & Scholarships */}
            <div className="space-y-8 flex flex-col justify-between">
              
              {/* Study Intakes */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm border-l-4 border-l-red-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-red-50 text-red-600 border border-red-100">
                    <FaCalendarAlt className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Study Intakes in <span className="text-red-500">Poland</span>
                  </h2>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Hungarian universities usually offer two main intakes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="p-3.5 bg-slate-50 border border-slate-200/60 rounded-xl">
                    <p className="text-xs font-bold text-red-500 uppercase tracking-wider">Fall Intake</p>
                    <p className="text-sm font-bold text-slate-900 mt-1">September</p>
                    <p className="text-xs text-slate-500">Main intake for most programs</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200/60 rounded-xl">
                    <p className="text-xs font-bold text-[#0b5cff] uppercase tracking-wider">Spring Intake</p>
                    <p className="text-sm font-bold text-slate-900 mt-1">February</p>
                    <p className="text-xs text-slate-500">Available for selected courses</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 italic">
                  Students can apply early to have sufficient time for documentation and visa processing.
                </p>
              </div>
    
              {/* Scholarships */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm border-l-4 border-l-slate-700 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
                      <FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Scholarships for <span className="text-slate-700">Students</span>
                    </h2>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Poland offers well-known scholarship opportunities for international students:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-4">
                    <li className="flex items-start gap-2.5 p-2.5 bg-slate-50 border border-slate-200/50 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      <span><strong>Stipendium Hungaricum Scholarship</strong> (Very popular among international students)</span>
                    </li>
                    <li className="flex items-start gap-2.5 p-2.5 bg-slate-50 border border-slate-200/50 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-[#0b5cff] mt-1.5 shrink-0" />
                      <span><strong>University-specific merit scholarships</strong></span>
                    </li>
                    <li className="flex items-start gap-2.5 p-2.5 bg-slate-50 border border-slate-200/50 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-slate-700 mt-1.5 shrink-0" />
                      <span><strong>Government-funded bilateral scholarships</strong></span>
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                  Scholarships are competitive. <strong>Stipendium Hungaricum</strong> can cover tuition fees, accommodation support, and a monthly stipend, making it a strong option for eligible students.
                </p>
              </div>
    
            </div>
    
          </div>
        </section>
    </div>
  );
}