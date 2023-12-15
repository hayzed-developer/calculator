const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "=","^"];
let output = "";

// Function is define to calculate based on the button clicked
const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "") {
        // if output has '%', replace with '/100' before evaluating.
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC" || btnValue === "OFF") {
        output = "";
    } else if (btnValue === "DEL" || btnValue === "C") {
        // If DEL button is clicked, remove the last character from the output.
        output = output.toString().slice(0, -1);
    // ) else if ()
    } else {
        // If output is empty and button is specialChars then return
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

// Adding event listener to buttons, call calculate() on each click
buttons.forEach((button) => {
    // Button click listener calls calculate() on every click
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});     