import React from 'react';
import blueWheel from '../assets/blue.png';
import magentaWheel from '../assets/magenta.png';
import logo2 from '../assets/logo2.png';

const Hero = () => {
  return (
    <div className='bg-linear-to-r ml-[5vw] mt-[8%] relative h-[40vw] from-[#3A99C9] to-[#0073AE]'>
      <h2 style={{ fontFamily: 'Calibri, sans-serif' }} className='text-white md:p-4 w-[80%] m-auto text-[2vw] font-bold text-center'>
        Contributing to performance, talent & leadership excellence across industries since 2007
      </h2>
      
      <div>
        <img src={magentaWheel} className='absolute h-[17vw] top-[53%] z-49 left-[50%] translate-[-50%]' alt='' />
        <h5 style={{ fontFamily: 'Calibri, sans-serif' }} className='absolute top-[53%] text-[1.8vw] font-[500] text-white w-[10vw] text-center left-[50%] translate-[-50%]'>
          The HR <br /> Company
        </h5>
      </div>

      <div>
        <img src={blueWheel} className='absolute animate-[spin_5s_linear_infinite] h-[17vw] top-[40%] left-[29.5%] translate-[-50%]' alt='' />
        <h5 style={{ fontFamily: 'Calibri, sans-serif' }} className='absolute top-[40%] left-[29.5%] translate-[-50%] text-[1.5vw] font-[500] text-white w-[11vw] text-center'>
          Leadership Coaching & Development
        </h5>
      </div>

      <div>
        <img src={blueWheel} className='absolute animate-[spin_5s_linear_infinite] h-[17vw] top-[40%] right-[8%] translate-[-50%]' alt='' />
        <h5 style={{ fontFamily: 'Calibri, sans-serif' }} className='absolute top-[40%] right-[16%] translate-[-50%] text-[1.5vw] font-[500] text-white w-[11vw] text-center'>
          Empowered performance
        </h5>
      </div>

      <div>
        <img src={blueWheel} className='absolute animate-[spin_5s_linear_infinite] h-[14vw] bottom-[-15.9%] left-[34.5%] translate-[-50%]' alt='' />
        <h5 style={{ fontFamily: 'Calibri, sans-serif' }} className='absolute bottom-[4%] left-[34.5%] translate-[-50%] text-[1.3vw] font-[500] text-white w-[8vw] text-center'>
          Advisory & People Processes
        </h5>
      </div>

      <div>
        <img src={blueWheel} className='absolute animate-[spin_5s_linear_infinite] h-[14vw] bottom-[-17%] right-[16%] translate-[-50%]' alt='' />
        <h5 style={{ fontFamily: 'Calibri, sans-serif' }} className='absolute bottom-[7%] right-[24.5%] translate-[-50%] text-[1.5vw] font-[500] text-white w-[8vw] text-center'>
          Team Solutions
        </h5>
      </div>

      <img src={logo2} className='absolute bottom-[1.5vw] h-[5vw] right-[1.5vw]' alt='' />
    </div>
  );
};

export default Hero;

