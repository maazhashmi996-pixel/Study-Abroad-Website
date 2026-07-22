import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col bg-[#43246f] text-white px-20 py-15 mx-auto">
        <div className="flex justify-between mb-10">
        <div className="gap-5 text-white flex flex-col">
      <h1 className="w-70">Times Consultant – Pakistan’s #1 Study Abroad Consultant,
        <br /><span> Trusted Since 2004. Official Rep of 3000+ Global Universities.</span></h1>
      <div>
          <Image src="/images/logo.png" alt="logo" width={330} height={180} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-2xl">Services</h2>
        <ul>
            <div className="flex items-center gap-3">
            <FaArrowRight className="text-yellow-600"/>
            <li>Study Abroad</li>
            </div>
            <div className="flex items-center gap-3">
            <FaArrowRight className="text-yellow-600"/>
            <li>Accomodations</li>
            </div>
            <div className="flex items-center gap-3">
            <FaArrowRight className="text-yellow-600"/>
            <li>Languages</li>
            </div>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-2xl">Useful Links</h2>
        <ul>
            <div className="flex items-center gap-3">
            <FaArrowRight className="text-yellow-600"/>
            <li>Study Destination</li>
            </div>
            <div className="flex items-center gap-3">
            <FaArrowRight className="text-yellow-600"/>
            <li>About</li>
            </div>
            <div className="flex items-center gap-3">
            <FaArrowRight className="text-yellow-600"/>
            <li>Blogs</li>
            </div>
            <div className="flex items-center gap-3"> 
            <FaArrowRight className="text-yellow-600"/>
            <li>Event</li>
            </div>
            <div className="flex items-center gap-3">
            <FaArrowRight className="text-yellow-600"/>
            <li>Student Guide</li>
            </div>
            <div className="flex items-center gap-3">
            <FaArrowRight className="text-yellow-600"/>
            <li>Brochure</li>
            </div>
            
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-2xl">Subscribe Our Newsletter</h2>
        <ul>
            <li><a href="tel:+924567987"></a>
            <span>+92345678987</span></li>
            <li><a href="mailto:study@timeconsultant.com"></a>
            <span>study@timeconsultant.com</span></li>
        </ul>
        <label htmlFor=""  className="  justify-evenly flex rounded-full bg-black text-white ">
            <input type="email" placeholder="Enter Your Email" className=" rounded-full flex-col border "/>
            <button className="bg-yellow-600 px-3 py-2 text-white justify-end rounded-full">Submit</button>
        </label>
      </div>
      </div>
      <div className=" border-b border-white">
        <h1 className="text-3xl">Agent Quality Framework ( AQF) Compliance</h1>
        <p>Studying is committed to upholding the highest standards in international student recruitment. We adhere to the principles of the Agent Quality Framework (AQF), ensuring ethical practices, transparency, and professionalism in all our services. Our agents are trained and certified to provide accurate and reliable guidance to students.</p>
        <div className="flex justify-between border-b border-white">
            <img src="/images/f.png" alt="f" height={80}  width={200}/>
            <img src="/images/l.png" alt="l" height={80}  width={200}/>
            <img src="/images/m.png" alt="m" height={80}  width={200}/>
            <img src="/images/v.png" alt="v" height={80}  width={200}/>
            <img src="/images/year-award.png" alt="year-award" height={80}  width={200}/>
            <img src="/images/Worlds-No1-Partner.png" alt="f" height={80}  width={200}/>
        </div>
        
      </div>
    </div>
  )
}


