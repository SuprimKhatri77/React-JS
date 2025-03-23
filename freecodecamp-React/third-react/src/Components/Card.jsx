import React from 'react'

export default function Card({userName, description}) {
  return (
    <div class=" md:w-fit mt-5 bg-lime-700 shadow-2xl text-gray-300 py-4 px-7 rounded-2xl cursor-pointer hover:bg-lime-800 transition-all duration-300 ease-in-out">  
        <h2>UserName: {userName} </h2>
        <p>User Description: {description} </p>
    </div>
  )
}
