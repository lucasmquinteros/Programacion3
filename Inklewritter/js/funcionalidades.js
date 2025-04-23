document.getElementById("add-option").addEventListener("click", () => {
  const optionText = prompt("Texto de la opción:");
  if (optionText) {
    const newPassageId = "pasaje" + Date.now(); // ID único
    story[newPassageId] = { id: newPassageId, text: "", options: [] };
    // Añade la opción al pasaje actual
    currentPassage.options.push({ text: optionText, target: newPassageId });
  }
});
