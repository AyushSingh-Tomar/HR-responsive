import React from "react";
import address from "../assets/address.png";
import email from "../assets/mail.png";
import phone2 from "../assets/phone2.png";

const ContactInfo = () => {
  return (
    <div style={{ width: '89%', marginLeft: '8%' }} className="bg-white mb-[2%]" >
      <div 
        className="flex flex-wrap w-full items-center justify-between relative"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >

        <div className="absolute left-[-5%] top-1/2 transform -translate-y-1/2 h-8 w-1 bg-pink-500 firstwall"></div>

        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <img src={phone2} alt="Phone" className="w-6 h-6 md:w-[2vw] md:h-[2vw]" />
          <span className="font-medium text-sm md:text-base">+91 9856324575</span>
        </div>

        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <div className="h-8 w-1 bg-pink-500 mr-3"></div>
          <img src={email} alt="Email" className="w-6 h-6 md:w-[2vw] md:h-[2vw]" />
          <span className="font-medium text-sm md:text-base">info@hrcompany.com</span>
        </div>

        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <div className="h-8 w-1 bg-pink-500 mr-3"></div>
          <img src={address} alt="Location" className="w-6 h-6 md:w-[2vw] md:h-[2vw]" />
          <span className="font-medium text-sm md:text-base">
            Abu Dhabi House 19 Washington Square N, New York, NY 10011, USA
          </span>
        </div>


        <div className="absolute right-[-5%] top-1/2 transform -translate-y-1/2 h-8 w-1 bg-pink-500 lastwall"></div>
      </div>
    </div>
  );
};

export default ContactInfo;
