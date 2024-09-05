import React from "react";
import { resourcesLinks } from "../constants";
import { platformLinks } from "../constants";
import { communityLinks } from "../constants";

const Footer = () => {
  return (
    <div className="mx-20 flex justify-center flex-wrap ">
      <hr className="w-full" />
      <div className=" sm:max-md:w-full sm:max-md:text-center m-6">
        <h1 className="text-xl mb-2">Resources</h1>
        {resourcesLinks.map((resource, index) => (
          <li key={index} className="list-none text-neutral-400 text-sm p-1">
            <a href={resource.href}>{resource.text}</a>
          </li>
        ))}
      </div>
      <div className=" sm:max-md:w-full sm:max-md:text-center  m-6 ">
        <h1 className="text-xl mb-2">Platform</h1>
        {platformLinks.map((platform) => (
          <li className="list-none text-neutral-400 text-sm p-1">
            <a href={platform.href}>{platform.text}</a>
          </li>
        ))}
      </div>
      <div className=" sm:max-md:w-full sm:max-md:text-center m-6">
        <h1 className="text-xl mb-2">Community</h1>
        {communityLinks.map((comm) => (
          <li className="list-none text-neutral-400 text-sm p-1">
            <a href={comm.href}>{comm.text}</a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Footer;
