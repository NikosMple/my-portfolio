import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import git from "../assets/git.png";
import javaScript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import Postgresql from "../assets/Postgresql.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-auto min-h-screen bg-gradient-to-b from-[#0a192f] to-[#020c1b] text-gray-300 py-8"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 flex flex-col justify-center w-full h-full">
        {/* Section Title */}
        <div className="text-center pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-yellow-500">
            Skills
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#8892b0]">
          These are some of the technologies I've worked with 
          </p>
        </div>

        {/* Skills Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center py-8">
          {/* Skill Item */}
          {[
            { src: html, name: "HTML" },
            { src: css, name: "CSS" },
            { src: github, name: "GitHub" },
            {src: git, name: "Git"},
            { src: javaScript, name: "JavaScript" },
            { src: react, name: "React" },
            { src: node, name: "Node.js" },
            { src: Postgresql, name: "PostgreSQL" },
          ].map((skill, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-[#112240] duration-500 rounded-lg p-4"
            >
              <img className="w-16 sm:w-20 mx-auto" src={skill.src} alt={`${skill.name} icon`} />
              <p className="mt-4 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
