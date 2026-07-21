import Image from "next/image";


export default function hero() {
  return (
   
    <div className="absolute h-full bg-gradient-blue-300 to-transparent">
      <Image
        src="/images/study.webp"
        alt="Study"
        width={1000}
        height={400}
          className="w-full h-125 object-cover"
      />
      <div className="absolute left-20 top-1/2 -translate-y-1/2 text-black pt-0 ">
      <ul className="list-disc ml-6 space-y-3 text-sm">
      <li>15+ University and Colleges</li>
      <li>DKK 80,000 Annual Tuition Fee</li>
      <li>3 Year Post Study Visa</li>
      </ul>
      </div>

    </div>
 
  )
}


