import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useParams } from 'react-router-dom'

function VansDetail() {
    const [van, setVan] = useState([])
    const params = useParams()
    // console.log(params.id);
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(response => response.json())
            .then((data) => {
                setVan(data)
                console.log(data);
                
            })
            .catch(error => console.log("error fetching data: ",error))
    },[params.id])
    
  return (
    <>
    <Navbar />
    <Footer />
    </>
  )
}

export default VansDetail