import "./style.css";

const $ul: HTMLUListElement = document.getElementById(
  "taskList"
)! as HTMLUListElement;

const $form: HTMLFormElement = document.getElementById(
  "task-form"
) as HTMLFormElement;

const $input: HTMLInputElement = document.getElementById(
  "taskInput"
) as HTMLInputElement;

$form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  const taskText = $input.value.trim();
  //valido input
  if (taskText === "") return;
  //creo el li y el boton
  const $li = document.createElement("li");
  $li.textContent = taskText;
  $li.classList.add("task-item");
  const $deleteButton: HTMLButtonElement = document.createElement("button");
  $deleteButton.textContent = "Delete";
  $deleteButton.classList.add("delete-button");
  //agrego el evento al boton
  $deleteButton.addEventListener("click", () => {
    // Eliminar el li del ul
    $ul.removeChild($li);
    // Actualizar localStorage
    localStorage.setItem("tasks", $ul.innerHTML);
  });
  //agrego el li al ul y lo guardo en localStorage
  $li.appendChild($deleteButton);
  $ul.appendChild($li);
  localStorage.setItem("tasks", $ul.innerHTML);
  $input.value = "";
});

// Cargar tareas del localStorage al cargar la página
$ul.innerHTML = localStorage.getItem("tasks") || "";
