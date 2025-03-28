import React from "react"; 
import CommonHeading from "./CommonHeading";
import logo2 from "../assets/logo2.png";
import star from "../assets/star.png";

const Strength = () => {
  return (
    <div className="mt-[2vw] relative font-[Poppins,sans-serif]">
      <CommonHeading title="Our Strength" />
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6 mt-[20px] md:mt-[3vw] px-6 md:px-12 sm:ml-4 ml-12">
        
        {[ 
          "Shaping and building talent, performance, teams, and leaders.",
          "Delivering excellence through people advisory and customized processes.",
          "Harnessing potential, building the leadership pipeline, and coaching leaders for success."
        ].map((text, index) => (
<div
  key={index}
  className="bg-[#3A99C9] w-full md:w-[500px] max-w-[90%] p-4 md:p-6 flex items-start text-left shadow-lg rounded-lg sm:w-full"
>
  <img src={star} alt="Star" className="w-4 h-4 mr-2 mt-1 sm:w-3 sm:h-3" />
  <p className="text-white font-bold text-xl md:text-2xl sm:text-sm md:leading-snug sm:leading-tight sm:tracking-tight md:tracking-normal sm:max-w-full">
    {text}
  </p>
</div>

        ))}
        
      </div>

      <img
        src={logo2}
        className="hidden sm:block absolute right-[2vw] bottom-[2vw] h-[5vw] min-h-[40px]"
        alt="Logo"
      />
    </div>
  );
};

export default Strength;





