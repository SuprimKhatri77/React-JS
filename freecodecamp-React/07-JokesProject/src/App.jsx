import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import jokeData from '../jokeData'

function App() {
  // const names = ["cristiano","ramos","vini","mbappe","rodrygo","bellingham"]
  const [isShown, setIsShown] = useState({})
  const toggleShown = (index) => {
    setIsShown((prevShown) => ({
      ...prevShown,
      [index]: !prevShown[index]
    }))
    // console.log(isShown);    
  }
  
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
        { isShown[index] &&  <p>Punchline: {joke.punchline}  </p>}
        <button onClick={() => toggleShown(index)}>
          {
            isShown[index] ? "Hide punchline" : "Show punchline"
          }

        </button>
        <hr />
        </div>
      ))}
     </main>
    </>
  )
}

export default App
