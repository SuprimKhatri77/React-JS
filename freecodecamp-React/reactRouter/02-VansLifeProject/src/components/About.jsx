import React from 'react'
import Navbar from './Navbar'
import heroAbout from '../assets/about-hero.png'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <Navbar />
    <section className='max-w-[95%] h-screen mx-auto my-3 flex flex-col lg:flex-row gap-8 lg:justify-between lg:items-center'>
      <img src={heroAbout} alt="heroAbout" className='lg:h-[400px] lg:w-[500px] lg:order-2 rounded-2xl object-cover object-center' />
      <div className='flex flex-col gap-8 px-5'>

      <h2 className='font-bold text-xl md:text-4xl'>Don't squeeze in a sedan when you could relax in a van.</h2>
      <div className='text-xs md:text-[16px] text-gray-800'>
      <p>Our mission is to enliven your road trip with perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a htich.</p>
      <p>(High costs extra☺️)</p>
      </div>
      <p className='text-xs md:text-[16px] text-gray-800'>Our team is full of  vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

      <div className='flex flex-col gap-4 bg-orange-200 p-5 rounded-xl'>
        <div>
        <p className='font-bold md:text-2xl'>Your destination is awaiting.</p>
        <p className='font-bold md:text-2xl'>Your van is ready.</p>
        </div>
        <Link to='/vans' className='text-white bg-black py-2 px-5 w-fit rounded-md font-bold text-xs cursor-pointer md:text-[16px] hover:scale-105 transition-all duration-300 ease-in hover:rounded-sm'>Explore our vans</Link>
      </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default About