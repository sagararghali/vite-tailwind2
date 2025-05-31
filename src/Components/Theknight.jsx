import React from 'react'
import Navbar from './Navbar'
import { PiPlayPauseFill } from "react-icons/pi";
import { MdOutlineFavorite } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaRegPlayCircle } from "react-icons/fa";
import Recommend from './Recommend';


import { FaSquareXTwitter } from "react-icons/fa6";



export default function Movie1() {
  return (
 <>

    <div className='bg-green-500'>
     
<Navbar title="Comic World"/>

        
      <div className= "h-screen bg-[url('the-dark-knight-original.jpg')] bg-cover ">
      <div className=" h-screen bg-gradient-to-b from-green-500/0 to-green-500/100 opacity-100">
      <div className='flex justify-center'>
     <div className='text-white  mt-80'>
     <button><FaRegPlayCircle size={70} /></button>
     </div>
     </div>
      <div className="flex ml-32">
      <div className='grid mt-[50px]'>
       
       <div className=" w-[180px] h-[270px] bg-cover bg-center bg-[url('e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg')]"></div>
       
       <div className='flex justify-between'>
        <button className='h-8 w-20 rounded bg-blue-800 text-white flex justify-center items-center'> <BiLike />
        Like</button>
        <button className='h-8 w-20 rounded bg-white flex justify-center items-center'><BiSolidDislike />
        Dislike</button>
       </div>

       </div>

      <div className=' p-2 mt-[40px] ml-10'>
        <div className=' flex justify-between'>
            <button className='flex gap-2 rounded-xl p-2 font-bold bg-green-300 hover:bg-green-500 '> <PiPlayPauseFill size={25}/>
            Watch now</button>
            <button className='flex gap-2 rounded-xl p-2 font-bold bg-white  hover:bg-gray-300'> <MdOutlineFavorite size={25} />
            Add to favorite</button>

        </div>
        <div className='p-5 ml-2 text-3xl font-bold text-white opacity-100 '> The Dark Knight</div>
        <div className='flex space-x-6'>
            <button className='p-2 rounded-xl bg-white text-xl'>Trailer</button>
            <button className='p-2 font-bold  text-white border-4  rounded-xl'>HD</button>
            <button className='font-bold text-lg '>IMDB:?</button>

        </div>
        <p className='mt-3 text-white'>The Godfather is a 1972 American epic gangster film[2] directed by Francis Ford Coppola, <br/>who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel.</p>
        <div className='mt-2 flex gap-6'>
                <ul className='font-bold  text-white'>
                <li>Directed By: Francis Ford Coppola</li>

                    <li>Released: March 24, 1972 (United States)</li>
                    <li>Starring:	
Marlon Brando,
Al Pacino,
James Caan,
Richard Castellano<br/>
Robert Duvall,
Sterling Hayden,
</li>


                </ul>
            <ul className='font-bold  text-white'>
            <li>Running time:	175 minutes</li>
<li>Language:	English</li>
<li>Budget:	$6–7.2 million</li>
<li>Box office:	$250 – 291 million</li>
                </ul>
        </div>
      </div>
     
      </div>  
    </div> 
      </div>
<div className='flex justify-center'>
<div className='grid gap-2 place-items-center mt-40 p-2 bg-green-400 rounded h-30 w-full mr-60 ml-60'>
    <div>If current server doesn't work please try other servers below.</div>
    <div className='p-2 flex gap-40'>
        <button className='flex items-center gap-3 bg-white p-3 rounded-xl hover:bg-gray-300'> <PiPlayPauseFill size={25}/><div>server <br/><strong>upcloud</strong></div></button>
        <button className='flex items-center gap-3 bg-white p-3 rounded-xl hover:bg-gray-300'> <PiPlayPauseFill size={25}/><div>server <br/><strong>megacloud</strong></div></button>
    </div>
</div>
</div>
<p className='flex justify-center p-4 text-lg '>Share Through: </p>
<div className='flex gap-8 justify-center items-center'>
<button> <FaFacebook size={40}  /></button>
<button> <FaSquareXTwitter size={40}/></button>
<button> <FaInstagramSquare size={40}/></button>
<button> <FaWhatsappSquare size={40}/></button>
<button> <FaTelegram size={40}/></button>


</div>

<Recommend topic="You may also like:"/>
      </div>
    
 </>
  )
}
