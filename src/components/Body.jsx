import React from "react";
import img from "../resources/Shek.png";
import Main from "./Main";
import Card from "./Cards";
import AboutArea from "./About";
import CourseList from "./CourseList";
import CourseGrid from "./CourseGrid";
import FeedbackSection from "./Testimonial";

const Body = () => {
  return (
    <div className="bg-gray-100 font-roboto">
      <header className="flex flex-col md:flex-row items-center justify-between p-6">
        <div className="flex items-center justify-center mb-4 md:mb-1 md:ml-10 lg:ml-44 my-2">
          <img alt="ShekzTech logo" className="h-12 w-auto md:h-14" src={img} />
        </div>
        <nav className="flex flex-col md:flex-row items-center
         space-y-3 md:space-y-0 md:space-x-8 lg:space-x-12 mb-4
          md:mb-0 md:ml-16 lg:ml-10">
          <a
            className="text-gray-800 text-base md:text-lg hover:text-custom-blue font-bold"
            href="#"
          >
            Home
          </a>
          <a
            className="text-gray-800 text-base md:text-lg hover:text-custom-blue font-bold"
            href="#"
          >
            About
          </a>
          <a
            className="text-gray-800 text-base md:text-lg hover:text-custom-blue font-bold"
            href="#"
          >
            Courses
          </a>
          <a
            className="text-gray-800 text-base md:text-lg hover:text-custom-blue font-bold"
            href="#"
          >
            Blog
          </a>
          <div className="relative inline-block group">
            <button className="text-gray-800 text-base md:text-lg hover:text-custom-blue font-bold">
              Tools▾
            </button>
            <ul className="absolute hidden group-hover:block bg-white pt-4 pb-3 w-48 md:w-auto">
              <li>
                <a
                  className="rounded-t text-sm md:text-lg hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap font-bold"
                  href="#"
                >
                  Images To Webp
                </a>
              </li>
              <li>
                <a
                  className="text-sm md:text-lg hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap font-bold"
                  href="#"
                >
                  Png, Jpg, WebP Compression
                </a>
              </li>
            </ul>
          </div>
          <a
            className="text-gray-800 text-base md:text-lg hover:text-custom-blue font-bold"
            href="#"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center justify-center space-x-3 md:space-x-2 lg:space-x-3 md:mx-6 lg:mx-36">
          <a
            href="/login"
            className="text-black font-bold py-2
             px-3 md:py-1.5 md:px-2.5 border
              border-gray-800 inline-block rounded-lg
               transition-colors duration-200 hover:bg-blue-900
                hover:text-white text-sm md:text-md lg:text-lg"
          >
            Login
          </a>
          <a
            href="/get-started"
            className="bg-custom-blue text-white border
             border-custom-blue rounded-lg py-2 px-3 md:py-3
              md:px-2.5 text-[15] md:text-md lg:text-[15px] lg:font-normal
              transform scale-125 md:scale-110 sm:scale-90 
              transition-colors duration-200
               hover:!bg-white hover:!border-blue-950 hover:!text-blue-900"
          >
            Get Started Free
          </a>
        </div>
      </header>

      <Main />
      <Card />
      <AboutArea />
      <CourseList />
      <CourseGrid />
      <FeedbackSection />

      <div className="container mb-3 text-xl text-gray-600 font-semibold">
        <p>
          Online Web Development Courses Technology has changed the traditional
          learning concepts in Pakistan, it takes too much time and extra money
          to learn new techniques, especially web development PHP frameworks
          like Laravel 10. How can we learn new PHP frameworks and technologies
          from our homes in this pandemic situation? Why Online Learning? In
          Pakistan, people learn new technologies and frameworks from private
          institutions/coaching centers, but it takes too much time to learn
          everything. If you want to learn web development courses in Pakistan
          with frameworks, you will spend 80 thousand/per year. But learning web
          development and PHP frameworks online takes a few thousand(15
          thousand/per year). You can access/learn any web development course at
          any time, anywhere. Best online Web development learning website in
          Pakistan/India We have a lot of channels available on youtube. Still,
          few people/channels give quality education, and many Chanel teaches
          you the PHP frameworks. Still, nobody teaches you each and everything;
          shekztech.com provides you depth knowledge of every single section,
          from web development to web designing. Shekz Tech is one of the best
          eLearning platforms in Pakistan and India. Best Free Web designing
          courses Shekz Tech provides you with the best web designing courses
          from scratch; you can easily understand the basics. We start from zero
          (HTML, CSS, Javascript, jQuery, Bootstrap Courses) and teach you the
          world’s most popular front-end framework, Bootstrap 4. Best Free Web
          development courses We provide you with the best web development
          courses from basic to advanced levels; we start with PHP, and then we
          have MySQL once you learn the basics of PHP. We start one of the
          popular courses, the Codeigniter 3 and Codeigniter 4 courses in both
          Urdu/Hindi language, and we also have several codeigniter3/4 CRUD
          courses. We also cover the CRUD section in the basic PHP course.
        </p>
      </div>
    </div>
  );
};

export default Body;
