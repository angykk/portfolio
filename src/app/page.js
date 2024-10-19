import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className = "container mx-auto my-auto" >
      <container className = "bg-[#D6EFD8] rounded-xl flex-col flex min-h-0.5 px-9 py-4">
        <HeroSection />
      </container>
      <container className = "bg-[#D6EFD8] rounded-xl flex-col flex min-h-0.5 px-9 py-4 my-10 ">
      <p>Hello</p>
      </container>
    </main>
  );
}
