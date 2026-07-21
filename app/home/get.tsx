

export default  function get() {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-100  px-30 py-10">
      <h1 className="text-2xl text-[#43246f] font-bold">Get a call-back within 24 hours
</h1>
<div  className="w-140 p-7 bg-white rounded-xl shadow-xl  ">
    <form >
        <div >
        <input type="text" placeholder="FullName" className="w-full gap-2 p-3 border m-3 border-gray-200 rounded-sm" />
        </div>
        <div className="flex">
            <input type="text" placeholder="Eamil Adress
        " className=" p-3 m-3 border-gray-200 border rounded-sm"/>
            <input type="text" placeholder="Mobile
        "  className=" p-3 m-3 border-gray-200 border rounded-sm"/>
        </div>
        <div className="flex">
            <div>
            <input type="text" placeholder="Field of Interest
        "  className=" p-3 m-3 border-gray-200 border rounded-sm"   />
        
        </div>
            <input type="text" placeholder="Preferred Study Level
        "  className=" p-3 m-3 border-gray-200 border rounded-sm"/>
        </div>
        <div className="flex">
            <input type="text" placeholder="Preferred Country
        "  className=" p-3 m-3 border-gray-200 border rounded-sm"/>
            <input type="text" placeholder="Preferred Mode Of Counsiling
        " className=" p-3 m-3 border border-gray-200 rounded-sm"/>
        </div>
        <div className="flex">
            <input type="text" placeholder="Data
        "  className=" p-3 m-3 border-gray-200 rounded-sm"/>
            <input type="text"placeholder="Select Your Slot
        " className=" p-3 m-3 border border-gray-200 rounded-sm"/>
        </div>
        <div className="flex  " >
            <input type="text" placeholder="Select City
        "  className=" p-3 m-3 border border-gray-200 rounded-sm"/>
            <input type="text" placeholder="Nearest Office
        " className=" p-3 m-3 border border-gray-200 rounded-sm"/>
        </div>
    </form>
    <button className="bg-yellow-400 rounded-full py-3 px-7 flex justify-end text-white hover:bg-black">GET FREE CONSULTATION</button>
</div>
    </div>
  )
}


