import { Cake } from "lucide-react";
import React from "react";
import { FeaturesItems } from "../constants/Constant";

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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[100px] w-full max-w-[500px] h-[250px]">
          {/* Icons manually positioned along arc */}

          {FeaturesItems.featuresIcons.map((item, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                top: item.position.top,
                left: item.position.left,
              }}
            >
              <IconBox icon={item.icon} />
            </div>
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 mt-8 text-center px-4">
        <p className="text-sm text-primary font-medium tracking-wide">
          {FeaturesItems.heading.subTitle}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-2">
          {FeaturesItems.heading.title.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br></br>
            </React.Fragment>
          ))}
        </h2>
        <button className="solid-button my-4">Discover Now</button>
      </div>
    </section>
  );
};

const IconBox = ({ icon }) => (
  <div className="w-12 h-12 rounded-xl shadow-lg flex bg-primary/60 items-center justify-center">
    {icon}
  </div>
);

export default Features;
