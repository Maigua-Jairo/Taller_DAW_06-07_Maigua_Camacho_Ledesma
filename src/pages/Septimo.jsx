/*

  1- Zustand 

*/



import storeGalleta from "../context/storeGalleta"
import Octavo from "./Octavo"


const Septimo = () => {

  const {detalle,setGalleta} = storeGalleta()

  return (
    <>
      <h1 className="font-bold text-2xl">Zustand </h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Librería para manejar el estado global. Además, funciona como un store que cualquier componente puede usar.
        </li>
      </ul>


      <h2 className="text-blue-700 text-center mt-8">Padre</h2>

      <div className="border-2 border-blue-500 flex-colum justify-center items-center w-120 mx-auto mb-8">

        <Octavo/>
        
        <p>nombre: {detalle.nombre}</p>
        
        <p>tipo: {detalle.tipo}</p>

        <button className="bg-gray-600 text-white py-1 px-3 rounded w-full mt-4" onClick={()=>{setGalleta({nombre: "BIMBO", tipo: "Ponkey"})}}>Cambiar</button>

        
      </div>

    </>
  )
}

export default Septimo