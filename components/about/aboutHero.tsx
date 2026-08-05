import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-6 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-[#43246f] font-bold leading-tight text-2xl sm:text-4xl lg:text-5xl">
              Empowering Your Academic Journey With Expert Student Visa Guidance
            </h1>

            <p className="mt-4 text-gray-700 text-sm sm:text-base lg:text-xl leading-relaxed">
              Since April 2004, D.Education Zone has been among the leading
              Study Abroad Consultants in Pakistan, connecting prospective
              students with suitable universities and study destinations. We
              act as a direct link between students and international
              institutions, with a clear focus on honest guidance and practical
              study abroad support.
            </p>

            <button className="mt-6 bg-[#F5A623] hover:bg-[#E69512] transition-all duration-300 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-lg active:scale-95">
              Get Started
            </button>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center w-full">
            <Image
              src="/images/about/consultants.jpg"
              alt="About Hero"
              width={650}
              height={600}
              priority
              className="w-full max-w-[650px] h-auto rounded-2xl object-cover shadow-sm"
            />
          </div>

        </div>
      </div>
    </section>
  );
}