import React from 'react';
import CommonHeading from './CommonHeading';
import { IoMdSettings } from "react-icons/io";
import logo2 from '../assets/logo2.png';
import rollfill from '../assets/rollfill.png';
const cardData = [
  {
    title: 'Empowered Performance',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: 'Leadership Coaching & Development',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: 'Team Solutions',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: 'Advisory & People Processes',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const Card = ({ title, description, hideButton }) => (
  <div className="flex ml-[5vw] mt-[20px] items-start border-l-6 border-[#969696] pl-4 p-6 bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
    <div>
      <div className='relative'>
        <img src={rollfill} alt="" />
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4 text-justify">{description}</p>
      {!hideButton && (
        <button className="bg-[#006699] text-white px-4 py-2 rounded hover:bg-[#006680] transition">
          Read More
        </button>
      )}
    </div>
  </div>
);

const Services = () => {
  return (
    <div className='mt-[2vw] relative flex-col items-center mb-[-1%]' style={{ fontFamily: 'Poppins, sans-serif' }}>
      <CommonHeading title="Services Architecture" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((item, index) => (
            <Card key={index} title={item.title} description={item.description} hideButton={index === cardData.length - 1} />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-end pr-[1.5vw] mt-4">
        <img src={logo2} className='absolute h-[5vw] bottom-[2%]' alt="Logo" />
      </div>
    </div>
  );
};

export default Services;