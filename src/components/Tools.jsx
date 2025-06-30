import React, { useState } from "react";
import { ToolsItems } from "../constants/Constant";

const SidebarItem = ({ icon: Icon, label, desc, active, onClick }) => (
  <div
    onClick={onClick}
    className={`p-4 font-medium rounded-xl cursor-pointer transition-all ${
      active
        ? "bg-foreground/10 text-foreground font-medium"
        : "hover:bg-muted/50 text-foreground/80"
    }`}
  >
    <div className="flex items-center gap-2 text-base">
      <Icon size={18} />
      <span>{label}</span>
    </div>
    {active && <p className="text-xs mt-1 text-muted-foreground">{desc}</p>}
  </div>
);

const RatingRow = ({ name, role = "SELF", activeIndex = 3, avatar }) => (
  <div className="rounded-xl p-4 bg-foreground/10 space-y-2 ">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-medium text-sm">{name}</span>
        <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-md">
          {role}
        </span>
      </div>
    </div>

    <div className="grid grid-cols-5 gap-2 text-sm font-semibold">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          className={`py-2 rounded-md ${
            num === activeIndex
              ? "bg-primary text-white"
              : "bg-primary/40 text-muted-foreground"
          }`}
        >
          {num}
        </button>
      ))}
    </div>
  </div>
);

const Tools = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = ToolsItems.sidebarItems[activeIndex];

  return (
    <section className="relative flex flex-col items-center justify-center py-12 px-4 overflow-hidden space-y-24">
      {/* Text Content */}
      <div className="relative z-10 mt-8 text-center px-4">
        <p className="text-xs text-primary font-medium tracking-wide">
          {ToolsItems.heading.subTitle}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-2">
          {ToolsItems.heading.title.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br></br>
            </React.Fragment>
          ))}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 w-full max-w-5xl">
        <div className="space-y-2">
          {ToolsItems.sidebarItems.map((item, i) => (
            <SidebarItem
              key={i}
              icon={item.icon}
              label={item.label}
              desc={item.desc}
              active={i === activeIndex}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
        <div className="flex-1 rounded-xl bg-gradient-to-br from-primary/40 to-primary-30 p-6 space-y-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase">
            {ToolsItems.Rating.title}
          </p>
          <h1 className="text-lg font-bold text-foreground max-w-lg">
            {ToolsItems.Rating.desc}
          </h1>

          <div className="space-y-4 mt-6">
            <RatingRow
              name="Sabrina Carpenter"
              role="SELF"
              activeIndex={3}
              avatar="https://randomuser.me/api/portraits/women/45.jpg"
            />
            <RatingRow
              name="Jesse Barbera"
              role="MANAGER"
              activeIndex={2}
              avatar="https://randomuser.me/api/portraits/men/43.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
