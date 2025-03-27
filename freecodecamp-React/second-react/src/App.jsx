import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <MainContent />
    <Footer />
    </>
  )
}

export default App
