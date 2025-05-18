import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const RelatedProduct = ({category}) => {
    const [relatedProduct, setRelatedProduct] = useState([])

    const { products } = useContext(ShopContext)

    const related = products.filter((product)=> product.category.toLowerCase() === category.toLowerCase())

    useEffect(()=> {
       setRelatedProduct(related.slice(0,4))
    }, [])

  return (
     <div className='mt-5 border-b-shadow-md'>
      <h1 className='text-5xl px-5 pb-5'>Exclusive Collections</h1>

      <div className='flex'>
        {relatedProduct.length > 0 ? (
          relatedProduct.map((product)=> (
            <div key={product.Id} className='flex flex-col gap-6 overflow-hidden w-[300px] p-4'>
               
               <div >
                <Link to={'/product/${product._id}'}>
                <img src={product.image[0]} width={200} height={200} />
                </Link>
               </div>
               <div className='flex flex-col justify-center items-center font-bold '>
                 <h3>{product.name}</h3>
                 <p>${product.price}</p>
               </div>

            </div>

          ))
        ) : (
          <p>No product is found in the exclusive collection</p>
        )}
      </div>
      
    
    </div>
  )
}

export default RelatedProduct
