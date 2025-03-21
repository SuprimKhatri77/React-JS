import { useState } from 'react'
import MyAwesomeNavbar from './components/MyAwesomeNavbar'
import MainContent from './components/Main.Content'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyAwesomeNavbar />
      <MainContent />
    </>
  )
}

export default App
