import React from 'react'

const Product = ({img, des, price}) => {
  return (
    <div>
         <img src={img} alt="" className='h-[300px] w-[300px]' />
         <h2 className='text-center'>{des}</h2>
         <span className='block text-center'>$ {price}</span>
      
      </div>
    
  )
}

export default Product
