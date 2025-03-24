import React from 'react'

function Main() {
  return (
    <main className="my-20 font-['Inter'] mx-5 md:mx-0 ">
        <form className='flex flex-col mx-[10px]  md:flex-row justify-center items-center gap-5'>
        <input type="text" placeholder='e.g. oregano' className='border-gray-400 border-2 h-10 w-[250px] sm:w-[400px] px-4 rounded-md shadow-md' aria-label='Add ingredient' />
        <button className="bg-black text-white py-2 cursor-pointer rounded-md px-5 text-nowrap font-['Inter']">+ Add ingredient</button>
        </form>
    </main>
  )
}

export default Main