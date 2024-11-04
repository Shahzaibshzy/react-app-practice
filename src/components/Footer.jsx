import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrorMessage("Something went wrong");
    } else if (!emailPattern.test(email)) {
      setErrorMessage("Wrong email address");
    } else {
      setErrorMessage("");
      // Handle subscription logic here
    }
  };

  return (
    <footer className="bg-custom-dark-blue text-white py-24">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div
          className="flex justify-center items-center mb-10"
          data-aos="fade-up"
        >
          <div className="w-full lg:w-2/3">
            <form
              onSubmit={handleSubscribe}
              className="flex items-center w-full"
            >
              <input
                type="email"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-16 p-3 rounded-l-lg text-white
                 bg-gray-800  outline-none"
              />
              <button
                type="submit"
                className="bg-custom-color 
                      text-white px-10 py-2 text-start font-medium rounded-r-sm
                    hover:bg-gray-800 hover:border-[1px] hover:border-custom-blue
                    duration-300 transition-colors h-16 whitespace-nowrap"
              >
                SUBSCRIBE NOW
              </button>
            </form>
            {errorMessage && (
              <div className="mt-2 px-3 text-start text-xl text-white">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
        <div
          className="border-t
         border-gray-700 pt-4 flex flex-col lg:flex-row justify-between items-center text-sm"
        ></div>

        {/* Footer Content */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 mt-28"
          data-aos="fade-up"
        >
          {/* About Us */}
          <div>
            <h3 className="text-2xl font-semibold mb-7">About Us</h3>
            <p className="mb-4 text-gray-400 text-xl ">
              Shekz Tech - Globally recognized for superior web development and
              design tutorials, empowering the tech leaders of tomorrow.
            </p>
            <div className="flex space-x-6 ml-3">
              <a
                href="https://www.facebook.com/shekztech"
                className="flex items-center justify-center w-12 h-12 rounded-full
                 bg-gray-700 text-gray-500 bg-opacity-45 
                     hover:text-white 
                      transition-all duration-300 ease-in-out transform 
                       hover:scale-105"
              >
                <i className="icofont-facebook text-lg ml-0.5"></i>
              </a>
              <a
                href="https://www.instagram.com/shekztech/"
                className="flex items-center justify-center w-12 h-12 
                rounded-full  bg-gray-700 text-gray-500 bg-opacity-45 
                     hover:text-white 
                      transition-all duration-300 ease-in-out transform 
                       hover:scale-105"
              >
                <i className="icofont-instagram text-lg ml-0.5"></i>
              </a>
              <a
                href="https://www.youtube.com/shakzee"
                className="flex items-center justify-center 
                w-12 h-12 rounded-full  bg-gray-700 text-gray-500 bg-opacity-45 
                     hover:text-white 
                      transition-all duration-300 ease-in-out transform 
                       hover:scale-105"
              >
                <i className="icofont-youtube-play text-lg ml-0.5"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/shekztech"
                className="flex items-center justify-center w-12 h-12 rounded-full 
                     bg-gray-700 text-gray-500 bg-opacity-45 
                     hover:text-white 
                      transition-all duration-300 ease-in-out transform 
                       hover:scale-105"
              >
                <i className="icofont-linkedin text-lg ml-0.5"></i>
              </a>
            </div>
          </div>

          {/* Web Development Courses */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 whitespace-nowrap">
              Web Development Courses
            </h3>
            <ul>
              <li className="mb-2">
                <a
                  href="https://www.shekztech.com/courses/mastering-laravel-10-course-building-modern-web-applications"
                  className="text-gray-400 text-xl hover:text-blue-400"
                >
                  Free Laravel 10 Course
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.shekztech.com/courses/laravel-9-courses-in-hindiurdu-with-projects"
                  className="text-gray-400 text-xl hover:text-blue-400"
                >
                  Free Laravel 9 Course in Hindi/Urdu
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.shekztech.com/courses/codeigniter-4-in-hindi"
                  className=" text-gray-400 text-xl hover:text-blue-400"
                >
                  Free Codeigniter 4 Course
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.shekztech.com/courses/free-crud-operation-in-codeigniter-4-with-bootstrap-4"
                  className=" text-gray-400 text-xl hover:text-blue-400"
                >
                  Free CRUD Operation in Codeigniter 4
                </a>
              </li>
              <li>
                <a
                  href="https://www.shekztech.com/courses/the-complete-codeigniter-4-series-with-bootstrap-4projects"
                  className=" text-gray-400 text-xl hover:text-blue-400"
                >
                  Complete CodeIgniter 4 Series
                </a>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Tools</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="https://www.shekztech.com/images-to-webp-converter"
                  className="text-gray-400 text-xl hover:text-blue-400"
                >
                  Free JPG, PNG to WebP Converter
                </a>
              </li>
              <li>
                <a
                  href="https://www.shekztech.com/images-to-compression"
                  className="text-gray-400 text-xl hover:text-blue-400"
                >
                  Free Online Image Compression for WebP, PNG, and JPG
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Blogs */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Popular Blogs</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="https://www.shekztech.com/blog/traditional-bus-vs-high-speed-bus-architecture"
                  className="text-gray-400 text-xl hover:text-blue-400"
                >
                  Traditional Bus vs High-Speed Bus Architecture
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.shekztech.com/blog/hp-victus-15-badget-gaming-laptop-unboxing-and-review"
                  className="text-gray-400 text-xl hover:text-blue-400"
                >
                  HP Victus 15 Budget Gaming Laptop
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.shekztech.com/blog/how-to-convert-usdt-to-trontrx-on-binance"
                  className="text-gray-400 text-xl hover:text-blue-400"
                >
                  How to Convert USDT to Tron(TRX) on Binance
                </a>
              </li>
              <li>
                <a
                  href="https://www.shekztech.com/blog/pagination-in-codeigniter-4-pagination-service-pagination-library"
                  className="text-gray-400 text-xl hover:text-blue-400"
                >
                  Pagination in Codeigniter 4
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className="border-t
         border-gray-700 pt-4 mt-24 flex flex-col lg:flex-row justify-between items-center text-sm"
        >
          <p>
            © 2024 Powered by{" "}
            <a
              href="https://www.shezamtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Shezam Tech
            </a>
            . All Rights Reserved. Images compressed by{" "}
            <a
              href="https://www.shekzify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Shekzify
            </a>
            .
          </p>
          <ul className="flex space-x-4 mt-4 lg:mt-0">
            <li>
              <a
                href="https://www.shekztech.com/terms-and-conditions"
                className="hover:underline"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href="https://www.shekztech.com/privacy-policies"
                className="hover:underline"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
