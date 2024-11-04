import React, { useState } from "react";

const FeedbackSection = () => {
  const testimonials = [
    {
      imageSrc:
        "https://www.shekztech.com/storage/images/testimonials/sxsRVZ1Axm7JlTfJgINkQNdm8qqhEpf6hLigw1JF.png",
      name: "Waqar Ahmed",
      role: "Software Engineer at NayaPay",
      rating: 5,
      content:
        "Shekz Tech provides a unique level of expertise. Their comprehensive and helpful courses have taught me more than I could have ever imagined.",
    },
    {
      imageSrc:
        "https://www.shekztech.com/storage/images/testimonials/0bI5rlYPcS5VWDhrVRTtCGcUpyG0O5vkxtfPI9AK.png",
      name: "Shah Rukh Habib",
      role: "Student",
      rating: 5,
      content:
        "Shekz Tech courses were my best choice ever. Their technical skills and efficient teaching methods really boosted my web development and computer science understanding.",
    },
    // Add more testimonials as needed
    {
      imageSrc:
        "https://www.shekztech.com/storage/images/testimonials/sample_image.png",
      name: "Ali Raza",
      role: "Data Scientist",
      rating: 5,
      content:
        "The in-depth insights provided by Shekz Tech have transformed my understanding of data science.",
    },
    {
      imageSrc:
        "https://www.shekztech.com/storage/images/testimonials/sample_image_2.png",
      name: "Fatima Noor",
      role: "UX Designer",
      rating: 5,
      content:
        "Amazing platform with well-structured content. I've learned so much in such a short time!",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(2);
  const [loading, setLoading] = useState(false);

  const loadMoreTestimonials = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(visibleCount + 2);
      setLoading(false);
    }, 500); // Simulates loading delay
  };

  return (
    <div className=" bg-gray-400 bg-opacity-20">
      {" "}
      <div className="container mx-auto py-10 px-4">
        {/* Section Title */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-gray-800">Learner Feedback</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-2"></div>
        </div>

        {/* Testimonials */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-3"
          data-aos="fade-up"
        >
          {testimonials.slice(0, visibleCount).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg h-80
              transform transition hover:scale-105 duration-300"
            >
              

              {/* Star Rating */}
              <div className="relative mb-4 mt-4">
                {/* Star Rating at Top Right */}
                <div className="absolute top-2 right-0 flex space-x-1 mt-2 mr-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <i key={i} className="icofont-star text-yellow-500"></i>
                  ))}
                </div>

                {/* Image and Name */}
                <div className="flex items-center">
                  <img
                    className="w-16 h-16 rounded-none mr-4"
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                  />
                  <div>
                    <h6 className="text-xl font-semibold">
                      {testimonial.name}
                    </h6>
                    <span className="text-lg text-gray-500">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-600 text-xl px-3">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < testimonials.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreTestimonials}
              className="py-3 px-6
             bg-custom-blue text-white border
            border-custom-blue 
            inline-block text-center 
            rounded-lg text-md
            transition-colors duration-300 
            hover:!bg-white
           hover:!border-blue-950 hover:!text-blue-900"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
                5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                "Load More"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackSection;
