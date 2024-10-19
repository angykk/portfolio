"use client"
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className = "text-black mb-4 text-4xl lg:text-5xl font-extrabold font-sans"><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1A5319] via-[#508D4E]">Hello, I'm</span> 
               
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Angela',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' a Student',
        1000,
        ' a Web Developer',
        1000,
        ' a Problem Solver',
        1000,
        ' a Creative Thinker',
        1000,
        ' a Math Enthusiast',
        1000,
        ' an App Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    /> </h1>
                <p className = "text-gray-600 mt-6 text-lg lg:text-2xl font-bold">
                    I'm a second year Computer Engineering student at the University of Waterloo. My passions lie in problem-solving and creating.
                </p>
                <div>
                    <button className="w-full sm:w-fit font-bold mt-5 px-6 py-3 rounded-full mr-2 bg-black hover:bg-gradient-to-bl from-[#1A5319] via-[#508D4E] to-white">GitHub</button>
                    <button className="w-full sm:w-fit mt-2 font-bold px-6 py-3 rounded-full bg-white hover:bg-gradient-to-tr from-[#1A5319] via-[#508D4E] to-white border-2 text-black border-black hover:text-white">Download Resume</button>
                </div>
            </div>
           
            <div className = "col-span-5 place-self-center">
                <div className="rounded-full bg-gradient-to-br from-[#80AF81] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative my-5">
                    <Image src="/images/ang.gif"
                    width={500}
                    className = "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[52%]"
                    height={500}
                    />
                </div>
            </div>
        </div>
    </section>

  )
}

export default HeroSection;
