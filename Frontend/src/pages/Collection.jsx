import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import men from "../asset/men-wear.png"
import kids from "../asset/kid-banner.png"
import women from "../asset/women-banner.png"
import { product } from '../asset/assets'



const Collection = () => {

  const { category } = useParams()
  const { products, searchTerm } = useContext(ShopContext)

  const filteredProduct = products.filter((product)=> (product.category.toLowerCase() === category.toLocaleLowerCase()) && product.name.toLocaleLowerCase().includes(searchTerm. toLocaleLowerCase())) 

  
  const bannerImages = {
    Men: men,
    Women: women,
    Kids: kids
  }
  return (
    <div>
      <div>
        {bannerImages[category] ? (
          <img src={bannerImages[category]}/>
        ):<p>No product found for category</p>}
      </div>

      <div className='flex'>
              {filteredProduct.length > 0 ? (
                filteredProduct.map((product)=> (
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

export default Collection
