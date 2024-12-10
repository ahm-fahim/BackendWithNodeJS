import React from "react";
import heroImg from "../assets/images/more/3.png";

const Hero = () => {
  return (
    <div className="h-full">
      <div className="heroBackground flex justify-end items-center">
        <div className="lg:w-1/2 p-5">
          <h1 className="font-rancho text-5xl text-textSecondary">
            Would You Like A Cup Of Most Delicious Hot Coffee?
          </h1>
          <p className="text-gray-600 font-poppins py-2 text-xs">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className=" my-4 font-rancho text-xl shadow-sm bg-backgroundSecondary py-2 px-4 rounded-sm">
            Follow Us
          </button>
        </div>
      </div>
      <div className="backgroundArt w-full"></div>
    </div>
  );
};

export default Hero;
