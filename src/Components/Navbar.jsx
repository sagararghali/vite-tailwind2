import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
export default function Navbar(props) {
  return (
    <>
   {/* bg-gradient-to-r from-purple-400 via-gray-500  to-red-500 */}
    <div className=' bg-gray-800 rounded-lg flex item-center justify-between'>
    <div className=" text-green-300 p-6  font-bold text-3xl mr-[150px] glow-text">{props.title}</div>
    <div className='flex justify-evenly '>
    <ul className=' text-orange-200  space-x-12 mt-6 mr-10 relative hidden md:flex '>
       <Link to="/"> <li className='hover:text-green-200  hover:underline text-lg font-medium hover:text-2xl transition-text duration-200 '>Home</li></Link>
        <Link to="/aboutpage"><li className='hover:text-green-200  hover:underline text-lg font-medium hover:text-2xl transition-text duration-200 '>About</li></Link>
        <Link to="/blogspage"><li className='hover:text-green-200  hover:underline text-lg font-medium hover:text-2xl transition-text duration-200 '>Blogs</li></Link>
       <Link to="/contactpage"> <li className='hover:text-green-200  hover:underline text-lg font-medium hover:text-2xl transition-text duration-200 '>Contact</li></Link>
       <Link to="/servicespage"> <li className='hover:text-green-200  hover:underline text-lg font-medium hover:text-2xl transition-text duration-200 '>Services</li></Link>
    </ul>
    </div>
    <div className='flex space-x-3'>
    <div className="p-5 mt-5 overflow-hidden w-[60px] h-[40px] hover:w-[270px] bg-gray-500 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300 hidden md:flex">
  <div className="flex items-center justify-center fill-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Isolation_Mode"
      data-name="Isolation Mode"
      viewBox="0 0 24 24"
      width="22"
      height="22"
    >
      <path
        d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
      ></path>
    </svg>
  </div>
  <input
    type="text"
    className="outline-none text-[16px] bg-transparent w-full text-white font-normal px-4"
  />
 
</div>
<div>
        <Link to="/loginpage"> 
              <button className="font-bold flex items-center justify-center mt-5 mr-8 w-20 h-10 p-4 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white relative hidden md:flex">Login  </button>
       </Link>
       </div>
       </div>
        
       
    <div className=' md:hidden mt-3 ml-0 '>
    <Sidebar/>
    </div>
    </div>
    </>
  )
}

