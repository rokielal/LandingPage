import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="flex items-center justify-between text-white text-sm mx-8 py-2 ">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-10" />
          <h4 className="text-xl tracking-tight">VirtualR</h4>
        </div>
        <div className="hidden md:flex list-none ">
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href} className="mx-3">
                  {item.label}
                </a>
              </li>
            );
          })}
        </div>
        <div className="hidden md:flex">
          <button className="border rounded py-2 px-3 mr-4 bg-gradient-to-r from-orange-500 to-orange-800 ">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-orange-500 to-orange-800 border rounded py-2 px-3">
            Create Account
          </button>
        </div>

        <div
          className="md:hidden"
          onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
        >
          {mobileDrawerOpen ? <X /> : <Menu />}
        </div>
      </div>

      {mobileDrawerOpen && (
        <div className="fixed w-full bg-zinc-900">
          <div className="flex flex-col items-center list-none py-8 text-left md:hidden ">
            {navItems.map((item, index) => {
              return (
                <li key={item.index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            })}
          </div>
          <div className="flex justify-center md:hidden mb-10">
            <button className="border rounded py-2 px-3 mr-4">Sign In</button>
            <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-1 px-3 border rounded">
              Create Account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
