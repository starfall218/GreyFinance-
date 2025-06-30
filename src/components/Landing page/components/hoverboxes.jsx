// assets/modules/hoverboxes.js

import React, { useEffect } from "react";
import { applyBorderGlow } from "./borderGlow.jsx"; // Relative path to utils
import logo from "../images/logo.png"
import zero from "../images/zero.svg"
function Umm() {
  useEffect(() => {
    const cards = document.querySelectorAll('.interactive-card');
    // Map each card to a cleanup function returned by applyBorderGlow
    const cleanupFunctions = Array.from(cards).map(card => applyBorderGlow(card));

    // Return a single cleanup function that runs all collected cleanup functions
    return () => cleanupFunctions.forEach(cleanup => cleanup());
  }, []); // Effect runs once on component mount

  return (
    <section className="relative w-full min-h-screen bg-[#1b1f28] flex items-center justify-center py-20 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="card-bg rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col justify-between items-start text-left card-border-glow-container interactive-card">
          <div className="mb-4">
            <img src={zero} alt="Zero" className="w-44 h-auto text-blur self-center ml-19"/>
          </div>
          <div className="flex-grow">
            <p className="text-sm text-gray-400 mb-2">01 —</p>
            <h3 className="text-xl font-semibold leading-tight">Zero account & card maintenance fees</h3>
          </div>
        </div>

        <div className="card-bg rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col justify-between items-start text-left card-border-glow-container interactive-card">
          <div className="mb-4">
            <img src={zero} alt="Icon" className="w-44 h-auto text-blur self-center ml-19"/>
          </div>
          <div className="flex-grow">
            <p className="text-sm text-gray-400 mb-2">02 —</p>
            <h3 className="text-xl font-semibold leading-tight">Competitive exchange rates</h3>
          </div>
        </div>

        <div className="card-bg rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col justify-between items-start text-left card-border-glow-container interactive-card">
          <div className="mb-4">
            <img src={zero} alt="Icon" className="w-44 h-auto text-blur self-center ml-19"/>
          </div>
          <div className="flex-grow">
            <p className="text-sm text-gray-400 mb-2">03 —</p>
            <h3 className="text-xl font-semibold leading-tight">Instant transaction notifications</h3>
          </div>
        </div>

        <div className="card-bg rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col justify-between items-start text-left card-border-glow-container interactive-card">
          <div className="mb-4">
            <img src={zero} alt="Icon" className="w-44 h-auto text-blur self-center ml-19"/>
          </div>
          <div className="flex-grow">
            <p className="text-sm text-gray-400 mb-2">04 —</p>
            <h3 className="text-xl font-semibold leading-tight">An IBAN for your business needs</h3>
          </div>
        </div>

        <div className="card-bg rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col justify-between items-start text-left card-border-glow-container interactive-card">
          <div className="mb-4">
            <img src={zero} alt="Icon" className="w-24 h-auto"/>
          </div>
          <div className="flex-grow">
            <p className="text-sm text-gray-400 mb-2">05 —</p>
            <h3 className="text-xl font-semibold leading-tight">P2P for free and faster payments</h3>
          </div>
        </div>

        <div className="card-bg rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col justify-between items-start text-left card-border-glow-container interactive-card">
          <div className="mb-4">
            <img src={zero} alt="Icon" className="w-24 h-auto"/>
          </div>
          <div className="flex-grow">
            <p className="text-sm text-gray-400 mb-2">06 —</p>
            <h3 className="text-xl font-semibold leading-tight">Expense management</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Umm;