"use client"
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-12">
                <header className="col-span-8 place-self-center text-center sm:text-left transition-transform hover:scale-[102%] duration-300 px-4 mx-4 sm:mx-0 sm:px-0">
                    <h1 className="mt-[20px] lg:mt-automb-4 text-5xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#D06257] to-[#EF745C]">Hello, I'm </span>
                        <section className="text-white sm:h-auto h-[80px]">
                            <TypeAnimation
                                sequence={[
                                    'Angela',
                                    1000,
                                    'a Student',
                                    1000,
                                    'a Web Developer',
                                    1000,
                                    'a Problem Solver',
                                    1000,
                                    'a Programmer',
                                    1000,
                                    'an App Developer',
                                    1000,
                                    'a Creator',
                                    1000,
                                    'a Designer',
                                    1000,
                                    'an Artist',
                                    1000, 
                                ]}
                                wrapper="span"
                                speed={60}
                                repeat={Infinity}
                            />
                        </section>
                    </h1>
                    <p className="text-[#EF745C] mt-6 sm:mr-6 text-lg lg:text-2xl font-bold">
                        I'm a second year Computer Engineering student at the University of Waterloo. My passions lie in problem-solving and creating. 
                        <br /> In my free time, I like to rock climb, play volleyball, draw, and throw pottery :)
                    </p>
                    <section>
                        <button onClick={() => window.open('https://github.com/angykk', '_blank')} className="w-full sm:w-fit font-bold mt-5 px-6 py-3 rounded-full mr-2 bg-black hover:bg-gradient-to-bl from-[#EF745C] via-[#923E4D] to-[#34073D]">GitHub</button>
                        <button onClick={() => window.open('images/2A_resume (1).pdf', '_blank')} className="w-full sm:w-fit mt-2 font-bold px-6 py-3 rounded-full bg-white hover:bg-gradient-to-tr from-[#EF745C] via-[#923E4D] to-[#34073D] border-2 text-black border-black hover:text-white">Download Resume</button>
                    </section>
                </header>

                <figure className="col-span-4 place-self-center mt-4 mx-4">
                    <section className="rounded-full bg-gradient-to-br from-[#B15052] to-[#531942] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] relative my-5 hover:-translate-y-3 transform transition-all duration-300 hover:shadow-lg mx-auto">
                        <Image 
                            src="images/cat.gif"
                            width={500}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[52%]"
                            height={500}
                        />
                    </section>
                </figure>
            </section>
        </>

    )
}

export default HeroSection;
