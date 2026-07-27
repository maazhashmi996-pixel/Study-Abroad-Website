import { FaUser,FaAward, FaCheck, FaNetworkWired, FaNewspaper, FaCertificate } from "react-icons/fa"

export default function Consultant() {
    const boxes =[
        {
            years:"22 years",
            title:"Experienced Mentors",
            icon:<FaUser/>,
            paragraph:"2.2 M students who trusted us with their future and we delivered with our expert guidance."

        },{
        years:65,
        title:"Study Destinations Covered ",
        icon:<FaCertificate/>,
        paragraph:"Pursue your education in the world’s best study destinations. Explore the world while you study."
        },
        
        {
        years:40,
        title:"Offices Across the Globe",
        icon:<FaAward/>,
        paragraph:"Local presence with global reach to serve you better through our established global network."
        },
       {
        years:1000,
        title:"University Partners ",
        icon:<FaCheck/>,
        paragraph:"Direct partnerships with top-ranked institutions worldwide to get you placed in your dream university."
        },
       {
        years:50,
        title:"Strong Alumni Network",
        icon:<FaNewspaper/>,
        paragraph:"Local presence with global reach to serve you better through our established global network."
        },
       {
        years:'2.2M+',
        title:"Students Counseled ",
        icon:<FaNetworkWired/>,
        paragraph:"2.2 M students who trusted us with their future and we delivered with our expert guidance."
        },
    ]
  return (
    <div className="flex flex-col px-20 py-10 text-white  
    bg-[#43246f]">
      
      <h1 className="text-4xl mb-10">Why Choose Times Consultant?
</h1>
<div className=" grid grid-cols-3 gap-6 ">
    {boxes.map((boxes,index)=>(
        <div key={index}className="flex flex-col border border-white rounded-2xl bg-[#61389b] hover:bg-amber-500 transition-colours duration-500  p-7 gap-5  flex-wrap">
            <h3 className="font-bold text-2xl">{boxes.years}+</h3>
            <div className="flex   justify-between">
            <h3 className="text-xl font-bold">{boxes.title}</h3>
            <h3 className="h-15 w-15  items-center justify-center flex rounded-full transform text-3xl bg-amber-500">{boxes.icon}</h3>
            </div>
            <h3>{boxes.paragraph}</h3>
           
        </div>
    ))}
</div>

    </div>
  )
}


