let hadPressed = false;
const button = document.querySelector("button");

function updateButton() {
	hadPressed = !hadPressed
	if(hadPressed) {
		button.textContent = "Rijb";
	} else {
		button.textContent = "Bjir";
	}
}

button.addEventListener("click", updateButton);

console.log("Ready!");
