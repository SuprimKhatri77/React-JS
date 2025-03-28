import React from 'react'

function Die({value}) {
  return (
   
        <button className="shadow-[0px_2px_2px_rgba(0,0,0,0.15)] cursor-pointer rounded-md bg-white h-[50px] w-[50px] flex justify-center items-center font-medium font-['Inter',Arial] text-2xl">
            {value}
        </button>
  )
}

export default Die