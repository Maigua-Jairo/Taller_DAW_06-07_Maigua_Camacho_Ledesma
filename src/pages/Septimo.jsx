/*

  1- Zustand 

*/


import storeIdioma from "../context/storeIdioma"
import Octavo from "./Octavo"

const CambioIdioma = () => {
  const { idioma, cambiarIdioma } = storeIdioma()

  return (
    <>
      <h1 className="font-bold text-2xl">Zustand</h1>
      <hr className="border-gray-400 mb-8"/>
      <ul className="list-disc pl-5">
        <li>
          Librería para manejar el estado global. Además, funciona como un store que cualquier componente puede usar.
        </li>
      </ul>

      <h2 className="text-blue-700 text-center mt-8">Padre</h2>

      <div className="border-2 border-blue-500 flex-colum justify-center items-center w-120 mx-auto mb-8">

        <Octavo />

        <p className="text-center mb-4">
          Idioma actual: <span className="font-bold uppercase">{idioma}</span>
        </p>

        <div className="flex gap-2 justify-center pb-4">
          <button
            className={`py-1 px-4 rounded text-white ${idioma === "es" ? "bg-blue-800" : "bg-blue-400 hover:bg-blue-600"}`}
            onClick={() => cambiarIdioma("es")}
          >
            🇪🇸 Español
          </button>
          <button
            className={`py-1 px-4 rounded text-white ${idioma === "en" ? "bg-blue-800" : "bg-blue-400 hover:bg-blue-600"}`}
            onClick={() => cambiarIdioma("en")}
          >
            🇺🇸 English
          </button>
          <button
            className={`py-1 px-4 rounded text-white ${idioma === "fr" ? "bg-blue-800" : "bg-blue-400 hover:bg-blue-600"}`}
            onClick={() => cambiarIdioma("fr")}
          >
            🇫🇷 Français
          </button>
        </div>

      </div>
    </>
  )
}

export default CambioIdioma