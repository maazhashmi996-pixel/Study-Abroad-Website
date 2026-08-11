"use client";

import Image from "next/image";

function WhyChoose() {
  return (
    <section className="bg-black text-white flex flex-col items-center gap-4 sm:gap-6 px-4 sm:px-8 md:px-16 lg:px-20 py-12 sm:py-16 border-t border-slate-900">
      
      {/* Badge & Headings */}
      <div className="text-center">
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0b5cff] bg-slate-900 px-4 py-1.5 rounded-full inline-block mb-3 border border-slate-800">
          Testimonials <span className="text-red-500">•</span>
        </span>
        <h2 className="font-black text-2xl sm:text-3xl md:text-4xl text-center text-white tracking-tight">
          Client Testimonials
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 text-center mt-2">
          What They're Saying About Us
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-6xl mt-4">
        
        {/* Image Container */}
        <div className="relative w-full md:w-1/2 aspect-[16/9] md:aspect-auto md:h-80 rounded-2xl overflow-hidden shrink-0 border border-slate-800 bg-slate-900 shadow-2xl p-2">
          <Image 
            src="/images/services/services.png" 
            alt="Client Testimonial"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover md:object-contain rounded-xl"
          />
        </div>

        {/* Text Box */}
        <div className="w-full md:w-1/2 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl flex items-center relative overflow-hidden group hover:border-[#0b5cff]/40 transition-colors">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0b5cff]" />
          <p className="text-xs sm:text-sm md:text-base leading-relaxed font-normal text-slate-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eveniet quae corporis placeat similique dolorum laborum inventore mollitia, temporibus necessitatibus quam quia sunt hic officia tempora ex expedita libero nesciunt?
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;