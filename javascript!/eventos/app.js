const $h1 = document.querySelector("h1");
const $body = document.querySelector("body");
const nombreUsuario = "Juan Doe";
const $textarea = document.getElementById("comentario");
const $p = document.querySelector("p");
const limite = 50;

$h1.addEventListener("click", () => {
  $h1.innerText = `Hola ${nombreUsuario}`;
});
const $button = document.querySelector("button");

$button.addEventListener("click", () => {
  $body.classList.toggle("oscuro");
  $body.classList.toggle("claro");
  $body.classList.contains("oscuro")
    ? ($button.innerText = "Modo Claro")
    : ($button.innerText = "Modo Oscuro");
});

$textarea.addEventListener("keypress", () => {
  const longitud = $textarea.value.length;
  $p.innerText = `Te quedan: ${limite - longitud} caracteres`;
});
