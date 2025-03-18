import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState(() => {
    return localStorage.getItem("bgColor") || "olive"; 
  });

  useEffect(() => {
    localStorage.setItem("bgColor", color); 
  }, [color]);

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-3xl px-3 py-2'>
            {["red", "green", "blue"].map((col) => (
              <button
                key={col}
                className='flex items-center justify-center outline-none px-4 py-2 rounded-full text-white shadow-lg cursor-pointer'
                style={{ backgroundColor: col }}
                onClick={() => setColor(col)}
              >
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
