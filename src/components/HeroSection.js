import React from 'react'
import {BsLinkedin,BsTwitter,BsGithub} from "react-icons/bs"

import HeroImg from './HeroImg'

const HeroSection = () => {
  return (
    <section className='lg:mx-20 mx-10 my-20'>
    <div className='text text-center'>
       <h1 className='mt-10 mb-8 font-semibold text-teal-500 text-4xl  lg:text-6xl'>
            Adithya N G
        </h1>
        <h2 className='text-2xl font-medium my-3 m font-normal md:text-3xl lg:pb-5'>
            Web Developer
        </h2>
        <p className='text-gray-800 my-3 leading-8 dark:text-gray-400'>
          Dedicated and experienced web developer skilled in all aspects of web development, including front-end design, back-end development and database management, My expertise includes proficiency in React, Node.js, MongoDb and a range of popular web development frameworks and technologies.
        </p>
    </div>
    <div className='my-10 lg:my-14 text-2xl lg:text-3xl flex justify-center gap-20'>
        <a href="https://www.linkedin.com/in/adithya-ng-baba34226/" target='_blank'>
          <BsLinkedin />
        </a> 
        <a href="https://github.com/Adithya2310" target='_blank'>
          <BsGithub /> 
        </a>
        <a href="https://twitter.com/_Adithya_n_g" target='_blank'>
          <BsTwitter />
        </a>
    </div>
    <div className='flex justify-center'>
    <HeroImg />  
    </div>
    </section>
  )
}

export default HeroSection;