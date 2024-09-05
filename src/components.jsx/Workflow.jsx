import React from "react";
import { checklistItems } from "../constants";
import code from "../assets/code.jpg";
import { CircleCheck } from "lucide-react";

const Workflow = () => {
  return (
    <div className="pb-10">
      <h1 className="text-center text-4xl">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-800 to-red-900 bg-clip-text text-transparent">
          coding workflow.
        </span>
      </h1>
      <div className="flex justify-center items-center flex-wrap mt-10">
        <div className="w-[80%] lg:w-1/3">
          <img src={code} alt="code image" />
        </div>
        <div>
          {checklistItems.map((item, index) => {
            return (
              <div key={index} className="flex w-3/4 mt-10 ml-10 ">
                <div className="mx-4 text-green-400">
                  <CircleCheck />
                </div>
                <div className="text-2xl lg:text-sm">
                  <h1 className="text-md">{item.title}</h1>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
