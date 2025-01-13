"use client"
import React from "react";
import { Home01Icon, Task01Icon } from "hugeicons-react";

export const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    window.scrollTo({ top: 700, behavior: 'smooth' });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-center bg-gradient-to-tr from-[#D6EFD8] to-[#508D4E] rounded-t-lg px-5 py-2 z-50">
      <div className="text-black text-2xl font-extrabold font-sans ">
        <button className="mr-5 hover:text-white flex items-center" onClick={scrollToTop}>
          <Home01Icon size={25} className="mr-1"/>
          Home
        </button>
      </div>
      <div className="text-black text-2xl font-extrabold font-sans ">
        <button className="flex items-center mx-5 hover:text-white" href="/" onClick={scrollToProjects}>
          <Task01Icon size={25} className="mr-1"/>
          Projects
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
