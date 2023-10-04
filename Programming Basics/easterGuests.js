function easterGuests(args) {
    let countOfGuests = Number(args[0]);
    let budget = Number(args[1]);
    let priceOfEasterBread = 4;
    let priceOfEgg = 0.45;
    let totalCosts = Math.ceil(countOfGuests / 3) * priceOfEasterBread + priceOfEgg * 2 * countOfGuests;
    if (budget >= totalCosts) {
        console.log(`Lyubo bought ${Math.ceil(countOfGuests / 3)} Easter bread and ${2 * countOfGuests} eggs.`);
        console.log(`He has ${(budget - totalCosts).toFixed(2)} lv. left.`);
    }
    else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(totalCosts - budget).toFixed(2)} lv. more.`);
    }
}
easterGuests(["10",
    "35"])
