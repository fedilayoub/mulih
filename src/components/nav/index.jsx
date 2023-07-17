import React from "react";

const Nav = () => {
  return (
    <header className="px-10 md:px-32 h-fit bg-[#F5F5F5]">
      <nav>
        <div className="flex items-center justify-between py-4 z-20">
          <a href="/" className="flex items-center">
            <img src="/mulih.svg" className="h-10 w-10 mr-1" alt="Mulih Logo" />
            <span className="text-2xl text-primary font-medium leading-6 tracking-wider">
              Mulih
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  focus:ring-primary-light"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="text-lg text-grey flex flex-col p-4 md:p-0  rounded-lg md:flex-row md:border-0 items-center">
              <li className="group flex flex-col items-center">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 hover:text-primary group-hover:-translate-y-1 group-hover:py-0 ease-in duration-200"
                  aria-current="page"
                >
                  Home
                </a>{" "}
                <span className="text-primary-light hidden group-hover:block text-4xl leading-[0] font-bold">
                  .
                </span>
              </li>
              <li className="group flex flex-col items-center">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 hover:text-primary group-hover:-translate-y-1 group-hover:py-0 ease-in duration-200"
                >
                  Property
                </a>
                <span className="text-primary-light hidden group-hover:block text-4xl leading-[0] font-bold">
                  .
                </span>
              </li>
              <li className="group flex flex-col items-center">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 hover:text-primary group-hover:-translate-y-1 group-hover:py-0 ease-in duration-200"
                >
                  About
                </a>
                <span className="text-primary-light hidden group-hover:block text-4xl leading-[0] font-bold">
                  .
                </span>
              </li>
              <li className="group flex flex-col items-center">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 hover:text-primary group-hover:-translate-y-1 group-hover:py-0 ease-in duration-200"
                >
                  Service
                </a>
                <span className="text-primary-light hidden group-hover:block text-4xl leading-[0] font-bold">
                  .
                </span>
              </li>
              <li className="group flex flex-col items-center">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 hover:text-primary group-hover:-translate-y-1 group-hover:py-0 ease-in duration-200"
                >
                  Contact
                </a>
                <span className="text-primary-light hidden group-hover:block text-4xl leading-[0] font-bold">
                  .
                </span>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex ">
            <a
              href="/"
              className="px-[48px] pt-[16px] pb-[15px] text-primary-light mr-[8px] font-medium"
            >
              Sign in
            </a>
            <a
              href="/"
              className="px-[48px] pt-[16px] pb-[15px] text-white bg-primary-light font-medium"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
