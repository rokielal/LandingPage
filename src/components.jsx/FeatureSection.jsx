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
      <div className="flex flex-wrap justify-center text-left">
        {features.map((feature, index) => (
          <div key={index} className="text-2xl w-full lg:text-sm md:w-72 mx-6 my-5">
            <h1>{feature.text}</h1>
            <p className="text-neutral-500 mt-3">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
