import React from "react";
import { cn } from "../lib/utils";
import { TestimonialsItems } from "../constants/Constant";

const Testimonials = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
      {/* Text Content */}
      <div className="relative z-10 mt-8 text-center px-4">
        <p className="text-xs text-primary font-medium tracking-wide">
          {TestimonialsItems.heading.subTitle}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-2">
          {TestimonialsItems.heading.title.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br></br>
            </React.Fragment>
          ))}
        </h2>
      </div>
      <div className="flex max-md:flex-col flex-row items-center justify-center gap-6 my-12 overflow-hidden">
        {TestimonialsItems.reviews.map((item, key) => (
          <div key={key} className="space-y-2">
            <div
              className={cn(
                "flex max-sm:flex-col flex-row justify-start gap-4 overflow-hidden",
                "max-sm:w-full max-sm:h-35 w-35 h-80 hover:border-1 border-primary rounded-xl",
                "max-sm:active:h-80  hover:w-110 transition-all duration-400 cursor-pointer hover:p-3 active:p-3 hover:shadow-md",
                "active:shadow-md active:bg-primary hover:bg-primary text-foreground"
              )}
            >
              <img
                className="grayscale w-full h-35 md:w-34 md:h-full rounded-lg object-cover"
                src={item.imgUrl}
                alt={item.name}
              />

              <div className="flex flex-col justify-between gap-4">
                <p className="text-background/80 text-sm">{item.note}</p>

                <div className="space-y-0">
                  <p className="text-background/80 text-sm font-semibold mb-0">
                    {item.name}
                  </p>
                  <span className="text-background/80 text-xs font-semibold">
                    {item.degisnation}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
