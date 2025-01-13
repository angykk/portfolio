import React from 'react'

export const Skills = () => {
  return (
    <div className="relative">
        <div>
            <div className="w-full sm:w-fit bg-white bg-opacity-70 inline-block px-2 py-1 rounded-lg">
                <h1 className = "text-center text-black text-lg lg:text-xl">Languages + Frameworks</h1>
            </div>
        </div>
        <div className="text-center sm:text-left">
            {/* Core Programming Languages */}
            <div className="bg-[#80AF81] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg">
                <p className="text-white text-sm lg:text-lg font-bold hover:text-black">Java</p>
            </div>
            <div className="bg-[#80AF81] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg">
                <p className="text-white text-sm lg:text-lg font-bold hover:text-black">C++</p>
            </div>
            
            {/* Web Fundamentals */}
            <div className="bg-[#80AF81] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg">
                <p className="text-white text-sm lg:text-lg font-bold hover:text-black">HTML</p>
            </div>
            <div className="bg-[#80AF81] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg">
                <p className="text-white text-sm lg:text-lg font-bold hover:text-black">CSS</p>
            </div>
            <div className="bg-[#80AF81] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg">
                <p className="text-white text-sm lg:text-lg font-bold hover:text-black">Javascript</p>
            </div>

            {/* Web Frameworks */}
            <div className="bg-[#80AF81] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg">
                <p className="text-white text-sm lg:text-lg font-bold hover:text-black">React</p>
            </div>
            <div className="bg-[#80AF81] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg">
                <p className="text-white text-sm lg:text-lg font-bold hover:text-black">Next.js</p>
            </div>
            <div className="bg-[#80AF81] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg">
                <p className="text-white text-sm lg:text-lg font-bold hover:text-black">TailWind CSS</p>
            </div>

            {/* Mobile Development */}
            <div className="bg-[#80AF81] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg">
                <p className="text-white text-sm lg:text-lg font-bold hover:text-black">Flutter</p>
            </div>
            <div className="bg-[#80AF81] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg">
                <p className="text-white text-sm lg:text-lg font-bold hover:text-black">Dart</p>
            </div>

            {/* Testing */}
            <div className="bg-[#80AF81] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg  ">
                <p className="text-white text-sm lg:text-lg font-bold hover:text-black">Cypress</p>
            </div>
        </div>
    </div>
  )
}

export default Skills;