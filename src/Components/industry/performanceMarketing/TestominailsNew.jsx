import React, { useState } from "react";
import bg from "../../../../public/Image/bg-testominials.png"; // Make sure this path is correct
import test1Img from "../../../../public/Image/lar-7.png";
import test2Img from "../../../../public/Image/inverted-commas 1.png";
import test3Img from "../../../../public/Image/Raseo-Technology-Solutions.jpg";
import test4Img from "../../../../public/Image/Eric-yong.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alvin Hong",
      title: "Manager",
      rating: 5,
      image: test1Img,
      review: "The SEO and PPC service have been fantastically executed and delivered the Top ranking of my website. All the best.",
    },
    {
      name: "Eunice Yong",
      title: "Director",
      rating: 5,
      image: test3Img,
      review: "They have been very good to boost my business through SEO campaign and Google adwords, thanks.",
    },
    {
      name: "Eric Lim",
      title: "Owner",
      rating: 5,
      image: test4Img,
      review: "They are at their words in terms of providing service and support!! all the best.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  // Show two testimonials if on larger screens (md), otherwise one
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <div
      className="w-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="max-w-6xl flex flex-col md:flex-row gap-4 items-center justify-center mx-auto py-11">
        {/* Heading */}
        <div className="mt-10">
          <div className="flex items-center">
            <h2 className="text-lg uppercase bg-white px-3 py-1 font-semibold text-[#3b7fbf]">
              Testimonials
            </h2>
          </div>

          <h2
            className="text-6xl font-medium mt-2 text-[#ACACAC]"
            style={{ opacity: "0.9" }}
          >
            500+
          </h2>
          <h2 className="text-xl text-[#ACACAC] uppercase">Clients Are Served</h2>
          <h3 className="text-lg font-medium text-[#ffff]">
            Words by our amazing clients.
          </h3>
          <p className="text-sm text-white font-normal max-w-md">
            Razobyte offers a full range of consultancy and solutions for
            sustainable growth.
          </p>
          <div className="flex items-center space-x-6">
            <button
              onClick={handleNext}
              className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-gray-700"
            >
              <span className="text-lg">❯</span>
            </button>
            <button
              onClick={handlePrevious}
              className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-gray-700"
            >
              <span className="text-lg">❮</span>
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg"
            >
              <div className="flex space-x-4">
                <div>
                  <h3 className="text-xl font-normal text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-white font-normal mt-1">
                    {testimonial.title}
                  </p>
                  <div className="flex m-0 p-0">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-lg mt-0 pt-0"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    {testimonial.review}
                  </p>
                </div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-20 h-20 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
