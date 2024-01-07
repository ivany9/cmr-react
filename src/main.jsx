
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCLiente,{action as actionNuevoCliente} from './pages/NuevoCLiente'
import Index,{loader as ClientesLoader} from './pages/Index'
import React from 'react'
import ErrorPAge from './components/ErrorPage'
import EditarCliente,{loader as EditarClienteLoader,action as actionEditarCliente} from './pages/EditarCliente'
import {action as eliminarClienteAction} from './components/Cliente'





const router=createBrowserRouter([
{

  path:'/',
  element: <Layout/>,
children:[
  {

    index:true,
    element:<Index/>,
    loader:ClientesLoader,
    errorElement:<ErrorPAge/>
  }
  ,

{

  path:'/clientes/nuevo',
  element:<NuevoCLiente/>,  
  action:actionNuevoCliente,
  errorElement:<ErrorPAge/>
},
{
  path:'/clientes/:clienteId/editar',
  element:<EditarCliente/>,
  loader:EditarClienteLoader,
  action:actionEditarCliente,
  errorElement:<ErrorPAge/>
},
{
 path:'/clientes/:clienteId/eliminar',
 action:eliminarClienteAction,
 errorElement:<ErrorPAge/>


}
]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
