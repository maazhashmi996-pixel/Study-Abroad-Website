import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Courses() {
  return (
    <section className={`${poppins.className} bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 text-[#43246f]`}>
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Main Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold border-b-2 border-[#43246f]/10 pb-3 text-center md:text-left">
          Popular Courses In Denmark
        </h1>

        {/* Responsive List Container */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          <li className="bg-[#43246f]/5 p-4 sm:p-5 rounded-xl border border-[#43246f]/10 hover:shadow-md transition">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-800">
              <strong className="text-[#43246f] font-semibold block sm:inline mb-1 sm:mb-0">
                Business & Economics:{" "}
              </strong>
              Well-known universities with business programs include Aalborg University, Aarhus University, and Copenhagen Business School.
            </p>
          </li>

          <li className="bg-[#43246f]/5 p-4 sm:p-5 rounded-xl border border-[#43246f]/10 hover:shadow-md transition">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-800">
              <strong className="text-[#43246f] font-semibold block sm:inline mb-1 sm:mb-0">
                Engineering:
              </strong>
              Pioneers in sustainability teaching and research are DTU, University of Copenhagen, and Aarhus University.
            </p>
          </li>

          <li className="bg-[#43246f]/5 p-4 sm:p-5 rounded-xl border border-[#43246f]/10 hover:shadow-md transition">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-800">
              <strong className="text-[#43246f] font-semibold block sm:inline mb-1 sm:mb-0">
                Renewable Energy and Sustainability:{" "}
              </strong>
              Aarhus University, Aalborg University, and Technical University of Denmark (DTU) are all excellent in different areas of engineering.
            </p>
          </li>

          <li className="bg-[#43246f]/5 p-4 sm:p-5 rounded-xl border border-[#43246f]/10 hover:shadow-md transition">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-800">
              <strong className="text-[#43246f] font-semibold block sm:inline mb-1 sm:mb-0">
                Medical and Life Sciences:{" "}
              </strong>
              Prestigious medical and life science programs are available at University of Copenhagen, Aarhus University, and Southern Denmark University.
            </p>
          </li>

          <li className="bg-[#43246f]/5 p-4 sm:p-5 rounded-xl border border-[#43246f]/10 hover:shadow-md transition md:col-span-2 lg:col-span-1">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-800">
              <strong className="text-[#43246f] font-semibold block sm:inline mb-1 sm:mb-0">
                Design and Creative Industries:{" "}
              </strong>
              Well-known organizations in the subject of design include the Royal Danish Academy of Fine Arts, KEA—Copenhagen School of Design and Technology, and Kolding School of Design.
            </p>
          </li>

        </ul>

      </div>
    </section>
  );
}