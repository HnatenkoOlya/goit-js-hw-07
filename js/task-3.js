const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (greeting) => {
    const values = greeting.currentTarget.value.trim();
    nameOutput.textContent = values || "Anonymous";
    //nameOutput.textContent = greeting.currentTarget.value;
})