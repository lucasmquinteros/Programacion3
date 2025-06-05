/* function Saludar(nombre, mensaje) {
  return nombre + mensaje();
}

function mensaje() {
  return " Gracias por tu visita!";
}

console.log(Saludar("Juan", mensaje));
 */
/*
Ejercicio 2: Usando un callback para sumar
Crea una función operar(a, b, callback) que reciba dos números y un callback. El callback deberá definir la operación a realizar (suma, resta, etc.).
*/
/* 
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;
const operar = (a, b, operacion) => {
  return b !== 0 ? operacion(a, b) : "No se puede dividir entre 0";
};
console.log(operar(5, 3, suma));
console.log(operar(5, 3, resta));
console.log(operar(5, 3, multiplicacion));
console.log(operar(5, 0, division));
 */
/*Ejercicio 6: Manejador de errores
Crea una función ejecutarConManejo(callback, errorCallback) que ejecute callback y, si ocurre una excepción, llame a errorCallback con el error.
 */
/* function ejecutarConManejo(callback, errorCallback) {
  try {
    callback();
  } catch (err) {
    errorCallback(err);
  }
}

ejecutarConManejo(
  () => {
    throw new Error("Error de prueba");
  },
  (err) => console.error(`Error manejado: ${err.message}`)
); */
/*
Ejercicio 7: Filtro personalizado
Escribe una función filtrarArray(arr, callback) que devuelva un nuevo arreglo con los elementos para los que callback devuelva true. */
const filtrarArray = (arr, callback) => {
  const arrFiltrado = [];
  for (const numero of arr) {
    callback(numero) ? arrFiltrado.push(numero) : null;
  }
  return arrFiltrado;
};
const pares = filtrarArray([1, 2, 3, 4, 5], (n) => n % 2 === 0);

console.log(pares);
