import Admission from "./components/study-destination/admission"
import Content from "./components/study-destination/content"
import Denmark from "./components/study-destination/denmark"
import Hero from "./components/study-destination/hero"
import Internship from "./components/study-destination/internship"
import Get from "./components/study-destination/get"
import Application from "./components/study-destination/application"
import Cost from "./components/study-destination/cost"
import Courses from "./components/study-destination/courses"
import Visa from "./components/study-destination/visa"
import Post from "./components/study-destination/post"
import Expert from "./components/study-destination/expert"
import Talk from "./components/study-destination/talk"


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