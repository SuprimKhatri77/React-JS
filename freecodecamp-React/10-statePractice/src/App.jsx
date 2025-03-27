import { useState } from 'react'
import Count from './components/Count';

function App() {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  }
  const decreaseCount = () => {
    if(count > 0 ){
      setCount(prevCount => prevCount - 1);
    }
  }

  return (
    <>
     <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={decreaseCount}> -</button>
                <Count 
                count={count}
                />
                <button className="plus" aria-label="Increase count" onClick={increaseCount}> + </button>
            </div>
        </main>
    </>
  )
}

export default App
