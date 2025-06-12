import React from 'react'
import Navbar from './Components/Navbar'
import Homebody from './Components/Homebody';
export default function App() {
  return (
    <>
    <div className=" min-h-screen bg-black bg-cover bg-center  bg-[url('/background-gradient-green-tones_23-2148382072.avif')] ">
    <Navbar title=" Comic World"/>
    <Homebody/>
    </div>
    </>
  )
}
