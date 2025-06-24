import React, { useState } from "react";
import { cn } from "../lib/utils";
import { Box, Menu, X } from "lucide-react";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        "py-3 bg-background/80 backdrop-blur-md shadow-xs"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Navlogo and title */}
        <a
          href="#hero"
          className="text-2xl font-bold text-primary flex items-center"
        >
          <span>
            <Box size={24}></Box>
            <span>PrepPro</span>
          </span>
        </a>

        {/* Destktop nav */}
        <div className="hidden md:flex space-x-8 mr-4">
          <a
            href=""
            className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            Platform
          </a>
          <a
            href=""
            className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            Solutions
          </a>
          <a
            href=""
            className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            Resources
          </a>
          <a
            href=""
            className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            pricing
          </a>
        </div>

        {/* Mobile nav */}

        <button
          onClick={() => setIsMenuOpened((prev) => !prev)}
          aria-label={isMenuOpened ? "Close Menu" : "Open Menu"}
          className="md:hidden p-2 text-foreground z-50"
        >
          {isMenuOpened ? <X size={24}></X> : <Menu size={24}></Menu>}
        </button>
        <div
          className={cn(
            "fixed h-screen inset-0 bg-background/95 backdrop-blur-md",
            "z-40 flex flex-col justify-center items-center",
            "transition-all duration-300 md:hidden",
            isMenuOpened
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            <a
              href=""
              className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpened(false)}
            >
              Platform
            </a>
            <a
              href=""
              className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpened(false)}
            >
              Solutions
            </a>
            <a
              href=""
              className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpened(false)}
            >
              Resources
            </a>
            <a
              href=""
              className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpened(false)}
            >
              pricing
            </a>
          </div>
        </div>

        <div className="hidden md:flex space-x-4">
          <button className="outlined-button">Login</button>
          <button className="solid-button">Request a Demo</button>
          <ToggleTheme></ToggleTheme>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
