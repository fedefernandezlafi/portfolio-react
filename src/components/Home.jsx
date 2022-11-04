import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import "./Home.css";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container  */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="title__p text-[#ed4622] text-base "> Hi, my name is</p>
        <h1 className="title__main text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Federico Fernández Lafi
        </h1>
        <h2 className="title__main text-4xl sm:text-7xl font-bold text-[#4e6aea]">
          I'm Full Stack Developer
        </h2>
        <p className="title__p text-[#8892b0] py-4 max-[700px] ">
          I'm a full-stack developer that started learning about software
          development a year ago. Currently, I'm focused on getting my first job
          in the industry. Click down below and know me better!
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ed4622] hover:border-[#ed4622]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
