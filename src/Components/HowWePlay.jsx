import React from 'react';
import BlueArrow from './arrow';
import CommonHeading from './CommonHeading';
import logo2 from '../assets/logo2.png';
const HowWePlay = () => {
  return (
    <div className="mt-[2vw] relative px-4 sm:px-6 sm:mb-[1vw]  " style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className='ml-[-2vw]'><CommonHeading title="How we Play?" /></div>
      
<br />
      <div className="flex flex-wrap justify-center gap-0 p-2 relative" style={{ fontFamily: 'Poppins, sans-serif',  }}>
        {[
          { text: "Assess", color: "#0066cc", boxPoints: ["Situation Analysis", "Define Arena of engagement", "First level problem definition"], flatTail: true, width: 260 },
          { text: "Design", color: "#fbfda1", boxPoints: ["Agree on process intervention", "Define resource", "Agree project objectives"], width: 260 },
          { text: "Align and Commit", color: "#ccffcc", boxPoints: ["Engagement & Alignment of key stakeholders", "Prioritize Interventions", "Resource allocation & time lines"], width: 260 },
          { text: "Deploy", color: "#99cc00", boxPoints: ["Roll out", "Executional steps",], width: 260 },
          { text: "Evaluate", color: "#ff5252", boxPoints: ["Review outcome against agreed objectives", "Seek feedback"], width: 260 },
        ].map((step, index) => (
          <div 
            key={index} 
            className={`min-h-[250px] flex flex-col sm:block pt-5 justify-between w-full sm:w-auto ${index !== 0 ? 'sm:-ml-[30px] ml-2' : 'ml-4'}`}  
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <BlueArrow 
              text={step.text} 
              color={step.color} 
              boxPoints={step.boxPoints} 
              width={step.width || 800
              
              }
              flatTail={step.flatTail || false} 
            />
          </div>
        ))}
      </div>

    <br />
    <br />
      <div className="absolute bottom-[-1.7vw] right-[1.5vw]">
        <img src={logo2} className="hidden sm:block h-[5vw]" alt="Company Logo" />
      </div>
    </div>
  );
};

export default HowWePlay;



