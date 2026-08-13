"use client";

import Adventages from '@/components/home/adventages'
import Blogs from '@/components/home/blogs'
import Choose from '@/components/home/choose'
import FAQPage from '@/components/home/faqPage';
import HeroSection from '@/components/home/hero'
import Meet from '@/components/home/meet';
import Popular from '@/components/home/popular'
import Share from '@/components/home/share'
import Speak from '@/components/home/speak'
import Update from '@/components/home/update'

function page() {
  return (
    <div>
      <HeroSection/>
      <Blogs/>
      <Share/>
      <Adventages/>
      <Choose/>
      <FAQPage/>
      <Popular/>
      <Meet/>
      <Speak/>
   <Update/>
</div>
  )
}

export default page
