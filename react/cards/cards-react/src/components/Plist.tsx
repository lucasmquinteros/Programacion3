// Plist.tsx

import { productos as data } from "../data/dataProducts"; // array de objetos plano
import { Producto } from "../data/producto"; // tu clase Producto
import { ProductCard } from "./ProductCard"; // tu componente para mostrar el producto

// Convertir los objetos planos en instancias de la clase Producto
const listaDeProductos = data.map(
  (item) =>
    new Producto(item.id, item.img, item.nombre, item.precio, item.descripcion)
);

export const Plist = () => {
  return (
    <div>
      {listaDeProductos.map((producto) => (
        <ProductCard key={producto.id} producto={listaDeProductos} />
      ))}
    </div>
  );
};
