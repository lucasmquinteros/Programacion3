import data from "./data.js";

const $container = document.querySelector(".slide-container");
const $nextbtn = document.querySelector(".next-btn");
const $prevbtn = document.querySelector(".prev-btn");

if (data.length === 1) {
  $nextbtn.style.display = "none";
  $prevbtn.style.display = "none";
}

let people = [...data];

if (data.length === 2) {
  people = [...data, ...data];
}

$prevbtn.addEventListener("click", startSlider);
$nextbtn.addEventListener("click", () => {});

$container.innerHTML = people
  .map((person, slideIndex) => {
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === people.length - 1) {
      position = "last";
    }
    if (data.length <= 1) {
      position = "active";
    }
    return genArticle({ position, ...person });
  })
  .join("\n");

function genArticle({ position, img, name, job, text }) {
  return `
  <article class="slide ${position}">
  <img src=${img} class="img" alt="${name}" />
  <h4>${name}</h4>
  <p class="title">${job}</p>
  <p class="text">${text}</p>
  <div class="quote-icon">
    <i class="fas fa-quote-right"></i>
  </div>
</article>
    `;
}

function startSlider(type) {
  const $active = document.querySelector(".active");
  const $last = document.querySelector(".last");
  const $next = active.nextElementSibling;

  if (!next) {
    $container.firstElementChild;
  }
  if (type == "prev") {
    return;
  }

  $active.classList.remove("active");
  $last.classList.remove("last");
  $next.classList.remove("next");

  $next.classList.add("active");
  $active.classList.add("last");
  $last.classList.add("next");
}
