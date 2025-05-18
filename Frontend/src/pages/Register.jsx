import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'
import { userRequest } from '../requestMethods'
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [username, setUserName] = useState("")
  const [ email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSignUp = async(e) => {
    e.preventDefault()
    try{
      await userRequest.post("/auth/signup", {username, email, password})
      navigate('/login')

    }catch(error){
       if(error.response && error.response.data.message){
        toast.error(error.response.data.message)
    }else{
      
      toast.error("An unexpected error occur. Try again")
    }
  }
}
  return (
      <div className="flex items-center justify-center mt-[5%]">
         <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    
      
    <div className='flex justify-center mt-[20px] shadow-md w-[70%] h-[70vh]'>
      
    <form className='w-[50%]'>
       <h2 className='font-bold mt-5 mb-5 text-center'>Register</h2>
       <div className='flex flex-col'>
       <label htmlFor="">Username</label>
       <input type="text" className='shadow-md border p-2 rounded
        border-solid mb-5 outline-none cursor-pointer'
        placeholder='example1'
        onChange={(e)=> setUserName(e.target.value)}/>
       </div>

       <div className='flex flex-col'>
       <label htmlFor="">Email</label>
       <input type="email" className='shadow-md border p-2
        rounded border-solid mb-5 outline-none cursor-pointer'
        placeholder='email@gmail.com'
        onClick={(e)=> setEmail(e.target.value)}/>
       </div>
       
       <div className='flex flex-col'>
       <label htmlFor="">Password</label>
       <input type="password" className='shadow-md border p-2
        rounded border-solid mb-5 outline-none cursor-pointer'
        placeholder='*******'
        onChange={(e)=> setPassword(e.target.value)} />
       </div>
        <button className='bg-[#1F4529] text-white flex justify-center p-2 w-full mt-4 rounded font-bold text-2xl cursor-pointer'
        onClick={handleSignUp}>sign up</button>
         
         <span className='block pt-3 font-semibold'>Already has an account</span>
                    <Link to='/login' className='font-bold'>Sign-in</Link>
    </form>
      
    
  </div>
  </div>
  )
}

export default Register
