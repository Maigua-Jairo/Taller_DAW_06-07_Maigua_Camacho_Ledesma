
/*

  1- customHook

*/

import { useState } from "react"
import { useFetch } from "../customHook/useFetch"

const Cuarto = () => {
  const [pokemon, setPokemon] = useState(null)
  const [character, setCharacter] = useState(null)
  const fetchDataBackend = useFetch()

  const getPokemon = async () => {
    const randomId = Math.floor(Math.random() * 1025) + 1
    const data = await fetchDataBackend(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    setPokemon(data)
  }

  const getCharacter = async () => {
  
    const randomId = Math.floor(Math.random() * 826) + 1
    const data = await fetchDataBackend(`https://rickandmortyapi.com/api/character/${randomId}`)
    setCharacter(data)
  }

  return (
    <>
      <h1 className="font-bold text-2xl">customHook</h1>
      <hr className="border-gray-400 mb-8"/>
      <div className="flex justify-center mb-8 mt-8">
        <div className="border rounded-lg p-4 w-96 text-center bg-white shadow">
          <h2 className="text-lg font-semibold mb-4 underline">Datos del Backend</h2>

          <div className="text-left mb-4 bg-blue-50 p-2 rounded border border-blue-200">
            <p className="font-bold text-blue-700">Pokémon:</p>
            <pre className="text-sm">{pokemon ? pokemon.name : "Presiona el botón..."}</pre>
          </div>

          <div className="text-left mb-4 bg-green-50 p-2 rounded border border-green-200">
            <p className="font-bold text-green-700">Personaje:</p>
            <pre className="text-sm">{character ? character.name : "Presiona el botón..."}</pre>
          </div>

          <div className="flex gap-2 justify-center">
            <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-800" onClick={getPokemon}>
              Pokémon aleatorio
            </button>
            <button className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-800" onClick={getCharacter}>
              Personaje aleatorio
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cuarto