import React from "react";
import CommonHeading from "./CommonHeading";
import xlriLogo from "../assets/image 4.png";
import conferenceBoardLogo from "../assets/image 5.png";
import iitRoorkeeLogo from "../assets/image 6.png";
import mdiLogo from "../assets/image 7.png";
import imdLogo from "../assets/image 8.png";
import isbLogo from "../assets/image 9.png";
import stanfordLogo from "../assets/image 10.png";
import ashridgeLogo from "../assets/image 11.png";
import iimCalcuttaLogo from "../assets/image 12.png";
import otherLogo from "../assets/image 13.png";

const LogoGrid = () => {
  return (
    <div className="mt-[2vw] relative mb-[-1%]">
      <CommonHeading title="Our Academic and Professional Learning Exposures" />

      <div className=" container mx-auto py-10 flex flex-col items-center gap-6">

        <div className="flex justify-center gap-8">
        <img src={ashridgeLogo} alt="Ashridge" className="h-24 object-contain" />
          <img src={mdiLogo} alt="MDI Gurgaon" className="h-24 object-contain" />
          
          <img src={xlriLogo} alt="XLRI Jamshedpur" className="h-24 object-contain" />
        </div>


        <div className="flex justify-center gap-8">
          <img src={conferenceBoardLogo} alt="The Conference Board" className="h-24 object-contain" />
          <img src={iimCalcuttaLogo} alt="IIM Calcutta" className="h-24 object-contain" />
          <img src={isbLogo} alt="ISB" className="h-24 object-contain" />
          <img src={imdLogo} alt="IMD" className="h-24 object-contain" />
        </div>


        <div className="flex justify-center gap-8">
        <img src={otherLogo} alt="Other Institute" className="h-24 object-contain" />
          <img src={stanfordLogo} alt="Stanford" className="h-24 object-contain" />
        </div>

        <div className="flex justify-center">
        <img src={iitRoorkeeLogo} alt="IIT Roorkee" className="h-24 object-contain" />
        </div>

      </div>
    </div>
  );
};

export default LogoGrid;

