import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Main from './pages/Main';
import Create from './components/Create'
import Listing from './components/Listing'
import Blogs from './pages/Blogs';
import Edit from './components/Edit';
import User from './pages/User';

const routers=createBrowserRouter(
  [
    {
      path:"/",
      element:<Main/>,
      children:[
        {
          path:"/",
          element:<Blogs/>
        },{
          path:"/create",
          element:<Create/>
        },{
          path:"/listing",
          element:<Listing/>
        },{
          path:"/edit/:id",
          element:<Edit/>
        }
      ]
    },
    
    {
      path:"/user",
      element:<User/>
    }
    
  ]
)

export default function App() {

  return (
  <>
<RouterProvider router={routers}/>
  </>
  )
}
