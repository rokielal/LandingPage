import React from "react";
import Navbar from "./components.jsx/Navbar";
import HeroSection from "./components.jsx/HeroSection";
import FeatureSection from "./components.jsx/FeatureSection";

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
    </div>
  );
};

export default App;
