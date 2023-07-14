import React from "react";
import heroImg from "../../assets/images/hero_img.webp";
import Nav from "../nav";

const Hero = () => {
  return (
    <section className="px-10 md:px-32 relative h-screen bg-[#F5F5F5]">
      <Nav />
      <img
        className="md:w-[35rem] xl:w-[50rem] absolute bottom-0 right-0 z-0"
        src={heroImg}
        alt="Home Image"
      />
      <div className=" mt-10 md:mt-0 xl:mt-44 flex flex-col items-start h-full md:w-[70%] xl:w-[50%]">
        <span className="px-[24px] py-[12px] mb-[32px] bg-white uppercase text-primary-light">
          {" "}
          real estate
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tetx-[#1F2744] font-">
          Let's hunt for your dream residence
        </h1>
        <p className="text-sm text-grey mb-[3rem]">
          Explore our range of beautiful properties with the addition of <br />
          separate accommodation suitable for you.
        </p>
        <div className="flex flex-col z-10">
          <div className="flex">
            <button className="px-[24px] py-[12px] bg-[#FEFEFF] text-primary-light">
              Rent
            </button>
            <button className="px-[24px] py-[12px] text-grey bg-[#eee] md:bg-[#F5F5F5]">
              Buy
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center p-[32px] bg-[#FEFEFF] gap-[2.5rem] shadow-lg w-72 md:w-full">
            <div className="flex flex-col">
              <label for="locations" className="text-sm">
                Location
              </label>
              <select
                id="locations"
                className="bg-[#FEFEFF] text-grey text-sm w-full  "
              >
                <option selected value="location1">
                Bogor, Jawa Barat
                </option>
                <option value="location2">Namit, Juya Guart</option>
                <option value="location3">Bogor, Jawa Barat</option>
                <option value="location4">Bogor, Jawa Barat</option>
              </select>
            </div>
            <div className="flex flex-col">
            <label for="type" className="text-sm">
                Type
              </label>
              <select
                id="type"
                className="bg-[#FEFEFF] text-grey text-sm w-full  "
              >
                <option selected value="home">
                  Home
                </option>
                <option value="Office">Office</option>
                <option value="Apartment">Apartment</option>
                <option value="Shop">Shop</option>
              </select>
            </div>
            <div className="flex flex-col">
            <label for="price range" className="text-sm">
                Price Range
              </label>
              <select
                id="price range"
                className="bg-[#FEFEFF] text-grey text-sm w-full  "
              >
                <option selected value="price1">
                  $200-$350
                </option>
                <option value="price2">$350-$500</option>
                <option value="price3">$500-$700</option>
                <option value="price4">$700-$1000</option>
                <option value="price5">$1000-$1500</option>
              </select>
            </div>
            <button className="px-[3rem] py-[1.12rem] text-white bg-primary-light font-medium">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
