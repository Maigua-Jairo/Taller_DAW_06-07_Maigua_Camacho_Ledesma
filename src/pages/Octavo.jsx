/*

  1- Zustand 

*/
import storeIdioma from "../context/storeIdioma"

const Octavo = () => {
  const { textos } = storeIdioma()

  return (
    <>
      <h2 className="text-purple-700">Hijo</h2>
      <div className="flex justify-center mb-8">
        <div className="max-w-sm border-2 border-purple-500 rounded-lg p-4 w-80 text-center">
          <h3 className="text-lg font-bold mb-2">{textos.titulo}</h3>
          <p className="mb-2">{textos.descripcion}</p>
          <p className="mb-2">{textos.saludo}</p>
          <button className="bg-red-500 text-white py-1 px-3 rounded mt-2">
            {textos.boton}
          </button>
        </div>
      </div>
    </>
  )
}

export default Octavo