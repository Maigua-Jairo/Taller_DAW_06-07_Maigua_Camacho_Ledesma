/*

  1- Zustand 

*/

import storeGalleta from "../context/storeGalleta"



const Octavo = () => {

  const {detalle} = storeGalleta()

  return (
    <>

      <h2 className="text-purple-700">Hijo</h2>

      <div className="flex justify-center mb-8">

        <div className="max-w-sm border-2 border-purple-500 rounded-lg p-4 w-80 text-center">

          <p>nombre: {detalle.nombre}</p>

          <p>tipo: {detalle.tipo}</p>

        </div>

      </div>

    </>
  )
  }

export default Octavo