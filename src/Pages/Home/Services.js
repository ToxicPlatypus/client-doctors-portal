import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"

const Services = () => {
  return (
    <div className="py-24">
      <div className="text-center">
        <p className="text-xl text-[#19D3AE]">OUR SERVICES</p>
        <p className="text-3xl">Services We Provide</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center py-4">
        <Service img={fluoride} title="Fluoride Treatment"></Service>
        <Service img={cavity} title="Cavity Filling"></Service>
        <Service img={whitening} title="Teeth Whitening"></Service>
      </div>
    </div>
  );
};

export default Services;
