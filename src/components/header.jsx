import React from "react";
import "tailwindcss/tailwind.css";

const Header = () => {
  return (
    <header>
      <div className=" hidden lg:block bg-black text-white relative h-10">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 flex items-center space-y-1 justify-between">
          {/* Left Section */}
          <div className="topbar__left flex space-x-4">
          <ul className="space-x-1 text-md  lg:flex">
              <li>Call Us: +92-333-7276335</li>
              <li>- Mail Us: info@shekztech.com</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="topbar__right flex items-center justify-end mb-2 space-x-9 space-y-1">
            <div className="topbar__icon">
              <i className="fas fa-map-marker-alt text-blue-900 mr-0 scale-90 mt-2"></i>
            </div>
            <div className="topbar__text ml-1">
              <p>Plot 1177, Sector 31B - Crossing, Karachi, Sindh</p>
            </div>
            <div className="topbar__list">
              <ul className="flex space-x-5">
                <li>
                  <a href="https://www.facebook.com/shekztech">
                    <i className="fab fa-facebook-f hover:text-blue-900 transition-colors duration-200"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/shekztech">
                    <i className="fab fa-linkedin-in hover:text-blue-900 transition-colors duration-200"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/shekztech/">
                    <i className="fab fa-instagram hover:text-red-800 transition-colors duration-200"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/shakzee">
                    <i className="fab fa-youtube hover:text-red-600 transition-colors duration-200"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
