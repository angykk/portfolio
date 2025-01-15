"use client"
import React from "react";
import { Home01Icon, Task01Icon } from "hugeicons-react";
import { useEffect, useState } from "react";
import getNowPlayingItem from "../spotify";

export const NavBar = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const data = await getNowPlayingItem(props.client_id, props.client_secret, props.refresh_token);
        if (data) {
          setResult(data);
          setIsPlaying(data.isPlaying);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching now playing:', error);
        setLoading(false);
      }
    };

    fetchNowPlaying();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    window.scrollTo({ top: 850, behavior: 'smooth' });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#531942] via-[#923E4D] to-[#EF745C] rounded-t-lg px-5 py-2 z-50">
      <section className="flex justify-between items-center">
        <section className="flex justify-center items-center gap-4">
          <section className="text-2xl font-extrabold font-sans">
            <button className="hover:text-[#EF745C] flex items-center" onClick={scrollToTop}>
              <Home01Icon size={25} className="mr-1" />
              <span className="lg:inline hidden">Home</span>
            </button>
          </section>
          <section className=" text-2xl font-extrabold font-sans">
            <button className="flex items-center hover:text-[#EF745C]" href="/" onClick={scrollToProjects}>
              <Task01Icon size={25} className="mr-1" />
              <span className="lg:inline hidden">Projects</span>
            </button>
          </section>
        </section>
        {!loading && isPlaying && (
          <section className="flex items-center lg:gap-3">
            <img
              src={result.albumImageUrl}
              alt={`${result.title} album art`}
              className="rounded-full w-8 h-8 lg:w-12 lg:h-12 animate-spin-slow"
            />
            <section className="flex flex-col hidden lg:flex">
              <h1 className="text-lg hidden lg:block">Playing...</h1>
              <a href={result.songUrl} target="_blank" className="font-medium hover:underline"><h1 className="text-white">{result.title}</h1></a>
              <h1 className="text-sm text-white">{result.artist}</h1>
            </section>
          </section>
        )}
      </section>

    </nav>
  );
};

export default NavBar;
