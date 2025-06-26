import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { productos } from "./data/dataProducts";

function App() {
  return (
    <>
      <ProductCard producto={productos} />
    </>
  );
}

export default App;
