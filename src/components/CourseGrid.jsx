import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CourseGrid = () => {
  const allCourses = [
    {
      id: 27,
      title: "Laravel 10 Tutorial in Hindi/Urdu Language with Projects",
      lessons: "9 Lessons",
      duration: "1 hour, 29 minutes",
      imageSrc:
        "https://www.shekztech.com/storage/images/courses/1696593971.webp",
      badge: "Framework",
      price: "Free",
      author: {
        name: "Shehzad Ahmed",
        imageSrc:
          "https://www.shekztech.com/storage/images/profile_pics/iuBJJyxLsrkuklnp1UqUR9jhiSYnt4soa6iVhVCg.jpg",
      },
    },
    {
      id: 28,
      title: "Laravel 9 Courses in Hindi/Urdu with projects",
      lessons: "13 Lessons",
      duration: "2 hours, 29 minutes",
      imageSrc:
        "https://www.shekztech.com/storage/images/courses/1690876986.webp",
      badge: "Framework",
      price: "Free",
      author: {
        name: "Shehzad Ahmed",
        imageSrc:
          "https://www.shekztech.com/storage/images/profile_pics/iuBJJyxLsrkuklnp1UqUR9jhiSYnt4soa6iVhVCg.jpg",
      },
    },
    {
      id: 29,
      title: "Mastering Laravel 10 Course: Building Modern Web Applications",
      lessons: "12 Lessons",
      duration: "2 hours, 21 minutes",
      imageSrc:
        "https://www.shekztech.com/storage/images/courses/1690463432.webp",
      badge: "Framework",
      price: "Free",
      author: {
        name: "Shehzad Ahmed",
        imageSrc:
          "https://www.shekztech.com/storage/images/profile_pics/iuBJJyxLsrkuklnp1UqUR9jhiSYnt4soa6iVhVCg.jpg",
      },
    },
    {
      id: 30,
      title:
        "ECommerce In Codeigniter The Complete Guide Step By Step From Scratch",
      lessons: "0 Lesson",
      duration: "",
      imageSrc:
        "https://www.shekztech.com/storage/images/courses/1690462668.webp",
      badge: "Framework",
      price: "Free",
      author: {
        name: "Shehzad Ahmed",
        imageSrc:
          "https://www.shekztech.com/storage/images/profile_pics/iuBJJyxLsrkuklnp1UqUR9jhiSYnt4soa6iVhVCg.jpg",
      },
    },
    // Add other course items similarly
  ];

  const [courses, setCourses] = useState(allCourses.slice(0, 3));
  const [loading, setLoading] = useState(false);

  const loadMoreCourses = () => {
    setLoading(true);
    setTimeout(() => {
      const newCourses = allCourses.slice(0, courses.length + 3);
      setCourses(newCourses);
      setLoading(false);
    }, 1000); // Simulate a loading delay
  };

  return (
    <div className="gridarea py-32 bg-gray-400 bg-opacity-20">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="font-bold uppercase text-sm inline-block bg-purple-300 text-custom-blue text-md px-4 py-2 rounded-full">
            Course List
          </div>
          <h2 className="text-5xl font-bold mt-5">
            Ideal Online Learning
            <br /> For your Career Advancement
          </h2>
        </div>

        {/* Courses Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="mrsch"
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg border-[20px] border-white overflow-hidden relative transform transition-transform duration-200"
              data-aos="fade-up"
            >
              <div className="gridarea__img relative ">
                <a href="#">
                  <img
                    src={course.imageSrc}
                    alt={course.title}
                    className="w-full h-34 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </a>
                <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs">
                  {course.badge}
                </div>
                <div className="absolute top-2 right-2">
                  <a href="#" className="text-gray-500 hover:text-blue-500">
                    <i className="icofont-heart-alt text-lg"></i>
                  </a>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between text-gray-500 text-sm mb-2">
                  <div className="flex items-center space-x-1">
                    <i className="icofont-book-alt"></i>
                    <span>{course.lessons}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="icofont-clock-time"></i>
                    <span>{course.duration}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  <a href="#" className="text-gray-800 font-bold text-xl mb-4 hover:text-blue-600">
                    {course.title}
                  </a>
                </h3>

                <div className="text-custom-blue text-xl font-bold mb-4">
                  {course.price}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 mt-5">
                    <img
                      src={course.author.imageSrc}
                      alt="Author"
                      className="w-8 h-8 rounded-full"
                    />
                    <h6 className="text-gray-700 text-sm">
                      {course.author.name}
                    </h6>
                  </div>
                  <div className="flex items-center space-x-1 text-orange-400 mt-5">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="icofont-star"></i>
                    ))}
                    <span className="text-gray-600">(0)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
          <button
            className="default__button py-3 px-6
             bg-custom-blue text-white border
            border-custom-blue 
            inline-block text-center 
            rounded-lg text-md
            transition-colors duration-300 
            hover:!bg-white
           hover:!border-blue-950 hover:!text-blue-900"
            onClick={loadMoreCourses}
            disabled={loading}
          >
            {loading ? (
              <div class="flex flex-row gap-2 text-white">
                <div class="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                <div class="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                <div class="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
              </div>
            ) : (
              "Load More"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseGrid;
