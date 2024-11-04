import React from "react";
import image from "../resources/img4.png";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutArea = () => {
  return (
    <div
      className="aboutarea sp_top_30 mt-12 sm:mt-10 md:mt-12 lg:mt-14"
      data-aos="fade-up"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap items-center">
          {/* Left Column with Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
            <div className="relative">
              <img
                className="w-auto ml-32  max-w-xl
                lg:max-w-xl 
                transform hover:scale-105 transition-transform duration-500 ease-in-out"
                src={image}
                alt="aboutimg"
              />
            </div>
          </div>

          {/* Right Column with Content */}
          <div className="w-full lg:w-1/2 px-1 mt-6 lg:mt-0 lg:pl-8">
            <div className="aboutarea__content__wraper p-5 rounded-lg">
              {/* Button */}
              <div className="aboutarea__button mb-4 lg:mb-8">
                <div
                  className="inline-block bg-purple-200 text-custom-blue 
                            text-md px-4 py-1 rounded-full font-bold tracking-wide lg:px-6 lg:py-2"
                >
                  About Us
                </div>
              </div>

              {/* Heading */}
              <div className="aboutarea__headding mb-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-start lg:text-left">
                  Welcome to the
                 WebDev Mastery Hub
                </h1>
              </div>

              {/* Paragraph */}
              <div className="aboutarea__para mb-4">
                <p className="text-gray-700 text-lg text-start lg:text-left">
                  Connecting novice developers with seasoned experts.
                </p>
              </div>

              {/* List */}
              <div className="aboutarea__list mb-4">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="icofont-check mt-2 text-blue-900 mr-2 border-[1px] border-blue-900 flex items-center justify-center w-5 h-5 rounded-full"></i>
                    <span className="text-black font-semibold text-lg ml-2">
                      Connecting potential web developers with experts in the
                      industry.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="icofont-check mt-2
                     text-blue-900 mr-2 border-[1px]
                      border-blue-900 flex items-center 
                      justify-center w-5 h-5 rounded-full"></i>
                    <span className="text-black font-semibold text-lg ml-2">
                      Courses utilize the potential of innovative frameworks.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="icofont-check mt-2 text-blue-900 mr-2 border-[1px] border-blue-900 flex items-center justify-center w-5 h-5 rounded-full"></i>
                    <span className="text-black font-semibold text-lg ml-2">
                      Our mentors have more than ten years of experience.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="icofont-check mt-2 text-blue-900 mr-2 border-[1px] border-blue-900 flex items-center justify-center w-5 h-5 rounded-full"></i>
                    <span className="text-black font-semibold text-lg ml-2">
                      Transforming the learning of knowledge into expertise
                      mastery.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Bottom Button */}
              <div className="aboutarea__bottom__button text-start lg:text-left">
                <a
                  className="py-2.5 px-3 bg-custom-blue  text-white border border-custom-blue inline-block text-center rounded-lg text-lg transition-colors duration-200 hover:!bg-white hover:!border-blue-950 hover:!text-blue-900"
                  href="https://www.shekztech.com/about-us"
                >
                  More About
                  <i className="icofont-long-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
