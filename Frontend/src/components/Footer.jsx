import React from 'react'
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (

    <footer>
      <div className='flex flex-col  justify-between bg-gray-200 pt-20'>
    <div className='flex justify-evenly'>
      <div>
          <h1>M$shop</h1>
          <p>Make life easy for everyone</p>
      </div>
      <div>
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
      </div>
        <div>
          <h2>Contact Us</h2>
          <ul>
            <li>90 thorner close Nottingham England</li>
            <li>phone (234)830448517</li>
            <li>Email:micjik50@gmail.com</li>
          </ul>
        </div>
          
    </div>
    <div className='border-t-1 mt-10 mx-10 shadow text-center'>
            <p>@2025 M$shop all rights reserved</p>
            <div className='flex justify-center gap-2 py-5'>
            <span><FaInstagram /></span>
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            </div>
            
          </div>
    </div>

       
        
       </footer>
      
  )
}

export default Footer
