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
                <div className="w-full sm:w-fit bg-white bg-opacity-70 inline-block py-1 px-2 rounded-lg">
                    <h1 className="text-center text-black text-lg lg:text-xl font-bold">Contact Me</h1>
                </div>
                <div className="text-center sm:text-left">
                    <div className="bg-[#80AF81] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg">
                        <button onClick={() => window.open('mailto:ay6huang@uwaterloo.ca', '_blank')}
                            className="text-white text-sm lg:text-lg font-bold hover:text-black">Email</button>
                    </div>
                    <div className="bg-[#80AF81] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg">
                        <button onClick={() => window.open('https://github.com/angykk', '_blank')}
                            className="text-white text-sm lg:text-lg font-bold hover:text-black">GitHub</button>
                    </div>
                    <div className="bg-[#80AF81] inline-block px-2 py-1 rounded-lg mt-5 mr-2 transform transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg">
                        <button onClick={() => window.open('https://www.linkedin.com/in/ayiranh/', '_blank')}
                            className="text-white text-sm lg:text-lg font-bold hover:text-black">LinkedIn</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
