import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] px-10 md:px-32 py-[5rem] md:py-[7.5rem] h-fit">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-0">
        <div className="col-span-1 md:col-span-3 flex flex-col">
          <a href="/" className="flex items-center mb-[1rem]">
            <img src="/mulih.svg" className="h-10 w-10 mr-1" alt="Mulih Logo" />
            <span className="text-2xl text-primary font-medium leading-6 tracking-wider">
              Mulih
            </span>
          </a>
          <p className="text-md mb-[1.5rem] ">
            We have built our reputation as true local area experts.
          </p>
          <label htmlFor="email" className="mb-[1rem]">
            <p className="text-xl font-medium">Newsletter</p>
          </label>
          <div className="flex flex-col md:flex-row gap-2 md:gap-0">
            <input
              type="email"
              className=" h-[2.625rem] px-[24px] py-[0.5rem] bg-white text-grey"
              placeholder="Input your email"
            />
            <button className="h-[2.625rem] bg-primary-light text-white py-2 px-6">
              Send
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <ul className="flex flex-col gap-4">
            <li className="flex  items-left">
              <h4 className="text-lg font-medium">Service</h4>
            </li>
            <li className="flex items-left">
              <a href="#" className="text-grey text-sm hover:text-primary">
                About us
              </a>
            </li>
            <li className="flex  items-left">
              <a href="#" className="text-grey text-sm hover:text-primary">
                Careers
              </a>
            </li>
            <li className="flex  items-left">
              <a href="#" className="text-grey text-sm hover:text-primary">
                Terms & Conditions
              </a>
            </li>
            <li className="flex  items-left">
              <a href="#" className="text-grey text-sm hover:text-primary">
                Privacy & Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul className="flex flex-col gap-4">
            <li className="flex  items-left">
              <h4 className="text-lg font-medium">Community</h4>
            </li>
            <li className="flex items-left">
              <a href="#" className="text-grey text-sm hover:text-primary">
                Find agents
              </a>
            </li>
            <li className="flex  items-left">
              <a href="#" className="text-grey text-sm hover:text-primary">
                Lifestyle
              </a>
            </li>
            <li className="flex  items-left">
              <a href="#" className="text-grey text-sm hover:text-primary">
                Legal notice
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul className="flex flex-col gap-4">
            <li className="flex  items-left">
              <h4 className="text-lg font-medium">Follow us on</h4>
            </li>
            <li className="flex items-left">
              <div className="flex gap-2">
                <a href="#" className="text-grey text-sm hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <circle cx="20" cy="20" r="20" fill="#F8F9F9" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.4206 14.922C18.8033 14.7356 21.1968 14.7356 23.5794 14.922L25.1799 15.0472C26.0714 15.117 26.8007 15.7851 26.9481 16.6671C27.3168 18.8739 27.3168 21.1266 26.9481 23.3334C26.8007 24.2153 26.0714 24.8835 25.1799 24.9532L23.5794 25.0784C21.1968 25.2648 18.8033 25.2648 16.4206 25.0784L14.8201 24.9532C13.9287 24.8835 13.1994 24.2153 13.052 23.3334C12.6833 21.1266 12.6833 18.8739 13.052 16.6671C13.1994 15.7851 13.9287 15.117 14.8201 15.0472L16.4206 14.922ZM18.5714 21.7646V18.2358C18.5714 18.0693 18.7531 17.9664 18.896 18.0521L21.8366 19.8165C21.9753 19.8997 21.9753 20.1008 21.8366 20.184L18.896 21.9484C18.7531 22.0341 18.5714 21.9312 18.5714 21.7646Z"
                      fill="#29CDB5"
                    />
                  </svg>
                </a>
                <a href="#" className="text-grey text-sm hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <circle cx="20" cy="20" r="20" fill="#F8F9F9" />
                    <path
                      d="M24.2857 12.8574H22.1429C21.1957 12.8574 20.2873 13.2337 19.6175 13.9035C18.9477 14.5732 18.5714 15.4816 18.5714 16.4289V18.5717H16.4286V21.4289H18.5714V27.1431H21.4286V21.4289H23.5714L24.2857 18.5717H21.4286V16.4289C21.4286 16.2394 21.5038 16.0577 21.6378 15.9238C21.7718 15.7898 21.9534 15.7146 22.1429 15.7146H24.2857V12.8574Z"
                      fill="#29CDB5"
                    />
                  </svg>
                </a>
                <a href="#" className="text-grey text-sm hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <circle cx="20" cy="20" r="20" fill="#F8F9F9" />
                    <path
                      d="M20 17.6787C18.7179 17.6787 17.6786 18.7181 17.6786 20.0002C17.6786 21.2823 18.7179 22.3216 20 22.3216C21.2821 22.3216 22.3215 21.2823 22.3215 20.0002C22.3215 18.7181 21.2821 17.6787 20 17.6787Z"
                      fill="#29CDB5"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.264 13.6298C18.7269 13.3545 21.2732 13.3545 23.7361 13.6298C25.0921 13.7813 26.1858 14.8498 26.345 16.2105C26.6394 18.7284 26.6394 21.272 26.345 23.7898C26.1858 25.1506 25.0921 26.219 23.7361 26.3705C21.2732 26.6458 18.7269 26.6458 16.264 26.3705C14.908 26.219 13.8143 25.1506 13.6551 23.7898C13.3606 21.272 13.3606 18.7284 13.6551 16.2105C13.8143 14.8498 14.908 13.7813 16.264 13.6298ZM23.5715 15.7145C23.177 15.7145 22.8572 16.0343 22.8572 16.4287C22.8572 16.8232 23.177 17.143 23.5715 17.143C23.966 17.143 24.2857 16.8232 24.2857 16.4287C24.2857 16.0343 23.966 15.7145 23.5715 15.7145ZM16.6072 20.0002C16.6072 18.1263 18.1262 16.6073 20 16.6073C21.8739 16.6073 23.3929 18.1263 23.3929 20.0002C23.3929 21.874 21.8739 23.393 20 23.393C18.1262 23.393 16.6072 21.874 16.6072 20.0002Z"
                      fill="#29CDB5"
                    />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
