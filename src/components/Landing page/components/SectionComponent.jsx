import React from 'react';
import pic from '../images/2wmn.webp';

const Twowomen = () => {
  return (
    <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row bg-gray-200 p-8 rounded-xl items-center justify-between gap-8">
        <div className="lg:w-1/2 text-center lg:text-left pb-7 lg:pb-0">
          <h2 className="text-4xl  sm:text-5xl font-extrabold text-gray-900 mb-4 text-left">Making a <br className="lg:hidden"/>difference together</h2>
          <p className="text-gray-600 text-base leading-relaxed font-normal text-left">
            At Grey, we believe in giving back and supporting <br className="lg:hidden"/> meaningful causes. Through our dedicated social impact programs and corporate social responsibility initiatives, we strive to make a difference in the communities we serve. <br className="lg:hidden"/> By choosing Grey, you're not just simplifying your global transactions but contributing to a better world.
          </p>
        </div>
        <div className="lg:w-1/2 w-full mt-6 lg:mt-0 flex justify-center">
          <img
            src={pic}
            alt="Community support"
            className="rounded-lg shadow-lg object-cover w-full max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Twowomen;