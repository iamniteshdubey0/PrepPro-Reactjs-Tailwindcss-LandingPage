import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Customers from "../components/Customers";
import WhyUs from "../components/WhyUs";
import Productivity from "../components/Productivity";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Integrations from "../components/Integration";
import Tools from "../components/Tools";
import Summary from "../components/summary";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

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
      <Testimonials></Testimonials>
      <Integrations></Integrations>
      <Tools></Tools>
      <Summary></Summary>
      <Newsletter> </Newsletter>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
