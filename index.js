// Get references to the HTML elements
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

// Function to convert temperatures based on selected unit
function convert() {
    // Check if the Fahrenheit radio button is selected
    if (toFahrenheit.checked) {
        // Convert input value to a number
        temp = Number(textBox.value);
        // Convert Celsius to Fahrenheit
        temp = temp * 9 / 5 + 32;
        // Display the result, rounded to one decimal place
        result.textContent = temp.toFixed(1) + "°F";
    }
    // Check if the Celsius radio button is selected
    else if (toCelsius.checked) {
        // Convert input value to a number
        temp = Number(textBox.value);
        // Convert Fahrenheit to Celsius
        temp = (temp - 32) * (5 / 9);
        // Display the result, rounded to one decimal place
        result.textContent = temp.toFixed(1) + "°C";
    }
    // If no unit is selected, prompt the user to select one
    else {
        result.textContent = "Select a unit";
    }
}
