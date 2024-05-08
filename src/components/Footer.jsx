import React, { useContext } from 'react'
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { MainContext } from '../context/Context';

export default function Footer() {
const {scrollToTop}= useContext(MainContext)
  return (
    <div className='setbg shadow-lg border-t border-[black]'>
     
      <div className='w-full flex justify-between px-10 mx-auto md:max-w-[1400px] text-xl py-2  text-center h-[70px] items-center text-white'>
    <div>  Blog-<span className='text-[red]'>st</span>  </div>  
    <div>Stay Connected with Blogst</div>
        <FaRegArrowAltCircleUp onClick={scrollToTop} className='text-3xl cursor-pointer animate-bounce'/>

      </div>
    </div>
  )
}
