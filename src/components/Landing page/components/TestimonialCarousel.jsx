import React, { useState, useEffect } from 'react';
import gerttrude from "../images/thatsmile.png"
import adora from "../images/handonchinwoman.png"
import oyinda from "../images/oyinda.webp"

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Grey has played a major part in my business growth; being able to receive international payments has helped put it on the global map",
      name: "/ Oyinda Bankole",
      title: "CEO and Cofounder, TWA Africa",
      image: oyinda,
    },
    {
      id: 2,
      quote: "I find Grey's usability and interface easy to use. It's simple and straightforward. I previously struggled with receiving payments for my work, but Grey has made it faster and cheaper to do this now.",
      name: "Adaora Momah",
      title: "Freelancer",
      image: adora,
    },
    {
      id: 3,
      quote: "I no longer have to reject opportunities. Thanks to Grey, receiving foreign payments in Tanzania has become much easier!",
      name: "Gertrude Mligo",
      title: "Digital Communication Strategist",
      image: gerttrude,
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const autoSlideInterval = 10000;

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [currentTestimonialIndex, testimonials.length]); // Added testimonials.length to dependency array

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="w-full max-w-5xl mx-auto bg-[#1b1f28] rounded-2xl p-8 md:p-12 lg:p-16 shadow-lg relative min-h-[400px] md:min-h-[32rem] flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full text-center md:text-left">
          {/* Testimonial Image */}
          <div className="flex-shrink-0">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-64 h-104 sm:w-102 sm:h-102 rounded-xl object-cover shadow-md mx-auto md:mx-0"
            />
          </div>

          {/* Testimonial Content */}
          <div className="flex-grow text-white">
            <p className="text-lg md:text-xl font-large mb-4 leading-relaxed text-bolder max-w-2xl mx-auto md:mx-0">
              "{currentTestimonial.quote}"
            </p>
            <p className="text-xl sm:text-2xl font-semibold mb-1 mt-4 md:mt-2">
              {currentTestimonial.name}
            </p>
            <p className="text-md font-medium text-gray-400">{currentTestimonial.title}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex space-x-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border border-gray-600 text-gray-400 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full border border-gray-600 text-gray-400 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;