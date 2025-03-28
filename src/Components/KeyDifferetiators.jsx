import React from "react";
import CommonHeading from "./CommonHeading";
import bgImage from "../assets/KeyDifferentiatorsBackGroundImage.png";
import logo2 from "../assets/logo2.png";

const KeyDifferentiators = () => {
    const differentiators = [
        { title: "Cost Effective:", description: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention." },
        { title: "Experience:", description: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention." },
        { title: "Expertise:", description: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention." },
        { title: "Execution:", description: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention." }
    ];

    return (
        <div className="relative mt-[4vw] w-full">
            <CommonHeading title="Key Differentiators" />
            <div className="mt-[5%] ml-[2%] flex justify-center">
                <div className="relative bg-[#006699] text-white p-10 w-[95%] ml-[4%] max-w-[1400px] font-[Poppins,sans-serif] flex flex-col items-center text-center overflow-hidden">
                    {/* Background Image */}
                    <img
                        src={bgImage}
                        alt="Background pattern"
                        className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[#3a99c9]/50 backdrop-blur-sm" />
                    
                    {/* Differentiators List */}
                    <div className="relative z-10 w-full max-w-[95%] text-left">
                        <ul className="list-disc pl-6 text-base sm:text-lg leading-relaxed">
                            {differentiators.map((item, index) => (
                                <li key={index} className="mb-4 pr-4">
                                    <span className="font-semibold text-xl sm:text-2xl">{item.title}</span>{" "}
                                    <span className="text-lg sm:text-xl font-normal">{item.description}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Logo */}
                    <img
                            src={logo2}
                            className="hidden sm:block absolute right-[1vw] bottom-[1vw] h-[4.5vw] min-h-[35px]"
                            alt="Logo"
                          />
                </div>
            </div>
        </div>
    );
};

export default KeyDifferentiators;
