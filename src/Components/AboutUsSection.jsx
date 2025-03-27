import React from "react";
import CommonHeading from "./CommonHeading";
import image3 from "../assets/image 3.png";

const AboutUs = () => {
  const textStyle = { fontFamily: "Poppins, sans-serif", textAlign: "justify" };

  return (
    <div className="mt-[2vw] relative px-6 sm:px-12" style={textStyle}>
      <CommonHeading title="About Us" />
      <div className="relative mt-4 pt-6 flex flex-col md:flex-row items-center md:items-start">

        <div className="relative w-full md:w-1/3 flex items-center justify-center md:justify-start">
  <img
    src={image3}
    alt="Profile"
    className="w-40 h-40 sm:w-52 sm:h-52 rounded-full  border-4 border-white object-cover ml-[25%]"
  />
</div>

        <div className="w-full md:w-2/3 text-gray-700 md:ml-12 mt-6 md:mt-0 leading-relaxed space-y-4">
          <p className="text-base sm:text-lg" style={textStyle}>
            Udal is a Graduate in Management from BHU - Varanasi and Post Graduate in Management
            and Organization Behavior from XLRI - Jamshedpur. He is also an alumnus of Ashridge University (UK),
            IMD (Lausanne), Center for Creative Leadership (North Carolina), Indian Business School - Hyderabad,
            and Stanford Business School (California), through his academic and learning exposures. He also
            qualified a one-year Business Leaders Program for Strategy with Leadership at Indian Institute of Management,
            Kolkata (India) and has taught at IIM, Mumbai & Morocco as a visiting faculty.
          </p>
        </div>
      </div>

      <div className="text-gray-700 mt-6 text-base sm:text-lg leading-relaxed space-y-4 px-6 sm:px-12">
        <p style={textStyle}>
          He has worked for over 35 years at leadership positions within Chemicals & Fertilizers, FMCG and
          Pharmaceutical industries, namely, Hindustan Unilever and Colgate Palmolive etc., well-known and recognized
          for Management and Human Capital Practices. His corporate leadership has extended to Strategy, People Processes in M&A,
          Change, Leadership Development, Supply Chain, industrial relations, and Communications across 50+ geographic
          global locations.
        </p>
        <p style={textStyle}>
          He has been actively associated with Employer Organizations, Management Institutes, Universities,
          and Professional bodies. He is a management educator at premier Management & Engineering Institutions in India.
          He has addressed a Management Dinner on Leadership at Conference Board, USA, which was much appreciated.
        </p>
        <p style={textStyle}>
          He currently pursues his consulting and advisory practice in Human Resources and General Management with
          “The HR Company” as Founder & CEO, since 2007, with its offices at NCR and Mumbai. He is an experienced
          selection jury, mentoring, and leadership coach besides being a certified trainer and assessor.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;


