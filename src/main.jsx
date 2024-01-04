
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCLiente,{action as actionNuevoCliente} from './pages/NuevoCLiente'
import Index,{loader as ClientesLoader} from './pages/Index'
import React from 'react'



const router=createBrowserRouter([
{

  path:'/',
  element: <Layout/>,
children:[
  {

    index:true,
    element:<Index/>,
    loader:ClientesLoader
  }
  ,

{

  path:'/clientes/nuevo',
  element:<NuevoCLiente/>,  
  action:actionNuevoCliente,
}
]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
