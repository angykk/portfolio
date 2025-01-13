"use client"
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-8 place-self-center text-center sm:text-left">
                    <h1 className="text-black mb-4 text-4xl lg:text-5xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1A5319] via-[#508D4E]">Hello, I'm </span>
                        <div className="min-w-[300px] sm:min-w-[400px] whitespace-nowrap">
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
                                    'a Creator',
                                    1000,
                                    'a Programmer',
                                    1000,
                                    'an App Developer',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>
                    </h1>
                    <p className="text-gray-600 mt-6 text-lg lg:text-2xl font-bold">
                        I'm a second year Computer Engineering student at the University of Waterloo. My passions lie in problem-solving and creating.
                    </p>
                    <div>
                        <button onClick={() => window.open('https://github.com/angykk', '_blank')} className="w-full sm:w-fit font-bold mt-5 px-6 py-3 rounded-full mr-2 bg-black hover:bg-gradient-to-bl from-[#1A5319] via-[#508D4E] to-white">GitHub</button>
                        <button onClick={() => window.open('/images/2A_resume (1).pdf', '_blank')} className="w-full sm:w-fit mt-2 font-bold px-6 py-3 rounded-full bg-white hover:bg-gradient-to-tr from-[#1A5319] via-[#508D4E] to-white border-2 text-black border-black hover:text-white">Download Resume</button>
                    </div>
                </div>

                <div className="col-span-4 place-self-center mr-10">
                    <div className="rounded-full bg-gradient-to-br from-[#80AF81] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative my-5">
                        <Image src="images/ang.gif" //remove leading slash for github pages
                            width={500}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[52%]"
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroSection;
