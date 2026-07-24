import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-5">
      <div className="max-w-7xl mx-auto px-3 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-5 items-center">

          {/* Left Side */}
          <div>

            <h1 className="text-[#43246f] font-bold leading-tight text-4xl md:text-5xl">
              Empowering Your Academic
              <br />
              Journey With Expert Student
              <br />
              Visa Guidance
            </h1>

            <p className="mt-8 text-gray-700 text-lg leading-10">
              Since April 2004, Times Consultant has been among the
              leading Study Abroad Consultants in Pakistan,
              connecting prospective students with suitable
              universities and study destinations. We act as a direct
              link between students and international institutions,
              with a clear focus on honest guidance and practical
              study abroad support.
            </p>

            <button className="mt-10 bg-[#F5A623] hover:bg-[#E69512] transition-all duration-300 text-white px-10 py-4 rounded-full font-semibold">
              Get Started
            </button>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <Image
              src="/images/about/consultants.jpg"
              alt="About Hero"
              width={650}
              height={600}
              className="w-full max-w-[650px]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}