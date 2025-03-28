import { useState } from 'react'
import './App.css'
import WindowsTracker from './components/WindowsTracker'

function App() {
  const [show, setShow] = useState(true)

  function toggleShow(){
    setShow(prevShow => !prevShow)
  }
  return (
    <>
    <button style={{
      border:"1px solid white",
      marginBlock:"20px"
    }} onClick={toggleShow}>Toggle WindowTracker</button>
    {
      show &&
      <WindowsTracker />
    }
    </>
  )
}

export default App
