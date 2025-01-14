import React from 'react'

export const Skills = () => {
  return (
    <div className="relative">
        <div>
            <div className="w-full sm:w-fit bg-gradient-to-br from-[#EF745C] to-[#B15052] bg-opacity-70 inline-block px-2 py-1 rounded-lg">
                <h1 className = "text-center text-white text-lg lg:text-xl">Languages + Frameworks</h1>
            </div>
        </div>
        <div className="text-center sm:text-left">
            {/* Core Programming Languages */}
            <div className="bg-gradient-to-r from-[#EF745C] to-[#B15052] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">Java</p>
            </div>
            <div className="bg-gradient-to-r from-[#EF745C] to-[#B15052] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">C++</p>
            </div>
            
            {/* Web Fundamentals */}
            <div className="bg-gradient-to-r from-[#EF745C] to-[#B15052] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">HTML</p>
            </div>
            <div className="bg-gradient-to-r from-[#EF745C] to-[#B15052] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">CSS</p>
            </div>
            <div className="bg-gradient-to-r from-[#EF745C] to-[#B15052] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">Javascript</p>
            </div>

            {/* Web Frameworks */}
            <div className="bg-gradient-to-r from-[#EF745C] to-[#B15052] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">React</p>
            </div>
            <div className="bg-gradient-to-r from-[#EF745C] to-[#B15052] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">Next.js</p>
            </div>
            <div className="bg-gradient-to-r from-[#EF745C] to-[#B15052] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">TailWind CSS</p>
            </div>

            {/* Mobile Development */}
            <div className="bg-gradient-to-r from-[#EF745C] to-[#B15052] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">Flutter</p>
            </div>
            <div className="bg-gradient-to-r from-[#EF745C] to-[#B15052] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">Dart</p>
            </div>

            {/* Testing */}
            <div className="bg-gradient-to-r from-[#EF745C] to-[#B15052] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg  ">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">Cypress</p>
            </div>
        </div>
    </div>
  )
}

export default Skills;