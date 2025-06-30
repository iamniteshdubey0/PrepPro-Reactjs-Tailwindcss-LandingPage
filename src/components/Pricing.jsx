import React, { useState } from "react";
import { PricingItems } from "../constants/Constant";
import { Check } from "lucide-react";

const Pricing = () => {
  const [planType, setPlanType] = useState("monthly");
  return (
    <section id="pricing" className="relative flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
      {/* Text Content */}
      <div className="relative z-10 mt-8 text-center px-4">
        <p className="text-xs text-primary font-medium tracking-wide">
          {PricingItems.heading.subTitle}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-2">
          {PricingItems.heading.title.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br></br>
            </React.Fragment>
          ))}
        </h2>
      </div>
      <div className="flex max-md:flex-col flex-row items-center justify-center gap-6 my-12 overflow-hidden">
        <div className="inline-flex mt-6 mb-10 bg-primary/30 rounded-full p-1 transition-all duration-300">
          {["monthly", "yearly"].map((type) => (
            <button
              key={type}
              onClick={() => setPlanType(type)}
              className={`px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                planType === type
                  ? "bg-primary/60 text-foreground/80 shadow"
                  : "text-foreground/60"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {PricingItems.plans.map((plan, i) => {
          const Icon = plan.icon;
          return (
            <div
              key={i}
              className={`rounded-2xl p-6 shadow-md bg-background/90 border ${
                plan.highlight
                  ? "bg-gradient-to-br from-primary/80 to-primary-50 text-foreground border-1 border-primary/60 scale-105 z-10"
                  : "border-slate-200"
              } transition-all`}
            >
              {plan.badge && (
                <div className="text-xs bg-background text-primary px-3 py-1 rounded-full font-semibold w-fit mx-auto mb-4">
                  {plan.badge}
                </div>
              )}

              <div className="flex justify-start items-center mb-8 gap-4">
                <Icon
                  size={48}
                  className={
                    plan.highlight ? "text-foreground" : "text-primary/80"
                  }
                />
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.highlight ? "text-foreground" : "text-foreground/80"
                  }`}
                >
                  {plan.title}
                </h3>
              </div>

              <h3
                className={`text-xl font-bold mb-2 ${
                  plan.highlight ? "text-foreground" : "text-foreground/80"
                }`}
              >
                ${plan.price}
                <span className="text-sm font-normal"> /month</span>
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.highlight ? "text-foreground/80" : "text-foreground/60"
                }`}
              >
                {plan.description}
              </p>

              <ul className="text-left space-y-3 mb-6">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check
                      className={`w-4 h-4 ${
                        plan.highlight ? "text-foreground" : "text-primary"
                      }`}
                    />
                    <span
                      className={
                        plan.highlight
                          ? "text-foreground"
                          : "text-foreground/70"
                      }
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 rounded-full font-medium transition-all duration-300 ${
                  plan.highlight
                    ? "bg-background text-primary hover:bg-background/80"
                    : "bg-primary/60 text-foreground hover:bg-primary/80"
                }`}
              >
                {plan.action}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
