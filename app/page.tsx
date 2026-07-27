import Admission from "./study-destination/admission";
import Courses from "./study-destination/courses";
import Denmark from "./study-destination/denmark";
import Expert from "./study-destination/expert";
import Hero from "./study-destination/hero";
import Internship from "./study-destination/internship";
import Post from "./study-destination/post";
import Talk from "./study-destination/talk";
import Visa from "./study-destination/visa";
import Content from "./study-destination/content";
import Get from "./study-destination/get";
import Cost from "./study-destination/cost";
import Application from "./study-destination/application";



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