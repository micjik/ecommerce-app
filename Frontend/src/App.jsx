import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Promotional from './components/Promotional'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Order from './pages/Order'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from './pages/Register'

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
          path: '/product:id',
          element:<Product/>
        },
        {
          path: '/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
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
