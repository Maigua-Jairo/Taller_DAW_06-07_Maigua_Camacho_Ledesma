
/*

  1- useEffect

*/


import { useEffect, useState } from "react"

const Tercero = () => {

  const [user, setUser] = useState({})
  
  const [buscar, setBuscar] = useState(2)

  const getUserIDApi = async() =>
  {
    const id = Math.floor(Math.random()*10)+1
    const request = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const response = await request.json()
    console.log(response)
    setUser(response)
  }
  
  useEffect(()=>{
    
    getUserIDApi()
  
  },[buscar])


  return (
    <>
      <h1 className="font-bold text-2xl">useEffect</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite ejecutar efectos secundarios, como peticiones a APIs o actualizar el DOM.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">

        <div className="w-120 border rounded-lg p-4 w-80 text-center">

          <h2 className="text-lg font-semibold mb-2">Bienvenido(a) - {user.name}</h2>

          <p className="mb-3 text-left">username: {user.username}</p>
          <p className="mb-3 text-left">email: {user.email}</p>
          <p className="mb-3 text-left">phone: {user.phone}</p>
          <p className="mb-3 text-left">address: {user.address?.country}</p>
          <p className="mb-3 text-left">location: {user.address?.geolo?.latitude ?? "N/A"}</p>
          
        </div>

      </div>

    </>
  )
}

export default Tercero