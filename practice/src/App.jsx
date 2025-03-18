import React,{ useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='h-screen w-screen' style={{backgroundColor: color}}>
      <div className="flex justify-center items-end h-full">
      <div className='w-4/5 bg-white mb-5 py-4 px-5 rounded-4xl flex gap-3 items-center justify-center'>
      {["red","blue","yellow","green","pink","black","purple"].map((col)=>(
        <button key={col} className='py-1 px-3 outline-none rounded-2xl' style={{backgroundColor: col, color: col === "black" ? "white": "black"}}
        onClick={ ()=> setColor(col) }>
          {col.charAt(0).toUpperCase() + col.slice(1)}
        </button>
      ))}
      </div>
      </div>

    </div>
    </>
  )
}

export default App
