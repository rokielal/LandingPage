import React from "react";
import Navbar from "./components.jsx/Navbar";
import HeroSection from "./components.jsx/HeroSection";
import FeatureSection from "./components.jsx/FeatureSection";
import Workflow from "./components.jsx/Workflow";
import Pricing from "./components.jsx/Pricing";
import Testimonials from "./components.jsx/Testimonials";
import Footer from "./components.jsx/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <div className="pt-10 px-6">
        <FeatureSection />
      </div>
      <div className="pt-10 px-6">
        <Workflow />
      </div>
      <div className="pt-10 px-6">
        <Pricing />
      </div>
      <div className="pt-10 px-6">
        <Testimonials />
      </div>
      <div className="pt-10 px-6">
        <Footer />
      </div>
    </div>
  );
};

export default App;
