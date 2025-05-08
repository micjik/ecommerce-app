import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    
      
    <div className='flex justify-center mt-[20px] shadow-md w-[70%] h-[70vh]'>
    <form className='w-[50%]'>
       <h2 className='font-bold mt-5 mb-5 text-center'>Register</h2>
       <div className='flex flex-col'>
       <label htmlFor="">Full Name</label>
       <input type="text" className='shadow-md border p-2 rounded border-solid mb-5 outline-none cursor-pointer'/>
       </div>

       <div className='flex flex-col'>
       <label htmlFor="">Email</label>
       <input type="email" className='shadow-md border p-2 rounded border-solid mb-5 outline-none cursor-pointer'/>
       </div>
       
       <div className='flex flex-col'>
       <label htmlFor="">Password</label>
       <input type="password" className='shadow-md border p-2 rounded border-solid mb-5 outline-none cursor-pointer' />
       </div>
        <button className='bg-[#1F4529] text-white flex justify-center p-2 w-full mt-4 rounded font-bold text-2xl'>sign up</button>
         
         <span className='block pt-3 font-semibold'>Already has an account</span>
                    <Link to='/login' className='font-bold'>Sign-in</Link>
    </form>
      
    
  </div>
  )
}

export default Register
