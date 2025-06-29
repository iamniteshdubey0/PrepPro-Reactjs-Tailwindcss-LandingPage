import { Box } from "lucide-react";
import React from "react";

const Newsletter = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-24 pb-6 px-4 overflow-hidden rounded-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 z-10 mt-8 text-center px-4 space-y-6">
        <div className="flex flex-col gap-2 items-start p-2 text-left md:w-2/3">
          <div className="flex flex-col text-2xl font-bold text-primary items-start">
            <Box size={24}></Box>
            <p className="">PrepPro</p>
          </div>

          <p className="text-sm md:text-md font-semibold text-foreground/60 max-w-xl mx-auto opacity-0 animate-fade-in-delay-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex optio
            fugit eos porro rem asperiores illo cupiditate esse eveniet expedita
            aut, nostrum adipisci quo corporis unde maxime amet
          </p>
        </div>

        <div className="flex flex-col gap-2 items-start p-2 text-left">
          <form action="" className="w-full space-y-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="subscribe" className="text-md font-semibold">Subscribe</label>
              <input className="md:w-2/3 w-full border-0 bg-foreground/10 py-3 px-4 rounded-md focus:outline-0" type="email" name="subscribe" id="subscribe" />
            </div>

            <button className="outlined-button">Subscribe</button>
          </form>
          <p className="text-xs font-semibold text-foreground/60">
            By subscribing your are agreeing on terms& polices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
