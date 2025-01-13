import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Contact from "./components/contact";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="sm:mx-auto mx-1 max-w-screen-sm lg:max-w-screen-xl container my-auto pb-16">
      <container className = "bg-[#D6EFD8] rounded-xl flex-col flex min-h-0.5 pl-9 py-4">
        <HeroSection />
      </container>
      <div className = "grid grid-cols-12">
        <container className = "bg-[#D6EFD8] rounded-xl flex col-span-7 my-10 mr-5 px-5 py-4">
        <Skills />
        </container>
        <container className = "bg-[#D6EFD8] rounded-xl flex col-span-5 my-10  px-5 py-4">
        <Contact />
        </container>
      </div>
      <container className = "bg-[#D6EFD8] rounded-xl flex-col flex min-h-0.5 px-4 py-4">
        <Projects />
      </container>
    </main>
  );
}
