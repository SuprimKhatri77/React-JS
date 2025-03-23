import React from 'react'
import mountFuji from "../assets/mount-fuji.jpg"
import marker from "../assets/marker.png"

function Entry() {
  return (
    <main className='m-1'>
        <section className='py-10 px-8 flex gap-5 items-center'>
        <div>
            <img src={mountFuji} alt="mountFuji" className='w-auto  max-w-[150px] h-[200px] rounded-md ' />
        </div>
        <div className='flex flex-col gap-4 bg-red-700 '>
            <div className='flex gap-2 items-center'>
                <img src={marker} alt="marker" className='w-[15px] h-[19px] align-middle' />
                <h2 className='uppercase tracking-[5px]'>Japan</h2>
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" target='_blank'>View on Google Maps</a>
            </div>
            <div>
                <h1>Mount Fuji</h1>
                <p>12 Jan, 2021 - 24 Jan, 2021</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
        </section>
    </main>
  )
}

export default Entry