import React from "react";

const WhyUs = () => {
    return (
        <section id="whyus" className="py-8 px-4 relative">
            <div className="container mx-auto max-w-8xl space-y-2">
                <div className="flex items-start my-8 py-8">
                    <div className="flex-1/3">
                        <p className="text-foreground/70 text-xl font-semibold capitalize">
                            why
                        </p>
                        <p className="text-foreground/70 text-xl font-semibold capitalize">
                            Choose Us
                        </p>
                    </div>

                    <div className="flex flex-2/3 justify-start items-center space-x-4">
                        <div className="flex w-40 h-40 flex-col justify-between rounded-2xl bg-primary/80 p-4">
                            <span className="text-5xl">5k+</span>
                            <p>organization trust</p>
                        </div>
                        <div className="flex w-40 h-40 flex-col justify-between rounded-2xl bg-primary/80 p-4">
                            <span className="text-5xl">5k+</span>
                            <p>organization trust</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-end my-8 py-8">
                    <div className="flex-2/3 pr-8">
                        <p className="text-foreground/70 text-xl font-semibold capitalize">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, vel?
                        </p>
                        <p className="text-foreground/70 text-xl font-semibold capitalize">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam provident neque minima sapiente accusamus dolorum.
                        </p>
                    </div>

                    <div className="flex flex-1/2 justify-start items-center space-x-4">
                        <div className="flex w-40 h-40 flex-col justify-between rounded-2xl bg-primary/80 p-4">
                            <span className="text-5xl">5k+</span>
                            <p>organization trust</p>
                        </div>
                        <div className="flex w-40 h-40 flex-col justify-between rounded-2xl bg-primary/80 p-4">
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
