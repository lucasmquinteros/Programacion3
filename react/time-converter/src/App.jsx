import { useReducer } from "react";
import "./App.css";
import TimeUnit from "./components/time-unit";
import { timeReducer, initialValues, TYPES } from "./time-reducer";

function App() {
  const [time, distpatchTime] = useReducer(timeReducer, initialValues);

  const handleTimeChange = ({ target }) => {
    const { name: type, value: payload } = target;
    distpatchTime({ type, payload });
  };

  return (
    <>
      <h1>Time Converter</h1>
      <TimeUnit
        label="Dias"
        name={TYPES.DIA}
        value={time.day}
        onChange={handleTimeChange}
      />
      <TimeUnit
        label="Horas"
        name={TYPES.HORA}
        value={time.hours}
        onChange={handleTimeChange}
      />
      <TimeUnit
        label="Minutos"
        name={TYPES.MINUTO}
        value={time.minutes}
        onChange={handleTimeChange}
      />

      <TimeUnit
        label="Segundos"
        name={TYPES.SEGUNDO}
        value={time.seconds}
        onChange={handleTimeChange}
      />
      <button onClick={handleTimeChange} name={TYPES.RESET}>
        Setear todo en 0
      </button>
    </>
  );
}

export default App;
