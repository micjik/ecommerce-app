import React from 'react'
import hero from "../asset/woman1.png"
import { FaShippingFast } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

const Hero = () => {
  return (
    
    <div className='m-5 bg-gray-200 rounded-xl flex'>
        <div className='flex flex-col gap-7 p-5'>
            <p className='text-2xl pt-5 pb-5'>Unleash Your Unique Style</p>
          <h1 className='text-6xl tracking-wider'>With Collections That Lets Your Style and Fashion Speak</h1>
          <p className='pt-[40px] text-3xl'>Shop the latest trends and classic essentials from our collection</p>
        </div>
        <div>
            <img src={hero} alt="" className='' />
        </div>
        </div>
        
    
  )
}

export default Hero
