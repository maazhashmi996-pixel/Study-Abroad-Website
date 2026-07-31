import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* 1. Responsive Image Container */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[550px]">
        <Image
          src="/logos/study.webp"
          alt="Study in Denmark Hero"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 2. Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/80 via-purple-950/60 to-purple-950/40"></div>

      {/* 3. Responsive Content/Text Position */}
      {/* Updated: items-center ko items-end se badla hai aur bottom padding add ki hai */}
      <div className="absolute inset-0 flex items-end pb-8 sm:pb-16 md:pb-24 px-3 sm:px-12 md:px-20 z-20">
        <div className="max-w-7xl mx-auto w-full">
          <ul className="list-disc ml-2 sm:ml-6 space-y-2 sm:space-y-3 text-white text-sm sm:text-base md:text-xl lg:text-2xl font-medium drop-shadow-md">
            <li>15+ University and Colleges</li>
            <li>DKK 80,000 Annual Tuition Fee</li>
            <li>3 Year Post Study Visa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}