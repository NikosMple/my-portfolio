import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-[#0a192f] to-[#020c1b] text-white">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-500 text-lg sm:text-xl tracking-widest">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-extrabold text-[#ccd6f6]">Nikolas Bletsas</h1>
        <h2 className="text-4xl sm:text-7xl font-semibold text-[#8892b0] mt-2">I'm a Junior Developer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-lg sm:text-xl">
          My expertise is in web development, where I leverage and apply emerging technologies to create modern and dynamic applications.
        </p>
        <div>
          <button className="group flex items-center justify-center text-white border-2 px-8 py-3 my-4 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:shadow-xl">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 transition-transform duration-300 ml-3">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
