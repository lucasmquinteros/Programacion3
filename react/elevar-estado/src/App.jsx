import { useState } from "react";
import { Lampara } from "./components/Lampara";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>hola mundo</h1>
      {new Array(5).fill(null).map((_, i) => (
        <Lampara
          key={i}
          IsOn={i === selectedIndex}
          onClick={() => setSelectedIndex(i)}
        />
      ))}
    </>
  );
}

export default App;
