// assets/modules/hoverboxes.js

import React, { useEffect } from "react";
import { applyBorderGlow } from "./borderGlow.jsx"; // Relative path to utils
import logo from "../images/logo.png" // Not used in the component, can be removed if not needed elsewhere
import zero from "../images/zero.svg" // Assuming 'zero' is the icon for all cards

function Umm() {
  useEffect(() => {
    const cards = document.querySelectorAll('.interactive-card');
    const cleanupFunctions = Array.from(cards).map(card => applyBorderGlow(card));
    return () => cleanupFunctions.forEach(cleanup => cleanup());
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#1b1f28] flex items-center justify-center py-20 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="card-bg rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col justify-between items-start text-left card-border-glow-container interactive-card">
          <div className="mb-4">
            {/* Replaced ml-19 with flex on parent and self-start or auto margin if centering */}
            <img src={zero} alt="Zero" className="w-44 h-auto text-blur self-start"/>
          </div>
          <div className="flex-grow">
            <p className="text-sm text-gray-400 mb-2">01 —</p>
            <h3 className="text-xl font-semibold leading-tight">Zero account & card maintenance fees</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-bg rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col justify-between items-start text-left card-border-glow-container interactive-card">
          <div className="mb-4">
            <img src={zero} alt="Icon" className="w-44 h-auto text-blur self-start"/>
          </div>
          <div className="flex-grow">
            <p className="text-sm text-gray-400 mb-2">02 —</p>
            <h3 className="text-xl font-semibold leading-tight">Competitive exchange rates</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-bg rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col justify-between items-start text-left card-border-glow-container interactive-card">
          <div className="mb-4">
            <img src={zero} alt="Icon" className="w-44 h-auto text-blur self-start"/>
          </div>
          <div className="flex-grow">
            <p className="text-sm text-gray-400 mb-2">03 —</p>
            <h3 className="text-xl font-semibold leading-tight">Instant transaction notifications</h3>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card-bg rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col justify-between items-start text-left card-border-glow-container interactive-card">
          <div className="mb-4">
            <img src={zero} alt="Icon" className="w-44 h-auto text-blur self-start"/>
          </div>
          <div className="flex-grow">
            <p className="text-sm text-gray-400 mb-2">04 —</p>
            <h3 className="text-xl font-semibold leading-tight">An IBAN for your business needs</h3>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card-bg rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col justify-between items-start text-left card-border-glow-container interactive-card">
          <div className="mb-4">
            {/* The w-24 is okay if the image should be smaller for this card */}
            <img src={zero} alt="Icon" className="w-24 h-auto self-start"/>
          </div>
          <div className="flex-grow">
            <p className="text-sm text-gray-400 mb-2">05 —</p>
            <h3 className="text-xl font-semibold leading-tight">P2P for free and faster payments</h3>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card-bg rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-out flex flex-col justify-between items-start text-left card-border-glow-container interactive-card">
          <div className="mb-4">
            <img src={zero} alt="Icon" className="w-24 h-auto self-start"/>
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