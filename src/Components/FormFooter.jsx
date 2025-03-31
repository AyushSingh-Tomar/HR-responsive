import React from "react";
import address from "../assets/address.png";
import email from "../assets/mail.png";
import phone2 from "../assets/phone2.png";
// import FormAdverdant from "./footeradverdant"
const ContactInfo = () => {
  return (
    <div className="w-[89%] ml-[8%] bg-white mb-[0%] mt-[5vw]">
      <div 
        className="flex flex-wrap items-center justify-between relative px-4 py-3"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="absolute left-[-5%] top-1/2 transform -translate-y-1/2 h-8 w-1 bg-pink-500 hidden md:block"></div>

        {/* Contact Item Wrapper */}
        <div className="flex items-center space-x-2 mb-2 md:mb-0 w-full md:w-auto justify-center md:justify-start">
          <img src={phone2} alt="Phone" className="w-6 h-6 md:w-[2vw] md:h-[2vw]" />
          <span className="font-medium text-sm md:text-base text-center md:text-left">+91 9856324575</span>
        </div>

        <div className="flex items-center space-x-2 mb-2 md:mb-0 w-full md:w-auto justify-center md:justify-start">
          <div className="h-8 w-1 bg-pink-500 hidden md:block"></div>
          <img src={email} alt="Email" className="w-6 h-6 md:w-[2vw] md:h-[2vw]" />
          <span className="font-medium text-sm md:text-base text-center md:text-left">info@hrcompany.com</span>
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto justify-center md:justify-start">
          <div className="h-8 w-1 bg-pink-500 hidden md:block"></div>
          <img src={address} alt="Location" className="w-6 h-6 md:w-[2vw] md:h-[2vw]" />
          <span className="font-medium text-sm md:text-base text-center md:text-left">
            Abu Dhabi House 19 Washington Square N, New York, NY 10011, USA
          </span>
        </div>

        <div className="absolute right-[-5%] top-1/2 transform -translate-y-1/2 h-8 w-1 bg-pink-500 hidden md:block"></div>
      </div>
      {/* <FormAdverdant/> */}
    </div>
  );
};

export default ContactInfo;
