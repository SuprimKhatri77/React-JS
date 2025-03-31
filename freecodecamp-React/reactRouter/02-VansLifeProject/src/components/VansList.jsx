import React,{use,useState, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../server'
import '../global.css'
import {Link} from 'react-router-dom'


function VansList() {
    const [vans, setVans] = useState([])
    const [status, setStatus] = useState(false)

    useEffect(() => {
        fetch("/api/vans")
        .then(response => response.json())
        .then(data => {
            // console.log("Data recieved: ", data);
            setVans(data.vans)
        setStatus(true)
    })
        .catch(error => {
            console.log('error fetching data: ', error)
            setStatus(true)
        })

    },[])

    const typeColors = {
        simple: "bg-orange-400 hover:bg-orange-600",
        rugged: "bg-green-700 hover:bg-green-800",
        luxury: "bg-black"
    }

  return (
    <>
    <div className="!w-full overflow-hidden font-['Poppins',Arial]">

    <Navbar />
    <section className='min-h-screen w-full flex flex-col gap-5 lg:gap-8 my-5 mx-5'>
        <div className='flex flex-col gap-3 lg:gap-7'>
        <h1 className='text-2xl font-bold lg:text-4xl'>Explore our vans options</h1>
        <ul className='flex !mr-5 gap-2 items-center lg:gap-8 cursor-pointer'>
        <li className='bg-amber-200 py-1 lg:py-2 px-3 lg:px-5 rounded-md font-medium text-sm lg:text-lg'>Simple</li>
            <li className='bg-amber-200 py-1 lg:py-2 px-3 lg:px-5 rounded-md font-medium text-sm lg:text-lg'
            >Luxury</li>
            <li className='bg-amber-200 py-1 lg:py-2 px-3 lg:px-5 rounded-md font-medium text-sm lg:text-lg'
            >Rugged</li>
            <li className='underline text-sm lg:text-lg hover:no-underline'>Clear filters</li>
        </ul>
        </div>
        <div className='flex flex-wrap gap-5 lg:gap-10 '>

            {
                status ? (
                    vans.map((van) => (
                        <Link to={`/vans/${van.id}`} key={van.id}>
                        <img src={van.imageUrl} alt={van.name} className='w-[150px] h-[150px]
                        lg:w-[250px] lg:h-[250px] rounded-md
                        ' />
                        <div className='flex flex-col mt-5 lg:gap-4'>
                            <div className='flex justify-between'>
                            <p className='text-xs font-bold lg:text-lg'> {van.name} </p>
                            <div className='flex flex-col'>
                                <p className='text-xs font-bold lg:text-[16px]'> ${van.price} </p>
                                <p className='text-[8px] lg:text-[14px] text-gray-600'> /day</p>
                            </div>
                            </div>
                            <p className={`
                               ${typeColors[van.type] || ""}
                               text-white w-fit py-2 px-5 rounded-md text-sm lg:text-lg capitalize
                               font-medium transition-all duration-300 ease-in-out cursor-pointer
                               
                               `
                            }
                            
                            > {van.type} </p>
                        </div>
                        </Link>
                    ))
                    
            ) 
            : (
                <p>Fetching data....</p>
            )
        }
        </div>
    </section>
    <Footer />
</div>
    </>
  )
}

export default VansList