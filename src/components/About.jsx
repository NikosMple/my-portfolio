import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto min-h-screen bg-gradient-to-b from-[#020c1b] to-[#0a192f] text-gray-300 py-8"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-6 sm:px-8">
          {/* Section Title */}
          <div className="text-center pb-6 sm:pb-8">
            <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-yellow-500">
              About
            </p>
          </div>

          {/* Content */}
          <div className="text-base sm:text-lg leading-relaxed text-[#ccd6f6] text-justify">
            <p>
            Hey, my name is Nikolaos Bletsas. I was born and currently live in Greece. 
            I consider myself a passionate and aspiring web developer eager to create modern web applications. 
            While success isn’t guaranteed, I see challenges as opportunities to learn and grow my skills.
            </p>
            <p className="mt-4">
            I hold a Bachelor’s degree in Computer Engineering from the University of Thessaly. 
            As a Junior Developer, I strive to bridge the gap between theory and practice, 
            constantly improving my technical expertise and staying updated on the latest tech trends.
            </p>
            <p className="mt-4">
            By working on personal projects, I've gained hands-on experience with a variety of technologies.
            For example, I've built Full-Stack applications using React for the Frontend and Node.js with Express.js for the Backend. 
            I've also gained experience with both relational and non-relational databases, such as PostgreSQL and MongoDB. 
            Dedicating time to understanding authentication, JWT tokens, and security , which has really helped me grow my knowledge of secure web development practices. 
            </p>
            <p className="mt-4">
            Beyond web development, my interest in cryptocurrencies has led me to explore the field from a technical perspective. 
            I’ve studied the Ethereum ecosystem, Solidity for smart contracts, and Motoko, the language of the Internet Computer. 
            Exploring blockchain technology and decentralized apps (dApps) has opened up exciting possibilities for future innovation.
            </p>
            <p className='mt-4'>
            On a fun note, I can confidently say that while I may be a junior in programming, 
            I’m definitely a senior in geography—especially learning about the capitals and flags of countries! 
            A true full-stack explorer: cities on the front-end, banners on the back-end! 🧑‍🏫🗺️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
