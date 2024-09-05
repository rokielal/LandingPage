import React from "react";
import { pricingOptions } from "../constants";
import { BadgeCheck } from "lucide-react";

const Pricing = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl text-center">Pricing</h1>
      </div>
      <div className="flex justify-center flex-wrap p-6 ">
        {pricingOptions.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 m-4 p-4 sm:max-lg:w-[70%] lg:w-64 "
          >
            <h2 className="text-xl sm:max-lg:text-4xl my-4">
              {item.title}{" "}
              {item.title === "Pro" && (
                <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-sm mb-4">
                  (Most Popular)
                </span>
              )}
            </h2>

            <h2 className="text-3xl mb-4">
              {item.price}
              <span className="text-xs text-neutral-500 ml-1">/Month</span>
            </h2>
            <ul>
              {item.features.map((feature) => (
                <li className="flex items-center mb-4 ">
                  <div className="text-green-400">
                    {" "}
                    <BadgeCheck />
                  </div>

                  <span className="ml-2 text-sm sm:max-lg:text-xl">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button className="inline-flex justify-center items-center text-center w-full border mt-8 p-2 rounded bg-gradient-to-r from-orange-500 to-red-800">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
