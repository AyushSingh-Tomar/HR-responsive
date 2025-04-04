import React from "react";
import CommonHeading from "./CommonHeading";
import image95 from "../assets/image 95.png";
import logo2 from "../assets/logo2.png";

const TeamSolutions = () => {
  return (
    <div className="mt-[2vw] relative  flex-col items-center font-[Poppins,sans-serif] m-auto">
      <CommonHeading title="Team Solutions" />
      
      <div className="mt-12 px-6 max-w-4xl text-justify m-auto">
        <p className="text-gray-800 text-lg sm:text-xl leading-relaxed m-auto">
          <strong>Team Solutions</strong> is a quick, time-bound, and proven approach for team building and decision-making.
          It enhances collective learning and execution effectiveness, guided by experienced experts and coaches.
          This process benefits individuals, teams, and organizations by building synergies while fostering problem-solving
          and decision-making skills.
        </p>
      </div>

      <div className=" justify-center mt-8 sm:mt-10 m-auto">
        <img
          src={image95}
          alt="Team Solutions"
          className="m-auto w-full max-w-[90%] sm:max-w-[80%] md:max-w-3xl xl:max-w-5xl rounded-lg object-cover"
        />
      </div>
      <img
              src={logo2}
              className="hidden sm:block absolute right-[2vw] bottom-[-1vw] h-[4.5vw] min-h-[35px]"
              alt="Logo"
            />
    </div>
  );
};

export default TeamSolutions;
