import { useState } from 'react'
import Header from './components/Headers'
import Body from './components/Body'

function App() {
  const [userName, setUserName] = useState("slash")

  return (
    <>
      <Header 
      userName={userName}
      />
      <Body 
      userName={userName}
      />
    </>
  )
}

export default App
