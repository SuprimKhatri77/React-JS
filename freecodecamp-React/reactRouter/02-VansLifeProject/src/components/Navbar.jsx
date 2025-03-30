import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <header>

    <nav className="flex justify-between font-['Poppins',Arial] py-5 px-7 shadow-xl">
        <Link to='/' className=' text-xl md:text-2xl font-bold'>#VANLIFE</Link>
        <div className='flex gap-4 text-sm md:text-xl'>
            <NavLink to='/about' className={({isActive}) => 
            `${isActive ? 'underline' : 'no-underline'}`
          }>About</NavLink>
            <NavLink to='/vans' className={({isActive}) => 
            `${isActive ? 'underline' : 'no-underline'}`
          }>Vans</NavLink>
        </div>
    </nav>
          </header>
  )
}

export default Navbar