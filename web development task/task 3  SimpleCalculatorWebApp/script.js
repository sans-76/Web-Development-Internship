let display = document.getElementById("display");

// Add a number or operator to the calculator display
function appendValue(value) {
    display.value += value;
}

// Clear the complete calculator display
function clearDisplay() {
    display.value = "";
}

// Delete the last entered character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the entered mathematical expression
function calculate() {

    try {

        if (display.value.includes("/0")) {
            display.value = "Cannot divide by zero";
            return;
        }

        display.value = eval(display.value);

    } catch (error) {

        display.value = "Invalid Input";
    }
}