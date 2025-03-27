import React from 'react'; 
import CommonHeading from './CommonHeading';
import logo2 from '../assets/logo2.png';
import star from '../assets/star.png';

const Strength = () => {
  const textStyle = { fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem',  }; 

  return (
    <div className='mt-[2vw] relative' style={textStyle}>
      <CommonHeading title="Our Strength" />
      <div className='flex ml-[9vw] gap-5 mt-[20px] md:mt-[3vw] md:gap-10 min-w-[300px] flex-wrap justify-center md:justify-start'>

        <div className='bg-[rgb(58,153,201)] text-justify w-[280px] md:w-[500px] p-[30px] flex items-start' style={textStyle}>
          <img src={star} alt="Star" className='w-[20px] h-[20px] mr-2 mt-1' />
          <p className='text-white font-bold' style={textStyle}>Shaping and building Talent, performance, teams and leader</p>
        </div>


        <div className='bg-[#3A99C9]  w-[280px] text-justify md:w-[500px] p-[30px] flex items-start ml-[9%]' style={textStyle}>
          <img src={star} alt="Star" className='w-[20px] h-[20px] mr-2 mt-1' />
          <p className='text-white font-bold' style={textStyle}>Delivering excellence through people advisory and processes appropriately customised</p>
        </div>

        <div className='bg-[#3A99C9] w-[280px] text-justify md:w-[500px] p-[30px] flex items-start mx-auto ml-[26%]' style={textStyle}>
          <img src={star} alt="Star" className='w-[20px] h-[20px] mr-2 mt-1' />
          <p className='text-white font-bold' style={textStyle}>Harnessing potential, building the leadership pipeline and coaching leaders for success</p>
        </div>
      </div>

      <img src={logo2} className='absolute bottom-[-1.5vw] h-[5vw] right-[1.5vw]' alt="Logo" />
    </div>
  );
};

export default Strength;




