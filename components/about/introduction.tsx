import Image from "next/image";

export default function Introduction() {
  return (
    <section className="bg-white max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
      
      {/* Left Column: Media & Experience Card Layout */}
      <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-4 items-center justify-center">
        
        {/* Top/Left Illustration Container */}
        <div className="relative w-full max-w-[280px] sm:max-w-[240px] md:max-w-[280px] aspect-square rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/images/about/Academic-Journey.jpg"
            alt="D.Education Zone Discussion"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Stack Container for Orange Box & Bottom Illustration */}
        <div className="flex flex-col gap-4 w-full max-w-[280px] sm:max-w-[240px] md:max-w-[280px]">
          
          {/* Orange Experience Badge */}
          <div className="bg-[#f5a623] text-white rounded-2xl p-5 sm:p-6 flex items-center justify-center gap-3 shadow-sm">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">22+</span>
            <span className="text-xs sm:text-sm lg:text-base font-bold leading-snug uppercase">
              Years Of<br />experience
            </span>
          </div>

          {/* Bottom Illustration Container */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/about/Empowering.jpg"
              alt="Empowering Education Journey"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>

      {/* Right Column: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2a1747] mb-4 sm:mb-6 tracking-tight">
          About D.Education Zone
        </h2>

        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
          Our mission is to facilitate a seamless selection process, guiding
          students to choose the best foreign education institute tailored
          to their academic requirements.
        </p>
        
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          Our vision at TIMES is to set new benchmarks in the education
          consultancy field, upholding performance excellence. Drawing from
          real-world experiences in problem-solving and equipped with practical
          insights into the ever-changing landscape of admissions, visa processes,
          and the dynamic education and career industry, we empower our clients
          to navigate and overcome the challenges inherent in pursuing education
          abroad.
        </p>
      </div>

    </section>
  );
}