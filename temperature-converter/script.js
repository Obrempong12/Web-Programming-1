document.getElementById("convertBtn").addEventListener("click", convertTemperature);

function convertTemperature() {
    let tempInput = document.getElementById("temperatureInput").value;
    let conversionType = document.getElementById("conversionType").value;
    let resultElement = document.getElementById("result");
    let errorMessage = document.getElementById("errorMessage");

    // Clear previous messages
    resultElement.innerHTML = "";
    errorMessage.innerHTML = "";

    // Validate input (must be a number)
    if (isNaN(tempInput) || tempInput.trim() === "") {
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
