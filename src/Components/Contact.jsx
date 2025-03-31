import React from 'react';
import { Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div 
      className='bg-linear-to-r ml-[5vw] mt-[2vw] flex justify-center items-center h-[10vw] from-[#3A99C9] to-[#0073AE] '
      style={{ fontFamily: 'Calibri, sans-serif' }}
    >
      <div className='flex justify-around w-[90%] m-auto text-white items-center'>

   <div>
          <h4 style={{ fontFamily: 'Calibri, sans-serif' }} className='text-[2vw]'>www.thehrcompany.co.in Gurgaon & Mumbai</h4>
          {/* <h4 style={{ fontFamily: 'Calibri, sans-serif' }} className='text-[2vw]'></h4> */}
  
</div>
      </div>
    </div>
  );
};

export default Contact;


