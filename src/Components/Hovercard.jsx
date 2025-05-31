import React from 'react'

import disney from './imagess/disney.png'
import marvel from './imagess/marvel.png'
import nationalG from './imagess/nationalG.png'
import pixar from './imagess/pixar.png'
import starwar from './imagess/starwar.png'
 
import starwarV from './vdos/star-wars.mp4'
import disneyV from './vdos/disney.mp4'
import marvelV from './vdos/marvel.mp4'
import nationalGeographicV from './vdos/national-geographic.mp4'
import pixarV from './vdos/pixar.mp4'


function Hovercard() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },

    ]
  return (
    <div className='grid grid-cols-2 md:grid-cols-5 rounded-2xl bg-gray-800 mt-20  gap-2 md:gap-5 p-2 px-5 md:px-16 '>
        {productionHouseList.map((item)=>(
            <div className='m-2 border-[2px] border-gray-600
            rounded-lg hover:scale-110 hover:border-gray-300 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-600
            '>
                 <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-90'/> 
                <img src={item.image} className='w-full z-[1] opacity-100' /> 
               
            </div>
        ))}
    </div>
  )
}

export default Hovercard;