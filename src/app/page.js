import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className = "relative sm:mx-auto mx-1 max-w-screen-sm container my-auto px-1" >
      <container className = "bg-[#D6EFD8] rounded-xl flex-col flex min-h-0.5 px-9 py-4">
        <HeroSection />
      </container>
      <div className = "grid grid-cols-12">
        <container className = "bg-[#D6EFD8] rounded-xl col-span-7  my-10 mr-5 px-5 py-4">
        <Skills />
        </container>
        <container className = "bg-[#D6EFD8] rounded-xl col-span-5 my-10 ">
        <p>Hello</p>
        </container>
      </div>
    </main>
  );
}
