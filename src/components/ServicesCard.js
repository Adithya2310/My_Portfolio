import React from 'react'
import Image from 'next/image';
import design from "../../public/design.png";


const ServicesCard = ({img,h3,p,h4,n1,n2,n3}) => {
  return (
    <div className='text-center bg-slate-200 shadow-lg p-10 rounded-lg my-10 flex-1 dark:bg-white'>
    <div className='flex justify-center'>
        <Image className='mb-8' src={img} alt="design" width="100" height="100"/>
    </div>
        <div className='dark:text-black'>
        <h3 className=' text-lg font-medium mt-4 mb-2' >{h3}</h3>
        <p className='mt-5 lg:px-0 leading-7'>{p}</p>
        <h4 className='py-3 text-gray-700'>{h4}</h4>
        <p className=' text-teal-500'>{n1}</p>
        <p className=' text-teal-500'>{n2}</p>
        <p className=' text-teal-500'>{n3}</p>
        </div>
    </div>
  )
}

export default ServicesCard;