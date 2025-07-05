import React, { useRef } from "react";

function App() {
  const heroButtonRef = useRef(null);

  return (
    <>
      <style>
        {`
        .hand-cover-2 {
          background-image: url(https://cdn.prod.website-files.com/6360022338a81bd6fdbb1145/67f8f68b6a43a328b669a59c_handWithPhone.avif);
          background-image: -webkit-image-set(
            url(https://cdn.prod.website-files.com/6360022338a81bd6fdbb1145/67f8f68b6a43a328b669a59c_handWithPhone.avif) 1x,
            url(https://placehold.co/340x300/CCCCCC/FFFFFF?text=Image+Unavailable) 1x
          );
          background-image: image-set(
            url(https://cdn.prod.website-files.com/6360022338a81bd6fdbb1145/67f8f68b6a43a328b669a59c_handWithPhone.avif) 1x,
            url(https://placehold.co/340x300/CCCCCC/FFFFFF?text=Image+Unavailable) 1x
          );
          background-position: center center;
          background-repeat: no-repeat;
          background-size: contain;
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        `}
      </style>

      <section className="relative w-full min-h-screen bg-[#1b1f28] flex items-center justify-center py-20 px-4 md:px-8 lg:px-16 overflow-visible">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-12 relative z-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl flex-shrink-0 md:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-200 leading-tight mb-4">
              <span className="bg-gradient-to-b from-gray-400 to-gray-300 text-transparent bg-clip-text whitespace-nowrap">
                With Grey.
              </span>
              <span className="block whitespace-normal"> A truly global foreign account.</span>
            </h1>
            <p className="text-base text-gray-200 mb-8 max-w-md font-light whitespace-normal">
              Get a global foreign account that puts you in total control of your money.
            </p>
            <button
              ref={heroButtonRef}
              className="
                relative overflow-hidden
                bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg
                shadow-[0_0_15px_rgba(59,130,246,0.3)]
                hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                transition-all duration-300
              "
            >
              Create an account
            </button>
          </div>

          <div
            className="
              relative w-full max-w-sm h-[300px] mt-12 md:mt-0 flex-shrink-0
              md:w-1/2 md:max-w-none md:h-[400px] lg:h-[500px] xl:h-[600px]
              overflow-hidden
            "
          >
            <div className="hand-cover-2"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
