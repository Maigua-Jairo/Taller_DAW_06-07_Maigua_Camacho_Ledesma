/*

  1- Localstorage

*/

import { useEffect, useState } from "react"


const Decimo = () => {

  const [userToken, setUserToken] = useState({})

  const user = {
    name: "Byron",
    rol: "Admin",
    token:"1234***"
  }


  const obtenerToken = ()=>{
    const token = JSON.parse(localStorage.getItem("token-user"))
    setUserToken(token)
  }
  
  const limpiarToken = ()=>{
    localStorage.removeItem("token-user")
    setUserToken(null)
  }
  


  useEffect(() => {
    localStorage.setItem("token-user", JSON.stringify(user))
  }, [])

  

  

return (
  <>
    <h1 className="font-bold text-2xl">Localstorage</h1>

    <hr className="border-gray-400 mb-8"/>

    <ul className="list-disc pl-5">
      <li>
        LocalStorage sirve para mantener información en el navegador incluso después de recargar o cerrar la página.
      </li>
      <li>
        Los datos se guardan en pares clave–valor (como un diccionario).
      </li>
      <li>
        Solo admite strings → si se quiere guardar se debe usar JSON.stringify() y para leerlos se usa JSON.parse()
      </li>
    </ul>




    <div className="flex justify-center mb-8 mt-8">

      <div className="w-120 border rounded-lg p-4 w-80 text-center">

        <h2 className="text-lg font-semibold mb-2">{userToken?.name}</h2>

        <p className="mb-3">{userToken?.rol}</p>
        
        <p className="mb-3">{userToken?.token}</p>

        <button className="bg-green-700 text-white py-1 px-3 mx-1 rounded mt-4" onClick={obtenerToken}>Obtener Token</button>
        <button className="bg-red-700 text-white py-1 px-3 rounded" onClick={limpiarToken}>Limpiar Token</button>
      </div>

    </div>

  </>
)
}

export default Decimo