import { FaCheck } from "react-icons/fa";

export default function Content() {
  const tableOfContents = [
    "Admission requirements in Denmark",
    "Cost of studying in Denmark",
    "Scholarships for students in Denmark",
    "Visa requirements in Denmark",
    "Popular courses to Study in Denmark",
    "Post-Study work opportunities",
    "Cost of living in Denmark",
    "Book a meeting with an expert",
  ];

  return (
    <section className="bg-[#43246F] px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-16 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-6 md:pb-10 text-center md:text-left">
          Table Of Content
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {tableOfContents.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 border border-[#522d86] bg-[#391e5e]/50 p-4 sm:p-5 rounded-lg shadow-lg hover:border-amber-500/50 transition duration-300"
            >
              {/* Check Icon Wrapper */}
              <div className="shrink-0 p-2 bg-amber-500 rounded-full flex items-center justify-center text-[#43246f]">
                <FaCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Text */}
              <h4 className="text-amber-500 text-sm sm:text-base md:text-lg font-medium leading-tight">
                {item}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}