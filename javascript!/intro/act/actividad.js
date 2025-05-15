const productos = [
  { id: 1, nombre: "Laptop", precio: 1200 },
  { id: 2, nombre: "Smartphone", precio: 800 },
  { id: 3, nombre: "Tablet", precio: 600 },
  { id: 4, nombre: "Monitor", precio: 300 },
  { id: 5, nombre: "Teclado", precio: 50 },
];

const Laptop = productos.find((producto) => producto.nombre === "Laptop");

console.log(Laptop);
/*
Dado un array de productos, devolver un nuevo array donde todos los productos tengan el precio aumentado en un 10%. */

const preciosActualizados = productos.map((producto) => {
  producto.precio = producto.precio * 1.1;
  return producto;
});

console.log(preciosActualizados);

/* Dado un array de películas ({ titulo, puntaje }), quedate solo con las que tienen puntaje mayor a 7. */
/*
const peliculas = [
  { titulo: "Inception", puntaje: 9.0 },
  { titulo: "Interstellar", puntaje: 8.7 },
  { titulo: "The Dark Knight", puntaje: 9.1 },
  { titulo: "Parasite", puntaje: 6.6 },
  { titulo: "The Matrix", puntaje: 3.5 },
];

const pelisAprobadas = peliculas.filter((peli) => peli.puntaje > 7);

console.log(pelisAprobadas);
*/
