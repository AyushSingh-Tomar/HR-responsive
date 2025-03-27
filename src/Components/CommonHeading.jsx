import React from 'react'

const CommonHeading = (props) => {
  return (
    <>
      <h2 
        className='bg-[#006699] ml-[5vw] text-lg sm:text-xl md:text-2xl pl-[4vw] text-white relative z-10 flex items-center h-12 sm:h-[3vw]'
        style={{ fontFamily: "Calibri" }}
      >
        {props.title}
      </h2>

      <div className='w-full max-w-[50vw] absolute top-[4vw] left-0 h-[1px] sm:h-[0.30vw] bg-[#969696]'></div>
      <div className='w-[1px] sm:w-[0.30vw] absolute top-0 left-[3vw] h-full bg-[#969696]'></div>
    </>
  )
}

export default CommonHeading;









