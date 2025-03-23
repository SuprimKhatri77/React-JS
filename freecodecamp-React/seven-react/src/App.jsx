import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import jokeData from '../jokeData'

function App() {
  const [count, setCount] = useState(0)
  // const names = ["cristiano","ramos","vini","mbappe","rodrygo","bellingham"]
  return (
    <>
     {/* <ul>
      {names.map((name)=>(
        <li style={{
          fontSize: "24px",
          fontWeight: "700",
          listStyle: "none"
        }}> {name} </li>
      ))}
     </ul> */}

     <main>
      {jokeData.map((joke,index)=>(
        <div key={index}>
        <h2>Setup: {joke.setup} </h2>
        <p>Punchline: {joke.punchline}  </p>
        </div>
      ))}
     </main>
    </>
  )
}

export default App
