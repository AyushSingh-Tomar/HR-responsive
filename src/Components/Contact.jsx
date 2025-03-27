import React from 'react';
import { Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div 
      className='bg-linear-to-r ml-[5vw] mt-[2vw] flex justify-center items-center h-[10vw] from-[#3A99C9] to-[#0073AE]'
      style={{ fontFamily: 'Calibri, sans-serif' }}
    >
      <div className='flex justify-between w-[90%] m-auto text-white items-center'>

        <div>
          <h3 style={{ fontFamily: 'Calibri, sans-serif' }} className='text-[2vw]'>www.thehrcompany.co.in</h3>
          <h3 style={{ fontFamily: 'Calibri, sans-serif' }} className='text-[2vw]'>Gurgaon & Mumbai</h3>
        </div>


        <div>
          <p style={{ fontFamily: 'Calibri, sans-serif' }} className='text-[1.5vw] flex items-center'>
            <Phone className="w-[2vw] h-[2vw] mr-2 text-[#dd117b]" />
            +91-9930951967 / +91-2225797562
          </p>
          <p style={{ fontFamily: 'Calibri, sans-serif' }} className='text-[1.5vw] flex items-center'>
            <Phone className="w-[2vw] h-[2vw] mr-2 text-[#dd117b]" />
            +91-9930951967 / +91-2225797562
          </p>
          <p style={{ fontFamily: 'Calibri, sans-serif' }} className='text-[1.5vw] flex items-center'>
            <Linkedin className="w-[2vw] h-[2vw] mr-2 text-[#dd117b]" />
            https://www.linkedin.com/the-hr-company/
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;


