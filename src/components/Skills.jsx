import React from "react";
import Java from "../assets/java2.png";
import HTMLl from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import Spring from "../assets/Spring.png";
import MySQL from "../assets/MySQL.png";
import SASS from "../assets/sass.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-full lg:h-screen  bg-[#0a192f]  text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#ed4622]">
            Skills
          </p>
          <p className="py-4"> These are the tecnololgies I've worked with </p>
        </div>
        <div className="w-full h-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="max-h-[160px] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={Java} alt="Java" />
            <p className="my-4"> Java </p>
          </div>
          <div className="max-h-[160px] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 my-auto mx-auto " src={Spring} alt="Spring" />
            <p className="my-4"> Spring </p>
          </div>
          <div className="max-h-[160px] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={MySQL} alt="MySQL" />
            <p className="my-4"> MySQL </p>
          </div>
          <div className="max-h-[160px] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={Javascript} alt="Javascript" />
            <p className="my-4"> JavaScript </p>
          </div>
          <div className="max-h-[160px] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={HTMLl} alt="HTML" />
            <p className="my-4"> HTML </p>
          </div>
          <div className="max-h-[160px] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={CSS} alt="CSS" />
            <p className="my-4"> CSS </p>
          </div>
          <div className="max-h-[160px] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={SASS} alt="SASS" />
            <p className="my-4"> Saas </p>
          </div>
          <div className="max-h-[160px] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={ReactLogo} alt="React" />
            <p className="my-4"> React </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
