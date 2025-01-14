import React from 'react'

export const Skills = () => {
  return (
    <section className="relative">
        <section className="container">
            <header className="w-full sm:w-fit bg-gradient-to-br from-[#EF745C] to-[#B15052] bg-opacity-70 inline-block px-2 py-1 rounded-lg">
                <h1 className = "text-center text-white text-lg lg:text-xl">Languages + Frameworks</h1>
            </header>
        </section>
        <section className="text-center sm:text-left">
            {/* Core Programming Languages */}
            <detail className="inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">Java</p>
            </detail>
            <detail className="inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">C++</p>
            </detail>
            
            {/* Web Fundamentals */}
            <detail className="inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">HTML</p>
            </detail>
            <detail className="inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">CSS</p>
            </detail>
            <detail className="inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">Javascript</p>
            </detail>

            {/* Web Frameworks */}
            <detail className="inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">React</p>
            </detail>
            <detail className="inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">Next.js</p>
            </detail>
            <detail className="inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">TailWind CSS</p>
            </detail>

            {/* Mobile Development */}
            <detail className="inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">Flutter</p>
            </detail>
            <detail className="inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">Dart</p>
            </detail>

            {/* Testing */}
            <detail className="inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg  ">
                <p className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold">Cypress</p>
            </detail>
        </section>
    </section>
  )
}

export default Skills;