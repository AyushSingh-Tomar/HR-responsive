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
    <div className="mt-[2vw] relative mb-[-1%] px-4 md:px-8">
      <div className="ml-[-2vw]"><CommonHeading title="Our Academic and Professional Learning Exposures" /></div>
      <div className="m-auto container mx-auto py-10 flex flex-col items-center gap-6 ml-0 md:ml-9">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center">
          <img src={ashridgeLogo} alt="Ashridge" className="h-20 md:h-24 object-contain mx-auto" />
          <img src={mdiLogo} alt="MDI Gurgaon" className="h-20 md:h-24 object-contain mx-auto" />
          <img src={xlriLogo} alt="XLRI Jamshedpur" className="h-20 md:h-24 object-contain mx-auto" />
          <img src={conferenceBoardLogo} alt="The Conference Board" className="h-20 md:h-24 object-contain mx-auto" />
          <img src={iimCalcuttaLogo} alt="IIM Calcutta" className="h-20 md:h-24 object-contain mx-auto" />
          <img src={isbLogo} alt="ISB" className="h-20 md:h-24 object-contain mx-auto" />
          <img src={imdLogo} alt="IMD" className="h-20 md:h-24 object-contain mx-auto" />
          <img src={otherLogo} alt="Other Institute" className="h-20 md:h-24 object-contain mx-auto" />
          <img src={stanfordLogo} alt="Stanford" className="h-20 md:h-24 object-contain mx-auto" />
          <img src={iitRoorkeeLogo} alt="IIT Roorkee" className="h-20 md:h-24 object-contain mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;

