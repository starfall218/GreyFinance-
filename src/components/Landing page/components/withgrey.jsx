import React, { useRef } from "react";

function WithGrey() {
  const heroButtonRef = useRef(null);

  return (
    <>
     
        
        <section className="relative w-full min-h-screen bg-[#1b1f28] flex items-center justify-center py-20 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl flex-shrink-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-200 leading-tight mb-4">
                <span className="bg-gradient-to-b from-gray-400 to-gray-300 text-gradient whitespace-nowrap">
                  With Grey.
                </span>
                <span className="block whitespace-normal"> A truly global foreign account.</span>
              </h1>
              <p className="text-sm text-gray-200 mb-8 max-w-md font-light whitespace-normal">
                Get a global foreign account that puts you in total control of your money.
              </p>
              <button
                ref={heroButtonRef}
                className="
                  relative overflow-hidden
                  bg-blue-500 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg
                  shadow-[0_0_15px_rgba(59,130,246,0.3)]
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                  transition-all duration-300
                "
              >
                Create an account
              </button>
              <div className="hand-cover-2"></div>
            </div>
          </div>
        </section>
      
    </>
  );
}

export default WithGrey;