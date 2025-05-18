import { createContext, useState } from "react"
import { product } from "../asset/assets"
import {  toast } from 'react-toastify';



 const ShopContext = createContext()

 const currency = '$'

const ShopContextProvider = ({children}) => {
    const [products, setProducts] = useState(product)
    const [searchTerm, setSearchTerm] = useState("")
    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId, size) => {
        if(!size) {
            toast.error("Please choose a size")
            return
        }
        const updatedCart = {...cartItems}
        if(!updatedCart[itemId]) {
             updatedCart[itemId] = {[size]:1}
        }else {
            updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1
        }

        setCartItems(updatedCart)
        console.log(`product added to cart: ItemId - ${itemId}, size - ${size}`)
        toast.success("product added to cart")

    }

    //function to get the amount of items in the cart

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]) {
           if(cartItems[items][item] > 0 ) {
            totalCount += cartItems[items][item]
           }
            }

            }
            return totalCount

    }

    //FUNCTION TO UPDATE QUANTITY

    const updateQuantity = (itemsId, size, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[item][size] = quantity

        setCartItems(cartData)
    }

    //FUNCTION TO GET THE CART TOTAL
    const getCartAmount = () => {
        let totalAmount = 0

        for(const itemId in cartItems){
            const itemInfo = products.find((product)=> product.id === itemId)

            if(itemInfo) {
                for(const size in cartItems[itemId]){
                    totalAmount += itemInfo.price * cartItems[itemId][size]
                }
            }
        }
         return totalAmount
    }


    const updateSearchTerm = (term) => {
        setSearchTerm(term)
    }

    


    return(
        <ShopContext.Provider value={{products, setProducts, searchTerm, currency,
         updateSearchTerm, addToCart, getCartCount, updateQuantity, getCartAmount}}>
            {children}
        </ShopContext.Provider>
    )
}

export {ShopContext, ShopContextProvider} 