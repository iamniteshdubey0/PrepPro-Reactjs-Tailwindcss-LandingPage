import React from "react";

const WhyUs = () => {
  return (
    <section id="whyus" className="p-2 md:py-8 md:px-4 relative">
      <div className="container mx-auto space-y-24">
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
            <div className="flex flex-col justify-between rounded-2xl bg-primary/80 p-4 gap-6 md:w-40 md:h-40">
              <span className="text-5xl">5k+</span>
              <p>organization trust</p>
            </div>
            <div className="flex flex-col justify-between rounded-2xl bg-primary/80 p-4 gap-6 md:w-40 md:h-40">
              <span className="text-5xl">5k+</span>
              <p>organization trust</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:my-8 md:py-8 space-y-4">
          <div className="md:flex-2/3">
            <p className="text-foreground/70 text-xl font-semibold capitalize md:w-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
              vel?
            </p>
            <p className="text-foreground/70 text-xl font-semibold capitalize md:w-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              provident neque minima
            </p>
          </div>

          <div className="flex md:flex-2/3 justify-center items-center gap-3">
            <div className="flex flex-col justify-between rounded-2xl bg-primary/80 p-4 gap-6 md:w-40 md:h-40">
              <span className="text-5xl">5k+</span>
              <p>organization trust</p>
            </div>
            <div className="flex flex-col justify-between rounded-2xl bg-primary/80 p-4 gap-6 md:w-40 md:h-40">
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
