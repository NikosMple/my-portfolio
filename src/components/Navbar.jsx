import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-6 bg-gradient-to-r from-[#0a192f] to-[#020c1b] text-gray-300 z-50 shadow-md">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-yellow-500">My Portfolio</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {['home', 'about', 'skills', 'work', 'contact'].map((section) => (
          <li key={section} className="hover:text-yellow-500">
            <Link to={section} smooth={true} duration={500} offset={-80}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          !nav ? "hidden" : "fixed"
        } top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-all duration-500`}
      >
        {['home', 'about', 'skills', 'work', 'contact'].map((section) => (
          <li key={section} className="py-6 text-4xl">
            <Link onClick={handleClick} to={section} smooth={true} duration={500}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 space-y-4">
        {[
          {
            name: "LinkedIn",
            icon: <FaLinkedin size={30} />,
            color: "bg-blue-600",
            link: "https://www.linkedin.com/in/nikos-bletsas-82aa33276/",
          },
          {
            name: "GitHub",
            icon: <FaGithub size={30} />,
            color: "bg-[#333333]",
            link: "https://github.com/NikosMple",
          }
        ].map(({ name, icon, color, link }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${color}`}
            title={name}
          >
            <span className="flex justify-between items-center w-full text-gray-300 px-4">
              {name} {icon}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
