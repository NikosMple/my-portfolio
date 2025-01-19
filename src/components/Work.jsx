import React from 'react';
import { data } from "../data/data.js";

const Work = () => {
  // Projects data
  const projects = data;
  
  return (
    <div name="work" className="w-full md:h-screen bg-gradient-to-b from-[#020c1b] to-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full">
        {/* Section Title */}
        <div className="text-center pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
            Work
          </p>
          <p className="mt-4 text-lg sm:text-xl text-[#8892b0]">
            Check out some of my recent work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-lg 
                         flex justify-center items-center mx-auto h-64 bg-cover bg-center 
                         hover:bg-[#112240] transition-all duration-500 content-div"
            >
              {/* Hover Effect */}
              <div className="opacity-0 group-hover:opacity-100 text-center p-4">
                <p className="text-2xl font-bold text-white tracking-wider">{item.name}</p>
                <div className="pt-6">
                  {/* Code Button */}
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-2 m-2 
                                 bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* Live Button */}
                  {item.hasLiveButton && (
                  <a href={item.live} target="_blank" rel="noopener noreferrer ">
                    <button
                      className="text-center rounded-lg px-4 py-2 m-2 
                                 bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
