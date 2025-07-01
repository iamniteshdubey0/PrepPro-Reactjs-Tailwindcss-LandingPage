import React from "react";
import { SummaryItems } from "../constants/Constant";

const SummarySection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 px-4 overflow-hidden rounded-4xl">
      {/* Text Content */}
      <div className="absolute inset-0 z-0 pointer-events-none rounded-4xl">
        <div className="absolute top-10 left-10 w-60 h-60 bg-primary/40 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-primary/50 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-primary/90 rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-0 right-20 w-52 h-52 bg-green-50/50 rounded-full blur-[80px] opacity-60" />
      </div>
      <div className="relative z-10 mt-8 text-center px-4 space-y-6">
        <p className="text-xs text-primary font-medium tracking-wide">
          {SummaryItems.heading.subTitle}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-2">
          {SummaryItems.heading.title.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br></br>
            </React.Fragment>
          ))}
        </h2>
        <div className=" pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="solid-button py-4">
            view my projects
          </a>
        </div>
        <div className="flex justify-center mt-12 p-2 space-x-8">
          {SummaryItems.ratings.map((item, key) => (
            <div key={key} className="flex items-center space-x-2 text-foreground/60">
              <span className="text-sm font-semibold">{item.text}</span>
              <span className="p-2 bg-primary/10 rounded-full flex justify-center items-center">
                {item.icon}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
