import Image from "next/image";

export default function Introduction() {
  return (
    <section className="bg-white max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 items-center">
      
      {/* Left Column: Media & Experience Card Layout */}
      <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-4 items-center justify-center">
        
        {/* Top/Left Illustration Container */}
        <div className="relative w-full max-w-[280px] aspect-square">
          <Image
            src="/images/about/Academic-Journey.jpg"
            alt="Times Consultant Discussion"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Stack Container for Orange Box & Bottom Illustration */}
        <div className="flex flex-col gap-4 w-full max-w-[280px]">
          
          {/* Orange Experience Badge */}
          <div className="bg-[#f5a623] text-white rounded-2xl p-6 flex items-center justify-center gap-3 shadow-sm">
            <span className="text-4xl lg:text-5xl font-extrabold tracking-tight">22+</span>
            <span className="text-sm lg:text-base font-bold leading-snug uppercase">
              Years Of<br />experience
            </span>
          </div>

          {/* Bottom Illustration Container */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/images/about/Empowering.jpg"
              alt="Empowering Education Journey"
              fill
              className="object-contain"
            />
          </div>

        </div>
      </div>

      {/* Right Column: Text Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2a1747] mb-6 tracking-tight">
          About Times Consultant
        </h2>

        <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-4">
          Our mission is to facilitate a seamless selection process, guiding
          students to choose the best foreign education institute tailored
          to their academic requirements.
        </p>
        
        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
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