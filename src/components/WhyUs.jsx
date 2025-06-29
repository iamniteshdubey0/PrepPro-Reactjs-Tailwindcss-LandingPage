import { cn } from "../lib/utils";
import React from "react";
import { WhyusItems } from "../constants/Constant";

const WhyUs = () => {
  return (
    <section id="whyus" className="p-2 md:py-8 md:px-4 relative">
      <div className="container mx-auto space-y-24 ">
        {/* background grid effect */}
        <div
          className="absolute inset-0 z-0 max-sm:hidden"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px),linear-gradient(to bottom, rgba(0,0,0,0.15) 1px, transparent 1px)`,
            backgroundSize: "150px 150px",
            WebkitMaskImage:
              "linear-gradient(to right, black 60%, transparent 60%)",
            maskImage: "linear-gradient(to right, black 60%, transparent 60%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        ></div>
        <div className="flex flex-col md:flex-row items-start md:my-8 md:py-8 space-y-4">
          <div className="md:flex-1/3">
            <p className="text-foreground/70 text-xl font-semibold capitalize">
              {WhyusItems.heading.title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>

          <div className="flex md:flex-2/3 justify-center items-center gap-3">
            {WhyusItems.feats.slice(0, 2).map((item, key) => (
              <div
                key={key}
                className={cn(
                  "flex flex-col justify-between rounded-2xl border-1 border-card",
                  "bg-linear-to-b shadow-2xl p-4 gap-6 md:w-40 md:h-40",
                  [item.color]
                )}
              >
                <span className="text-5xl">{item.value}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:my-8 md:py-8 space-y-4">
          <div className="md:flex-2/3">
            <p className="text-foreground/70 text-xl font-semibold capitalize md:w-2/3">
              {WhyusItems.heading.desc}
            </p>
          </div>

          <div className="flex md:flex-1/3 justify-center items-center gap-3">
            {WhyusItems.feats.slice(2).map((item, key) => (
              <div
                key={key}
                className={cn(
                  "flex flex-col justify-between rounded-2xl border-1 border-card",
                  "bg-linear-to-b shadow-2xl p-4 gap-6 md:w-40 md:h-40",
                  [item.color]
                )}
              >
                <span className="text-5xl">{item.value}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
