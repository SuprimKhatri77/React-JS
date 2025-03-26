import { useState } from 'react'
import './App.css'


function App() {
  // const [unreadMessages, setUnreadMessages] = useState(["a","b","c"])

  const [messages, setMessages] = useState(["a","b","c"])

  return (
    <>
      {/* { unreadMessages.length > 0 ? (

        <h1> You have {unreadMessages.length} unread messages </h1>
      ) : (
      <p>You have 0 unread messages.</p>
      )
      } */}

      {
        messages.length === 1 ? 
        <h1>You have 1 unread message.</h1>
        : messages.length > 1 ? 
        <h1>You have {messages.length} unread messages. </h1>
        : <h1>You are all caught up!</h1>
      }
    </>
  )
}

export default App
