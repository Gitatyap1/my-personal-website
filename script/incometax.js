function calculateTax() {
    const incomeInput = document.getElementById("income");
    const income = parseFloat(incomeInput.value);

    let tax = 0;

    if (income <= 250000) {
      // Basic tax is 0 for income up to 250,000
      tax = 0;
    } else if (income <= 400000) {
      // Tax for income between 250,000 and 400,000
      tax = 0.20 * (income - 250000);
    } else if (income <= 800000) {
      // Tax for income between 400,000 and 800,000
      tax = 30000 + 0.25 * (income - 400000);
    } else if (income <= 2000000) {
      // Tax for income between 800,000 and 2,000,000
      tax = 130000 + 0.30 * (income - 800000);
    } else if (income <= 8000000) {
      // Tax for income between 2,000,000 and 8,000,000
      tax = 490000 + 0.32 * (income - 2000000);
    } else {
      // Tax for income above 8,000,000
      tax = 2410000 + 0.35 * (income - 8000000);
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Income Tax: ${tax.toFixed(2)}`;
  }