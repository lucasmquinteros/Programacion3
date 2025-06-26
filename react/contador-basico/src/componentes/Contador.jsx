import { useState } from "react";

export const Contador = () => {
  const [numero, setNumero] = useState(0);

  function handlerIncrementar() {
    setNumero(numero + 1);
  }
  function handlerDecrementar() {
    setNumero(numero - 1);
  }
  function handlerSetear() {
    setNumero(0);
  }

  return (
    <>
      <h1>El numero esta en {numero}</h1>
      <div className="contadores">
        <button onClick={handlerIncrementar}>Incrementar numero</button>
        <button onClick={handlerDecrementar}>Decrementar numero</button>
        <button onClick={handlerSetear}>Reiniciarlo en 0</button>
      </div>
      <hr />
    </>
  );
};
