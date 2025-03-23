import React from 'react'
import globe from "../assets/globe.png"

function Header() {
  return (
    <header className="font-['Inter',Arial,sans-serif]">
        <nav className='flex bg-orange-600 rounded-t-2xl m-1 items-center justify-around py-5'>
          <div className='flex gap-3 items-center'>
            <img src={globe} alt="globeImage" className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]" />
            <h1 className='text-white lg:text-xl'>My travel journal</h1>
          </div>
        </nav>
    </header>
  )
}

export default Header