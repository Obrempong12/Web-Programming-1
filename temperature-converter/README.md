---

# **🌡️ Temperature Converter**

A simple web-based **Temperature Converter** that allows users to convert temperatures between **Celsius** and **Fahrenheit** with input validation and a user-friendly interface.

---

## **📌 Features**
✔️ **Two-way Conversion:** Convert **Celsius to Fahrenheit** and **Fahrenheit to Celsius**  
✔️ **Input Validation:** Ensures the entered value is a valid number  
✔️ **Real-Time Display:** Shows the converted temperature instantly  
✔️ **Responsive UI:** Clean and minimal design for better user experience  
✔️ **Event-Driven:** Uses JavaScript to dynamically handle conversions  

---

## **📂 Project Structure**
```
temperature-converter/
│── index.html      # Main HTML structure
│── style.css       # CSS for styling (optional, included in HTML for simplicity)
│── script.js       # JavaScript for conversion logic
│── README.md       # Documentation (this file)
```

---

## **📜 How It Works**
1. **Enter** a temperature value in the input box  
2. **Select** a conversion type from the dropdown  
3. **Click** the "Convert" button  
4. The result will be displayed below the button  

### **Example Conversions:**
🔹 **36°C → 96.80°F**  
🔹 **100°F → 37.78°C**  

---

## **🚀 Technologies Used**
- **HTML5** (Structure)  
- **CSS3** (Styling)  
- **JavaScript (ES6+)** (Logic and functionality)  

---

## **🛠️ Installation & Usage**
1. **Clone the repository**  
   ```bash
   git clone https://github.com/Obrempong12/temperature-converter.git
   ```
2. **Navigate to the project folder**  
   ```bash
   cd temperature-converter
   ```
3. **Open `index.html` in a browser**  
   ```bash
   start index.html  # Windows
   open index.html   # macOS
   ```

---

## **📌 Code Snippet (Main Function)**
```js
function convertTemperature() {
    let tempInput = document.getElementById("temperatureInput").value;
    let conversionType = document.getElementById("conversionType").value;
    let resultElement = document.getElementById("result");
    let errorMessage = document.getElementById("errorMessage");

    resultElement.innerHTML = "";
    errorMessage.innerHTML = "";

    if (isNaN(tempInput) || tempInput === "") {
        errorMessage.innerHTML = "Please enter a valid number!";
        return;
    }

    let tempValue = parseFloat(tempInput);
    let convertedTemp;
    let unit;

    if (conversionType === "CtoF") {
        convertedTemp = (9 / 5) * tempValue + 32;
        unit = `${tempValue} °C is ${convertedTemp.toFixed(2)} °F`;
    } else {
        convertedTemp = (5 / 9) * (tempValue - 32);
        unit = `${tempValue} °F is ${convertedTemp.toFixed(2)} °C`;
    }

    resultElement.innerHTML = unit;
}
```

---

## **🧑‍💻 Contributor**
**Peter Kwesi Obrempong Stephenson**  
📌 GitHub: [Obrempong12](https://github.com/Obrempong12)  

---

## **📜 License**
This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it!  

---
