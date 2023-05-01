import React from 'react'
import Image from 'next/image'
import pic1 from "../../public/portfolio1.png"
import pic2 from "../../public/portfolio3.png"
import pic3 from "../../public/portfolio2.png"
import Link from 'next/link'



const Portfolio = () => {
  return (
    <section className='py-20'>
    {/* portfolio1 */}
        <div className='text-center  mx-10'>
            <h2 className=' font-medium my-6 text-3xl'>Portfolio</h2>
            <p className=' leading-8 text-gray-800 mb-6 dark:text-gray-400 '>This section showcases my recent projects as a <span className=' text-teal-500'>web developer</span>, including websites, <span className=' text-teal-500'>web applications</span> that I have developed. <br /> From designing beautiful and intuitive interfaces to implementing complex <span className=' text-teal-500'>functionalies</span> using modern <span className=' text-teal-500'>web technologies</span>, I have worked on a variety of projects</p>
            <div>
              <div className='group relative py-12 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                <Image className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-100 py-8 rounded-lg' src={pic1} alt="portfolio" layout='responsive' height="1000" width="20"/>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className='absolute inset-0 flex translate-y-[100%] lg:translate-y-[57%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                  <h3 className='text-3xl font-bold text-white'>Ecommerce Webapp</h3>
                  <p className='mt-2 text-gray-200'>A react ecommerce website Deer Store inspired by ReinDeers which are known for thier adaptable nature and resilience. This website aims at creating a hassle free experience for users to buy electronics using technologies like Context API, React and Axios along with features like Product Filters and User Authentication.</p>
                  <div className='flex justify-evenly my-5 gap-10'>
                    <Link href="https://github.com/Adithya2310/Complete_Ecommerce_Website">
                      <button className=' cursor-pointer rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>Code</button>
                    </Link>
                    <Link href="https://deerstore.vercel.app/">
                      <button className=' cursor-pointer rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>Live</button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* portfolio2 */}
              <div className='group relative py-12 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                <Image className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-100 py-8 rounded-lg' src={pic2} alt="portfolio" layout='responsive' height="1000" width="20"/>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className='absolute inset-0 flex translate-y-[100%] lg:translate-y-[55%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                  <h3 className='text-3xl font-bold text-white'>MovieFlix WebApp</h3>
                  <p className='mt-2 text-gray-200'>A web app that is a movie discovery platform utilizing Next.js to provide a fast and seamless user experience. It is integrated with the Netflix API through RapidAPI to fetch data on the latest and most popular movies available on the streaming platform. </p>
                  <div className='flex justify-evenly my-5 gap-10'>
                    <Link href="https://github.com/Adithya2310/Movie_Flix">
                      <button className=' cursor-pointer rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-black'>Code</button>
                    </Link>
                    <Link href="/">
                      <button className=' cursor-pointer rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-black '>Live</button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* portfolio3 */}
              <div className='group relative py-12 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                <Image className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-100 py-8 rounded-lg' src={pic3} alt="portfolio" layout='responsive' height="1000" width="20"/>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className='absolute inset-0 flex translate-y-[100%] lg:translate-y-[55%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                  <h3 className='text-3xl font-bold text-white'>SpeachToText Converter</h3>
                  <p className='mt-2 text-gray-200'>An WebApp that provides users with the ability to convert spoken words into written text with ease. This app is designed to allow users to speak into a microphone, and the app will transcribe their speech into text format in real-time</p>
                  <div className='flex justify-evenly my-5 gap-10'>
                    <Link href="https://github.com/Adithya2310/SpeachToText">
                      <button className=' cursor-pointer rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-black'>Code</button>
                    </Link>
                    <Link href="https://speachconvertion.netlify.app/">
                      <button className=' cursor-pointer rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-black '>Live</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio