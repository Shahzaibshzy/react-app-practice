import React from "react";
import "tailwindcss/tailwind.css";

import sections from "../resources/sections";

const Card = () => {
  return (
    <div className="trainingarea sp_bottom_20 -mt-20 sm:-mt-24 md:-mt-18 lg:-mt-28" data-aos="fade-up">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8 max-w-md"
            >
              <div
                className={`trainingarea__wrapper bg-white p-6 rounded-xl 
                  border-[1px] border-gray-200 transition-all duration-200 
                  ${section.hoverBorder} flex flex-col h-full shadow-md hover:shadow-xl hover:scale-105`}
              >
                <div className="trainingarea__icon flex items-center mb-6 ml-3 mt-2">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full
                       ${section.borderColor} mr-4`}
                  >
                    <i
                      className={`${section.iconClass} text-3xl  ${section.linkColor} 
                      ${section.borderColor} `}
                    ></i>
                  </div>
                  <div className="trainingarea__content">
                    <h6 className="text-xl font-semibold mt-2">
                      <a
                        href={section.link}
                        className={`text-gray-600 hover:underline`}
                      >
                        {section.title}
                      </a>
                    </h6>
                    <p className="text-gray-600 ">{section.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Card;
