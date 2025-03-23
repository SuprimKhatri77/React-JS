import React from 'react'
import marker from "../assets/marker.png"

function Entry({img,title,country,googleMapsLink,date,text}) {
  return (
    <main  className="m-1 font-['Inter', Arial, sans-serif]">
        <section className='py-10 px-8 flex gap-5 justify-center items-center'>
        <div>
            <img src={img.src} alt={img.alt} className='w-auto  max-w-[150px] h-[200px] rounded-md ' />
        </div>
        <div className='flex flex-col gap-4 py-3 px-1 max-w-[475px] '>
            <div className='flex gap-2 items-center'>
                <img src={marker} alt="marker" className='w-[20px] h-[25px]' />
                <h2 className='mt-1 uppercase tracking-[5px] text-sm '> {country} </h2>
                <a href={googleMapsLink} target='_blank' className='text-sm text-gray-400 underline hover:no-underline'>View on Google Maps</a>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-bold text-2xl'> {title} </h1>
                <p> {date} </p>
                <p> {text} </p>
            </div>
        </div>
        </section>
    </main>
  )
}

export default Entry