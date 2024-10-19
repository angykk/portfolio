import React from "react";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="bg-gradient-to-tr from-[#508D4E] rounded-lg px-5 py-2">
      <div className="text-black font-extrabold font-sans">
        <Link className = "mr-5 hover:text-white" href="/">
          Home
        </Link>
        <Link className = "mx-5 hover:text-white" href="/">
            Projects
        </Link>
        <Link className = "mx-5 hover:text-white" href="/">
            Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
