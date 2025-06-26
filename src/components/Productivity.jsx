import React from "react";
import { cn } from "../lib/utils";
import { Boxes } from "lucide-react";

const Productivity = () => {
  return (
    <section
      id="productivity"
      className="py-24 px-0 md:px-4 relative bg-secondary/30"
    >
      <div className="container md:mx-auto max-sm:p-0">
        {/* ✅ Gradient Border Box */}
        <div className="relative rounded-xl p-[1px] bg-gradient-to-b from-green-400 to-green-200">
          {/* ✅ Inner White Box */}
          <div
            className={cn(
              "rounded-xl bg-background shadow-md p-6",
              "flex flex-col space-y-6 items-center text-center"
            )}
          >
            <h1 className="text-2xl md:text-3xl font-semibold">
              Empowererd Managers, <br /> Higher Performing Teams
            </h1>
            <p className="md:w-1/2 text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              accusantium ipsam rerum assumenda magnam autem ipsa saepe eveniet
              fugit hic quos. Deleniti provident quos distinctio?
            </p>

            {/* Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:p-4 w-full">
              {/* Left Tall Card */}
              <div
                className={cn(
                  "space-y-8 md:row-span-2 md:col-span-1 p-4 rounded-xl bg-gradient-to-b",
                  " from-white/20 to-black/10 shadow-xs h-full"
                )}
              >
                <div className="flex items-center justify-center p-4">
                  <img
                    className="object-cover shadow-2xl rounded-md"
                    src=""
                    height={250}
                    width={180}
                    alt=""
                  />
                </div>
                <div className="p-4 text-left space-y-2">
                  <h1 className="text-2xl text-primary/80 font-semibold">
                    OKRs & Golas
                  </h1>
                  <p className="text-xs text-foreground/70 font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reiciendis earum atque, accusantium doloribus officia
                    perferendis!
                  </p>
                </div>
              </div>

              {/* Top Right */}
              <div className="px-4 py-2 flex md:row-span-1 md:col-span-2 rounded-xl bg-gradient-to-b from-white/20 to-black/10 shadow-xs  h-full">
                <div className="p-4 text-left space-y-2 flex-1">
                  <h1 className="text-2xl text-primary/80 font-semibold">
                    Analytics
                  </h1>
                  <p className="text-xs text-foreground/70 font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reiciendis earum atque, accusantium doloribus officia
                    perferendis!
                  </p>
                </div>

                <img
                  className="object-cover shadow-2xl rounded-md"
                  src=""
                  width={350}
                  alt=""
                />
              </div>

              {/* Bottom Right 1 */}
              <div className="rounded-xl bg-gradient-to-b from-white/20 to-black/10 shadow-xs  p-4 h-full space-y-4">
                <div className="p-4 text-left space-y-2">
                  <h1 className="text-2xl text-primary/80 font-semibold">
                    OKRs & Golas
                  </h1>
                  <p className="text-xs text-foreground/70 font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reiciendis earum atque, accusantium doloribus officia
                    perferendis!
                  </p>
                </div>
                <img
                  className="object-cover shadow-2xl rounded-md"
                  src=""
                  height={100}
                  width={350}
                  alt=""
                />
              </div>

              {/* Bottom Right 2 */}
              <div className="rounded-xl bg-gradient-to-b from-primary to-primary/80 shadow-xs p-4 h-full space-y-4">
                <h2 className="text-4xl text-background/80">Reduced Turnover 28%</h2>
                <div className="text-background/60 flex justify-end">
                  <Boxes size={66}></Boxes>
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
