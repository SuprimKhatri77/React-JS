import React,{ useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  // let myObj = {
  //   username:"77slashx"
  // }

  return (
    <>
    <div className='min-h-full h-screen bg-black flex flex-col gap-2 justify-center items-center '>
      <h1 className='text-xl px-5 py-3 bg-indigo-700 text-gray-200 rounded-xl w-fit '>Tailwind css with Vite</h1>
      <div class="flex gap-5">

      <Card username="slash" description="This is card one." btnText="view profile" />
      <Card username="flash" description="This is card two." />
      </div>
    </div>
    </>
  )
}

export default App
