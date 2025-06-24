import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Moon, Sun } from "lucide-react";

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={handleToggleTheme}
      className={cn(
        "fixed max-sm:hidden top-4 right-8 transition-colors duration-300",
        "foxus:outline-none cursor-pointer",
        "bg-primary/10 rounded-full p-3"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 hover:text-yellow-300"></Sun>
      ) : (
        <Moon className="h-6 w-6 hover:text-blue-900"></Moon>
      )}
    </button>
  );
};

export default ToggleTheme;
