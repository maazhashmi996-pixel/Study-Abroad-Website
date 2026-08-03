"use client";

import HeroSection from '@/components/eligibility/check'
import ContactForm from '@/components/eligibility/contact'
import EndPage from '@/components/eligibility/end';

function page() {
  return (
    <div>
        <HeroSection/>
      <ContactForm/>
      <EndPage/>
    </div>
  )
}

export default page
