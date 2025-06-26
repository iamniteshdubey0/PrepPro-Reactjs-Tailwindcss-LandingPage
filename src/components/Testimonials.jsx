import React from "react";
import { cn } from "../lib/utils";

const testimonials = [1,2,3,4,5]

const Testimonials = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
      {/* Text Content */}
      <div className="relative z-10 mt-8 text-center px-4">
        <p className="text-xs text-primary font-medium tracking-wide">
          HireSphere People Platform
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-2">
          Built to Power Your Entire <br />
          Workspace
        </h2>
      </div>
      <div className="flex flex-row items-center justify-center gap-6 my-12 overflow-hidden">
        {testimonials.map((key) => (
          <div key={key} className="space-y-2">
            <div
              className={cn(
                "flex justify-start gap-4",
                "w-30 h-30 md:w-35 md:h-80 hover:border-1 border-primary rounded-xl",
                "hover:w-110 transition-all duration-400 cursor-pointer hover:p-3 hover:shadow-md",
                "hover:bg-primary text-foreground"
              )}
            >
              <img
                className="grayscale w-34 h-full rounded-lg object-cover"
                src="https://random.imagecdn.app/300/400"
                alt=""
              />

              <div className="flex flex-col justify-between gap-4">
                <p className="text-background/80 text-sm">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, dolores voluptate molestias et labore reprehenderit
                  rerum amet iusto earum quaerat."
                </p>

                <div className="space-y-0">
                  <p className="text-background/80 text-sm font-semibold mb-0">
                    Nitesh Dubey
                  </p>
                  <span className="text-background/80 text-xs font-semibold">
                    Lorem ipsum dolor sit amet.
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm font-semibold text-foreground">Excecutives</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
