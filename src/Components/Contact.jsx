import React from 'react';
import { Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div 
      className='bg-linear-to-r ml-0 sm:ml-[5vw] mt-[2vw] flex flex-col sm:flex-row justify-center items-center h-auto sm:h-[10vw] from-[#3A99C9] to-[#0073AE] px-4 sm:px-8 py-4'
      style={{ fontFamily: 'Calibri, sans-serif' }}
    >
      <div className='flex flex-col sm:flex-row justify-between w-full max-w-screen-lg m-auto text-white items-center text-center sm:text-left'>

        <div className='mb-4 sm:mb-0'>
          <h3 className='text-base sm:text-lg lg:text-2xl'>www.thehrcompany.co.in</h3>
          <h3 className='text-base sm:text-lg lg:text-2xl'>Gurgaon & Mumbai</h3>
        </div>

        <div className='space-y-2'>
          <p className='text-sm sm:text-base lg:text-lg flex items-center justify-center sm:justify-start'>
            <Phone className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-[#dd117b]" />
            +91-9930951967 / +91-2225797562
          </p>
          <p className='text-sm sm:text-base lg:text-lg flex items-center justify-center sm:justify-start'>
            <Phone className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-[#dd117b]" />
            +91-9930951967 / +91-2225797562
          </p>
          <p className='text-sm sm:text-base lg:text-lg flex items-center justify-center sm:justify-start'>
            <Linkedin className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-[#dd117b]" />
            https://www.linkedin.com/the-hr-company/
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;


