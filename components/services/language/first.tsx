  import Image from "next/image";
  
  
  function first() {
    return (
     
        
  <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4">
        <Image
          src="/images/services/lang-scaled.jpg"
          alt="Study Abroad"
          width={800}
          height={400}
          className="w-full  object-cover"
          priority
        />
      </div>
    </section>
    
    )
  }
  
  export default first
  
  