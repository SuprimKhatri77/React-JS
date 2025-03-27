import { useState } from 'react'
import padData from './data.js'
import Pad from './components/Pad.jsx'

function App() {

  const[pads,setPads] = useState(padData)

  function toggleIsOn(id){;
    
    // console.log(id);
    setPads(prevPads =>
      prevPads.map(pad =>
        pad.id === id ? { ...pad, on: !pad.on } : pad
      )
    );
    
  }

  const btnElement = pads.map((pad) => (
    <Pad 
    key={pad.id}
    id={pad.id}
    bgColor={pad.color}
    isOn={pad.on}
    toggleFunction={toggleIsOn}
    />
  ))
  return (
    <main>
    <div className='pad-container'>

      {btnElement}
      </div>
    </main>
  )
}

export default App
