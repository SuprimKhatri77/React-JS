import React, { useState } from 'react'
import Die from './Die'

function Main() {

    const [value, setValue] = useState(generateAllNewDice())

    function generateAllNewDice(){
        // const newDice = []
        
        // for(let i = 0; i < 11; i++){
        //     const randomNumber = Math.floor(Math.random() * 6 + 1)
        //     newDice.push(randomNumber)
        //     console.log(randomNumber);
        // }
        // console.log(newNumbersArr);
        // return newDice

        return new Array(10).fill(0).map(() => Math.floor(Math.random() * 6 + 1))
        
        
    }
    // console.log(generateAllNewDice())
    // console.log(value);

    const diceNumbers = value.map((item,index) => (
        <Die key={index} value={item} />
    ))
    
  return (
    <div className='min-h-screen w-screen bg-blue-950 text-blac2 py-5 flex'>
        <div className='bg-gray-200 mx-5 flex-grow rounded-xl'>
        <div className='grid grid-cols-5 place-content-center gap-x-4 gap-y-5  h-full max-w-[300px] mx-auto'>
        
            {diceNumbers}
        </div>
        </div>
    </div>
  )
}

export default Main
