import { useState,useCallback,useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const updateCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);

  },[])

  useEffect(()=>{
    console.log(count);
    
  },[count])

  return (
    <>
      <h1>Counter: {count} </h1>
      <button onClick={updateCount}>Increment</button>
      <button
      onClick={ () => setCount(0) }
      >
        Reset
        </button>
    </>
  )
}

export default App
