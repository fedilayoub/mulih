import React from "react";
import Card from "../card";
import img1 from "../../assets/images/pic1.webp";
import img2 from "../../assets/images/pic2.webp";
import img3 from "../../assets/images/pic3.webp";

const Recommandation = () => {
  const realEstateProperties = [
    {
      image: {
        src: img1,
        alt: "Property Image 1",
      },
      title: "Stunning Villa",
      location: "Sunnyville",
      price: 850000,
      surface: 300,
    },
    {
      image: {
        src: img2,
        alt: "Property Image 2",
      },
      title: "Cozy Apartment",
      location: "City Center",
      price: 320000,
      surface: 120,
    },
    {
      image: {
        src: img3,
        alt: "Property Image 3",
      },
      title: "Spacious Townhouse",
      location: "Suburbia",
      price: 500000,
      surface: 200,
    },
  ];

  return (
    <section className="px-10 md:px-32 md:py-[7.5rem] mb-[15rem] xl:mb-0 flex flex-col h-screen bg-white">
      <span className="px-[24px] py-[12px] mb-[1rem] bg-grey-light uppercase text-primary-light w-fit">
        Discover{" "}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold mb-[1rem]">
        Best recomendation
      </h2>
      <div className="flex justify-between items-center mb-[3rem]">
        <p className="text-sm text-grey">
          Discover our exclusive selection of the finest one-of-a-kind <br />{" "}
          luxury properties architectural masterpieces.
        </p>
        <button className="flex items-center gap-2 px-[24px] py-[12px] bg-[#FEFEFF] text-primary-light">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.0001 12C22.0001 17.52 17.5101 22 12.0001 22L11.7204 21.9962C6.32954 21.8478 2.00012 17.4264 2.00012 12C2.00012 6.49 6.48012 2 12.0001 2C17.5101 2 22.0001 6.49 22.0001 12ZM10.0201 8C9.73012 8.3 9.73012 8.77 10.0301 9.06L12.9801 12L10.0301 14.94C9.73012 15.23 9.73012 15.71 10.0201 16C10.3201 16.3 10.7901 16.3 11.0801 16L14.5701 12.53C14.7101 12.39 14.7901 12.2 14.7901 12C14.7901 11.8 14.7101 11.61 14.5701 11.47L11.0801 8C10.9401 7.85 10.7501 7.78 10.5601 7.78C10.3601 7.78 10.1701 7.85 10.0201 8Z"
              fill="#69B99D"
            />
          </svg>
        </button>
      </div>
      <div className="flex gap-[2.12rem] mb-[8rem]">
        {realEstateProperties.map((property) => (
          <Card key={property.title} {...property} />
        ))}
      </div>
    </section>
  );
};

export default Recommandation;
