"use client"
import React from "react";
import Image from "next/image";


export const Projects = () => {
    return (
        <>
        
            <div className="w-full sm:w-fit bg-white bg-opacity-70 inline-block py-1 px-2 rounded-lg">
                <h1 className="text-center text-black text-lg lg:text-xl font-bold font-sans">Projects</h1>
            </div>

            <div className="flex flex-col">
                <div className="bg-[#80AF81] inline-block px-2 py-3 rounded-lg mt-5 mr-2">
                    <div className="flex justify-between">
                        <p className="px-2 py-1 text-white text-sm lg:text-xl font-bold">Housing Proximity Mapper</p>
                        <p className="text-right px-2 py-1 text-white text-sm lg:text-lg font-bold hover:text-black">—Javascript, React, Next.js, Tailwind CSS, Google Maps API</p>
                    </div>
                    <Image
                        src="images/housing.png"
                        width={1920}
                        height={1080}
                        className="rounded-2xl px-2 py-2 w-full h-auto transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        alt="Housing Proximity Mapper screenshot"
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-3 flex items-center">
                        <div className="lg:text-center col-span-1 lg:w-full lg:h-fit bg-white bg-opacity-70 inline-block my-2 mx-2 py-1 px-2 rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <p className="text-black text-sm lg:text-xl font-bold">
                                A housing proximity mapper created using Next.js and React. It utilizes Google map API's (Places API, Nearby Search API, Directions Matrix API) to look for point's of interests around potential housing. The web application searches for point's of interests like grocery stores, parks, and schools around potential housing, giving accurate commute times and allowing users to compare and contrast various housing.
                            </p>
                        </div>
                        <div className="col-span-1 lg:col-span-2 lg:ml-4">
                            <video width={1920}
                                height={1080}
                                className="rounded-2xl px-2 py-2 w-full h-auto transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                alt="Housing Proximity Mapper video"
                                controls>
                                <source src="images/housingvid.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>

                <div className="bg-[#80AF81] inline-block px-2 py-3 rounded-lg mt-5 mr-2">
                    <div className="flex justify-between">
                        <p className="px-2 py-1 text-white text-sm lg:text-xl font-bold">Password Manager</p>
                        <p className="text-right px-2 py-1 text-white text-sm lg:text-lg font-bold hover:text-black">—Flutter, Dart, Firebase, Firestore</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 flex items-center">
                        <div className="col-span-1 flex flex-col items-center justify-center h-full">
                            <div className="lg:text-center lg:w-full lg:h-fit bg-white bg-opacity-70 inline-block my-2 mx-2 py-1 px-2 rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <p className="text-black text-sm lg:text-xl font-bold">
                                    An iOS and Web application password manager created using Flutter. The applications allow users to store their passwords securely through Firestore. The application also uses Firebase Authentication to secure users data.
                                </p>
                            </div>
                            <Image
                                src="images/password1.PNG"
                                width={1920}
                                height={1080}
                                className="rounded-2xl px-2 py-2 h-auto transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                alt="Password Manager screenshot"
                            />
                        </div>
                        <Image
                            src="/images/password2.PNG"
                            width={300}
                            height={1080}
                            className="rounded-2xl w-full px-2 py-2 h-full object-cover transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            alt="Password Manager screenshot 2"
                        />
                        <div className="col-span-1 h-full">
                            <video
                                className="rounded-2xl px-2 py-2 h-full w-full object-cover transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                alt="Password Manager video"
                                controls>
                                <source src="images/passwordvid.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>

                <div className="bg-[#80AF81] inline-block px-2 py-3 rounded-lg mt-5 mr-2">
                    <div className="flex justify-between">
                        <p className="px-2 py-1 text-white text-sm lg:text-xl font-bold">Sudoku Solver</p>
                        <p className="text-right px-2 py-1 text-white text-sm lg:text-lg font-bold hover:text-black">—Java</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="col-span-1 lg:col-span-1">
                            <div className="col-span-1 lg:w-full bg-white bg-opacity-70 inline-block my-2 mx-2 py-1 px-2 rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <p className="text-black text-sm lg:text-xl font-bold">
                                    A sudoku solver programmed using Java. The application uses four advanced logic cycles and a backtracking guessing algorithm to solve easy to hard difficulty sudoku puzzles. The program uses 2D arrays to store the sudoku board and a stack to store the backtracking guesses. Puzzles are solved under 0.5 seconds.
                                </p>
                            </div>
                            <div className="col-span-1 lg:col-span-2 flex justify-center">
                                <Image
                                    src="images/sudoku.png"
                                    width={500}
                                    height={1080}
                                    className="rounded-2xl px-2 py-2 h-auto transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                    alt="Sudoku Solver screenshot"
                                />
                            </div>
                        </div>
                        <div className="col-span-1 lg:col-span-1 flex justify-center">
                            <Image
                                src="images/sudoku1.png"
                                width={500}
                                height={1080}
                                className="rounded-2xl px-2 py-2 h-auto transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                alt="Sudoku Solver screenshot"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;