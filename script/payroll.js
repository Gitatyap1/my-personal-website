
let payrollList = [];

function addEmployee() {
  const name = prompt("Enter Employee Name:");
  const daysWorked = parseFloat(prompt("Enter Days Worked:"));
  const dailyRate = parseFloat(prompt("Enter Daily Rate:"));
  const deductionAmount = parseFloat(prompt("Enter Deduction Amount:"));

  const grossPay = daysWorked * dailyRate;
  const netPay = grossPay - deductionAmount;

  const employee = {
    name,
    daysWorked,
    dailyRate,
    deductionAmount,
    grossPay,
    netPay,
  };

  payrollList.push(employee);
  updateTable();
}

function deleteEmployee() {
  const lineNumber = parseInt(prompt("Enter Line Number to Delete:")) - 1;

  if (lineNumber >= 0 && lineNumber < payrollList.length) {
    payrollList.splice(lineNumber, 1);
    updateTable();
  } else {
    alert("Invalid Line Number");
  }
}

function updateTable() {
  const payrollTable = document.getElementById("payrollBody");
  payrollTable.innerHTML = "";
  payrollList.forEach((employee, index) => {
    const row = payrollTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);

    cell1.textContent = index + 1;
    cell2.textContent = employee.name;
    cell3.textContent = employee.daysWorked;
    cell4.textContent = employee.dailyRate;
    cell5.textContent = employee.deductionAmount;
    cell6.textContent = employee.grossPay;
    cell7.textContent = employee.netPay;
  });
}