const personas = [
  {
    Nombre: "Juan",
    Apellido: "fernandez",
    Edad: 25,
  },
  {
    Nombre: "Pedro",
    Apellido: "Arce",
    Edad: 13,
  },
  {
    Nombre: "Juan",
    Apellido: "martinez",
    Edad: 30,
  },
  {
    Nombre: "Greta",
    Apellido: "martinez",
    Edad: 38,
  },
  {
    Nombre: "Ariana",
    Apellido: "fiorito",
    Edad: 15,
  },
];
const mayores = personas.filter((persona) => persona.Edad >= 18);
console.log(mayores);
