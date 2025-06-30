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

  const nextSlide = () => {
    if (!isAnimating && currentSlide < slides.length - 2) {
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

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, currentSlide]);

  const slideWidthWithMargin = 70 + 6;

  return (
    <section className="py-12 px-4  mx-auto bg-amber-50 w-[100%]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col items-center">
          <span className="text-4xl size-[100%] mr-4 self-start"><img src={logo} alt="Grey Logo" className="h-8 w-auto" /></span>
          <h2 className="text-left text-3xl font-bold text-gray-900 leading-tight">More than just <br />banking</h2>
        </div>
        <div className="flex space-x-2 ">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 text-gray-700"
            disabled={isAnimating || currentSlide === 0}
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 text-gray-700"
            disabled={isAnimating || currentSlide >= slides.length - 2}
          >
            →
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * slideWidthWithMargin}rem)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-8 py-12 rounded-lg min-h-[450px] flex items-baseline relative overflow-hidden text-white`}
              style={{ width: '62rem', marginRight: (index !== slides.length - 1) ? '2rem' : '0' }}
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