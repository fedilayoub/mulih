import React from "react";

const Card = ({ image, title, location, price, surface }) => {
  return (
    <div className="border border-1 border-[#DEDCDA] p-[1rem]">
      <img
        className="w-[100%] h-auto mb-[1rem]"
        src={image.src}
        alt={image.alt}
      />
      <h3 className="font-base text-md mb-[0.5rem]">{title}</h3>
      <p className="text-xs text-grey mb-[1rem] ">{location}</p>
      <div className="flex items-center mb-[1.5rem] ">
        <p className="text-primary text-lg mr-[2rem] font-bold ">${price}</p>
        <p className="px-1 bg-grey-light text-sm">
          {surface}m²<span className="text-xs text-grey ml-1">Living Area</span>
        </p>
      </div>
      <button className="w-full border border-1 border-primary-light bg-white py-[0.75rem] px-[3rem] text-primary-light hover:bg-primary-light hover:text-white">
        Send inquiry
      </button>
    </div>
  );
};

export default Card;
