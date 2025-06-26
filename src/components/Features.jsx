import React from "react";
import { cn } from "../lib/utils";
import { Cake } from "lucide-react";

const Features = () => {
  return (
    <section className="relative flex flex-col items-center justify-center md:py-24 py-12 px-4 overflow-hidden">
      <div
        className="absolute inset-0 z-0 max-sm:hidden"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.15) 1px, transparent 1px)
    `,
          backgroundSize: "150px 150px",
          WebkitMaskImage:
            "radial-gradient(circle at center, black -20%, transparent 80%)",
          maskImage:
            "radial-gradient(circle at center, black -20%, transparent 80%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      ></div>
      {/* Icon Arc */}
      <div className="relative z-20 w-full max-w-[600px] h-[180px] flex items-center justify-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[100px] w-full max-w-[500px] h-[250px] rounded-b-full">
          {/* Icons manually positioned along arc */}
          <div className="absolute top-[80%] left-[10%] transform -translate-x-1/2 -translate-y-1/2">
            <IconBox />
          </div>
          <div className="absolute top-[55%] left-[25%] transform -translate-x-1/2 -translate-y-1/2">
            <IconBox />
          </div>
          <div className="absolute top-[40%] left-[42%] transform -translate-x-1/2 -translate-y-1/2">
            <IconBox />
          </div>
          <div className="absolute top-[40%] left-[58%] transform -translate-x-1/2 -translate-y-1/2">
            <IconBox />
          </div>
          <div className="absolute top-[55%] left-[75%] transform -translate-x-1/2 -translate-y-1/2">
            <IconBox />
          </div>
          <div className="absolute top-[80%] left-[90%] transform -translate-x-1/2 -translate-y-1/2">
            <IconBox />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 mt-8 text-center px-4">
        <p className="text-sm text-primary font-medium tracking-wide">
          HireSphere People Platform
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-2">
          Build An Operationally <br />
          Excellent Company
        </h2>
        <button className="solid-button my-4">
          Discover Now
        </button>
      </div>
    </section>
  );
};

const IconBox = () => (
  <div className="w-12 h-12 rounded-xl shadow-lg flex bg-primary/60 items-center justify-center">
    <Cake></Cake>
  </div>
);

export default Features;
