import React from "react";
import bg from "../images/bg.webp"; // Adjust the path as necessary

const BankingHero = () => {
  return (
    <section 
      id="banking-hero"
      className="relative min-h-[800px] flex items-center justify-start bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content - now left-aligned */}
      <div className="relative z-10 max-w-2xl mx-6 md:mx-12 lg:mx-24 p-6 text-left text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md leading-tight">
          Inclusive global banking designed just for you.
        </h1>
        
        <div className="space-y-4 text-lg md:text-xl mb-8 drop-shadow-md">
          <p>Receive, send, exchange, and manage multiple currencies in one app.</p>
          <p>Open a foreign bank account from your phone for free</p>
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
          Get started — It's free
        </button>
      </div>
    </section>
  );
};

export default BankingHero;
