import { Inspect, Linkedin } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="conatiner max-w-4x mx-auto text-center z-10">
        {/* Upper part */}
        <div className="space-y-6 flex items-center justify-center relative z-0">
          {/* background effect */}
          <div className="absolute border-1 border-primary/30 h-80 w-80 rounded-full flex justify-center items-center opacity-60">
            <div className="border-1 border-primary/40 h-50 w-50 rounded-full"></div>
          </div>

          {/* main content */}

          <div className="relative w-[260px] h-[160px] flex justify-center items-center my-4">
            {/* Left Avatar */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-[130px] -translate-y-[50px] z-0">
              <img
                src="https://randomuser.me/api/portraits/men/12.jpg"
                alt="left-avatar"
                className="w-24 h-24 rounded-full grayscale border-4 border-white object-cover shadow"
              />
            </div>

            {/* Center Avatar */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="center-avatar"
                className="w-30 h-30 rounded-full border-4 border-white object-cover shadow-lg"
              />
            </div>

            {/* Right Avatar */}
            <div className="absolute top-1/2 left-1/2 transform translate-x-[40px] -translate-y-[50px] z-0">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="right-avatar"
                className="w-24 h-24 rounded-full grayscale border-4 border-white object-cover shadow"
              />
            </div>
          </div>
        </div>

        {/* Middle part */}
        <div className="space-y-6 z-10 mt-4">
          <h1 className="text-4x md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">The </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              HR
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Platform
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 max-w-xl mx-auto opacity-0 animate-fade-in-delay-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex optio
            fugit eos porro rem asperiores illo cupiditate esse eveniet expedita
            aut, nostrum adipisci quo corporis unde maxime amet
          </p>

          <div className=" pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="solid-button py-4">
              view my projects
            </a>
          </div>
          <div className="flex justify-center mt-12 p-2 space-x-8">
            <div className="flex items-center space-x-2 text-foreground/60">
              <span className="text-sm font-semibold">4.2 on LinkedIn</span>
              <span className="p-2 bg-primary/10 rounded-full">
                <Inspect size={16}></Inspect>
              </span>
            </div>

            <div className="flex items-center space-x-2 text-foreground/60">
              <span className="text-sm font-semibold">4.2 on LinkedIn</span>
              <span className="p-2 bg-primary/10 rounded-full">
                <Inspect size={16}></Inspect>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
