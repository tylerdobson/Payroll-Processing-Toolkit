// Coding Challenge 5 — Payroll Processing Toolkit


const STANDARD_WEEK = 40;
const OVERTIME_MULTIPLIER = 1.5;
const TAX_RATE = 0.15;

const staffRoster = [
  { name: "Kobe Bryant", hourlyRate: 22.5, hoursWorked: 37 },
  { name: "Lebron James ", hourlyRate: 28, hoursWorked: 46 },
  { name: "Rick Nair", hourlyRate: 35, hoursWorked: 40 },
  { name: "Tony Wroten", hourlyRate: 19.75, hoursWorked: 52 },
  { name: "Debrickashaw Ferguson", hourlyRate: 41, hoursWorked: 40 },
];

const round = (amount) => Math.round(amount * 100) / 100;

function calculateBasePay(rate, hours) {
  return rate * Math.min(hours, STANDARD_WEEK);
}

function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(hours - STANDARD_WEEK, 0);
  return rate * OVERTIME_MULTIPLIER * overtimeHours;
}

function calculateTaxes(grossPay) {
  return grossPay - grossPay * TAX_RATE;
}

function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;

  return {
    name: employee.name,
    basePay: round(basePay),
    overtimePay: round(overtimePay),
    grossPay: round(grossPay),
    netPay: round(calculateTaxes(grossPay)),
  };
}

staffRoster.map(processPayroll).forEach((payroll) => console.log(payroll));
