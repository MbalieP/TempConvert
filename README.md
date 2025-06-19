# 🌡️ TempConvert – Temperature Converter Web App

A simple and intuitive web application that lets you convert temperature values between Celsius and Fahrenheit. Great for quick conversions and for learning basic HTML, CSS, and JavaScript form interactions.

## 🚀 Features

- Convert from Celsius to Fahrenheit
- Convert from Fahrenheit to Celsius
- Clean, responsive design
- Instant result display without page reloads

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (Vanilla)



## 📄 How It Works

1. Enter a temperature value in the input field.
2. Select the desired conversion direction:
   - **Celsius ➡ Fahrenheit**
   - **Fahrenheit ➡ Celsius**
3. Click the **Submit** button.
4. The converted result will be displayed below.

## 📁 Project Structure

project-folder/
│
├── index.html # HTML structure
├── style.css # Styling and layout
└── index.js # JavaScript logic for conversion

pgsql
Copy
Edit

## 🔧 Usage

1. Clone or download this repository.
2. Open `index.html` in your web browser.
3. Try converting temperatures between Celsius and Fahrenheit.

## 🧠 Example Conversion Logic (JS)

```js
if(toFahrenheit.checked){
    temp = Number(textBox.value);
    temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
}
else if(toCelsius.checked){
    temp = Number(textBox.value);
    temp = (temp - 32) * (5/9);
    result.textContent = temp.toFixed(1) + "°C";
}
✨ Future Improvements
Add Kelvin conversion

Improve mobile responsiveness

Add keyboard shortcuts or accessibility features
