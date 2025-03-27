import React from "react";
import CommonHeading from "./CommonHeading";
import logo2 from "../assets/logo2.png";
import star from "../assets/star.png";

const Strength = () => {
  return (
    <div className="mt-[2vw] relative font-[Poppins,sans-serif]">
      <CommonHeading title="Our Strength" />
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6 mt-[20px] md:mt-[3vw] px-6 md:px-12">
        
        {[
          "Shaping and building talent, performance, teams, and leaders.",
          "Delivering excellence through people advisory and customized processes.",
          "Harnessing potential, building the leadership pipeline, and coaching leaders for success."
        ].map((text, index) => (
          <div
            key={index}
            className="bg-[#3A99C9] w-full md:w-[500px] max-w-[90%] p-6 flex items-start text-justify shadow-lg rounded-lg"
          >
            <img src={star} alt="Star" className="w-5 h-5 mr-3 mt-1" />
            <p className="text-white font-bold text-lg">{text}</p>
          </div>
        ))}
        
      </div>

      <img
        src={logo2}
        className="absolute right-[2vw] bottom-[2vw] h-[5vw] min-h-[40px]"
        alt="Logo"
      />
    </div>
  );
};

export default Strength;





