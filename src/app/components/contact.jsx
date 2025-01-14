"use client"
import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <>
            <div className="container">
                <div className="w-full sm:w-fit bg-gradient-to-br from-[#EF745C] to-[#B15052] bg-opacity-70 inline-block py-1 px-2 rounded-lg">
                    <h1 className="text-center text-white text-lg lg:text-xl font-bold">Contact Me</h1>
                </div>
                <div className="text-center sm:text-left">
                    <div className="bg-gradient-to-r from-[#EF745C] to-[#B15052] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                        <button onClick={() => window.open('mailto:ay6huang@uwaterloo.ca', '_blank')}
                            className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold hover:text-black">Email</button>
                    </div>
                    <div className="bg-gradient-to-r from-[#EF745C] to-[#B15052] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                        <button onClick={() => window.open('https://github.com/angykk', '_blank')}
                            className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold hover:text-black">GitHub</button>
                    </div>
                    <div className="bg-gradient-to-r from-[#EF745C] to-[#B15052] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D06257] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                        <button onClick={() => window.open('https://www.linkedin.com/in/ayiranh/', '_blank')}
                            className="text-[#34073D] hover:text-white text-sm lg:text-lg font-bold hover:text-black">LinkedIn</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
