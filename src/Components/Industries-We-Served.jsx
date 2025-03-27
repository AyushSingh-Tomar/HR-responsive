import React from 'react';
import CommonHeading from './CommonHeading';

const industries = [
  'Telecommunication', 'Infotech', 'Heavy Metals', 'Retail', 'Engineering',
  'FMCG - Non Durables', 'FMCG - Durables', 'Textiles & Fashion', 'Construction Materials', 'Banking',
  "SME's", 'Large Diversified Business', 'Industrial Manufacturing', 'Manufacturing', 'Pharmaceuticals',
  'Textile Engineering', 'Management Consulting & Professional Services (Global)', 'Logistics & Supply Chain', 'EPC',
];

const IndustriesWeServed = () => {
  return (
    <div className='mt-[2vw] relative px-10' style={{ fontFamily: 'Poppins, sans-serif' }}>
      <CommonHeading title='The Industries we served' />
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-[5%] ml-[7%]'>
        
        {industries.map((industry, index) => (
          <div 
            key={index} 
            className='text-white text-center px-6 py-8 h-40 shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer flex items-center justify-center text-lg sm:text-xl font-semibold '
            style={{ backgroundColor: "#5b9bd5", fontFamily: 'Poppins, sans-serif' }}
          >
            {industry}
          </div>
        ))}

        <div className='bg-white text-black font-semibold text-center px-6 py-8 h-40 shadow-md flex items-center justify-center text-lg sm:text-xl ' style={{ fontFamily: 'Poppins, sans-serif' }}>
          And Many More...
        </div>

      </div>   
      
    </div>
  );
};

export default IndustriesWeServed;







