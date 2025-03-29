import React from "react";
import CommonHeading from "./CommonHeading";
import image3 from "../assets/image 3.png";

const AboutUs = () => {
  const textStyle = {
    fontFamily: "Poppins, sans-serif",
    textAlign: "justify",
  };

  return (
    <div className="mt-[2vw] relative px-4 sm:px-8 md:px-12" style={textStyle}>
      <CommonHeading title="About Us" />
      <div className="relative mt-4 pt-6 flex flex-col md:flex-row items-center md:items-start">
        {/* Image Section */}
        <div className="relative w-full md:w-1/3 flex items-center justify-center md:justify-start">
          <img
            src={image3}
            alt="Profile"
            className="m-auto w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full border-4 border-white object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 text-gray-700 md:ml-8 mt-6 md:mt-0 leading-relaxed space-y-4 text-sm sm:text-base md:text-lg">
          <p style={textStyle}>
          Udai is a Graduate in Management from BHU - Varanasi and Post Graduate in Management and Organization Behavior from XLRI 
           Jamshedpur. He is also an alumnus of Ashridge University (UK), IMD (Lausanne), Center for Creative Leadership (North Carolina), Indian School of Business - 
           Hyderabad, and Stanford Business School (California), through his academic and learning exposures. He also qualifies a One-year Business Leaders Program 
           (on Strategy and Leadership) with Indian Instituteof Management, Kolkata (India) and has taught atIIT, Mumbai & Roorkee as a visiting faculty.

          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-gray-700 mt-6 leading-relaxed space-y-4 text-sm sm:text-base md:text-lg px-4 sm:px-8 md:px-12">
        <p style={textStyle}>
          He has worked for over 35 years in leadership positions within Chemicals & Fertilizers, FMCG,
          and Pharmaceutical industries, namely, Hindustan Unilever and Colgate Palmolive. His corporate leadership has
          extended to Strategy, People Processes in M&A, Change, Leadership Development, Supply Chain, industrial relations,
          and Communications across 50+ global locations.
        </p>
        <p style={textStyle}>
        Udai has been actively associated with Employer Organizations, Management Institutes, Universities and Professional bodies. 
        He is a management educator at premier Management & Engineering institutes in India. His address at a Global Conference at San Diego on 
        leadership, organized by Conference Board, 
        USA was much appreciated.
        </p>
        <p style={textStyle}>
        He currently pursues his consulting and advisory practice in Human Resources and General Management 
        with – ‘The HR Company’ as Founder & CEO, since 2007, with its offices at NCR and Mumbai. He is an experienced 
        Action Learning, Performance and Leadership Coach besides being a certified trainer and assessor. Also, he has 
        supported The Conference Board, USA, as Director for its leadership council in India & South Asia and later as
         Senior Fellow for The Global Human Capital Exchange for several years. He is located at Gurgaon.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;


