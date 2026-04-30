
/*

  1- useEffect

*/

import { useState, useEffect } from "react";

const WindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log("Reajustando...");
    };


    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return (
    <div className="p-10 text-center">
      <h2 className="text-xl font-bold">Detector de Ancho</h2>
      <p className="text-4xl mt-4">{width}px</p>

      {width < 768 ? (
        <p className="text-red-500 mt-2">Estás en vista móvil</p>
      ) : (
        <p className="text-green-500 mt-2">Estás en vista de escritorio</p>
      )}
    </div>
  );
};

export default WindowWidth;
