import React from "react";
import { cn } from "../lib/utils";
import { Boxes } from "lucide-react";
import { ProductivityItems } from "../constants/Constant";

const Productivity = () => {
  return (
    <section
      id="productivity"
      className="py-24 px-0 md:px-4 relative bg-secondary/30"
    >
      <div className="container md:mx-auto max-sm:p-0">
        <div className="relative rounded-xl p-[1px] bg-gradient-to-b from-green-400 to-green-200">
          <div
            className={cn(
              "rounded-xl bg-background shadow-md p-6",
              "flex flex-col space-y-6 items-center text-center"
            )}
          >
            <p className="text-sm text-primary font-medium tracking-wide">
              {ProductivityItems.heading.subTitle}
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold">
              {ProductivityItems.heading.title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br></br>
                </React.Fragment>
              ))}
            </h1>
            <p className="md:w-1/2 text-sm font-semibold">
              {ProductivityItems.heading.desc}
            </p>

            {/* Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:p-4 w-full">
              {/* Left Tall Card */}
              <div
                className={cn(
                  "space-y-8 md:row-span-2 md:col-span-1 p-4 rounded-xl bg-gradient-to-b",
                  " from-white/20 to-black/10 shadow-xs h-full border-1 border-primary/60"
                )}
              >
                <div className="flex items-center justify-center p-4">
                  <img
                    className="object-cover shadow-2xl rounded-md"
                    src={ProductivityItems.cards.left.imgUrl}
                    height={250}
                    width={180}
                    alt={ProductivityItems.cards.left.title}
                  />
                </div>
                <div className="p-4 text-left space-y-2">
                  <h1 className="text-2xl text-primary/80 font-semibold">
                    {ProductivityItems.cards.left.title}
                  </h1>
                  <p className="text-xs text-foreground/70 font-semibold">
                    {ProductivityItems.cards.left.desc}
                  </p>
                </div>
              </div>

              {/* Top Right */}
              <div className="px-4 py-2 flex md:row-span-1 md:col-span-2 rounded-xl bg-gradient-to-b border-1 border-primary/60 from-white/20 to-black/10 shadow-xs  h-full">
                <div className="p-4 text-left space-y-2 flex-1">
                  <h1 className="text-2xl text-primary/80 font-semibold">
                    {ProductivityItems.cards.topRight.title}
                  </h1>
                  <p className="text-xs text-foreground/70 font-semibold">
                    {ProductivityItems.cards.topRight.desc}
                  </p>
                </div>

                <img
                  className="object-cover shadow-2xl rounded-md"
                  src={ProductivityItems.cards.topRight.imgUrl}
                  width={350}
                  alt={ProductivityItems.cards.topRight.title}
                />
              </div>

              {/* Bottom Right 1 */}
              <div className="rounded-xl bg-gradient-to-b from-white/20 to-black/10 shadow-xs  p-4 h-full space-y-4">
                <div className="p-4 text-left space-y-2">
                  <h1 className="text-2xl text-primary/80 font-semibold">
                    {ProductivityItems.cards.bottomRight1.title}
                  </h1>
                  <p className="text-xs text-foreground/70 font-semibold">
                    {ProductivityItems.cards.bottomRight1.desc}
                  </p>
                </div>
                <img
                  className="object-cover shadow-2xl rounded-md"
                  src={ProductivityItems.cards.bottomRight1.imgUrl}
                  height={100}
                  width={350}
                  alt={ProductivityItems.cards.bottomRight1.title}
                />
              </div>

              {/* Bottom Right 2 */}
              <div className="rounded-xl bg-gradient-to-b from-primary to-primary/80 shadow-xs p-4 h-full space-y-4">
                <h2 className="text-4xl text-background/80">
                  {ProductivityItems.cards.bottomRight2.title}
                </h2>
                <div className="text-background/60 flex justify-end">
                  {ProductivityItems.cards.bottomRight2.icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productivity;
