import React, { useState } from 'react'
import Die from './Die'
import {nanoid} from 'nanoid'

function Main() {

    const [dice, setDice] = useState( () =>  generateAllNewDice())

    // const [gameWon , setGameWon] = useState(false)

   const gameWon = dice.length > 0 &&  
                    dice.every(die => die.isHeld) && 
                    dice.every(die => die.dice === dice[0].dice)

    function generateAllNewDice(){
        // const newDice = []
        
        // for(let i = 0; i < 11; i++){
        //     const randomNumber = Math.floor(Math.random() * 6 + 1)
        //     newDice.push(randomNumber)
        //     console.log(randomNumber);
        // }
        // console.log(newNumbersArr);
        // return newDice

        return new Array(10).fill(0).map(() => (
            {
                dice: Math.floor(Math.random() * 6 + 1),
                isHeld: false,
                id: nanoid()
        }))   
    }

    // console.log(generateAllNewDice());
    
    function rollDice(){
        setDice(oldDice => 
            oldDice.map(die => 
                die.isHeld ? die : {...die, dice : Math.floor(Math.random() * 6 + 1)}
            )
        )
    }

    const diceElements = dice.map((item,index) => (
        <Die key={item.id} id={item.id} dice={item.dice} isHeld={item.isHeld} hold={hold}/>
    ))
    

    function hold(id){
        // console.log(id);
        setDice(oldDice => 
            oldDice.map(die => 
                die.id === id ? {...die, isHeld: !die.isHeld} : die
            )
        )
    }

    function newGame () {
        setDice(generateAllNewDice())
        // console.log((dice));
        
    }
  return (
    <div className='min-h-screen w-screen bg-blue-950 text-blac2 py-5 flex'>
        <div className='bg-gray-200 mx-5 flex flex-col justify-center items-center gap-10 flex-grow rounded-xl py-5'>
            <div className='flex flex-col gap-3 items-center'>
            <h1 className='text-2xl font-bold'>Tenzies</h1>
            <p className='max-w-3/4 text-center font-medium text-sm'>Roll until all dice are the same. Click each die to freeze it at its current dice between rolls.</p>
            </div>
        <div className='grid grid-cols-5 place-content-center gap-x-4 gap-y-5   max-w-[300px] mx-auto'>
        
            {diceElements}
        </div>
        <button className='w-fit py-2 px-10 text-xl rounded-md text-white cursor-pointer font-bold bg-blue-700 hover:bg-blue-800 transition-all duration-300 ease-in-out' onClick={ gameWon ? newGame : rollDice}>
            { gameWon ? "New game" : "Roll"}
        </button>
        </div>
    </div>
  )
}

export default Main
