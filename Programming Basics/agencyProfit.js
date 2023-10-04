function agencyProfit(args) {
    let name = args[0];
    let countOfNormalTickets = Number(args[1]);
    let countOfKidsTickets = Number(args[2]);
    let priceOfNormalTickets = Number(args[3]);
    let taxOfService = Number(args[4]);
    let priceOfKidsTickets = priceOfNormalTickets*0.30;
    let totalProfit = (countOfNormalTickets*(priceOfNormalTickets+taxOfService)+countOfKidsTickets*(priceOfKidsTickets+taxOfService))*0.20;
    console.log(`The profit of your agency from ${name} tickets is ${totalProfit.toFixed(2)} lv.`);
}
agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])

