/*

  1- Props 

*/

import Sexto from "./Sexto"


const Quinto = () => {

  const userProfile = {
    name: "Matew",
    rol: "Employee",
    email: "matew@gmail.com",
  }

  return (
    <>
      <h1 className="font-bold text-2xl">Props</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Permiten pasar datos de un componente padre a un hijo.
        </li>
      </ul>
      
      <h2 className="text-green-700 text-center mt-8">Padre</h2>
      
      <div className="border-2 border-green-500 flex-colum justify-center items-center w-120 mx-auto mb-8">
    
        <Sexto data={userProfile}/>
        
      </div>
    
    </>
  )
}

export default Quinto