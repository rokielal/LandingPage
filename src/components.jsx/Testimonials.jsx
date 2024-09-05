import React from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl text-center mt-6">What People are saying</h1>
      </div>
      <div className="mx-2">
        <div className=" flex flex-wrap justify-center mt-10 ">
          {testimonials.map((testimonial) => (
            <div className=" bg-zinc-900 p-4 w-80 mx-1 mt-2 sm:max-lg:w-[70%] sm:mb-10 border">
              <p className="text-neutral-500">{testimonial.text}</p>
              <div className="flex items-center mt-6 mx-1">
                <img
                  src={testimonial.image}
                  className="size-10 rounded-full mr-4"
                />
                <div>
                  <span className="text-neutral-300">{testimonial.user}</span>
                  <p className="text-neutral-700 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
