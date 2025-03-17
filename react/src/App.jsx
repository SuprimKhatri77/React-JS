import React,{ useState } from "react";
import TestFunction from "./Test"

function App() {
  let [counter, setCounter] = useState(15)
  
  const addValue = () => {
    if(counter < 20){

      counter = counter + 1;
      setCounter(counter);
    }
  }
  const decreaseValue = () => {
    if(counter > 0){
      counter = counter - 1; 
      setCounter(counter)
    }
  }
  return (
    <>
    <TestFunction />
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <br/>
    <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
