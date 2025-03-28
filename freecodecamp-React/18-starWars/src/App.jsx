import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [starWarsData, setStarWarsData] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function fetchData () {
      try{
        const response = await fetch('https://swapi.dev/api/people')
        const data = await response.json()
        setStarWarsData(data["results"])
      } catch(error) {
        console.log('error fetching data: ',error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  },[])

  return (
    <>
    <p>The count is  {count} </p>
    <button onClick={ ()=> setCount(prevCount => prevCount + 1)}>Add</button>
    {
      loading ? (
        <p>Fetching data ....</p>
      ) : (

        <div style={{
          fontSize: "14px",
          color: "white",
        }}> 
      {
        starWarsData.map((data,index)=>(
          <p key={index} > {data.name} </p>
        ))
      }
       </div>
    )
        }
    </>
  )
}

export default App
