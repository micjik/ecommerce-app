import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Promotional from './components/Promotional'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Order from './pages/Order'
import Product from './pages/Product'

const App = () => {

  const Layout = () => {
    return(
      <div>
        <Promotional/>
        <Navbar/>
        <Outlet/>
        <Footer/>

      </div>
    )
  }
  
   const router = createBrowserRouter([
     {
      path:'/',
      element:<Layout/>,
      children:[

        {
          path:'/',
          element: <Home/>
        },
  
        { 
          path:'/cart',
          element: <Cart/>
        },

        {
          path:'/order',
          element: <Order/>
        },

        {
          path: '/product',
          element:<Product/>
        }
      ]
     }

     
    


   ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
