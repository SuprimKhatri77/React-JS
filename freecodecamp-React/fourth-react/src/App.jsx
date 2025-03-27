import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Entry from './components/Entry'
import mountFuji from "./assets/mount-fuji.jpg"
import datas from "./data"


function App() {
  // const[date, setDate] = useState(0)

  // setInterval(()=>{
  //   setDate(new Date().toLocaleString())
  // },1000)
  const entryElements = datas.map((entry,index) => {
    return ( <Entry 
    key={entry.id}  
    {...entry}
    />
  )
  })


  return (
    <>
     <Header />
     {entryElements}
     {/* <p> {date} </p> */}
    </>
  )
}

export default App
