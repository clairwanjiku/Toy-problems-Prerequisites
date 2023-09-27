//Calculate NET Salary
function calculateNetSalary() {
  // Get user inputs
  const basicSalary = parseFloat(document.getElementById("basicSalary").value);
  const benefits = parseFloat(document.getElementById("benefits").value);

  // Calculate annual gross salary
  const annualGrossSalary = basicSalary * 12 + benefits;

  // Calculate PAYE (Tax) based on PAYE rates
  const paye = calculatePAYE(annualGrossSalary);

  // Calculate NHIF Deductions based on NHIF rates
  const nhif = calculateNHIF(basicSalary);

  // Calculate NSSF Deductions based on NSSF rates
  const nssf = calculateNSSF(basicSalary);

  // Calculate net salary
  const netSalary = annualGrossSalary - paye - nhif - nssf;

  // Display the results
  document.getElementById("grossSalary").textContent = `Gross Salary: Ksh ${annualGrossSalary.toFixed(2)}`;
  document.getElementById("paye").textContent = `PAYE (Tax): Ksh ${paye.toFixed(2)}`;
  document.getElementById("nhif").textContent = `NHIF Deductions: Ksh ${nhif.toFixed(2)}`;
  document.getElementById("nssf").textContent = `NSSF Deductions: Ksh ${nssf.toFixed(2)}`;
  document.getElementById("netSalary").textContent = `Net Salary: Ksh ${netSalary.toFixed(2)}`;
}

// Function to calculate PAYE (Tax)
function calculatePAYE(annualGrossSalary) {
  if (annualGrossSalary <= 288000) {
    return annualGrossSalary * 0.1 / 12;
  } else if (annualGrossSalary <= 388000) {
    return (annualGrossSalary - 288000) * 0.25 / 12 + 2400;
  } else if (annualGrossSalary <= 6000000) {
    return (annualGrossSalary - 388000) * 0.3 / 12 + 6400;
  } else if (annualGrossSalary <= 9600000) {
    return (annualGrossSalary - 6000000) * 0.325 / 12 + 184333.33;
  } else {
    return (annualGrossSalary - 9600000) * 0.35 / 12 + 294833.33;
  }
}

// Function to calculate NHIF Deductions
function calculateNHIF(basicSalary) {
  const nhifRates = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: 44999, deduction: 1000 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: 59999, deduction: 1200 },
    { min: 60000, max: 69999, deduction: 1300 },
    { min: 70000, max: 79999, deduction: 1400 },
    { min: 80000, max: 89999, deduction: 1500 },
    { min: 90000, max: 99999, deduction: 1600 },
    { min: 100000, max: Infinity, deduction: 1700 }
  ];

  const rate = nhifRates.find(range => basicSalary >= range.min && basicSalary <= range.max);

  if (rate) {
    return rate.deduction;
  }

  return 0; // Return 0 if no matching rate is found
}

// Function to calculate NSSF Deductions
function calculateNSSF(basicSalary) {
  const tierIRate = 0.06; // Tier I contribution rate
  const tierIUpperLimit = 6000; // Upper limit for Tier I contributions
  const tierIIUpperLimit = 18000; // Upper limit for Tier II contributions
  const tierIIRate = 0.06; // Tier II contribution rate

  const tierIContribution = Math.min(basicSalary, tierIUpperLimit) * tierIRate;
  const tierIIContribution = Math.min(basicSalary - tierIUpperLimit, tierIIUpperLimit) * tierIIRate;

  return tierIContribution + tierIIContribution;
}