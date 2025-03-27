import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [starWarsData, setStarWarsData] = useState([])
  const [count, setCount] = useState(0)


  useEffect(()=>{
    fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => setStarWarsData(data["results"]))
        .catch(error => console.log("Error fetching data: ", error)
        )
    
  },[count])

  return (
    <>
    <p>The count is  {count} </p>
    <button onClick={ ()=> setCount(prevCount => prevCount + 1)}>Add</button>
      <div style={{
        fontSize: "30px",
        color: "white",
      }}> 
      {
        starWarsData.map((data,index)=>(
          <p key={index} > {data.name} </p>
        ))
      }
       </div>
    </>
  )
}

export default App
