import React from 'react';

const ProductQualityCarousel = () => {
  const repeatedText = "Product and Service Quality ";

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="relative text-center">
        {/* Marquee effect for the large text */}
        <div className="marquee-container">
          {/* Apply marquee-content directly to the h1 to make it scroll */}
          <h1 className="marquee-content inline-block text-8xl font-bold text-gray-300 opacity-60 px-8 whitespace-nowrap">
            {repeatedText} {repeatedText}
          </h1>
        </div>

        {/* Smaller text below the carousel */}
        <p className="text-lg font-bold text-gray-950 mt-8 mb-4 max-w-lg mx-auto">
          We asked our customers how likely they were to recommend Grey to their network.
        </p>
      </div>
    </section>
  );
};

export default ProductQualityCarousel;