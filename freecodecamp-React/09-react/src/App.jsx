import { useState } from 'react';
import './App.css'


function App() {

  const handleClick = () => {
    console.log('you clicked on a button');
    
  }
  
  const hoverEvent = () => {
    console.log('Sheesh, I was hovered!');
    
  }

  const ingredients = ["Chicken", "Oregano", "Tomatoes"]

  // const[isImportant,setIsImportant] = useState("yes")

  // const changeAnswer = () => {
  //   setIsImportant("Heck yes!")
  // }

  // const isGoingOut = false
  // const answer = isGoingOut ? "yes" : "no"


  const[isGoingOut, setIsGoingOut] = useState(true)



  return (
    <>
    <div style={{
      height:"200px",
      width: "700px",
      background: "green",
      marginBlock: "10px",
      borderRadius: "20px",
      cursor: "pointer",
    }}
    onMouseEnter={hoverEvent}
    >

    </div>
      <button onClick={handleClick}>Click me</button>

      <ul style={{
        color: "white",
      }}>
        {ingredients.map((ingredient, index) => (
          <li key={index}> {ingredient} </li>
        ))}
      </ul>
      <h2>Is state important to know ?</h2>
      {/* <button onClick={changeAnswer}> {isImportant} </button> */}
      {/* <button> {answer} </button> */}
      {/* <button> { isGoingOut ? "yes" : "no" } </button> */}
      <button onClick={() => {
        setIsGoingOut(isGoingOut ? false : true)
      }}
      aria-label={`The current answer is ${isGoingOut ?  "yes" : "no"}. Click to change it `}
      > {isGoingOut ?  "yes" : "no"} </button>
    </>
  )
}

export default App
