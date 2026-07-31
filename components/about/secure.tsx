import Image from "next/image";

export default function Secure() {
  return (
    <section className="bg-amber-500 text-white px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">

        {/* Text Content Block */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-6 w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#43246f] leading-tight">
            Secure Your Future With Times Consultant
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed max-w-2xl">
            Unlock your future with guaranteed guidance and secure admission in 3000+ world-class universities through our expert counseling.
          </p>

          <button className="px-6 sm:px-8 py-3 bg-[#43246f] hover:bg-amber-400 text-white hover:text-[#43246f] border-2 border-[#43246f] font-semibold text-sm sm:text-base rounded-full transition-all duration-300 shadow-md active:scale-95">
            Book a free Consultation
          </button>
        </div>

        {/* Image Block */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/about/Secure.jpg"
            alt="Secure Your Future"
            width={800}
            height={700}
            className="w-full max-w-[650px] h-auto object-cover rounded-2xl shadow-md"
          />
        </div>

      </div>
    </section>
  );
}