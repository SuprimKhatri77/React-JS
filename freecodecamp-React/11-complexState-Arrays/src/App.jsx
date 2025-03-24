import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array as an empty array
     * 
     * Don't worry about fixing `addFavoriteThing` quite yet.
     */
  //  const myFavoriteThings = []
  const [myFavoriteThings, setMyFavoriteThings] = useState([])
   const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
   "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
   const thingsElements = myFavoriteThings.map((thing,index) => <p key={index}>{thing}</p>)
 
   function addFavoriteThing() {
     // We'll work on this next, nothing to do here yet.
     setMyFavoriteThings(prevFavThings => [...prevFavThings,allFavoriteThings[prevFavThings.length]])
   }

  return (
    <>
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
    </>
  )
}

export default App
