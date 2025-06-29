import { IntegrationItems } from "../constants/Constant";
import React from "react";

const getRandomIndexes = (count, max) => {
  const indexes = new Set();
  while (indexes.size < count) {
    indexes.add(Math.floor(Math.random() * max));
  }
  return [...indexes];
};

const Integrations = () => {
  const totalBoxes = 32;
  const boxIconCount = 10; // Adjust the number of Box icons
  const iconPositions = getRandomIndexes(boxIconCount, totalBoxes);
  return (
    <section className="relative h-full flex flex-col items-center justify-center py-18 md:py-36 px-4 overflow-hidden my-18 md:my-40">
      <div
        className="absolute inset-0 z-0 grid grid-cols-5 md:grid-cols-8 gap-2 md:gap-4 pointer-events-none px-4
             [mask-image:radial-gradient(circle_at_center,white,transparent)]
             [-webkit-mask-image:radial-gradient(circle_at_center,white,transparent)]"
      >
        {[...Array(totalBoxes)].map((_, i) => {
          const Icon = iconPositions.includes(i) ? IntegrationItems.icons[iconPositions.indexOf(i)] : null;

          return (
            <div
              key={i}
              className="aspect-square rounded-xl bg-foreground/5 flex items-center justify-center"
            >
              {Icon && (
                <Icon className="w-14 h-14 md:w-20 md:h-20 text-primary/60 opacity-70" />
              )}
            </div>
          );
        })}
      </div>

      {/* Center Text */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-24">
        <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
          {IntegrationItems.heading.title.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br></br>
            </React.Fragment>
          ))}
        </h2>
        <button className="solid-button my-8">See All Integrations</button>
      </div>
    </section>
  );
};

export default Integrations;
