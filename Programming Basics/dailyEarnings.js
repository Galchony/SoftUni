function dailyEarnings(args) {
    let workDays = Number(args[0]);
    let moneyForDay = Number(args[1]);
    let exchangeRateUSD = Number(args[2]);

    let monthlySalaryBGN = ((workDays*moneyForDay)*exchangeRateUSD);
    let bonus = (monthlySalaryBGN*2.5);
    let annualSalary = (12*monthlySalaryBGN + bonus);
    let taxes = (annualSalary*0.25);
    let result = ((annualSalary - taxes)/365).toFixed(2);

    console.log(result);
}
dailyEarnings(["15", "105.00", "1.71    "]);