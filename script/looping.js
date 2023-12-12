function calculate() {
    const n = parseInt(document.getElementById("inputNumber").value);

    if (isNaN(n) || n < 0) {
      alert("Please enter a non-negative integer.");
      return;
    }

    // Calculate the nth factorial using a while loop
    let factorial = 1;
    let i = 1;
    while (i <= n) {
      factorial *= i;
      i++;
    }

    // Calculate the sum of the first n numbers using a do-while loop
    let sum = 0;
    let j = 1;
    do {
      sum += j;
      j++;
    } while (j <= n);

    // Calculate the average of the first n numbers using a for loop
    let total = 0;
    for (let k = 1; k <= n; k++) {
      total += k;
    }
    const average = total / n;

    // Display the results
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = 
      `<p>${n} Factorial: ${factorial}</p>
      <p>Sum of the first ${n} numbers: ${sum}</p>
      <p>Average of the first ${n} numbers: ${average.toFixed(2)}</p>`
    ;
  }