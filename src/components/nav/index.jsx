import React from "react";

const Nav = () => {
  return (
    <nav className="bg-transparent border-gray-200 dark:bg-gray-900 z-10">
      <div className="flex flex-wrap items-center justify-around py-4">
        <a href="/" className="flex items-center">
          <img src="/mulih.svg" className="h-10 w-10 mr-1" alt="Mulih Logo" />
          <span className="text-2xl text-primary font-medium leading-6 tracking-wider">
            Mulih
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden align-items  w-full md:block md:w-auto" id="navbar-default">
          <ul className="text-lg text-grey flex flex-col p-4 md:p-0 gap-10 rounded-lg md:flex-row md:border-0 items-center">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 hover:text-primary"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 hover:text-primary"
              >
                Property
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 hover:text-primary"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 hover:text-primary"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className=" hidden md:flex align-items">
            <a href="/" className="px-[48px] pt-[16px] pb-[15px] text-primary-light mr-[8px] font-medium">
              Sign in
            </a>
            <a href="/" className="px-[48px] pt-[16px] pb-[15px] text-white bg-primary-light font-medium">
              Login
            </a>
          </div>
      </div>
    </nav>
  );
};

export default Nav;
