import { useNavigate,Form,useActionData,redirect } from "react-router-dom"
import Formulario from "../components/Formulario"
import Error  from "../components/Error"
import { agregarCliente } from "../data/Clientes"



export async function action ({request}) {
 
   
    const formData=await request.formData() 
     const data=Object.fromEntries(formData)
     const email= formData.get('email')  
     let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
     const errores=[]
     
       if(!regex.test(email)){
        errores.push('email no valido')   
       }
      
     if(Object.values(data).includes('')){
         errores.push('Todos los campos son Obligatorios')
       }
     

         if(Object.keys(errores).length){
          return errores
       
       }
        
       
       await agregarCliente(data)
       


     return redirect('/')
}





function NuevoCLiente() {

const navigate=useNavigate()
const  errores=useActionData()

console.log(errores)

  return (
    <>
    <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
    <p className="mt-3">Registra un Nuevo Cliente</p>
    <div  className="flex justify-end">
            <button
             className="bg-blue-800 text-white px-3 py-1 font -bold uppercase"
             onClick={()=>navigate('/')}
            >
                    
            Volver

            </button>
            </div>
            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
                      {errores?.length  && errores.map((error,i)=>
                        <Error key={i}>
                            {error}
                                  
                                                     
                          </Error>
                      )}
               
               <Form
                      method='post'
                      noValidate
               > 
            <Formulario/>
             <input 
             type="submit"
             className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
             value='Registrar Cliente'

              /> 
              </Form>
             
             
             
             
            
             

            </div>

    
    </>
  )
}

export default NuevoCLiente