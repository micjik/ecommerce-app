import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Promotional from './components/Promotional'
import Navbar from './components/Navbar'
import Productdetails from './pages/Productdetails'
import Login from './pages/Login'
import Cart from "./pages/Cart"
import { ToastContainer } from 'react-toastify';



const App = () => {

  const Layout = () => {
    return(
      <div>
        <ToastContainer/>
        <Promotional/>
        <Navbar/>
        <Outlet/>
        

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
          path: '/product/:productId',
          element:<Productdetails/>
        },
        {
          path: '/login',
          element:<Login/>
        },
        
        {
          path:'/category/:category',
          element:<Collection/>
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
