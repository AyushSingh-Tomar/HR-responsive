import React from "react";
import CommonHeading from "./CommonHeading";
import logo2 from "../assets/logo2.png";
import rollfill from "../assets/rollfill.png";

const cardData = [
  {
    title: "Empowered Performance",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: "Leadership Coaching & Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: "Team Solutions",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: "Advisory & People Processes",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const Card = ({ title, description, hideButton }) => (
  <div
    className="flex ml-[5vw] mt-[20px] items-start border-l-[6px] border-[#969696] pl-4 p-6 bg-white shadow-lg rounded-lg"
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    <div>
      <img src={rollfill} alt="Icon" className="mb-2 w-10 h-10" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4 text-justify">{description}</p>
      {!hideButton && (
        <button className="bg-[#006699] text-white px-5 py-2 rounded-md hover:bg-[#005580] transition-all duration-300">
          Read More
        </button>
      )}
    </div>
  </div>
);

const Services = () => {
  return (
    <div
      className="mt-[2vw] relative flex-col items-center"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <CommonHeading title="Services Architecture" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cardData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              hideButton={index === cardData.length - 1}
            />
          ))}
        </div>
      </div>

      <img
        src={logo2}
        className="absolute right-[2vw] bottom-[2vw] h-[5vw] min-h-[40px]"
        alt="Logo"
      />
    </div>
  );
};

export default Services;
