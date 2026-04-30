/*

  1- Localstorage

*/

import { useEffect, useState } from "react"

const Decimo = () => {
  const [tareas, setTareas] = useState([])
  const [input, setInput] = useState("")


  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("mis-tareas"))
    if (tareasGuardadas) setTareas(tareasGuardadas)
  }, [])


  useEffect(() => {
    localStorage.setItem("mis-tareas", JSON.stringify(tareas))
  }, [tareas])

  const agregarTarea = () => {
    if (input.trim() === "") return
    const nueva = { id: Date.now(), texto: input, completada: false }
    setTareas([...tareas, nueva])
    setInput("")
  }

  const completarTarea = (id) => {
    setTareas(tareas.map((t) => t.id === id ? { ...t, completada: !t.completada } : t))
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  const limpiarTodo = () => {
    localStorage.removeItem("mis-tareas")
    setTareas([])
  }

  return (
    <>
      <h1 className="font-bold text-2xl">LocalStorage</h1>
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
        <div className="w-120 border rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold mb-4">📝 Lista de tareas</h2>

         
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && agregarTarea()}
              placeholder="Nueva tarea..."
              className="border rounded px-3 py-1 w-full text-sm"
            />
            <button
              className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-800"
              onClick={agregarTarea}
            >
              Agregar
            </button>
          </div>

         
          {tareas.length === 0 ? (
            <p className="text-gray-400 text-sm mb-4">No hay tareas guardadas</p>
          ) : (
            <ul className="text-left space-y-2 mb-4">
              {tareas.map((tarea) => (
                <li key={tarea.id} className="flex justify-between items-center border rounded px-3 py-2">
                  <span
                    onClick={() => completarTarea(tarea.id)}
                    className={`cursor-pointer text-sm flex-1 ${tarea.completada ? "line-through text-gray-400" : ""}`}
                  >
                    {tarea.completada ? "✅" : "⬜"} {tarea.texto}
                  </span>
                  <button
                    className="text-red-500 text-sm ml-2 hover:text-red-700"
                    onClick={() => eliminarTarea(tarea.id)}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}

         
          <p className="text-sm text-gray-500 mb-2">
            {tareas.filter((t) => t.completada).length} de {tareas.length} completadas
          </p>
          <button
            className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-800 w-full"
            onClick={limpiarTodo}
          >
            Limpiar todo
          </button>

        </div>
      </div>
    </>
  )
}

export default Decimo