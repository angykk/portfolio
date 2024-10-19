import React from "react";
import Link from "next/link";
import { Home01Icon, Task01Icon } from "hugeicons-react";

export const NavBar = () => {
  return (
    <nav className="flex justify-center sm:justify-start bg-gradient-to-tr from-[#508D4E] rounded-lg px-5 py-2">
      <div className="text-black font-extrabold font-sans ">
        <Link className = "mr-5 hover:text-white flex items-center" href="/">
        <Home01Icon size={20}></Home01Icon>
        Home
        </Link>
      </div>
      <div className="text-black font-extrabold font-sans ">
        <Link className = "flex items-center mx-5 hover:text-white" href="/">
        <Task01Icon size={20}></Task01Icon>
            Projects
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
