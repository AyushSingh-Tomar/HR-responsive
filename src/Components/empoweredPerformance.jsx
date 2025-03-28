import React from "react";
import CommonHeading from "./CommonHeading";
import image2 from "../assets/image 2.png";
import logo2 from "../assets/logo2.png";

const EmpoweredPerformance = () => {
  return (
    <div
      className="mt-[2vw] mb-[3vw] relative flex-col items-center"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <CommonHeading title="Empowered Performance" />

      <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 w-full">
        <img
          src={image2}
          alt="Empowered Performance"
          className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl rounded-lg"
        />
      </div>

      <div className="w-full flex justify-end pr-[1.5vw] mt-4 relative">
       <img
               src={logo2}
               className="hidden sm:block absolute right-[2vw] bottom-[-4vw] h-[5vw] min-h-[40px]"
               alt="Logo"
             />
      </div>
    </div>
  );
};

export default EmpoweredPerformance;
