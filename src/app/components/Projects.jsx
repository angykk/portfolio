"use client"
import React, { useState } from "react";
import Image from "next/image";

export const Projects = () => {
    const [activeTab, setActiveTab] = useState('tabOne');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <section className="flex justify-start gap-4">
                <header className="w-full sm:w-fit bg-gradient-to-br from-[#EF745C] to-[#B15052] py-1 px-2 rounded-lg">
                    <h1 className="text-center text-lg lg:text-xl font-bold font-sans">Projects</h1>
                </header>
                <div className="tabs flex gap-4">
                    <header className={`w-full sm:w-fit inline-block py-1 px-2 rounded-lg ${
                        activeTab === 'tabOne' 
                        ? "bg-gradient-to-br from-[#B15052] to-[#34073D]" 
                        : 'bg-gradient-to-br from-[#EF745C] to-[#B15052]'
                    }`}>
                        <button onClick={() => handleTabChange('tabOne')}>
                            <h1 className="text-center text-lg lg:text-xl font-bold font-sans">
                                <span className="inline-block">&emsp;<span className="hidden sm:inline">&emsp;</span></span>
                            </h1>
                        </button>
                    </header>
                    <header className={`w-full sm:w-fit inline-block py-1 px-2 rounded-lg ${
                        activeTab === 'tabTwo' 
                        ? "bg-gradient-to-br from-[#B15052] to-[#34073D]" 
                        : 'bg-gradient-to-br from-[#EF745C] to-[#B15052]'
                    }`}>
                        <button onClick={() => handleTabChange('tabTwo')}>
                            <h1 className="text-center text-lg lg:text-xl font-bold font-sans">
                                <span className="inline-block">&emsp;<span className="hidden sm:inline">&emsp;</span></span>
                            </h1>
                        </button>
                    </header>
                    <header className={`w-full sm:w-fit inline-block py-1 px-2 rounded-lg ${
                        activeTab === 'tabThree' 
                        ? "bg-gradient-to-br from-[#B15052] to-[#34073D]" 
                        : 'bg-gradient-to-br from-[#EF745C] to-[#B15052]'
                    }`}>
                        <button onClick={() => handleTabChange('tabThree')}>
                            <h1 className="text-center text-lg lg:text-xl font-bold font-sans">
                                <span className="inline-block">&emsp;<span className="hidden sm:inline">&emsp;</span></span>
                            </h1>
                        </button>
                    </header>
                </div>
            </section>

            <section className={`flex flex-col ${activeTab === 'tabOne' ? 'block' : 'hidden'}`}>
                <section className="bg-gradient-to-br from-[#923E4D] to-[#531942] inline-block px-2 py-3 rounded-lg mt-5 mr-2" id="tabOne">
                    <header className="flex justify-between">
                        <p className="px-2 py-1 text-white text-sm lg:text-2xl font-bold">Housing Proximity Mapper</p>
                        <p className="text-right px-2 py-1 text-white text-sm lg:text-xl font-bold hover:text-[#EF745C]">—Javascript, React, Next.js, Tailwind CSS, Google Maps API</p>
                    </header>
                    <Image
                        src="images/housing.png"
                        width={1920}
                        height={1080}
                        className="rounded-2xl px-2 py-2 w-full h-auto transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        alt="Housing Proximity Mapper screenshot"
                    />
                    <section className="grid grid-cols-1 lg:grid-cols-3 flex items-center">
                        <summary className="lg:text-center col-span-1 lg:w-full lg:h-fit bg-gradient-to-br from-[#EF745C] to-[#B15052] inline-block my-2 mx-2 py-1 px-2 rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <p className="lg:text-black text-white text-sm lg:hover:text-white lg:hover:text-opacity-90 lg:text-xl font-bold">
                                A housing proximity mapper created using Next.js and React. It utilizes Google map API's (Places API, Nearby Search API, Directions Matrix API) to look for point's of interests around potential housing. The web application searches for point's of interests like grocery stores, parks, and schools around potential housing, giving accurate commute times and allowing users to compare and contrast various housing.
                            </p>
                        </summary>
                        <div className="col-span-1 lg:col-span-2 lg:ml-4">
                            <video width={1920}
                                height={1080}
                                className="rounded-2xl px-2 py-2 w-full h-auto transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                alt="Housing Proximity Mapper video"
                                autoPlay
                                muted
                                loop
                                playsInline>
                                <source src="images/housingvid.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </section>
                    <button
                        onClick={() => window.open('https://github.com/angykk/housingWebsite', '_blank')}
                        className="w-full"
                    >
                        <div className="group flex justify-center px-2 py-1 rounded-lg mt-5 transform transition-all duration-300 bg-gradient-to-br from-[#EF745C] to-[#B15052] hover:bg-gradient-to-r hover:from-[#EF745C] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                            <span className="lg:text-black text-white lg:text-lg font-bold group-hover:text-white">Github Link</span>
                        </div>
                    </button>
                </section>
            </section>

            <section className={`flex flex-col ${activeTab === 'tabTwo' ? 'block' : 'hidden'}`}>
                <section className="bg-gradient-to-br from-[#923E4D] to-[#531942] inline-block px-2 py-3 rounded-lg mt-5 mr-2" id="tabTwo">
                    <header className="flex justify-between">
                        <p className="px-2 py-1 text-white text-sm lg:text-2xl font-bold">Password Manager</p>
                        <p className="text-right px-2 py-1 text-white text-sm lg:text-xl font-bold hover:text-[#EF745C]">—Flutter, Dart, Firebase, Firestore</p>
                    </header>
                    <section className="grid grid-cols-1 lg:grid-cols-3 flex items-center">
                        <section className="col-span-1 flex flex-col items-center justify-center h-full">
                            <summary className="lg:text-center lg:w-full lg:h-fit bg-gradient-to-br from-[#EF745C] to-[#B15052] inline-block my-2 mx-2 py-1 px-2 rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <p className="lg:text-black text-white text-sm lg:hover:text-white lg:hover:text-opacity-90 lg:text-xl font-bold">
                                    An iOS and Web application password manager created using Flutter. The applications allow users to store their passwords securely through Firestore. The application also uses Firebase Authentication to secure users data.
                                </p>
                            </summary>
                            <Image
                                src="images/password1.PNG"
                                width={1920}
                                height={1080}
                                className="lg:inline hidden rounded-2xl px-2 py-2 h-auto transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                alt="Password Manager screenshot"
                            />
                        </section>
                        <Image
                            src="images/password2.PNG"
                            width={300}
                            height={1080}
                            className="lg:inline hidden rounded-2xl w-full px-2 py-2 h-full object-cover transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            alt="Password Manager screenshot 2"
                        />
                        <section className="col-span-1 h-full">
                            <video
                                className="rounded-2xl px-2 py-2 h-full w-full object-cover transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                alt="Password Manager video"
                                autoPlay
                                muted
                                loop
                                playsInline>
                                <source src="images/passwordvid.mp4" type="video/mp4" />
                            </video>
                        </section>
                    </section>
                    <button
                        onClick={() => window.open('https://github.com/angykk/Password-Manager', '_blank')}
                        className="w-full"
                    >
                        <div className="group flex justify-center px-2 py-1 rounded-lg mt-5 transform transition-all duration-300 bg-gradient-to-br from-[#EF745C] to-[#B15052] hover:bg-gradient-to-r hover:from-[#EF745C] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                            <span className="lg:text-black text-white lg:text-lg font-bold group-hover:text-white">Github Link</span>
                        </div>
                    </button>
                </section>
            </section>

            <section className={`flex flex-col ${activeTab === 'tabThree' ? 'block' : 'hidden'}`}>
                <section className="bg-gradient-to-br from-[#923E4D] to-[#531942] inline-block px-2 py-3 rounded-lg mt-5 mr-2" id="tabThree">
                    <header className="flex justify-between">
                        <p className="px-2 py-1 text-white text-sm lg:text-2xl font-bold">Sudoku Solver</p>
                        <p className="text-right px-2 py-1 text-white text-sm lg:text-xl font-bold hover:text-[#EF745C]">—Java</p>
                    </header>
                    <section className="grid grid-cols-1 lg:grid-cols-2">
                        <section className="col-span-1 lg:col-span-1">
                            <summary className="col-span-1 lg:w-full bg-gradient-to-br from-[#EF745C] to-[#B15052] inline-block my-2 mx-2 py-1 px-2 rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <p className="lg:text-black text-white text-sm lg:hover:text-white lg:hover:text-opacity-90 lg:text-xl font-bold">
                                    A sudoku solver programmed using Java. The application uses four advanced logic cycles and a backtracking guessing algorithm to solve easy to hard difficulty sudoku puzzles. The program uses 2D arrays to store the sudoku board and a stack to store the backtracking guesses. Puzzles are solved under 0.5 seconds.
                                </p>
                            </summary>
                            <div className="col-span-1 lg:col-span-2 flex justify-center">
                                <Image
                                    src="images/sudoku.png"
                                    width={500}
                                    height={1080}
                                    className="rounded-2xl px-2 py-2 h-auto transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                    alt="Sudoku Solver screenshot"
                                />
                            </div>
                        </section>
                        <div className="col-span-1 lg:col-span-1 flex justify-center">
                            <Image
                                src="images/sudoku1.png"
                                width={500}
                                height={1080}
                                className="rounded-2xl px-2 py-2 h-auto transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                alt="Sudoku Solver screenshot"
                            />
                        </div>
                    </section>
                    <button
                        onClick={() => window.open('https://github.com/angykk/SudokuSolver', '_blank')}
                        className="w-full"
                    >
                        <div className="group flex justify-center px-2 py-1 rounded-lg mt-5 transform transition-all duration-300 bg-gradient-to-br from-[#EF745C] to-[#B15052] hover:bg-gradient-to-r hover:from-[#EF745C] hover:to-[#923E4D] hover:-translate-y-1 hover:shadow-lg">
                            <span className="lg:text-black text-white lg:text-lg font-bold group-hover:text-white">Github Link</span>
                        </div>
                    </button>
                </section>
            </section>
        </>
    );
};

export default Projects;