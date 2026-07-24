import { FaArrowDown } from "react-icons/fa";


export default  function get() {
const dropdownOptions ={
   cities:[
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
  modeOfCounciling:[
    "online",
    "Phone",
    "In Person"
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
 preferredStudy:[
    "Preferred Study Level",
    "Advanced Diploma",
    "Associates Degree",
    "Bachlers Degree",
    "Certificate",
    "Collage Qualification",
    "Diploma",
    "Doctral Degree",
    "Foundation",
    "Graduate Certificate",
    "Graduate Diploma",
    "Higher National Diploma",
    "Masters By Research",

  ]
}

  return (
    <div className="flex flex-col items-center justify-center border border-gray-100  px-30 py-10">
      <h1 className="text-2xl text-[#43246f] font-bold">Get a call-back within 24 hours
</h1>
<div  className="w-140 p-7 bg-white rounded-xl shadow-xl  ">
    <form >
        <div >
        <input type="text" placeholder="FullName" className="w-full gap-2 p-3 border m-3 border-gray-200 rounded-sm" />
        </div>
        <div className="flex">
            <input type="text" placeholder="Eamil Adress
        " className=" p-3 m-3 border-gray-200 border rounded-sm"/>
            <input type="text" placeholder="Mobile
        "  className=" p-3 m-3 border-gray-200 border rounded-sm"/>
        </div>
        <div className="flex">
          <div className="flex items-center px-15 py-3 m-3 border border-gray-200 rounded-sm relative">
       <select
        className="w-full bg-transparent outline-none border-none appearance-none cursor-pointer"
  >
       <option value="">Field OF Interest</option>

        {dropdownOptions.fieldsOfInterest.map((fieldofInterest) => (
        <option key={fieldofInterest} value={fieldofInterest}>
        {fieldofInterest}
         </option>
    ))}
  </select>

  <FaArrowDown className="absolute right-4 text-gray-500 pointer-events-none" />
</div>
       <div className="flex items-center px-15 py-3 m-3 border border-gray-200 rounded-sm relative">
       <select
        className="w-full bg-transparent outline-none border-none appearance-none cursor-pointer"
  >
       <option value="">Preferred Study Levels</option>

        {dropdownOptions.preferredStudy.map((preferredStudy) => (
        <option key={preferredStudy} value={preferredStudy}>
        {preferredStudy}
         </option>
    ))}
  </select>

  <FaArrowDown className="absolute right-4 text-gray-500 pointer-events-none" />
</div>
        </div>
       
        <div className="flex">
           <div className="flex items-center px-15 py-3 m-3 border border-gray-200 rounded-sm relative">
       <select
        className="w-full bg-transparent outline-none border-none appearance-none cursor-pointer"
  >
       <option value="">Preferred Study Levels</option>

        {dropdownOptions.countries.map((countries) => (
        <option key={countries} value={countries}>
        {countries}
         </option>
    ))}
  </select>

  <FaArrowDown className="absolute right-4 text-gray-500 pointer-events-none" />
</div>
      <div className="flex items-center px-15 py-3 m-3 border border-gray-200 rounded-sm relative">
       <select
        className="w-full bg-transparent outline-none border-none appearance-none cursor-pointer"
  >
       <option value="">Preferred Study Levels</option>

        {dropdownOptions.preferredStudy.map((preferredStudy) => (
        <option key={preferredStudy} value={preferredStudy}>
        {preferredStudy}
         </option>
    ))}
  </select>

  <FaArrowDown className="absolute right-4 text-gray-500 pointer-events-none" />
</div>
        </div>
        <div className="flex">
       <div className="flex items-center px-15 py-3 m-3 border border-gray-200 rounded-sm relative">
       <select
        className="w-full bg-transparent outline-none border-none appearance-none cursor-pointer"
  >
       <option value="">
    Preferred Mode Of Counciling
       </option>

        {dropdownOptions.offices.map((office) => (
        <option key={office} value={office}>
        {office}
         </option>
    ))}
  </select>

  <FaArrowDown className="absolute right-4 text-gray-500 pointer-events-none" />
</div>

     <div className="flex items-center px-15 py-3 m-3 border border-gray-200 rounded-sm relative">
       <select
        className="w-full bg-transparent outline-none border-none appearance-none cursor-pointer"
  >
       <option value="">Nearest Office</option>

        {dropdownOptions.offices.map((office) => (
        <option key={office} value={office}>
        {office}
         </option>
    ))}
  </select>

  <FaArrowDown className="absolute right-4 text-gray-500 pointer-events-none" />
</div>
        </div>
        <div className="flex items-center " >
            <div className="flex items-center px-15 py-3 m-3 border border-gray-200 rounded-sm relative">
           <select   className="w-full bg-transparent outline-none border-none appearance-none cursor-pointer">
<option value="">Select city</option>
{
    dropdownOptions.cities.map((city)=>(
        <option key={city} value={city}>
            {city}
        </option>
    ))
}
           </select>
            <FaArrowDown className="absolute right-4 text-gray-500 pointer-events-none" />
           </div>
       <div className="flex items-center px-15 py-3 m-3 border border-gray-200 rounded-sm relative">
       <select
        className="w-full bg-transparent outline-none border-none appearance-none cursor-pointer"
  >
       <option value="">Nearest Office</option>

        {dropdownOptions.offices.map((office) => (
        <option key={office} value={office}>
        {office}
         </option>
    ))}
  </select>

  <FaArrowDown className="absolute right-4 text-gray-500 pointer-events-none" />
</div>
        </div>
    </form>
    <button className="bg-amber-500 rounded-full py-3 px-7 flex justify-end text-white hover:bg-black">GET FREE CONSULTATION</button>
</div>
    </div>
  )
}


