import type { Producto } from "../data/producto";

export const ProductCard: React.FC<Producto> = ({ producto }) => {
  return (
    <div className="card">
      <img src={producto.img} alt={producto.nombre} />
      <div>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
      </div>
      <button>Agregar al carrito</button>
    </div>
  );
};
