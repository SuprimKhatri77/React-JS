import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='h-screen  w-3/4 mx-auto flex flex-col justify-center items-center'>
    <div className='flex flex-col gap-3'>
      <div>
     <img src={reactLogo} alt="react-logo" className='w-[80px]' />
      </div>
      <h1 className='text-3xl font-bold'>Fun facts about React!</h1>
      <ul className='flex flex-col ml-5'>
        <li className='text-xl font-medium list-disc'>was first released in 2013</li>
        <li className='text-xl font-medium list-disc'>was originally created by   <strong>
          <i>
        Suprim Khatri
          </i>
        </strong>
        </li>
        <li className='text-xl font-medium list-disc'>Has well over 200k stars on github</li>
        <li className='text-xl font-medium list-disc'>Is maintained by meta</li>
        <li className='text-xl font-medium list-disc'>Powers thousand of enterprise apps, including mobile apps</li>
      </ul>
    </div>
    </main>

    </>
  )
}

export default App
