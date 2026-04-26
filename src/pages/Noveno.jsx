/*

  1- Rederizado condicional
  2- Renderizado de listas

*/

import { useState } from "react"



const Noveno = () => {

  const [login, setLogin] = useState(false)
  const [habilidades] = useState([
    { nombre: "HTML", icono: "📙" },
    { nombre: "CSS", icono: "📘" },
    { nombre: "JavaScript", icono: "📒" },
    { nombre: "React", icono: "⚛️" },
    { nombre: "Node.js", icono: "📗" },
  ])

  return (
    <>
      <h1 className="font-bold text-2xl">Renderizado</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
        <strong>Renderizado condicional:</strong> Permite mostrar u ocultar elementos de la interfaz según ciertas condiciones.
        </li>
        <li>
          <strong>Renderizado de listas:</strong> Permite mostrar múltiples elementos a partir de un array usando métodos de los arreglos.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        <div className="border rounded-lg p-4 w-120 mx-auto text-center">
          
          <h2 className="text-1xl font-bold text-left underline mb-4">Condicional</h2>

          {login 
            ? 
          (
            <p>¡Bienvenido de nuevo! 😎 </p>
          ) 
            : 
          (
           <p>Por favor, inicia sesión</p>
          )}

          <button className="mt-2 bg-blue-600 text-white py-1 px-3 rounded" onClick={() => setLogin(!login)}>
            {login ? "Cerrar sesión" : "Iniciar sesión"}
          </button>

        </div>

      </div>

      <div className="flex justify-center mb-8">

        <div className=" border rounded-lg p-4 w-120 mx-auto text-center">

          <h2 className="text-1xl font-bold text-left underline mb-4">Listas</h2>
          
            <ul className="list-disc pl-5 text-left">
              
              {habilidades.map((habilidad, index) => (
      
                <li key={index}>{habilidad.icono} - {habilidad.nombre}</li>
      
              ))}
            
            </ul>
          
        </div>

      </div>

    </>
  )
  }

export default Noveno