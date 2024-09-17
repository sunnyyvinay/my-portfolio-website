import React, { useRef } from 'react';
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Research from './components/Research';

const App = () => {
  const handleClick = (link) => {
    switch(link) {
      case "linkedin":
        window.open("https://www.linkedin.com/in/sunny-vinay/", '_blank', 'noopener,noreferrer');
        break;
  
      case "github":
        window.open("https://github.com/sunnyyvinay", '_blank', 'noopener,noreferrer');
        break;
    }
  }

  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const researchRef = useRef(null);
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">

        <nav className='mb-20 flex items-center justify-between py-6'>
          <div className="flex shrink-0 items-center justify-evenly">
            <button className="pr-10 text-orange-300" onClick={() => scrollToSection(educationRef)}>Education</button>
            <button className="pr-10 text-orange-300" onClick={() => scrollToSection(experienceRef)}>Experience</button>
            <button className="pr-10 text-orange-300" onClick={() => scrollToSection(projectsRef)}>Projects</button>
            <button className="pr-10 text-orange-300" onClick={() => scrollToSection(researchRef)}>Research</button>
          </div>
          <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
              <button onClick={() => handleClick("linkedin")}>
                <FaLinkedin />
              </button>
              
              <button onClick={() => handleClick("github")}>
                <FaGithub />
              </button>
          </div> 
        </nav>

        <Hero />
        <Skills />

        <div ref={educationRef} className="pt-5">
          <Education />
        </div>
        
        <div ref={experienceRef} className="pt-5">
          <Experience />
        </div>
        
        <div ref={projectsRef} className="pt-5">
          <Projects />
        </div>

        <div ref={researchRef} className="pt-5">
          <Research />
        </div>

        <Contact />
      </div>
    </div>
  )
}

export default App;