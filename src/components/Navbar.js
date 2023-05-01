import React from 'react'
import { BsMoonStarsFill } from "react-icons/bs";


const Navbar = ({darkMode,setdarkMode}) => {
  return (
    <div className='py-10 mx-10'>    
    <nav className='flex justify-between mx-10'>
    <h1 className='mt-5 font-burtons'>Developed By Adithya N G</h1>
    <ul className='flex align-middle'>
      <li><BsMoonStarsFill onClick={()=>setdarkMode(!darkMode)} className='mt-3 cursor-pointer font-burtons' size={23}/></li>
      <li className='ml-10 px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 cursor-pointer'>
      <a href="">Resume</a> </li>
    </ul>
  </nav></div>
  )
}

export default Navbar