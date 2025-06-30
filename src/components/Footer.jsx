import React from "react";
import { FooterItems } from "../constants/Constant";

const Footer = () => {
  return (
    <section className="relative pb-12 px-4 overflow-hidden">
      <div className="grid place-items-center grid-cols-2 md:grid-cols-6 z-10 mt-8 px-12 space-y-4 gap-4 border-t-2 border-b-2 py-12">
        {FooterItems.footerLinks.map((item, key) => (
          <div key={key} className="space-y-1 flex flex-col items-start">
            <p className="text-lg font-semibold mb-2 capitalize">
              {item.title}
            </p>
            {item.link.map((item, key) => (
              <a
                key={key}
                className="text-md font-normal capitalize text-foreground/50 hover:text-foreground/90"
                href={item.href}
              >
                {item.title}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-2 px-4 md:px-24 py-6">
        <div className="flex justify-between items-center gap-4">
          {FooterItems.rights.link.map((item, key) => (
            <a
              key={key}
              className="text-sm font-normal capitalize text-foreground/50 hover:text-foreground/90"
              href={item.href}
            >
              {item.title}
            </a>
          ))}
        </div>
        <p className="text-sm font-semibold text-foreground/40">
          {FooterItems.rights.label}
        </p>
      </div>
    </section>
  );
};

export default Footer;
