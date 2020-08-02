let EMP_RATE_PER_HOUR = 20;

let isPresent = 1
let empHrs = 0, empWage = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == isPresent)
    empHrs = 8;
else
    empHrs = 0;
empWage = empHrs * EMP_RATE_PER_HOUR;
console.log("Employee Wage : " +empWage);
