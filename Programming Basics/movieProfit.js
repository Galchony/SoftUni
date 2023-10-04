function movieProfit(args) {
    let name = args[0];
    let countOfDays = Number(args[1]);
    let countOfTickets = Number(args[2]);
    let priceOfTickets = Number(args[3]);
    let percentForCinema = Number(args[4]);
    let profit = (countOfDays*countOfTickets*priceOfTickets)*(1-percentForCinema/100);
    console.log(`The profit from the movie ${name} is ${profit.toFixed(2)} lv.`);
}
movieProfit(["Python Basics",
    "40",
    "34785",
    "10.45",
    "14"])
