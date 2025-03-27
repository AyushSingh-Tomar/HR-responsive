import React from "react";
import CommonHeading from "./CommonHeading";
import image95 from "../assets/image 95.png";
import logo2 from '../assets/logo2.png';

const TeamSolutions = () => {
  return (
    <div className="mt-[2vw] relative flex-col items-center">
      <CommonHeading title="Team Solutions" />
      
      <div className="mt-[5%] ">

        <p 
          className="text-gray-800 max-w-4xl mx-auto mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', textAlign: 'justify' }}
        >
          Team solutions is a quick, time-bound, and proven approach for team building and decision-making
          with collective learning and execution effectiveness aided by experts and experienced coaches.
          The process benefits individuals, teams, and organizations by building team synergies.
        </p>


        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <img
            src={image95}
            alt="Team Solutions"
            className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-3xl xl:max-w-5xl  rounded-lg relative left-[5vw]"
          />
        </div>

        <p 
          className="text-gray-800 max-w-4xl mx-auto mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', textAlign: 'justify' }}
        >
          Team Solutions<span>{'\u00AE'}</span><span>{'\u00A0'}</span>
          is a quick, time-bound and proven decision making process with collective learning and execution effectiveness,
aided by experts and experienced coaches. The process benefits individuals, teams and organizations by building team synergies,
while solving problems and developing decision making capabilities alongside.
        </p>
        <div className="w-full flex justify-end pr-[1.5vw] mt-4">
          <img src={logo2} className="absolute h-[5vw] bottom-6" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default TeamSolutions;
