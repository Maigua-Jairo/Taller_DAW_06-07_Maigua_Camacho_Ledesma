/*

  1- Props 

*/

const Sexto = ({ data }) => {

  const sizes = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-5 text-base",
    lg: "py-3 px-8 text-lg",
  }

  const colors = {
    blue:  "bg-blue-600 hover:bg-blue-800 text-white",
    red:   "bg-red-600 hover:bg-red-800 text-white",
    green: "bg-green-600 hover:bg-green-800 text-white",
    gray:  "bg-gray-400 hover:bg-gray-600 text-white",
  }

  return (
    <>
      <h2 className="text-orange-800">Hijo</h2>

      <div className="flex justify-center mb-8">
        <div className="max-w-sm border-2 border-orange-500 rounded-lg p-6 w-80 text-center">

          <p className="text-gray-500 text-sm mb-4">Vista previa del botón:</p>

          <button
            disabled={data.disabled}
            className={`rounded-lg font-medium transition-all duration-200
              ${sizes[data.size] || sizes.md}
              ${colors[data.color] || colors.blue}
              ${data.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            {data.label}
          </button>

          <div className="mt-4 text-left text-sm text-gray-600 space-y-1">
            <p> Color: <span className="font-medium">{data.color}</span></p>
            <p>Tamaño: <span className="font-medium">{data.size}</span></p>
            <p>Desactivado: <span className="font-medium">{data.disabled ? "Sí" : "No"}</span></p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Sexto