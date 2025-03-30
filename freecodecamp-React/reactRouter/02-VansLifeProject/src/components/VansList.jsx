import React,{use,useState, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../server'
import '../global.css'


function VansList() {
    const [vans, setVans] = useState([])
    const [status, setStatus] = useState(false)

    useEffect(() => {
        fetch("/api/vans")
        .then(response => response.json())
        .then(data => {
            console.log("Data recieved: ", data);
            setVans(data.vans)
        setStatus(true)
    })
        .catch(error => {
            console.log('error fetching data: ', error)
            setStatus(true)
        })

    },[])
  return (
    <>
    <div className="!w-full overflow-hidden font-['Poppins',Arial]">

    <Navbar />
    <section className='h-screen w-full flex flex-col gap-5 mt-5 mx-5'>
        <div className='flex flex-col gap-3'>
        <h1 className='text-2xl font-bold'>Explore our vans options</h1>
        <ul className='flex !mr-5 gap-2 items-center'>
        <li className='bg-amber-200 py-1 px-3 rounded-md font-medium text-sm'>Simple</li>
            <li className='bg-amber-200 py-1 px-3 rounded-md font-medium text-sm'
            >Luxury</li>
            <li className='bg-amber-200 py-1 px-3 rounded-md font-medium text-sm'
            >Rugged</li>
            <li>Clear filters</li>
        </ul>
        </div>
            {/* {
                status ? (
                    vans.map((van) => (
                        <div key={van.id}>
                        <img src={van.imageUrl} alt={van.name} className='w-[300px] h-[300px]' />
                        </div>
                    ))
                    
            ) 
            : (
            <p>Fetching data....</p>
            )
            } */}
    </section>
    <Footer />
</div>
    </>
  )
}

export default VansList