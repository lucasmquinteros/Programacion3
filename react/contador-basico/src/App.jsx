import "./App.css";
import { Contador } from "./componentes/contador";
import { InputControlado } from "./componentes/InputControlado";
import { MostrarOcultar } from "./componentes/MostrarOcultar";

function App() {
  return (
    <>
      <Contador />
      <InputControlado />
      <MostrarOcultar />
    </>
  );
}

export default App;
