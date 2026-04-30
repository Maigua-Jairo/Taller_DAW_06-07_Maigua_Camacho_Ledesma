/*

  1- Rederizado condicional
  2- Renderizado de listas

*/

import { useState } from "react"

const Noveno = () => {
  const [carrito, setCarrito] = useState([])
  const [comprado, setComprado] = useState(false)

  const productos = [
    { id: 1, nombre: "Teclado", precio: 45.00, icono: "⌨️" },
    { id: 2, nombre: "Mouse",   precio: 25.00, icono: "🖱️" },
    { id: 3, nombre: "Monitor", precio: 199.00, icono: "🖥️" },
    { id: 4, nombre: "Audífonos", precio: 59.00, icono: "🎧" },
    { id: 5, nombre: "Webcam",  precio: 79.00, icono: "📷" },
  ]

  const agregarAlCarrito = (producto) => {
    const yaEsta = carrito.find((p) => p.id === producto.id)
    if (!yaEsta) setCarrito([...carrito, producto])
  }

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((p) => p.id !== id))
  }

  const total = carrito.reduce((acc, p) => acc + p.precio, 0)

  return (
    <>
      <h1 className="font-bold text-2xl">Renderizado</h1>
      <hr className="border-gray-400 mb-8"/>
      <ul className="list-disc pl-5">
        <li>
          <strong>Renderizado condicional:</strong> Permite mostrar u ocultar elementos según ciertas condiciones.
        </li>
        <li>
          <strong>Renderizado de listas:</strong> Permite mostrar múltiples elementos a partir de un array.
        </li>
      </ul>

     
      <div className="flex justify-center mb-8 mt-8">
        <div className="border rounded-lg p-4 w-120 mx-auto">
          <h2 className="text-1xl font-bold underline mb-4">Listas — Productos disponibles</h2>

          <ul className="space-y-2">
            {productos.map((producto) => (
              <li key={producto.id} className="flex justify-between items-center border rounded p-2">
                <span>{producto.icono} {producto.nombre} — <strong>${producto.precio}</strong></span>
                <button
                  className="bg-blue-600 text-white text-sm py-1 px-3 rounded hover:bg-blue-800 disabled:opacity-40"
                  onClick={() => agregarAlCarrito(producto)}
                  disabled={carrito.find((p) => p.id === producto.id)}
                >
                  Agregar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

   
      <div className="flex justify-center mb-8">
        <div className="border rounded-lg p-4 w-120 mx-auto">
          <h2 className="text-1xl font-bold underline mb-4">Condicional — Carrito</h2>

        
          {carrito.length === 0 ? (
            <p className="text-gray-400 text-center mb-4">🛒 Tu carrito está vacío</p>
          ) : (
            <ul className="space-y-2 mb-4">
              {carrito.map((producto) => (
                <li key={producto.id} className="flex justify-between items-center border rounded p-2">
                  <span>{producto.icono} {producto.nombre} — <strong>${producto.precio}</strong></span>
                  <button
                    className="bg-red-500 text-white text-sm py-1 px-3 rounded hover:bg-red-700"
                    onClick={() => eliminarDelCarrito(producto.id)}
                  >
                    Quitar
                  </button>
                </li>
              ))}
              <p className="text-right font-bold mt-2">Total: ${total.toFixed(2)}</p>
            </ul>
          )}

         
          {comprado && (
            <p className="text-green-600 font-semibold text-center mb-4">✅ ¡Compra realizada con éxito!</p>
          )}

          
          {carrito.length > 0 && !comprado && (
            <button
              className="bg-green-600 text-white py-1 px-3 rounded w-full hover:bg-green-800"
              onClick={() => { setComprado(true); setCarrito([]) }}
            >
              Comprar
            </button>
          )}

        </div>
      </div>
    </>
  )
}

export default Noveno