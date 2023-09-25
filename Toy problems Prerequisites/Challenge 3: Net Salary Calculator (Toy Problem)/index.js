
function calculatePAYE(salary) {
  if (salary <= 24000) {
    return salary * 0.10;
  } else if (salary <= 32333) {
    return (salary - 24000) * 0.25 + 2400;
  } else if (salary <= 500000) {
    return (salary - 32333) * 0.30 + 6400;
  } else if (salary <= 800000) {
    return (salary - 500000) * 0.325 + 164333;
  } else {
    return (salary - 800000) * 0.35 + 260833;
  }
}

  function calculateNHIF(salary) {
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
      { min: 100000, max: Infinity, deduction: 1700 },
    ];
  
  const rate = nhifRates.find((range) => salary >= range.min && salary <= range.max);

  if (rate) {
    return rate.deduction;
  }


}


function calculateNSSF(salary) {
  
  const contributionTier = salary <= 6000 ?'I' : 'II';

  
  const nssfRates = {
    I: 0.06,
    II: 0.06,
  };

  
  return salary * nssfRates[contributon];

}
function calculateNetSalary(basicSalary, benefits) {
  const totalGrossPay = basicSalary + benefits;
  const paye = calculatePAYE(totalGrossPay);
  const nhif = calculateNHIF(totalGrossPay);
  const nssf = calculateNSSF(basicSalary);
  const netSalary = totalGrossPay - paye - nhif - nssf;

  return {
    grossSalary: totalGrossPay,
    paye,
    nhif,
    nssf,
    netSalary,
  };
}



const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log('Gross Salary:', salaryDetails.grossSalary);
console.log('PAYE:', salaryDetails.paye);
console.log('NHIF Deductions:', salaryDetails.nhif);
console.log('NSSF Deductions:', salaryDetails.nssf);
console.log('Net Salary:', salaryDetails.netSalary);