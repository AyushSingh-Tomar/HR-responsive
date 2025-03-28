import image23 from '../assets/image23.png';
import React from 'react';
import CommonHeading from './CommonHeading';
import logo2 from '../assets/logo2.png';

const LeaderShipCoachingAndDevelopment = () => {
  const content = {
    left1: [
      '1. FMCG (Global)',
      '2. Multi Engineering International Company',
      '3. Large EPC Group',
      '4. Infotech',
      '5. Management consulting and professional services (Global)',
    ],
    left2: [
      'Establish ground rules: Setting ethical guidelines for operational and professional standards ',
      'Establish Trust and Coaching presence with Coachee',
      'Communicate effectively : direct communication, active listening and questioning.',
      'Facilitating learning and results.',
      'Feedback Meetings.',
    ],
    right1: [
      'Managing interpersonal / functional conflicts.',
      "Managing Superior's expectations.",
      'Building assertiveness.',
      'Enhancing Networking skills',
      'Prioritization of work and achieving results',
      'Dealing with difficult and demanding people',
      'Improving Self confidence',
      'Delivering good plans for key global meetings',
      'Managing multiple responsibilities while maintaining peace of mind.',
      'Managing Self esteem / Fear of failure.',
      'Managing multiple accountabilities and being at peace with self.',
      'Influencing others to enhance commitment and accountabilities.',
      'Building High performance team.',
      'Being in control of personal behavior',
      'Managing Transition.',
      'Resolving business challenges.',
      'Developing entrepreneurial mindset',
      'Delivering high performance',
    ],
    right2: [
      'Senior Management - CEOs, Business & Functions.',
      ' 20-30 years of experience.',
      'Engineering and Management Education.',
      'High-potential managers',
    ]
  };

  return (
    <div className='relative mt-8 px-4 md:px-8 pb-16' style={{ fontFamily: 'Calibri, sans-serif' }}>
      <h2 className='bg-[#006699] ml-4 md:ml-[5vw] text-lg md:text-[2vw] pl-4 md:pl-[4vw] text-white relative z-10 flex items-center h-12 md:h-[3vw]'>
        Leadership Coaching & Development
      </h2>
      
      <div className='flex flex-col md:flex-row items-center md:items-start w-full h-auto gap-6 mt-6 md:mt-[5%]'>
        <div className='w-full md:w-1/3 p-4 md:p-6 text-left'>
          <h2 className='font-bold text-lg md:text-xl'>Experienced, Certified & Trained Coaches</h2>
          <p className='mt-2 font-semibold'>Scope and Clients:</p>
          <p className='mt-1 text-sm md:text-base'>
            Scope and Clients: Assignments completed with 9-12 sessions over a year per coachee. Each session for about 2.5 hrs or more. Clients Include:
          </p>
          <ul className='mt-2 list-disc pl-4 text-sm md:text-base'>
            {content.left1.map((point, index) => (
              <li key={index} className='mb-1'>{point}</li>
            ))}
          </ul>

          <ul className='mt-4 list-disc pl-4 text-sm md:text-base'>
            {content.left2.map((point, index) => (
              <li key={index} className='mb-1'>{point}</li>
            ))}
          </ul>
        </div>

        <div className='w-full md:w-1/3 flex justify-center'>
          <img 
            src={image23} 
            alt='Leadership Coaching' 
            className='w-3/4 md:w-full h-auto object-contain rounded-lg'
          />
        </div>

        <div className='w-full md:w-1/3 p-4 md:p-6 text-left'>
          <h2 className='font-bold text-lg md:text-xl'>Issues - Illustrative:</h2>
          <ul className='mt-2 list-disc pl-4 text-sm md:text-base'>
            {content.right1.map((point, index) => (
              <li key={index} className='mb-1'>{point}</li>
            ))}
          </ul>

          <p className='mt-4 font-semibold'>Target Audience:</p>
          <ul className='mt-2 list-disc pl-4 text-sm md:text-base'>
            {content.right2.map((point, index) => (
              <li key={index} className='mb-1'>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <img src={logo2} className='hidden sm:block absolute bottom-4 right-4 w-12 md:w-[5vw] h-auto' alt='Company Logo' />
    </div>
  );
};

export default LeaderShipCoachingAndDevelopment;




