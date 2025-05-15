const $main = document.querySelector("main");

const $h1 = document.createElement("h1");
$h1.classList = "important";

const $section = document.createElement("section");
const $p = document.createElement("p");
$p.innerText = "Noticia muy importante";
$section.appendChild($p);
$main.appendChild($h1);
$main.appendChild($section);
