import React from 'react'
import ServicesCard from './ServicesCard'
import design from "../../public/design.png"
import code from "../../public/code.png"
import API from "../../public/consulting.png"

const Services = () => {
  return (
    <div className='text-center mx-10'>
        <h2 className=' font-medium my-6 text-3xl'>Services</h2>
        <p className=' leading-8 text-gray-800 mb-6 lg:px-5 dark:text-gray-400'>As a web developer, I specialize in creating custom websites that are tailored to meet the unique needs of my <span className="text-teal-500">clients</span>. Whether you need a <span className="text-teal-500">simple brochure website</span> or a <span className="text-teal-500">complex e-commerce website</span>, I have the expertise to deliver a website that not only looks great but also is interactive. With a focus on <span className="text-teal-500">user experience</span>, I work closely with my clients to understand their goals and create a website that is <span className="text-teal-500">reactive</span> and helps them achieve those goals all along.</p>
        {/* <p className=' leading-8 text-gray-800 mb-6 lg:px-5 dark:text-gray-400'>Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for<span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span> and collaborated with talanted people to create digital products
              for both business and consumer use.
        </p> */}
        <div className="lg:flex gap-10">
        <ServicesCard
            img={design} 
            h3="Frontend Development"
            p="Creating a visually appealing and user-friendly websites based on the client's needs and preferences." 
            h4="Technology Used"
            n1="React"
            n2="Next"
            n3="Tailwind"  
        /> 
        <ServicesCard
            img={API} 
            h3="API Integration"
            p="Integrating third-party APIs into the website or application to extend its functionality and capabilities." 
            h4="Technology Used"
            n1="Axios"
            n2="REST"
            n3="Rapid API"  
        /> 
        <ServicesCard
            img={code} 
            h3="Backend Development"
            p="Building backend using Frameworks like Node.js and Express to handle database and user authentication." 
            h4="Technology Used"
            n1="Node.js"
            n2="Express"
            n3="MongoDB"  
        /> 
        </div>
    </div>
  )
}

export default Services