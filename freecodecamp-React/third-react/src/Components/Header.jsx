import React from 'react'
import reactLogo from "../assets/react.svg"

function Header() {
  return (
    <header className='pt-[40px] mx-5 md:min-w-3/4 md:mx-auto'>
        <nav className='flex gap-3 items-center'>
            <img src={reactLogo} alt="reactLogo" className='h-[40px]' />
            <h1 className='text-2xl text-color font-bold'>ReactFacts</h1>
        </nav>
    </header>
  )
}

export default Header