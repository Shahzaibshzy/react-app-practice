import React from "react";
import "tailwindcss/tailwind.css";

const Header = () => {
  return (
    <header className="hidden md:block">
      <div className="border-b-0 bg-black h-11 flex items-center justify-between px-4">
        <span className="text-white text-md ml-16 md:ml-36 ">
          Call Us: +92-333-7276335 - Mail Us: info@shekztech.com
        </span>
        <span className="text-white text-md flex items-center ml-96 md:ml-96">
          <i className="fas fa-map-marker-alt text-blue-900 mr-2 ml-32 md:ml-52"></i>
          Plot 1177, Sector 31B - Crossing, Karachi, Sindh
        </span>
        <div className="flex space-x-5 mr-44 md:flex-row flex-wrap">
          <a
            href="#"
            className="text-white text-lg transform hover:scale-95 transition-transform duration-200 ease-in-out"
          >
            <i className="fab fa-facebook-f hover:text-blue-900 transition-colors duration-200"></i>
          </a>
          <a
            href="#"
            className="text-white text-lg transform hover:scale-95 transition-transform duration-200 ease-in-out"
          >
            <i className="fab fa-linkedin-in hover:text-blue-900 transition-colors duration-200"></i>
          </a>
          <a
            href="#"
            className="text-white text-lg transform hover:scale-95 transition-transform duration-200 ease-in-out"
          >
            <i className="fab fa-instagram hover:text-red-800 transition-colors duration-200"></i>
          </a>
          <a
            href="#"
            className="text-white text-lg transform hover:scale-95 transition-transform duration-200 ease-in-out"
          >
            <i className="fab fa-youtube hover:text-red-600 transition-colors duration-200"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
