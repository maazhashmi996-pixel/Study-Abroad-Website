import Image from "next/image";

export default function Introduction() {
  return (
    <section className="py-16 bg-white">
      <div className="container  px-20 ">
        <div className="flex gap-12  justify-between items-center">
          
          {/* Left Column: Media & Experience Card */}
          <div className=" flex ">
            
            {/* Top Illustration Container */}
            <div className="relative w-full  mb-6">
              <Image
                src="/images/about/Academic-Journey.jpg"
                alt="Times Consultant Discussion"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div>
            {/* Orange Experience Badge */}
            <div className="bg-[#f5a623] text-white p-6 rounded-2xl w-full max-w-[340px] shadow-md mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold tracking-tight">22+</span>
                <span className="text-xl font-bold leading-tight uppercase">
                  Years Of<br />experience
                </span>
              </div>
            </div>

            {/* Bottom Illustration Container */}
            <div className="relative w-full max-w-[320px] aspect-[4/3]">
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
          <div className="lg:col-span-7">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#2a1747] mb-6 tracking-tight">
              About Times Consultant
            </h2>

            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              Our mission is to facilitate a seamless selection process, guiding
              students to choose the best foreign education institute tailored
              to their academic requirements.
            </p>
            <p className="text-gray-700 text-xl leading-relaxed">
              Our vision at TIMES is to set new benchmarks in the education
              consultancy field, upholding performance excellence. Drawing from
              real-world experiences in problem-solving and equipped with practical
              insights into the ever-changing landscape of admissions, visa processes,
              and the dynamic education and career industry, we empower our clients
              to navigate and overcome the challenges inherent in pursuing education
              abroad.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}