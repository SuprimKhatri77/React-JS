import React from 'react'

function Die({dice,isHeld,hold,id}) {
  return (
   
        <button className={`shadow-[0px_2px_2px_rgba(0,0,0,0.15)] cursor-pointer rounded-md  h-[50px] w-[50px] flex justify-center items-center font-medium font-['Inter',Arial] text-2xl
        ${isHeld ? "bg-green-400" : "bg-white"}
        `}
        onClick={()=> hold(id)}
        >
            {dice}
        </button>
  )
}

export default Die