import React from 'react';
import chefClaude from '../assets/chef-claude-icon.png'

function Header() {
  return (
    <header className="font-['Inter'] py-3 shadow-md">
        <nav className='flex items-center justify-center gap-2'>
            <img src={chefClaude} alt="checClaude"  className="h-[50px]"/>
            <h1 className=' text-xl lg:text-2xl'>Chef Claude</h1>
        </nav>
    </header>
  )
}

export default Header