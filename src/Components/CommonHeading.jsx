import React from 'react'

const CommonHeading = (props) => {
  return (
    <>

      <h2 className='bg-[#006699] ml-[5vw] text-xl sm:text-[2vw] pl-[4vw] text-white relative z-10 flex items-center h-[3vw]' style={{ fontFamily: "Calibri" }}>
        {props.title}
      </h2>

      <div className='w-[50vw] absolute top-[4vw] left-0 h-[0.30vw] bg-[#969696]'></div>


      <div className='w-[0.30vw] absolute top-0 left-[3vw] h-full bg-[#969696]'></div>
    </>
  )
}

export default CommonHeading;









