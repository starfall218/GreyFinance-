import React from 'react';
import pic from '../images/2wmn.webp';

const Twowomen = () => {
  return (
    <section className="w-[100%] h-[80vh] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center ">
      <div className="w-500 flex flex-row bg-gray-200 py-15 px-15 rounded-xl self-center justify-self-center justify-between gap-37 pt-6">
        <div className="lg:w-1/2 text-center lg:text-left justify-self-center self-center pb-7 ">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Making a <br />difference together</h2>
          <p className="text-gray-600 text-base leading-relaxed font-normal">
            At Grey, we believe in giving back and supporting <br /> meaningful causes. Through our dedicated social impact programs and corporate social responsibility initiatives, we strive to make a difference in the communities we serve. <br /> By choosing Grey, you're not just simplifying your global transactions but contributing to a better world.
          </p>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-1">
          <img
            src={pic}
            alt="Community support"
            className="rounded-lg shadow-lg object-cover w-200 h-64 lg:h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Twowomen;