
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCLiente from './pages/NuevoCLiente'
import Index from './pages/Index'
import React from 'react'



const router=createBrowserRouter([
{

  path:'/',
  element: <Layout/>,
children:[
  {

    index:true,
    element:<Index/>
  }
  ,

{

  path:'/clientes/nuevo',
  element:<NuevoCLiente/>  
}
]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
