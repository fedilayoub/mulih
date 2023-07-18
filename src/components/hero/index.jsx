import React from "react";
import heroImg from "../../assets/images/hero_img.webp";
import Nav from "../nav";

const Hero = () => {
  return (
    <>
      <Nav />
    <section className="px-10 md:px-32 pb-[5rem] xl:pb-0 relative min-h-screen bg-[#F5F5F5]">
      <img
        className="md:w-[35rem] xl:w-[50rem] absolute bottom-0 right-0 z-0"
        src={heroImg}
        alt="Home Image"
      />
      <div className=" pt-10 md:pt-0 md:mt-0 xl:pt-44  flex flex-col items-start h-full md:w-[70%] xl:w-[50%]">
        <span className="px-[24px] py-[12px] mb-[32px] bg-white uppercase text-primary-light">
          {" "}
          real estate
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#1F2744]">
          Let's hunt for your dream residence
        </h1>
        <p className="text-md text-grey mb-[3rem]">
          Explore our range of beautiful properties with the addition of <br />
          separate accommodation suitable for you.
        </p>
        <div className="flex flex-col z-10 w-full max-w-screen md:w-full">
          <div className="flex">
            <button className="px-[24px] py-[12px] bg-[#FEFEFF] text-primary-light">
              Rent
            </button>
            <button className="px-[24px] py-[12px] text-grey bg-[#eee] md:bg-[#F5F5F5]">
              Buy
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-start items-center p-[32px] bg-[#FEFEFF] gap-[2.5rem] shadow-[35px_35px_65px_0px_rgba(146,106,120,0.16)]">
            <div className="flex flex-col w-full">
              <label htmlFor="locations" className="text-sm">
                Location
              </label>
              <select
                id="locations"
                className="bg-[#FEFEFF] text-grey text-sm w-full"
                defaultValue={"location1"}
              >
                <option value="location1">Bogor, Jawa Barat</option>
                <option value="location2">Namit, Juya Guart</option>
                <option value="location3">Bogor, Jawa Barat</option>
                <option value="location4">Bogor, Jawa Barat</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="type" className="text-sm">
                Type
              </label>
              <select
                id="type"
                className="bg-[#FEFEFF] text-grey text-sm w-full  "
                defaultValue={"type1"}
              >
                <option value="home">
                  Home
                </option>
                <option value="Office">Office</option>
                <option value="Apartment">Apartment</option>
                <option value="Shop">Shop</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="price range" className="text-sm">
                Price Range
              </label>
              <select
                id="price range"
                className="bg-[#FEFEFF] text-grey text-sm w-full  "
                defaultValue={"price1"}
              >
                <option value="price1">
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
    </>
  );
};

export default Hero;
