import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Logo from "./../assets/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-2 py-2 bg-[#0a192f] text-gray-300">
      <img
        src={Logo}
        alt="Logo Img"
        style={{ height: "75px", padding: "5px", marginLeft: "10px" }}
      />
      {/* Menu */}
      <ul className="hidden md:flex">
        <li className=" font-bold py-1 mx-2 px-1 hover:border-b-2 hover:border-[#ed4622]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="font-bold py-1 mx-2 px-1 hover:border-b-2 hover:border-[#ed4622]">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="font-bold py-1 mx-2 px-1 hover:border-b-2 hover:border-[#ed4622]">
          <Link to="skills" offset={-100} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="font-bold py-1 mx-2 px-1 hover:border-b-2 hover:border-[#ed4622]">
          <Link to="work" offset={-100} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="font-bold py-1 mx-2 px-1 hover:border-b-2 hover:border-[#ed4622]">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*  Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:border-b-4 hover:border-[#ed4622]">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:border-b-4 hover:border-[#ed4622]">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:border-b-4 hover:border-[#ed4622]">
          <Link
            onClick={handleClick}
            to="skills"
            offset={-100}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:border-b-4 hover:border-[#ed4622]">
          <Link
            onClick={handleClick}
            to="work"
            offset={-100}
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:border-b-4 hover:border-[#ed4622]">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social Media */}
      <div className="socialmedia hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              {" "}
              LinkedIn <FaLinkedin size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              {" "}
              Github <FaGithub size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              {" "}
              Email <HiOutlineMail size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              {" "}
              Resume <BsFillPersonLinesFill size={30} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
