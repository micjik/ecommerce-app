import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import RelatedProduct from '../components/RelatedProduct'

const Productdetails = () => {
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState("")
  const [size, setSize] = useState("")
  const { products, currency, addToCart} = useContext(ShopContext)

  const productId = useParams()

  const fetchProductData = async() => {
    products.map((item)=> {
      if(item.id === productId) {
        setProductData(item)
        setImage(image[0])
      }
    })
  }
    useEffect(()=> {
      fetchProductData()
    },[productId, products])

  return 
     productData ? (
     
    <div>
      
        <div>
       {productData.image.map((item, index)=> (
        <img onClick={()=> setImage(item)} src={item} key={index} alt="" />
       ))}
      </div>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h1>{productData.name}</h1>
          <hr />
          <p>{currency}{productData.price}</p>
          <p>{productData.description}</p>
           <div>
            <p>Select Size</p>
             <div>
              {productData.sizes.map((item, index)=> {
                <button onClick={()=> setSize(item)}>{item}
                className={`size-button ${item === size ? 'active' : ""}`}</button>
              })}
             </div>
           </div>
           <hr />
           <div>
            <p>Free delivery</p>
            <p>Seamless secure payment</p>
            <p>Several payment option available</p>
           </div>
             <div>
              <button onClick={()=>addToCart(productData._id, size)}>Add to cart</button>
             </div>
        </div>
          <div>
            <b>Description</b>
            <p>Review</p>

          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellendus, inventore magni recusandae eaque qui eius, enim harum vero architecto earum illum quaerat ex aliquid veniam saepe consectetur dolor consequuntur.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut officia assumenda soluta impedit. Veniam provident aliquid corporis delectus enim assumenda, consequuntur itaque nulla obcaecati in, quam dignissimos eum. Illum, asperiores!</p>
          </div>
      
      
      <RelatedProduct category = {productData.category}/>
    
 </div> 
):(
  <p>No product match</p>
)
}

export default Productdetails
