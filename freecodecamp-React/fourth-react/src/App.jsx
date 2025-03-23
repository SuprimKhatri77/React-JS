import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Entry from './components/Entry'

function App() {
  // const[date, setDate] = useState(0)

  // setInterval(()=>{
  //   setDate(new Date().toLocaleString())
  // },1000)


  return (
    <>
     <Header />
     <Entry />
     {/* <p> {date} </p> */}
    </>
  )
}

export default App
