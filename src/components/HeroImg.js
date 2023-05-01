import React from 'react'
import Image from 'next/image'
import heroImg from "../../public/dev-ed-wave.png";

const HeroImg = () => {
  return (
    <div className='my-10 bg-gradient-to-b from-teal-500 to-teal-200 rounded-full h-60 w-60 lg:h-80 lg:w-80 flex justify-center items-center overflow-hidden'>
        <Image className=' ml-4 h-60  w-60 lg:h-80 lg:w-80' src={heroImg} alt="HeroImg"  objectFit="cover"></Image>
    </div>
  )
}

export default HeroImg