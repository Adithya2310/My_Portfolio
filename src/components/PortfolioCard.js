import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PortfolioCard = ({title,description,codeLink,liveLink,pic}) => {
  return (
    <div className='group relative py-12 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
        <Image className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-100 py-8 rounded-lg' src={pic} alt="portfolio" layout='responsive' height="1000" width="20"/>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className='absolute inset-0 flex translate-y-[110%] lg:translate-y-[57%] flex-col items-center justify-center px-2 md:px-8 lg:px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
          <h3 className='lg:text-3xl text-2xl font-bold text-white'>{title}</h3>
          <p className='mt-2 text-gray-200'>{description}</p>
          <div className='flex justify-evenly my-5 gap-10'>
            <Link href={codeLink}>
              <button className=' cursor-pointer rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>Code</button>
            </Link>
            <Link href={liveLink}>
              <button className=' cursor-pointer rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>Live</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default PortfolioCard