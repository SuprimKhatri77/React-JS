import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");
  
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-3xl px-3 py-2'>
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer inline-flex items-center justify-center min-w-20'
              style={{backgroundColor: "red"}} 
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer inline-flex items-center justify-center min-w-20'
              style={{backgroundColor: "green"}} 
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer inline-flex items-center justify-center min-w-20'
              style={{backgroundColor: "blue"}} 
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer inline-flex items-center justify-center min-w-20'
              style={{backgroundColor: "white"}} 
              onClick={() => setColor("white")}
            >
              White
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer inline-flex items-center justify-center min-w-20'
              style={{backgroundColor: "purple"}} 
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer inline-flex items-center justify-center min-w-20'
              style={{backgroundColor: "yellow"}} 
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer inline-flex items-center justify-center min-w-20'
              style={{backgroundColor: "pink"}} 
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer inline-flex items-center justify-center min-w-20'
              style={{backgroundColor: "black"}} 
              onClick={() => setColor("black")}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;