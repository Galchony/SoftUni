function easterParty(args) {
    let countOfGuests = Number(args[0]);
    let priceOfEnvelope = Number(args[1]);
    let budget = Number(args[2]);
    if (countOfGuests > 20) {
        priceOfEnvelope *= 0.75;
    }
    else  if (countOfGuests > 15) {
        priceOfEnvelope *= 0.80;
    }
    else  if (countOfGuests >= 10) {
        priceOfEnvelope *= 0.85;
    }
    let priceOfCake = budget*0.10;
    let totalCosts = countOfGuests*priceOfEnvelope+priceOfCake
    if (budget>=totalCosts) {
console.log(`It is party time! ${(budget-totalCosts).toFixed(2)} leva left.`);
    }
    else {
        console.log(`No party! ${(totalCosts-budget).toFixed(2)} leva needed.`);
    }
}
easterParty(["18",
    "30",
    "450"])
