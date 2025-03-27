import React from 'react'; 
import blueWheel from '../assets/blue.png';
import magentaWheel from '../assets/magenta.png';
import logo2 from '../assets/logo2.png';

const Hero = () => {
  return (
    <div className='bg-linear-to-r ml-[5vw] mt-[8%] relative h-[40vw] from-[#3A99C9] to-[#0073AE] flex flex-col items-center'>
      <h2 style={{ fontFamily: 'Calibri, sans-serif' }} className='text-white md:p-4 w-[80%] m-auto text-[2vw] font-bold text-center'>
        Contributing to performance, talent & leadership excellence across industries since 2007
      </h2>
      
      <div className='relative flex justify-center items-center mt-10'>
        <img src={magentaWheel} className='absolute h-[17vw] top-1/2 transform -translate-y-1/2 z-10' alt='' />
        <h5 style={{ fontFamily: 'Calibri, sans-serif' }} className='absolute text-[1.8vw] font-[500] text-white w-[10vw] text-center'>
          The HR <br /> Company
        </h5>
      </div>

      <div className='absolute top-[40%] left-[10%] md:left-[29.5%] flex flex-col items-center'>
        <img src={blueWheel} className='animate-spin h-[17vw]' alt='' />
        <h5 className='text-[1.5vw] font-[500] text-white w-[11vw] text-center mt-2'>Leadership Coaching & Development</h5>
      </div>

      <div className='absolute top-[40%] right-[5%] md:right-[8%] flex flex-col items-center'>
        <img src={blueWheel} className='animate-spin h-[17vw]' alt='' />
        <h5 className='text-[1.5vw] font-[500] text-white w-[11vw] text-center mt-2'>Empowered Performance</h5>
      </div>

      <div className='absolute bottom-[-10%] left-[15%] md:left-[34.5%] flex flex-col items-center'>
        <img src={blueWheel} className='animate-spin h-[14vw]' alt='' />
        <h5 className='text-[1.3vw] font-[500] text-white w-[8vw] text-center mt-2'>Advisory & People Processes</h5>
      </div>

      <div className='absolute bottom-[-10%] right-[10%] md:right-[16%] flex flex-col items-center'>
        <img src={blueWheel} className='animate-spin h-[14vw]' alt='' />
        <h5 className='text-[1.5vw] font-[500] text-white w-[8vw] text-center mt-2'>Team Solutions</h5>
      </div>

      <img src={logo2} className='absolute bottom-[1.5vw] h-[5vw] right-[1.5vw]' alt='' />
    </div>
  );
};

export default Hero;

