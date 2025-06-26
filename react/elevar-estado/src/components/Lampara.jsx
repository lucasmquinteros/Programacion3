import { useState } from "react";

export const Lampara = ({ IsOn, onClick }) => {
  return (
    <div
      style={{
        border: `5px solid ${IsOn ? "green" : "red"}`,
        width: "150px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <p>Lampara: {IsOn ? "Prendida" : "Apagada"}</p>
      <button onClick={onClick}>{IsOn ? "Apagar" : "Prender"} Lampara</button>
    </div>
  );
};
