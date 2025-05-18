import React, { useEffect } from 'react'
import { useContext } from 'react';
import { AiTwotoneDelete } from "react-icons/ai";
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  const [cartData, setCartData] = useState([])
  const { products, currency, cartItems, updateQuantity} = useContext(ShopContext)

   useEffect(()=> {
    if( products === 0)
      return
    const tempData = Object.entries(cartItems).flatMap(([itemId, sizes])=>
    Object.entries(sizes).filter(([, quantity])=> quantity > 0).map(([size, quantity])=> ({

      _id: itemId,
      size,
      quantity

    }))
  )
      setCartData(tempData)
   }, [cartItems, products])
  return (

    
    <div className='m-10'>

      {cartData.map((item, index) =>{
        const productData = products.find(product=> product._id === item._id)
        return(
          <div>
            <img src={productData.image[0]} alt=""/>
            <p>{productData.name }</p>
            
            
          </div>
        )
      })}
      <h2>Shopping Cart</h2>

      <div className='flex justify-between mb-5'>
        <div className='w-[70%] shadow-md mt-6'>
          <h3 className='p-6'>Your Items</h3>
          <div className='flex justify-around'>
            
            <img src="" alt="" height={150} width={150} className='mt-10' />
             <div className='pt-10'>
            <p className='font-semibold'>Women luvly court shoes sandal low heel pop shoe</p>
            <p className='mb-5'>Bridal Wedding Party </p>
              <button className='bg-red-400 rounded-full font-bold p-1.5 mx-2 '>-</button>
              <span>1</span>
              <button className='bg-green-400 rounded-full font-bold p-1 mx-2'>+</button>
            </div>
             <div className='pt-10 flex flex-col'>
               <span className='font-bold'>$30</span>
               <button className='text-red-500'><AiTwotoneDelete/></button>
             </div>
          </div>
          <div className='flex justify-around'>
            
            <img src="" alt="" height={150} width={150} className='mt-10' />
             <div className='pt-10'>
            <p className='font-semibold'>Women luvly court shoes sandal low heel pop shoe</p>
            <p className='mb-5'>Bridal Wedding Party </p>
            <button className='bg-red-400 rounded-full font-bold p-1.5 mx-2 '>-</button>
              <span>1</span>
              <button className='bg-green-400 rounded-full font-bold p-1 mx-2'>+</button>
            </div>
             <div className='pt-10 flex flex-col'>
               <span className='font-bold'>$30</span>
               <button className='text-red-500'><AiTwotoneDelete/></button>
             </div>
          </div>
          <div className='flex justify-around'>
            
            <img src="" alt="" height={150} width={150} className='mt-10' />
             <div className='pt-10'>
            <p className='font-semibold'>Women luvly court shoes sandal low heel pop shoe</p>
            <p className='mb-5'>Bridal Wedding Party </p>
            <button className='bg-red-400 rounded-full font-bold p-1.5 mx-2 '>-</button>
              <span>1</span>
              <button className='bg-green-400 rounded-full font-bold p-1 mx-2'>+</button>
            </div>
             <div className='pt-10 flex flex-col'>
               <span className='font-bold'>$30</span>
               <button className='text-red-500'><AiTwotoneDelete/></button>
             </div>
          </div>
             <button className='bg-red-500 text-white rounded mx-12 my-8 p-2'>Clear cart</button>

        </div>
        <div className='w-[25%] shadow-md mt-10'>
           <h3 className='mx-14 font-semibold my-6'>Order Summary</h3>
           <div className='flex flex-col gap-3'>
            <div className='flex justify-evenly'>
              <p>SubTotal:</p>
             <span>$200</span>
            </div>
            <div className='flex justify-evenly'>
            <p>Shipping:</p>
            <span>$20</span>
            </div>
            <div className='flex justify-evenly'>
            <p className='mx-[-2px]'>Total:</p>
            <span className='block ml-8'>$220</span>
            </div>

             <button className='bg-red-400 text-white font-bold mx-4 rounded'>Proceed to checkout</button>
           </div>
           

        </div>
      </div>

    </div>
  )
}

export default Cart
