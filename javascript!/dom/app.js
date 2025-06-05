const $main = document.querySelector(".container");

const $h1 = document.querySelector("h1");

// Objeto Date
const fecha = new Date();

function getDia() {
  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const mesesDelAño = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return {
    numeroDia: fecha.getDate(),
    dia: dias[fecha.getDay()],
    mes: mesesDelAño[fecha.getMonth()],
    time: {
      horas: fecha.getHours(),
      minutos: fecha.getMinutes(),
      segundos: fecha.getSeconds(),
    },
  };
}

const formatNumber = (number) => (number < 10 ? `0${number}` : number);

setInterval(() => {
  const { dia, mes, numeroDia, time } = getDia();
  const { horas, minutos, segundos } = time;
  $h1.innerText = `Hoy es ${numeroDia} ${dia} de ${mes} y son las ${horas}:${formatNumber(
    minutos
  )}:${formatNumber(segundos)}`;
}, 1000);
