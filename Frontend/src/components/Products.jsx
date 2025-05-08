import React from 'react'
import productData from '../product.js'
import Product from './Product.jsx'

const Products = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
        {productData.map((product)=> (
            <Product id={product.id}
              img={product.image}
              des={product.description}
              price={product.price}/>
        ))}
      
    </div>
  )
}

export default Products
