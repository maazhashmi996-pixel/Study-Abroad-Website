"use client";

import Admission from "@/components/study-destination/denmark/admission";
import Courses from "@/components/study-destination/denmark/courses";
import Expert from "@/components/study-destination/denmark/expert";
import Hero from "@/components/study-destination/denmark/hero";
import Post from "@/components/study-destination/denmark/post";
import Talk from "@/components/study-destination/denmark/talk";
import Visa from "@/components/study-destination/denmark/visa";
import Content from "@/components/study-destination/denmark/content";
import Cost from "@/components/study-destination/denmark/cost";
import Internship from "@/components/study-destination/denmark/internship";
import Application from "@/components/study-destination/denmark/application";
import Get from "@/components/study-destination/denmark/get";
import Denmark from "@/components/study-destination/denmark/denmark";



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
