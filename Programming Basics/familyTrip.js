function familyTrip(args) {
    let budget = Number(args[0]);
    let countOfNights = parseInt(args[1]);
    let priceForNight = Number(args[2]);
    let additionalCosts = Number(args[3]);

    if (countOfNights > 7) {
        priceForNight *= 0.95;
    }
    let totalCosts = countOfNights * priceForNight + additionalCosts / 100 * budget;
    if (budget >= totalCosts) {
        console.log(`Ivanovi will be left with ${(budget - totalCosts).toFixed(2)} leva after vacation.`);
    }
    else {
        console.log(`${(totalCosts - budget).toFixed(2)} leva needed.`);
    }
}
familyTrip([800.50, 8, 100, 2]);
familyTrip([500, 7, 66, 15]);
