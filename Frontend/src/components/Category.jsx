import React from 'react'
import child from "/child.jpg";
import men from "/sweattop.jpg";
import women from "/women.jpg";
import polo from "/wears4.jpg";


const Category = () => {
  return (
    <div className='flex justify-evenly m-4 gap-6'>
      <div className='h-400px shadow bg-gray-50'>
       <img src={child} alt="" className='w-[400px] h-[300px]'/>
        <span className='flex items-center justify-center font-semibold'>shoe</span>
      </div>
      <div className='h-400px shadow bg-gray-50'>
       <img src={men} alt="" className='w-[400px] h-[300px]'/>
        <span className='flex items-center justify-center font-semibold'>Shoe</span>
      </div>
      <div className='h-400px shadow bg-gray-50'>
       <img src={women} alt="" className='w-[400px] h-[300px]'/>
        <span className='flex items-center justify-center font-semibold'>polo</span>
      </div>
      <div className='h-400px shadow bg-gray-50'>
       <img src={polo} alt="" className='w-[400px] h-[300px]'/>
        <span className='flex items-center justify-center font-semibold'>Shoe</span>
      </div>
      

    </div>
      
    
  )
}

export default Category
