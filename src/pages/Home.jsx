import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Customers from "../components/Customers";
import WhyUs from "../components/WhyUs";
import Productivity from "../components/Productivity";

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
      {/* footer */}
    </div>
  );
};

export default Home;
