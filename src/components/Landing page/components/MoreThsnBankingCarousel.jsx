import React, { useState, useEffect, useRef } from "react";

import pay from "../images/pay.webp";

import sendproff from "../images/sendproff.webp";

import werefully from "../images/werefully.webp";

import _switch from "../images/switch.webp";

import track from "../images/trackyour.webp";

import suprise from "../images/suprise.webp"

import logo from "../images/blei.svg"

const MoreThanBankingCarousel = () => {
  const slides = [
    {
      title: 'INVOICING',
      text: 'Send professional invoices and accelerate your global payments from your clients.',
      image: sendproff,
      overlayColor: 'bg-brown-600/1',
    },
    {
      title: 'REGULATED & PROTECTED',
      text: 'We are fully regulated by Fintrac and Fincen, so your money is 100% Protected.',
      image: werefully,
      overlayColor: 'bg-purple-600/1',
    },
    {
      title: 'AN INCLUSIVE APP',
      text: 'Switch your Grey app to the language you’re most comfortable with.',
      image: _switch,
      overlayColor: 'bg-pink-600/1',
    },
    {
      title: 'EXPENSE MANAGEMENT',
      text: 'Track your expenses to better understand your spending habits.',
      image: track,
      overlayColor: 'bg-yellow-600/1',
    },
    {
      title: 'GIFT CARDS',
      text: 'Surprise your loved ones with a voucher you know they’ll need.',
      image: suprise,
      overlayColor: 'bg-blue-600/1',
    },
    {
      title: 'BILL PAYMENT',
      text: 'Pay the important bills before they are due.',
      image: pay,
      overlayColor: 'bg-purple-800/1',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Function to calculate slide width dynamically
  const calculateSlideWidth = () => {
    if (carouselRef.current && carouselRef.current.children[0]) {
      // Get the width of the first slide element, including its margin-right
      const firstSlide = carouselRef.current.children[0];
      const style = window.getComputedStyle(firstSlide);
      const width = firstSlide.offsetWidth;
      const marginRight = parseFloat(style.marginRight);
      setSlideWidth(width + marginRight);
    }
  };

  useEffect(() => {
    // Calculate initial slide width
    calculateSlideWidth();
    // Recalculate on window resize
    window.addEventListener('resize', calculateSlideWidth);
    return () => window.removeEventListener('resize', calculateSlideWidth);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, currentSlide]);

  const nextSlide = () => {
    if (!isAnimating && currentSlide < slides.length - 1) {
      setIsAnimating(true);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (!isAnimating && currentSlide > 0) {
      setIsAnimating(true);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <section className="py-12 px-4 mx-auto bg-amber-50 w-full">
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
          <span className="mb-2"><img src={logo} alt="Grey Logo" className="h-8 w-auto" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/40x40/CCCCCC/FFFFFF?text=Logo+Error"; }}/></span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">More than just <br className="sm:hidden"/>banking</h2>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 text-gray-700 transition-colors duration-200"
            disabled={isAnimating || currentSlide === 0}
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 text-gray-700 transition-colors duration-200"
            disabled={isAnimating || currentSlide >= slides.length - 1}
          >
            →
          </button>
        </div>
      </div>
      <div className="overflow-hidden relative max-w-7xl mx-auto">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-8 py-12 rounded-lg min-h-[450px] flex items-baseline relative overflow-hidden text-white`}
              style={{
                width: '100%',
                maxWidth: '62rem',
                marginRight: (index !== slides.length - 1) ? '2rem' : '0',
                flex: '0 0 auto',
              }}
            >
              <div className="absolute top-12 left-12 z-10">
                <h3 className="text-sm font-semibold uppercase opacity-80">{slide.title}</h3>
              </div>

              <div className="flex flex-col text-left absolute bottom-12 left-12 w-3/4 z-10">
                <p className="text-2xl font-bold leading-tight">{slide.text}</p>
              </div>

              <img
                src={slide.image}
                alt={slide.title}
                className="absolute right-0 top-0 h-full w-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Load+Error"; }}
              />

              <div className={`absolute inset-0 ${slide.overlayColor} z-0`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreThanBankingCarousel;
