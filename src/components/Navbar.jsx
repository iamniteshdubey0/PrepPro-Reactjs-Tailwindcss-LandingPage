import { useState } from "react";
import { cn } from "../lib/utils";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import ToggleTheme from "./ToggleTheme";
import { NavrbarItems } from "../constants/Constant";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
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
            {NavrbarItems.brand.logo}
            <span className="">{NavrbarItems.brand.name}</span>
          </span>
        </a>

        {/* Destktop nav */}
        <div className="hidden md:flex space-x-2 lg:space-x-2 mr-4">
          {NavrbarItems.navlinks.map((item, key) => (
            <div key={key} className="relative inline-block text-left">
              <a
                href={item.link}
                onClick={() => setActiveIndex(activeIndex === key ? null : key)}
                className="flex justify-between gap-1 items-center text-sm font-medium text-foreground px-2 py-2 hover:text-primary transition-all duration-300 cursor-pointer"
              >
                {item.label}
                {item.sublinks && (
                  <span className="transition-all duration-300">
                    {activeIndex === key ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </span>
                )}
              </a>

              {/* Dropdown */}
              {activeIndex === key && item.sublinks && (
                <div className="absolute z-50 mt-2 w-[500px] bg-background border rounded-xl shadow-lg p-6 grid grid-cols-2 gap-4">
                  {item.sublinks.map((subitem, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                        subitem.highlight
                          ? "bg-primary/20 hover:bg-primary/30"
                          : "hover:bg-primary/20"
                      }`}
                    >
                      <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center">
                        {subitem.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold flex items-center gap-2">
                          {subitem.title}
                          {subitem.badge && (
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                              {subitem.badge}
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {subitem.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex space-x-4">
          <a href="/auth" className="outlined-button text-md">Login</a>
          <button className="solid-button">Request a Demo</button>
          <ToggleTheme></ToggleTheme>
        </div>

        {/* Mobile nav */}

        <button
          onClick={() => setIsMenuOpened((prev) => !prev)}
          aria-label={isMenuOpened ? "Close Menu" : "Open Menu"}
          className="md:hidden p-2 text-foreground z-50 cursor-pointer"
        >
          {isMenuOpened ? <X size={24}></X> : <Menu size={24}></Menu>}
        </button>

        <div
          className={cn(
            "absolute top-0 h-screen inset-0 bg-background px-10 pt-24",
            "z-40 flex flex-col",
            "transition-all duration-300 md:hidden",
            isMenuOpened
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-6 text-xl">
            {NavrbarItems.navlinks.map((item, key) => (
              <div key={key} className="relative inline-block text-left max-h-3/5 overflow-y-auto">
                <a
                  key={key}
                  href={item.link}
                  onClick={() =>
                    setActiveIndex(activeIndex === key ? null : key)
                  }
                  className="flex gap-2 justify-start items-center text-2xl font-semibold text-foreground/80 hover:text-primary transition-colors duration-300 capitalize"
                >
                  {item.label}
                  {item.sublinks && (
                    <span className="transition-all duration-300">
                      {activeIndex === key ? (
                        <ChevronDown size={20} /> 
                      ) : (
                        <ChevronRight size={20} />
                      )}
                    </span>
                  )}
                </a>
                {activeIndex === key && item.sublinks && (
                  <div className="z-50 mt-2 max-h-3/4 overflow-y-auto w-full bg-background/80 border rounded-xl shadow-lg px-2 py-3 grid grid-cols-1 gap-2">
                    {item.sublinks.map((subitem, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2 space-y-3 p-1 rounded-lg transition-all duration-300 cursor-pointer ${
                          subitem.highlight
                            ? "bg-primary/20 hover:bg-primary/30"
                            : "hover:bg-primary/20"
                        }`}
                      >
                        <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center">
                          {subitem.icon}
                        </div>
                        <div>
                          <p className="text-lg font-semibold flex items-center gap-1">
                            {subitem.title}
                            {subitem.badge && (
                              <span className="text-md bg-blue-100 text-blue-600 px-1 py-0.5 rounded-full">
                                {subitem.badge}
                              </span>
                            )}
                          </p>
                          <p className="text-md text-muted-foreground mt-0.5">
                            {subitem.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="absolute bottom-10 flex space-x-4">
            <a href="/auth" className="outlined-button text-md">Login</a>
            <button className="solid-button text-md">Request a Demo</button>
            <ToggleTheme></ToggleTheme>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
