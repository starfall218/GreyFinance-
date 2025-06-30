import React from "react";
import forbe from "../images/forbes-icon.png";
import five from "../images/five-star-icon.png";
import guardians from "../images/guardian-icon.webp";
import techpoint from "../images/techpoint-icon.webp";
import techctv from "../images/techcity-icon.png";
import crunch from "../images/tech-crunch-icon.png";
import nseer from "../images/msecb-icon.png";

const PressSection = () => {
  return (
    <section id="press" className="bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Heading and press logos side-by-side */}
        <div className="flex flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-medium tracking-widest whitespace-nowrap text-left">
            AS SEEN ON
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 justify-end pl-16">
            {[
              { img: forbe, alt: "Forbes" },
              { img: crunch, alt: "TcTechemen" },
              { img: guardians, alt: "TheGuardian" },
              { img: techpoint, alt: "Techpoint" },
              { img: techctv, alt: "TECHCTV" },
            ].map((brand, index) => (
              <React.Fragment key={brand.alt}>
                <img 
                  src={brand.img}
                  alt={brand.alt}
                  className="h-6 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
                {index < 4 && <span className="text-gray-300 hidden md:inline">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Two image section - increased size */}
        <div className="flex justify-center items-center gap-14">
          <img src={nseer} alt="NSEER" className="h-20 object-contain" />
          <img src={five} alt="Trustpilot" className="h-20 object-contain" />
        </div>
        
        {/* CTA section */}
        <div className="pt-6 text-center">
          <h3 className="text-6xl font-bold text-gray-900 mb-2">No Limits, No Borders</h3>
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
             <span className="ml-1 text-5xl">Go global →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PressSection;
