function convert() {
    const conversionType = document.getElementById("conversionType").value;
    const inputValue = parseFloat(
      document.getElementById("inputValue").value
    );

    let result;

    switch (conversionType) {
      case "1":
        // Fahrenheit to Celsius
        result = (inputValue - 32) * (5 / 9);
        break;
      case "2":
        // Celsius to Fahrenheit
        result = inputValue * (9 / 5) + 32;
        break;
      case "3":
        // Meters to Feet
        result = inputValue * 3.28084;
        break;
      case "4":
        // Feet to Meters
        result = inputValue / 3.28084;
        break;
      default:
        result = "Invalid conversion type";
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Result: ${result.toFixed(2)}`;
  }