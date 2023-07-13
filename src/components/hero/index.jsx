import React from "react";
import heroImg from "../../assets/images/hero_img.webp";
import Nav from "../nav";

const Hero = () => {
  return (
    <section className="relative h-screen bg-[#F5F5F5]">
      <Nav />
      <img className="absolute bottom-0 right-0" src={heroImg} alt="" />
      <div className="px-32 mt-56 flex flex-col items-start h-full w-[60%] blance">
        <h1 className="text-7xl font-bold mb-6">
          Let's hunt for your dream residence
        </h1>
        <p className="text-sm text-grey break-words">
          Explore our range of beautiful properties with the addition of
          separate accommodation suitable for you.
        </p>
      </div>
    </section>
  );
};

export default Hero;
