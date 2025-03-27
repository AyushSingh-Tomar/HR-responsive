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
      className="relative flex flex-col items-center justify-center gap-6" 
      style={{ width, fontFamily: 'Calibri' }}
    >
      <div className="relative" style={{ width, height }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width={width} 
          height={height} 
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
          className="absolute top-1/2 left-1/2 flex items-center justify-center w-full h-full text-black font-bold text-lg"
          style={{ 
            transform: 'translate(-50%, -50%)', 
            pointerEvents: 'none',
            fontFamily: 'Calibri'
          }}
        >
          {text}
        </div>
      </div>

      <div 
        className="p-4 text-black font-bold text-lg"
        style={{ 
          width: width * 0.8, 
          backgroundColor: color, 
          borderRadius: '0 0 10px 10px', 
          textAlign: 'left',
          height: deskheight, 
          fontFamily: 'Calibri'
        }}
      >
        <ul className="list-disc pl-6" style={{ fontFamily: 'Calibri' }}>
          {boxPoints.map((point, index) => (
            <li key={index} className="text-base font-normal " style={{ fontFamily: 'Calibri' }}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlueArrow;