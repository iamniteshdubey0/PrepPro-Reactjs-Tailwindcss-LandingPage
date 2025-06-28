import React from "react";
import { cn } from "../lib/utils";

const WhyUs = () => {
  return (
    <section id="whyus" className="p-2 md:py-8 md:px-4 relative">
      <div className="container mx-auto space-y-24 ">
        {/* background grid effect */}
        <div
          className="absolute inset-0 z-0 max-sm:hidden"
          style={{
            backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgb a(0,0,0,0.05) 1px, transparent 1px)
    `,
            backgroundSize: "100px 100px",
            WebkitMaskImage:
              "linear-gradient(to right, black 65%, transparent 50%)",
            maskImage: "linear-gradient(to right, black 65%, transparent 50%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        ></div>
        <div className="flex flex-col md:flex-row items-start md:my-8 md:py-8 space-y-4">
          <div className="md:flex-1/3">
            <p className="text-foreground/70 text-xl font-semibold capitalize">
              why
            </p>
            <p className="text-foreground/70 text-xl font-semibold capitalize">
              Choose Us
            </p>
          </div>

          <div className="flex md:flex-2/3 justify-center items-center gap-3">
            <div
              className={cn(
                "flex flex-col justify-between rounded-2xl border-1 border-card",
                "bg-linear-to-b from-primary/40 shadow-2xl to-primary/30 p-4 gap-6 md:w-40 md:h-40"
              )}
            >
              <span className="text-5xl">5k+</span>
              <p>organization trust</p>
            </div>
            <div
              className={cn(
                "flex flex-col justify-between rounded-2xl border-1",
                "border-black/20 bg-linear-to-b shadow-2xl from-white/10 to-black/20 p-4 gap-6 md:w-40 md:h-40"
              )}
            >
              <span className="text-5xl">5k+</span>
              <p>organization trust</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:my-8 md:py-8 space-y-4">
          <div className="md:flex-2/3">
            <p className="text-foreground/70 text-xl font-semibold capitalize md:w-2/3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
              vel?
            </p>
            <p className="text-foreground/70 text-xl font-semibold capitalize md:w-2/3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              provident neque minima
            </p>
          </div>

          <div className="flex md:flex-1/3 justify-center items-center gap-3">
            <div
              className={cn(
                "flex flex-col justify-between rounded-2xl border-1 border-card",
                "bg-linear-to-b rom-primary/30 shadow-2xl to-primary/20 p-4 gap-6 md:w-40 md:h-40"
              )}
            >
              <span className="text-5xl">5k+</span>
              <p>organization trust</p>
            </div>
            <div
              className={cn(
                "flex flex-col justify-between rounded-2xl border-1",
                "border-black/20 bg-linear-to-b shadow-2xl from-white/10 to-black/20 p-4 gap-6 md:w-40 md:h-40"
              )}
            >
              <span className="text-5xl">5k+</span>
              <p>organization trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
