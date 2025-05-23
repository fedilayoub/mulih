import React from "react";
import heroImg from "../../assets/images/hero_img.webp";
import Nav from "../nav";

const Advantages = () => {
  return (
    <section className="px-10 md:px-32 h-fit py-[5rem] bg-[#F5F5F5]">
      <div className="flex flex-col items-start">
        <span className="px-[24px] py-[12px] mb-[32px] bg-white uppercase text-primary-light">
          Our advantages
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-[1rem] text-[#054457]">
          Giving you the peace of mind
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[2rem] w-full">
          <div className="flex flex-col p-[1.25rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              className="mb-[1rem]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.662 5.62658C37.0818 5.62658 38.4993 5.82683 39.847 6.27908C48.1518 8.97908 51.1443 18.0916 48.6445 26.0566C47.227 30.1268 44.9095 33.8416 41.8743 36.8768C37.5295 41.0843 32.7618 44.8194 27.6295 48.0368L27.067 48.3766L26.482 48.0144C21.3318 44.8194 16.537 41.0844 12.1518 36.8543C9.1368 33.8191 6.81705 30.1268 5.37705 26.0566C2.83455 18.0916 5.82705 8.97908 14.2218 6.23183C14.8743 6.00683 15.547 5.84933 16.222 5.76158H16.492C17.1243 5.66933 17.752 5.62658 18.382 5.62658H18.6295C20.047 5.66933 21.4195 5.91683 22.7493 6.36908H22.882C22.972 6.41183 23.0395 6.45908 23.0845 6.50183C23.5818 6.66158 24.052 6.84158 24.502 7.08908L25.357 7.47158C25.5636 7.58177 25.7955 7.75013 25.996 7.89564C26.1229 7.98783 26.2373 8.07085 26.3245 8.12408C26.3613 8.14574 26.3986 8.16753 26.4362 8.18949C26.6291 8.30211 26.8301 8.41942 26.9995 8.54933C29.4993 6.63908 32.5345 5.60408 35.662 5.62658ZM41.6471 21.8266C42.5696 21.8018 43.357 21.0616 43.4245 20.1143V19.8466C43.492 16.6943 41.5818 13.8391 38.6771 12.7366C37.7546 12.4193 36.7421 12.9166 36.4046 13.8616C36.0896 14.8066 36.5846 15.8416 37.5296 16.1768C38.9718 16.7168 39.9371 18.1366 39.9371 19.7093V19.7791C39.8943 20.2943 40.0496 20.7916 40.3646 21.1741C40.6796 21.5566 41.1521 21.7793 41.6471 21.8266Z"
                fill="#69B99D"
              />
            </svg>
            <h3 className="text-lg font-bold text-[#054457] mb-[1rem] ">
              Confortable
            </h3>
            <p className="text-sm text-grey mb-[1rem] ">
              Enjoy lifestyle amenities designed to provide every homeowners
              modern comfort, a stone's throw away from schools, churches, and
              hospitals.
            </p>
          </div>
          <div className="flex flex-col p-[1.25rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              className="mb-[1rem]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.3882 49.3057C26.6374 49.4359 26.916 49.5021 27.1946 49.4999C27.4732 49.4977 27.7496 49.4293 28.001 49.2969L36.0287 45.0055C38.3052 43.792 40.0879 42.4351 41.4787 40.8554C44.5027 37.4135 46.154 33.0206 46.1246 28.4909L46.0294 13.5495C46.0204 11.8285 44.89 10.2929 43.2184 9.73466L28.2842 4.72402C27.3849 4.41954 26.3995 4.42616 25.5161 4.73946L10.6386 9.92882C8.97592 10.5091 7.86599 12.0558 7.87506 13.7789L7.97019 28.7094C7.99964 33.2456 9.70757 37.6186 12.7814 41.0253C14.1858 42.583 15.9843 43.92 18.2857 45.1137L26.3882 49.3057ZM24.263 31.7451C24.5982 32.0672 25.0331 32.2261 25.4681 32.2217C25.903 32.2195 26.3356 32.0562 26.6663 31.7297L35.4393 23.0807C36.0985 22.4298 36.0917 21.384 35.4257 20.742C34.7575 20.0999 33.6815 20.1043 33.0224 20.7552L25.4431 28.226L22.3399 25.243C21.6717 24.6009 20.598 24.6075 19.9365 25.2584C19.2774 25.9093 19.2842 26.9551 19.9524 27.5971L24.263 31.7451Z"
                fill="#69B99D"
              />
            </svg>
            <h3 className="text-lg font-bold text-[#054457] mb-[1rem] ">
              Extra Security
            </h3>
            <p className="text-sm text-grey mb-[1rem] ">
              You can connect with potential tenants without having to share
              your phone number. We also require all users to register to
              validate their legitimacy.
            </p>
          </div>
          <div className="flex flex-col p-[1.25rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              className="mb-[1rem]"
            >
              <path
                d="M40.3166 32.2202C39.7339 32.785 39.4661 33.6017 39.5989 34.4027L41.5991 45.4727C41.7679 46.411 41.3719 47.3605 40.5866 47.9027C39.8171 48.4652 38.7934 48.5327 37.9541 48.0827L27.9889 42.8852C27.6424 42.7007 27.2576 42.6017 26.8639 42.5905H26.2541C26.0426 42.622 25.8356 42.6895 25.6466 42.793L15.6791 48.0152C15.1864 48.2627 14.6284 48.3505 14.0816 48.2627C12.7496 48.0107 11.8609 46.7417 12.0791 45.403L14.0816 34.333C14.2144 33.5252 13.9466 32.704 13.3639 32.1302L5.23912 24.2552C4.55962 23.596 4.32337 22.606 4.63387 21.7127C4.93537 20.8217 5.70487 20.1715 6.63412 20.0252L17.8166 18.403C18.6671 18.3152 19.4141 17.7977 19.7966 17.0327L24.7241 6.93024C24.8411 6.70524 24.9919 6.49824 25.1741 6.32274L25.3766 6.16524C25.4824 6.04824 25.6039 5.95149 25.7389 5.87274L25.9841 5.78274L26.3666 5.62524H27.3139C28.1599 5.71299 28.9046 6.21924 29.2939 6.97524L34.2866 17.0327C34.6466 17.7685 35.3464 18.2792 36.1541 18.403L47.3366 20.0252C48.2816 20.1602 49.0714 20.8127 49.3841 21.7127C49.6789 22.615 49.4246 23.605 48.7316 24.2552L40.3166 32.2202Z"
                fill="#69B99D"
              />
            </svg>
            <h3 className="text-lg font-bold text-[#054457] mb-[1rem] ">
              Luxury
            </h3>
            <p className="text-md text-grey mb-[1rem] ">
              Find out how we provide the highest standard of professional
              property management to give you all the benefits of property.
            </p>
          </div>
          <div className="flex flex-col p-[1.25rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              className="mb-[1rem]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44.4622 27.0022C44.4622 28.8326 45.9653 30.3219 47.8125 30.3219C48.744 30.3219 49.5 31.071 49.5 31.9939V38.0157C49.5 43.1077 45.3195 47.25 40.1805 47.25H13.8218C8.68275 47.25 4.5 43.1077 4.5 38.0157V31.9939C4.5 31.071 5.256 30.3219 6.1875 30.3219C8.037 30.3219 9.54 28.8326 9.54 27.0022C9.54 25.2187 8.09775 23.8766 6.1875 23.8766C5.73975 23.8766 5.31225 23.7004 4.995 23.3861C4.67775 23.0717 4.5 22.6459 4.5 22.2045L4.5045 15.9866C4.5045 10.8945 8.685 6.75 13.824 6.75H40.176C45.315 6.75 49.4977 10.8945 49.4977 15.9866L49.5 22.0105C49.5 22.4519 49.3223 22.88 49.0073 23.1921C48.69 23.5065 48.2625 23.6826 47.8125 23.6826C45.9653 23.6826 44.4622 25.1719 44.4622 27.0022ZM32.0669 28.4582L34.7197 25.8988C35.1809 25.4573 35.3407 24.8063 35.1404 24.2044C34.9424 23.6024 34.4249 23.1744 33.7994 23.0874L30.1342 22.5568L28.4939 19.2662C28.2127 18.6999 27.6412 18.3477 27.0044 18.3454H26.9999C26.3654 18.3454 25.7939 18.6977 25.5082 19.264L23.8679 22.5568L20.2094 23.0852C19.5772 23.1744 19.0597 23.6024 18.8594 24.2044C18.6614 24.8063 18.8212 25.4573 19.2802 25.8988L21.9329 28.4582L21.3074 32.0765C21.1994 32.7008 21.4537 33.3206 21.9712 33.6929C22.2637 33.9002 22.6034 34.0072 22.9477 34.0072C23.2109 34.0072 23.4764 33.9426 23.7194 33.8155L26.9999 32.1078L30.2737 33.811C30.8407 34.112 31.5134 34.0652 32.0287 33.6907C32.5484 33.3206 32.8027 32.7008 32.6947 32.0765L32.0669 28.4582Z"
                fill="#69B99D"
              />
            </svg>
            <h3 className="text-lg font-bold text-[#054457] mb-[1rem] ">
              Best price
            </h3>
            <p className="text-sm text-grey mb-[1rem] ">
              Not sure what you should be charging for your property? Let us do
              the numbers for you—contact us today for a free rental appraisal
              on your home.
            </p>
          </div>
          <div className="flex flex-col p-[1.25rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              className="mb-[1rem]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.875 23.215C7.875 12.8653 16.5237 4.5 26.9853 4.5C37.4763 4.5 46.125 12.8653 46.125 23.215C46.125 28.4303 44.2283 33.2722 41.1064 37.376C37.6623 41.9029 33.4174 45.847 28.6392 48.943C27.5457 49.6584 26.5587 49.7124 25.3585 48.943C20.5532 45.847 16.3082 41.9029 12.8936 37.376C9.76946 33.2722 7.875 28.4303 7.875 23.215ZM20.687 23.7977C20.687 27.2649 23.5162 29.9918 26.9852 29.9918C30.4565 29.9918 33.313 27.2649 33.313 23.7977C33.313 20.3576 30.4565 17.4979 26.9852 17.4979C23.5162 17.4979 20.687 20.3576 20.687 23.7977Z"
                fill="#69B99D"
              />
            </svg>
            <h3 className="text-lg font-bold text-[#054457] mb-[1rem] ">
              Strategic location
            </h3>
            <p className="text-sm text-grey mb-[1rem] ">
              located in the city center close to the shopping center. Very good
              for areas surrounded by international education centers, start-up
              office centers.
            </p>
          </div>
          <div className="flex flex-col p-[1.25rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              className="mb-[1rem]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.7343 4.97174C28.0936 4.64923 28.5689 4.48017 29.0554 4.50186C39.3398 4.80972 47.9348 12.2756 49.4926 22.2539C49.5024 22.3135 49.5024 22.3743 49.4926 22.4338C49.5261 22.906 49.3665 23.3718 49.0491 23.7282C48.7318 24.0846 48.2827 24.3022 47.8013 24.333L30.5225 25.4725C29.9511 25.5231 29.3844 25.3351 28.9616 24.9546C28.5389 24.574 28.2992 24.0363 28.3015 23.4734L27.1401 6.50096V6.22109C27.1612 5.74375 27.375 5.29426 27.7343 4.97174ZM26.5492 29.9106L41.5256 28.951L41.6275 28.991C42.2706 29.0015 42.8831 29.2623 43.3302 29.7159C43.7773 30.1696 44.0223 30.7789 44.0114 31.4099C43.4213 40.0096 37.1164 47.195 28.5362 49.0461C19.9561 50.8972 11.1604 46.9698 6.94751 39.4063C5.70874 37.2279 4.92593 34.8287 4.64502 32.3495C4.53607 31.6148 4.48837 30.8727 4.50239 30.1305C4.53079 20.986 11.0414 13.093 20.1512 11.1589C21.254 10.9525 22.3596 11.5031 22.8408 12.4984C22.9606 12.6789 23.0564 12.8738 23.126 13.0781C23.2968 15.7141 23.474 18.3252 23.6503 20.9253C23.7896 22.9787 23.9285 25.0253 24.0633 27.0718C24.0564 27.5539 24.1322 28.0338 24.2875 28.4912C24.6531 29.3912 25.5631 29.9623 26.5492 29.9106Z"
                fill="#69B99D"
              />
            </svg>
            <h3 className="text-lg font-bold text-[#054457] mb-[1rem] ">
              Efficient
            </h3>
            <p className="text-sm text-grey mb-[1rem] ">
              Schedule visits to multiple properties at once in one day without
              having to call them one by one. Check everything and find the best
              properties for rent
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
