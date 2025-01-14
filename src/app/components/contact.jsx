"use client"
import React from 'react';

const Contact = () => {

    return (
        <section className="container">
            <header className="w-full sm:w-fit bg-gradient-to-br from-[#EF745C] to-[#B15052] bg-opacity-70 inline-block py-1 px-2 rounded-lg">
                <h1 className="text-center text-white text-lg lg:text-xl font-bold">Contact Me</h1>
            </header>
            <section className="text-center sm:text-left">
                <detail className="inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                    <button onClick={() => window.open('mailto:ay6huang@uwaterloo.ca', '_blank')}
                        className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold hover:text-black">Email</button>
                </detail>
                <detail className="inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                    <button onClick={() => window.open('https://github.com/angykk', '_blank')}
                        className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold hover:text-black">GitHub</button>
                </detail>
                <detail className="inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                    <button onClick={() => window.open('https://www.linkedin.com/in/ayiranh/', '_blank')}
                        className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold hover:text-black">LinkedIn</button>
                </detail>
            </section>
        </section>
    );
};

export default Contact;
