import React from 'react'
import Image from 'next/image'
import pic1 from "../../public/portfolio1.png"
import pic2 from "../../public/portfolio3.png"
import pic3 from "../../public/portfolio2.png"
import Link from 'next/link'
import PortfolioCard from './PortfolioCard'



const Portfolio = () => {
  return (
    <section className='py-20'>
    {/* portfolio1 */}
        <div className='text-center  mx-10'>
            <h2 className=' font-medium my-6 text-3xl'>Portfolio</h2>
            <p className=' leading-8 text-gray-800 mb-6 dark:text-gray-400 '>This section showcases my recent projects as a <span className=' text-teal-500'>web developer</span>, including websites, <span className=' text-teal-500'>web applications</span> that I have developed. <br /> From designing beautiful and intuitive interfaces to implementing complex <span className=' text-teal-500'>functionalies</span> using modern <span className=' text-teal-500'>web technologies</span>, I have worked on a variety of projects</p>
            <div>
              <PortfolioCard 
                title="Ecommerce Webapp"
                description="A react ecommerce website that aims to create a hassle free experience for users to buy electronics using technologies like Context API, React and Axios along with features like Product Filters and User Authentication."
                codeLink="https://github.com/Adithya2310/Complete_Ecommerce_Website"
                liveLink="https://deerstore.vercel.app/"
                pic={pic1}
              />
              {/* portfolio2 */}
              <PortfolioCard 
                title="MovieFlix WebApp"
                description="A web app that is a movie discovery platform utilizing Next.js to provide a fast and seamless user experience. It is integrated with the Netflix API through RapidAPI to fetch data on the latest and most popular movies available on the streaming platform. "
                codeLink="https://github.com/Adithya2310/Movie_Flix"
                liveLink="https://movie-flix-rho.vercel.app/"
                pic={pic2}
              />
              {/* portfolio3 */}
              <PortfolioCard 
                title="SpeachToText Converter"
                description="An WebApp that provides users with the ability to convert spoken words into written text with ease. This app is designed to allow users to speak into a microphone, and the app will transcribe their speech into text format in real-time"
                codeLink="https://github.com/Adithya2310/SpeachToText"
                liveLink="https://speachconvertion.netlify.app/"
                pic={pic1}
              />
            </div>
        </div>
    </section>
  )
}

export default Portfolio