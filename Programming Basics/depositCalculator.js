function depositCalculator(args) {
    let depositSum = Number(args[0]);
    let term = Number(args[1]);
    let annualRate = Number(args[2] / 100);
    let sum = depositSum + term * ((depositSum * annualRate) / 12);

    console.log(sum);
}
depositCalculator(["200", "3", "5.7"]);