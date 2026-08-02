"use client";

export default function Visa() {
  const visaRequirements = [
    "Letter of admission from an educational institution",
    "Details of the academic program",
    "Valid passport",
    "Passport-style photos",
    "Complete ST1 form",
    "Proof of English or Danish language proficiency",
    "Proof of financial resources to live in Denmark",
    "Evidence of application fee payment",
    "Travel Insurance",
  ];

  return (
    <section className="bg-[#43246f] px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-14 text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-8">
        
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold border-b border-purple-400/20 pb-3 text-center md:text-left">
          Student Visa Requirements In Denmark
        </h1>  

        {/* Responsive Grid List */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base md:text-lg">
          {visaRequirements.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 bg-[#522d86]/50 p-3.5 sm:p-4 rounded-xl border border-purple-400/20 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-amber-400 shrink-0" />
              <span className="text-gray-100">{item}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}