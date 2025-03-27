import React,{useState} from 'react'
// import data from '../data'

export default function Pad({bgColor,isOn,toggleFunction,id}) {
  
  return (
        <button
        style={{
          backgroundColor: bgColor
        }}
        className={isOn ? "on" : undefined}
        onClick={() => toggleFunction(id)}
        ></button>
  )
}
