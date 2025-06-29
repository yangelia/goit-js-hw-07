const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

function handleInput(event) {
  const trimmedValue = event.currentTarget.value.trim();
  outputElement.textContent = trimmedValue || "Anonymous";
}

inputElement.addEventListener("input", handleInput);
