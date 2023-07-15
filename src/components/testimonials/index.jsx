import React from "react";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";

const Testimonials = () => {
  const testimonials = [
    {
      image: {
        src: avatar1,
        alt: "Testimonial 1",
      },
      name: "Jaydon Aminoff",
      position: "UX Designer",
      testimonial:
        "We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.",
      title: "It proved to be exactly the kind of home we wanted.",
    },
    {
      image: {
        src: avatar2,
        alt: "Testimonial 2",
      },
      name: "Alfredo Donin",
      position: "UI Designer",
      testimonial:
        "My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland. ",
      title: "Nobody knows Portland and the peninsula better than David.",
    },
    {
      image: {
        src: avatar3,
        alt: "Testimonial 3",
      },
      name: "Makenna Korsgaard",
      position: "UX Researcher",
      testimonial:
        "After working with David to sell my home in 2013, I was convinced that he’s the only realtor I’ll ever need. Since then, I’ve bought two properties and sold one.",
      title: "He keeps his client’s best interests in sharp focus.",
    },
  ];

  return (
    <section className="px-10 md:px-32 md:py-[7.5rem] mb-[15rem] xl:mb-0 flex flex-col h-screen bg-white">
      <span className="px-[24px] py-[12px] mb-[1rem] bg-grey-light uppercase text-primary-light w-fit">
        CUSTOMER TESTIMONIAL{" "}
      </span>

      <div className="flex justify-between items-center mb-[3rem]">
        <h2 className="text-3xl text-[#054457] md:text-5xl font-bold mb-[1rem]">
          What people are saying <br /> about us{" "}
        </h2>{" "}
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem]">
        {testimonials.map((testimonial) => (
          <div
            className="border border-1 border-[#DEDCDA] p-6 flex flex-col"
            key={testimonial.name}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="34"
              viewBox="0 0 42 34"
              fill="none"
              className="mb-[1.5rem]"
            >
              <path
                d="M0 34V22.625C0 18.375 0.752239 14.4583 2.25672 10.875C3.76119 7.29167 6.31045 3.66667 9.90448 0L16.4239 5.125C14.3343 7.20834 12.7463 9.16667 11.6597 11C10.5731 12.8333 9.86269 14.7083 9.52836 16.625H17.5522V34H0ZM24.4478 34V22.625C24.4478 18.375 25.2 14.4583 26.7045 10.875C28.209 7.29167 30.7582 3.66667 34.3522 0L40.8716 5.125C38.7821 7.20834 37.194 9.16667 36.1075 11C35.0209 12.8333 34.3104 14.7083 33.9761 16.625H42V34H24.4478Z"
                fill="#F5F5F5"
              />
            </svg>
            <h4 className="text-md mb-[1rem] font-medium">
              {testimonial.title}
            </h4>
            <p className="text-sm mb-[1.5rem]">{testimonial.testimonial}</p>
            <div className="flex gap-[1rem]">
              <img src={testimonial.image.src} alt={testimonial.image.alt} />
              <div className="flex flex-col">
                <p className="text-xs text[#0B2E29] mb-2 font-bold">
                  {testimonial.name}{" "}
                </p>
                <p className="text-xs text-grey">{testimonial.position} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
