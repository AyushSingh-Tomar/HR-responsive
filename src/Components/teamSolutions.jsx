import React from "react";
import CommonHeading from "./CommonHeading";
import image95 from "../assets/image 95.png";
import logo2 from "../assets/logo2.png";

const TeamSolutions = () => {
  return (
    <div className="mt-[2vw] relative flex flex-col items-center font-[Poppins,sans-serif]">
      <CommonHeading title="Team Solutions" />
      
      <div className="mt-8 px-6 max-w-4xl text-justify">
        <p className="text-gray-800 text-lg sm:text-xl leading-relaxed">
          <strong>Team Solutions</strong> is a **quick, time-bound, and proven approach** for team building and decision-making.
          It enhances **collective learning and execution effectiveness**, guided by **experienced experts and coaches**.
          This process benefits individuals, teams, and organizations by **building synergies** while fostering problem-solving
          and decision-making skills.
        </p>
      </div>

      <div className="flex justify-center mt-8 sm:mt-10">
        <img
          src={image95}
          alt="Team Solutions"
          className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-3xl xl:max-w-5xl rounded-lg object-cover"
        />
      </div>

      <div className="w-full flex justify-end pr-4 mt-4">
        <img src={logo2} className="absolute right-4 bottom-6 h-[5vw] min-h-[40px]" alt="Logo" />
      </div>
    </div>
  );
};

export default TeamSolutions;
