"use client"
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Contact from "./components/contact";
import Projects from "./components/Projects";
import { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from "./components/NavBar";

const projectSection = useRef(null);

import { useEffect } from 'react';

export default function Home() {
  const projectSection = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    window.scrollTo({ 
      top: projectSection.current.offsetTop, 
      behavior: 'smooth' 
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="sm:mx-auto mx-1 max-w-screen-sm lg:max-w-screen-xl container my-auto pb-16">
      <NavBar 
        scrollToTop={scrollToTop}
        scrollToProjects={scrollToProjects}
      />
      <div data-aos="fade-up">
        <container className="rounded-xl flex-col flex min-h-0.5 lg:pl-9 py-6 px-6">
          <HeroSection />
        </container>
        <div className="grid grid-cols-12">
          <container className=" rounded-xl flex col-span-7 my-10 mr-5 px-5 py-4">
            <Skills />
          </container>
          <container className=" rounded-xl flex col-span-5 my-10 px-5 py-4">
            <Contact />
          </container>
        </div>
        <container ref={projectSection} className="rounded-xl flex-col flex min-h-0.5 px-4 py-4">
          <Projects />
        </container>
      </div>
    </main>
  );
}
