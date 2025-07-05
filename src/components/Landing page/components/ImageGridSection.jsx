import React from "react";
import first from "../images/first-grid.png";
import second from "../images/second-grid.png";
import third from "../images/third-grid.png";
import fourth from "../images/fourth-grid.png";
import fifth from "../images/fifth-grid.png";
import sixth from "../images/last-grid.png";

const ImageGrid = () => {
  return (
    <section id="image-grid" className="bg-white py-12 px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 overflow-hidden"> {/* Removed width-[100vw] */}
          {/* Full width top image */}
          <div className="md:col-span-12">
            <a href="#">
              <img
                src={first}
                alt="Get a global bank account"
                className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </a>
          </div>

          {/* Two side-by-side images (Second and Third) */}
          {/* On mobile, they stack. On MD and up, they are side-by-side within their column span */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Nested grid for 2 columns */}
            <div className="col-span-1"> {/* Each takes 1 column on mobile, 1 of 2 on md+ */}
              <a href="#">
                <img
                  src={second}
                  alt="Convert money at the best rate"
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              </a>
            </div>
            <div className="col-span-1">
              <a href="#">
                <img
                  src={third}
                  alt="Shop and spend globally"
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow" // Removed mr-28
                />
              </a>
            </div>
          </div>

          {/* Full width middle image (Fourth) */}
          <div className="md:col-span-12">
            <a href="#">
              <img
                src={fourth}
                alt="Send money to your clients and loved ones across the world"
                className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </a>
          </div>

          {/* Two side-by-side images (Fifth and Sixth) */}
          {/* Similar to second and third, they stack on mobile, go side-by-side on MD+ */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Nested grid for 2 columns */}
            <div className="col-span-1">
              <a href="#">
                <img
                  src={fifth}
                  alt="Manage multiple currencies"
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              </a>
            </div>
            <div className="col-span-1">
              <a href="#">
                <img
                  src={sixth}
                  alt="Secure international transactions"
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;