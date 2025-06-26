import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Customers from "../components/Customers";
import WhyUs from "../components/WhyUs";
import Productivity from "../components/Productivity";
import Features from "../components/Features";

const Home = () => {
  return (
    <div>
      {/* background effect */}

      {/* navbar */}
      <Navbar></Navbar>

      {/* main content */}
      <Hero></Hero>
      <Customers></Customers>
      <WhyUs></WhyUs>
      <Productivity></Productivity>
      <Features></Features>
      {/* footer */}
    </div>
  );
};

export default Home;
