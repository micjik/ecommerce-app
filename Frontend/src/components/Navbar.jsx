import React, { useContext, useState } from 'react'
import { FaSearch, FaUser } from "react-icons/fa";
import ShoppingBasketicon from "@mui/icons-material/ShoppingBasket"
import { Badge } from '@mui/material';
import { Link, useNavigate } from "react-router-dom"
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {
  const [searchInput, setSearchInput]= useState("")
  const { updateSearchTerm, searchTerm, getCartCount} = useContext(ShopContext)

  const navigate = useNavigate()

  const handleSearch = () => {
    updateSearchTerm(searchInput)
  }

  const handleNavigate = (path) => {
    navigate(path)
  }
  return (
    <div className='flex flex-col'>
      <div className='h-[80px] bg-[#E8ECD7] flex justify-between items-center p-6'>
       <Link to='/'>
      <div className='md:pl-[20px] md:text-2xl'>
        <h1>M$shop</h1>
      </div>
      </Link>
      <div className='flex items-center m-2'>
        <input type="text" placeholder='search'
         value={searchInput}
         onChange={(e)=> setSearchInput(e.target.value)}
         className='md:w-[400px] border-lg border-solid border-[#1F4529] p-3 outline-none border-2 rounded-xl mr-[-30px]' />
        <span className='md:text-2xl text-[#1F4529] cursor-pointer' onClick={handleSearch}><FaSearch /></span>
      </div>
      
      <div className='flex items-center md:m-2 sm:m-1'>
        <Link to='/cart'>
        <div className="md:mr-3 cursor-pointer">
          <Badge badgeContent={getCartCount()} color={"success"}>
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
      <div className='flex justify-center gap-5 mt-8 border-b'>
        <p className='font-bold text-2xl' onClick={()=> handleNavigate('/category/Men')}>Men</p>
        <p className='font-bold text-2xl'onClick={()=> handleNavigate('/category/Women')}>Women</p>
        <p className='font-bold text-2xl' onClick={()=> handleNavigate('/category/Kids')}>Kids</p>

      </div>
    </div>
  )
}

export default Navbar
