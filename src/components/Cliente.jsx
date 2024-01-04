

const Cliente = ({cliente}) => {

    const{nombre, telefono, email, empresa}=cliente
  return (
      <tr className="border-b">
       < td className="p-6 text-center">
         <p className="text-2xl text-gray-800">{nombre}</p>
          <p className="mt-2">{empresa}</p>
        </td>
        <td className="p-6 text-center">
        <p className=" text-gray-600"><span className="text-gray-600 uppercase font-bold"> Email: </span>{email}</p>
        <p className=" text-gray-600"><span className="text-gray-600 uppercase font-bold"> Telefono : </span>{telefono}</p>     
        </td>
          <td className="p-6  text-center   ">
                <button 
                 type="button"
                className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs">Editar
                </button>
                <button 
                 type="button"
                className="text-red-600 hover:text-red-700  p-4 uppercase font-bold text-xs">Eliminar
                </button>
          </td>
         

      </tr>




  )
}

export default Cliente