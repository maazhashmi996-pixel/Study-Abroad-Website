import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-full">
      {/* Image */}
      <Image
        src="/images/study.webp"
        alt="Study"
        width={1000}
        height={400}
        className="w-full h-125 *:object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/40 via-purple-950/40 to-purple-950/40"></div>

      {/* Text */}
      <div className="absolute left-20 bottom-1/6 -translate-y-1/2 text-white z-10">
        <ul className="list-disc ml-6 space-y-3 text-sm ">
          <li>15+ University and Colleges</li>
          <li>DKK 80,000 Annual Tuition Fee</li>
          <li>3 Year Post Study Visa</li>
        </ul>
      </div>
    </div>
  );
}