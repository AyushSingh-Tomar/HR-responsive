import React from 'react';

const BlueArrow = ({ 
  width = 700, 
  height = 60,  
  color = 'blue',
  text = 'Arrow Text',       
  boxPoints = ['Point 1', 'Point 2', 'Point 3'] ,
  deskheight = 200, 
  flatTail = false 
}) => {
  return (
    <div 
      className="relative flex flex-col items-center justify-center gap-6 w-full max-w-[700px] px-4 sm:px-6 md:px-8" 
      style={{ fontFamily: 'Calibri' }}
    >
      <div className="relative w-full" style={{ height }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="100%" 
          height="100%" 
          viewBox={`0 0 ${width} ${height}`}
        >
          <polygon 
            points={flatTail 
              ? `${width * 0.1},0 ${width * 0.9},0 ${width},${height / 2} ${width * 0.9},${height} ${width * 0.1},${height} ${width * 0.1},${height / 2}`
              : `${width * 0.1},0 ${width * 0.9},0 ${width},${height / 2} ${width * 0.9},${height} ${width * 0.1},${height} ${width * 0.2},${height / 2}`
            } 
            fill={color} 
            stroke="black"  
            strokeWidth="2"
          />
        </svg>

        <div 
          className="absolute top-1/2 left-1/2 flex items-center justify-center w-full h-full text-black font-bold text-base sm:text-lg"
          style={{ 
            transform: 'translate(-50%, -50%)', 
            pointerEvents: 'none',
          }}
        >
          {text}
        </div>
      </div>

      <div 
        className="p-4 text-black font-bold text-sm sm:text-base w-full max-w-[560px]"
        style={{ 
          backgroundColor: color, 
          borderRadius: '0 0 10px 10px', 
          textAlign: 'left',
          height: 'auto', 
          minHeight: deskheight, 
        }}
      >
        <ul className="list-disc pl-4 sm:pl-6">
          {boxPoints.map((point, index) => (
            <li key={index} className="text-xs sm:text-sm md:text-base font-normal">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlueArrow;