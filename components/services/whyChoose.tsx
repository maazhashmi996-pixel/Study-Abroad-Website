"use client";
import Image from "next/image";

function WhyChoose() {
  return ( 
    /* Mobile par px-4, tablet par px-8 aur large screens par px-20 */
    <div className="bg-[#43246f] text-white flex flex-col items-center gap-4 sm:gap-6 px-4 sm:px-8 md:px-16 lg:px-20 py-8 sm:py-12">
      
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center">
        Client Testimonials
      </h1>
      
      <p className="text-sm sm:text-base text-gray-200 text-center">
        What They're Talking
      </p>

      {/* Mobile par column (flex-col) aur Desktop (md:) par side-by-side (flex-row) */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-6xl mt-4">
        
        {/* Image Container: Aspect ratio maintain rakhega taake sides cut na ho */}
        <div className="relative w-full md:w-1/2 aspect-[16/9] md:aspect-auto md:h-80 rounded-xl overflow-hidden shrink-0">
          <Image 
            src="/images/services/Tailored-Services.jpg" 
            alt="Client Testimonial"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover md:object-contain rounded-xl"
          />
        </div>

        {/* Text Box */}
        <div className="w-full md:w-1/2 bg-white text-[#43246f] p-6 sm:p-8 rounded-xl shadow-lg flex items-center">
          <p className="text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eveniet quae corporis placeat similique dolorum laborum inventore mollitia, temporibus necessitatibus quam quia sunt hic officia tempora ex expedita libero nesciunt?
          </p>
        </div>

      </div>
    </div>
  );
}

export default WhyChoose;