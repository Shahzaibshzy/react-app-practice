import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CourseList = () => {
 
  const initialCategories = [
    {
      title: "AWS",
      courses: 1,
      link: "https://www.shekztech.com/courses/category/aws",
    },
    {
      title: "CMS",
      courses: 3,
      link: "https://www.shekztech.com/courses/category/cms",
    },
    {
      title: "Database",
      courses: 1,
      link: "https://www.shekztech.com/courses/category/database",
    },
    {
      title: "Framework",
      courses: 10,
      link: "https://www.shekztech.com/courses/category/framework",
    },
    {
      title: "Hosting",
      courses: 1,
      link: "https://www.shekztech.com/courses/category/hosting",
    },
    {
      title: "Languages",
      courses: 3,
      link: "https://www.shekztech.com/courses/category/languages",
    },
    {
      title: "Web Designing",
      courses: 4,
      link: "https://www.shekztech.com/courses/category/web-designing",
    },
    {
      title: "Computer Science",
      courses: 6,
      link: "https://www.shekztech.com/courses/category/computer-science",
    },
  ];

  const [categories, setCategories] = useState(initialCategories);

  // Function to load more categories
  const loadMoreCategories = () => {
    const moreCategories = [
      {
        title: "Networking",
        courses: 2,
        link: "https://www.shekztech.com/courses/category/networking",
      },
      {
        title: "Security",
        courses: 4,
        link: "https://www.shekztech.com/courses/category/security",
      },
    ];
    setCategories([...categories, ...moreCategories]);
  };

  return (
    <div className="populerarea py-20">
      <div className="container mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 populerarea__wraper"
     
        >
          <div className="populerarea__heading col-span-1">
            <div className="inline-block bg-purple-200 text-custom-blue
             text-md px-4 py-1 rounded-full font-bold tracking-wide lg:px-4 lg:py-2 mt-14 mx-40">
              Course List
            </div>
            <h2 className="text-5xl font-bold mt-8 px-20 mx-20">
              Navigating
              Major Categories
            </h2>
          </div>
          <div className="populerarea__content col-span-1 text-xl
           text-gray-500  font-semibold my-28 mx-28 ">
            <p >
              Discover in-demand course offerings within the dynamic field of
              technology.
            </p>
          </div>
        </div>

        <div
          className="container mx-5 p-5 grid grid-cols-1 
          sm:grid-cols-2 lg:grid-cols-4 gap-1 mt-12"
          id="categories-container"
        >
          {categories.map((category, index) => (
            <a
              href={category.link}
              key={index}
              className="single__service bg-white shadow-md p-4 rounded-2xl
               transform transition-transform duration-200 hover:!-translate-y-3
                hover:!bg-custom-blue hover:!text-white flex flex-col 
                items-start justify-between group relative h-40 mb-4 mx-3"
                data-aos="fade-up"
               
              
              
            >
              <div className="relative service__img mb-24">
                <svg
                  className="service__icon__bg absolute inset-0 w-18 h-16 pt-2 mb-2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z"
                    fill="#5F2DED"
                    fillOpacity="0.15"
                  />
                </svg>
              </div>
              <div className="service__content -mt-24 px-3">
                <h2 className="text-xl font-bold py-9 -mt-4" >{category.title}</h2>
                <p className="text-md font-sans py-1 -mt-3 mb-1">
                  Courses:{" "}
                  <span className="font-semibold">{category.courses}</span>
                </p>
              </div>
              <div className="service__small__img absolute top-2 right-2 hidden group-hover:block">
                <svg
                  className="icon__hover__img w-6 h-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 20"
                >
                  <path
                    d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                    stroke="#FFB31F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreCategories}
            className="py-3 px-4 bg-custom-blue text-white border
            border-custom-blue 
            inline-block text-center 
            rounded-lg text-md
            transition-colors duration-200 
            hover:!bg-white
           hover:!border-blue-950 hover:!text-blue-900"
          >
            Load More Categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
