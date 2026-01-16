const numberInput = document.getElementById("numberInput");
const checkBtn = document.getElementById("checkBtn");
const displayResults = document.getElementById("displayResults");


checkBtn.onclick = function() {

    if (numberInput.value.trim() === "") {
        displayResults.textContent = "Please enter a number";
        return;

    }
    const number = Number(numberInput.value);
    if (isNaN (number)) {
        displayResults.textContent = "Invalid Number";
        return;
    }
    if (!Number.isInteger(number)) {
        displayResults.textContent = "Please enter a whole number";
        return;
    }

    if (number % 2 === 0) {
        displayResults.textContent = "The number is even";
    }   else {
        displayResults.textContent = "The number is odd";
    }
}


