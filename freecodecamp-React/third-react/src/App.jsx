import { useState } from 'react'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen bg-gray-700 flex flex-col font-['Inter',Arial]">
    <Header />
    <MainContent />
    <div className='flex md:mx-[180px] gap-5 '>
    <Card userName={'slash'} description={'This is a description using props.'} />
    <Card userName={'splash'} description={'This is the second description.'} />
    </div>
    </div>
  )
}

export default App
