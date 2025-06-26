import { useState } from "react";

export const MostrarOcultar = () => {
  const [mostrar, setMostrar] = useState(true);
  const handleMostrarOcultar = () => {
    setMostrar(!mostrar);
  };
  return (
    <div className="mostrarOcultar">
      <button onClick={handleMostrarOcultar}>
        {mostrar ? "Ocultar componente" : "Mostrar componente"}
      </button>
      {mostrar && <h2>Soy un componente que se puede ocultar</h2>}
    </div>
  );
};
