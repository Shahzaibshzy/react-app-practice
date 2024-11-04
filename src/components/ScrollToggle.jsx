import React, { useState, useEffect } from "react";

const ScrollToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      id="light--to-dark-button"
      className={`fixed transition-all duration-300 ease-in-out right-1 
                  ${scrollPosition > 0 ? "top-96" : "top-96"}
                  bg-custom-blue  shadow-lg p-3 rounded-l-xl 
                  flex items-center justify-center space-x-2 z-50`}
      onClick={toggleMode}
      style={{ transform: `translateY(${scrollPosition}px)` }}
    >
      {/* Dark Mode Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-6 ${isDarkMode ? "block" : "hidden"}`}
        viewBox="0 0 512 512"
      >
        <path
          d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>

      {/* Light Mode Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-6 ${isDarkMode ? "hidden" : "block"}`}
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          stroke="white"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
        />
        <circle
          cx="256"
          cy="256"
          r="80"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>

      <span className="text-white dark:text-gray-200 font-semibold">
        {isDarkMode ? "Dark" : "Light"}
      </span>
    </button>
  );
};

export default ScrollToggle;
