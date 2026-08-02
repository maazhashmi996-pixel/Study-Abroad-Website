"use client";



import FAQ from '@/components/services/faq'
import Process from '@/components/services/process'
import WhyChooseUs from '@/components/services/whyChoose'
import VisaHero from '@/components/services/heroServices'
import Second from '@/components/services/second';
import StudyVisa from '@/components/services/study-visa';

function page() {
  return (
    <div>
        <VisaHero/>
        <Second/>
        <StudyVisa/>
     <WhyChooseUs/>
     <Process/>
 <FAQ/>
    

    </div>
  )
}

export default page
