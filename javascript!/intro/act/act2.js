/* Dado un array de productos ({ nombre, precio, descuento }), quedate solo con los que tengan un descuento mayor a 0. Luego calcular el precio final de cada uno (restando el descuento).
 */

const productos = [
  { nombre: "Laptop", precio: 1200, descuento: 80 },
  { nombre: "Smartphone", precio: 800, descuento: 50 },
  { nombre: "Tablet", precio: 600, descuento: 0 },
  { nombre: "Monitor", precio: 300, descuento: 20 },
  { nombre: "Teclado", precio: 50, descuento: 5 },
];

const productoDescuento = productos.filter(
  (producto) => producto.descuento > 0
);

const productoPrecioFinal = productoDescuento.map((producto) => {
  producto.precio =
    producto.precio - producto.precio * (producto.descuento / 100);
  return producto;
});

console.log(productoPrecioFinal);
