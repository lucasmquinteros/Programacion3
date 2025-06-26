import { useState } from "react";

export const InputControlado = () => {
  const [nombre, setNombre] = useState("");
  const handlerInput = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div className="inputControlado">
      <div className="contenedorInput">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          onChange={handlerInput}
          value={nombre}
        />
      </div>
      <h3>tu nombre es: {nombre}</h3>
      <hr />
    </div>
  );
};
