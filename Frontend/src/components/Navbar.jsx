import React from 'react'
import { FaSearch, FaUser } from "react-icons/fa";
import ShoppingBasketicon from "@mui/icons-material/ShoppingBasket"
import { Badge } from '@mui/material';
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <div className='h-[80px] bg-[#E8ECD7] flex justify-between items-center p-6'>
       <Link to='/'>
      <div className='md:pl-[20px] md:text-2xl'>
        <h1>M$shop</h1>
      </div>
      </Link>
      <div className='flex items-center m-2'>
        <input type="text" placeholder='search'
         className='md:w-[400px] border-lg border-solid border-[#1F4529] p-3 outline-none border-2 rounded-xl mr-[-30px]' />
        <span className='md:text-2xl text-[#1F4529] cursor-pointer'><FaSearch /></span>
      </div>
      
      <div className='flex items-center md:m-2 sm:m-1'>
        <Link to='/cart'>
        <div className="md:mr-3 cursor-pointer">
          <Badge badgeContent={2} color={"success"}>
          <ShoppingBasketicon/>
          </Badge>
           
        </div>
        </Link>
         <Link to='/login'>
        <div className="flex items-center border-[#1F4529] lg:border-2 cursor-pointer">
          <span className="font-semibold">Login</span>
          <FaUser/>
        </div>
        </Link>

      </div>
    </div>
    </div>
  )
}

export default Navbar
