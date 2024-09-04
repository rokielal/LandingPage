import React from "react";
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div>
      <h1 className="text-center text-xl my-5 bg-gradient-to-r from-orange-500 to-red-900 text-transparent bg-clip-text tracking-wide">
        Feature
      </h1>
      <h1 className="text-center text-5xl sm:max-md:text-3xl my-5">
        Easily build{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-900 text-transparent bg-clip-text tracking-wide">
          your Code!
        </span>
      </h1>
      <div className="flex flex-wrap justify-center text-left mx-10">
        {features.map((feature, index) => (
          <div key={index} className="w-60 mx-6 my-5">
            <h1 className="text-sm font-medium">{feature.text}</h1>
            <p className="text-sm mt-5 font-thin">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
