"use client"

import Admission from "@/components/study-destination/admission";
import Courses from "@/components/study-destination/courses";
import Denmark from "@/components/study-destination/denmark";
import Expert from "@/components/study-destination/expert";
import Hero from "@/components/study-destination/hero";
import Post from "@/components/study-destination/post";
import Talk from "@/components/study-destination/talk";
import Visa from "@/components/study-destination/visa";
import Content from "@/components/study-destination/content";
import Cost from "@/components/study-destination/cost";
import Internship from "@/components/study-destination/internship";
import Application from "@/components/study-destination/application";
import Get from "@/components/study-destination/get";



export default function StudyDestinations() {
  return (
    <main>
<Hero/>
           <Denmark/>
           <Content/>
           <Internship/>
           <Admission/>
          <Get/>
           <Application/>
           <Cost/>
           <Courses/>
           <Visa/>
           <Post/>
           <Expert/>
           <Talk/>
    </main>
  );    
}