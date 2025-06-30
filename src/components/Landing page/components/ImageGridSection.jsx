import React from "react";
import first from "../images/first-grid.png";
import second from "../images/second-grid.png";
import third from "../images/third-grid.png";
import fourth from "../images/fourth-grid.png";
import fifth from "../images/fifth-grid.png";
import sixth from "../images/last-grid.png";

const ImageGrid = () => {
  return (
    <section id="image-grid" className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 overflow-hidden width-[100vw]">
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

          {/* Two side-by-side images */}
          <div className="md:col-span-5 w-[30rem] h-[53rem]">
            <a href="#">
              <img
                src={second}
                alt="Convert money at the best rate"
                className="w-[100%]  rounded-lg shadow-md hover:shadow-lg transition-shadow "
              />
            </a>
          </div>
          <div className="w-[40rem] h-[51rem] md:col-span-1 ">
            <a href="#">
              <img
                src={third}
                alt="Shop and spend globally"
                className="w-[100%] h-[100%] rounded-lg shadow-md hover:shadow-lg transition-shadow mr-28"
              />
            </a>
          </div>

          {/* Full width middle image */}
          <div className="md:col-span-12">
            <a href="#">
              <img
                src={fourth}
                alt="Send money to your clients and loved ones across the world"
                className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </a>
          </div>

          {/* Two side-by-side images */}
          <div className="md:col-span-5 w-[30rem] h-[53rem]">
            <a href="#">
              <img
                src={fifth}
                alt="Manage multiple currencies"
                className="w-[100%] h-[100%] rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </a>
          </div>
          <div className="w-[43rem] h-[53rem] md:col-span-1">
            <a href="#">
              <img
                src={sixth}
                alt="Secure international transactions"
                className="[100%] h-[100%] rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
